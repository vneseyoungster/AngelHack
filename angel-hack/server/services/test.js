import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: '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', // replace with your actual OpenAI API key
});

async function main() {
  const filePath = '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/server/results/result.json'; // replace with the actual path to your JSON file

  // Read the JSON file
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const jsonContent = JSON.parse(jsonData);

  const response = await openai.chat.completions.create({
    model: 'gpt-4o', // Correct model name if different
    messages: [
      {
        role: 'user',
        content: `Please extract the address, area, and purpose of use from the following JSON data:\n\n${JSON.stringify(jsonContent, null, 2)}`,
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);
