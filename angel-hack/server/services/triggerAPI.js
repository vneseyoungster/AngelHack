const axios = require('axios');
require("dotenv").config();

const apiKey = 'sk-NzZkN2U5OWYtNjYwMi00ZDRkLTlkYWUtMjdhNjBjODkzMjA0';
const agentId = '88e05ffa-6014-4e82-9e62-9376812144a9';
const region = 'f1db6c';
const projectId = '1cec645154ba-41da-8928-b29d95077c50';
const baseUrl = `https://api-${region}.stack.tryrelevance.com/latest`;
const authorizationToken = `${projectId}:${apiKey}:${region}`;

console.log('apiKey:', apiKey);
console.log('agentId:', agentId);
console.log('region:', region);
console.log('projectId:', projectId);
console.log('baseUrl:', baseUrl);
console.log('authorizationToken:', authorizationToken);

const headers = {
  Authorization: authorizationToken,
  "Content-Type": "application/json",
};

const triggerAPI = async (userMessage) => {
  try {
    // Check if environment variables are loaded correctly
    if (!apiKey || !agentId || !region || !projectId) {
      throw new Error("Missing environment variables");
    }

    // Trigger the conversation
    const triggerResponse = await axios.post(
      `${baseUrl}/agents/trigger`,
      {
        message: {
          role: "user",
          content: userMessage,
        },
        agent_id: agentId,
      },
      { headers }
    );

    const job = triggerResponse.data.job_info;
    const studioId = job.studio_id;
    const jobId = job.job_id;

    // Poll for the job status
    let done = false;
    let status = null;

    while (!done) {
      const statusResponse = await axios.get(
        `${baseUrl}/studios/${studioId}/async_poll/${jobId}`,
        { headers }
      );

      status = statusResponse.data;

      for (const update of status.updates) {
        if (update.type === "chain-success") {
          done = true;
          break;
        }
      }

      if (!done) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
      }
    }

    // Retrieve the output from the status response
    const output = status.updates.find(update => update.type === 'chain-success').output;

    const answer = output.output.answer;
    console.log(answer)
    return { answer, job };
  } catch (error) {
    console.error('Error triggering or retrieving conversation:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = triggerAPI;
