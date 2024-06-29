const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const agentId = process.env.AGENT_ID;
const region = process.env.REGION;
const projectId = process.env.PROJECT_ID;
const baseUrl = `https://api-${region}.stack.tryrelevance.com/latest`;
const authorizationToken = `${projectId}:${apiKey}:${region}`;

const headers = {
  Authorization: authorizationToken,
  "Content-Type": "application/json",
};

const triggerAPI = async (userMessage) => {
  try {
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
        }
      }

      if (!done) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
      }
    }

    // Retrieve the conversation messages
    const conversationId = status.conversation_id;
    const messagesResponse = await axios.post(
      `${baseUrl}/knowledge/list`,
      {
        knowledge_set: conversationId,
        page_size: 20,
        sort: [
          {
            insert_date_: "desc"
          }
        ]
      },
      { headers }
    );

    return messagesResponse.data.results;
  } catch (error) {
    console.error('Error triggering or retrieving conversation:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = triggerAPI;
