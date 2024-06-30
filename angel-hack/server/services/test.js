import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // replace 'YOUR_API_KEY' with your actual OpenAI API key
});

async function main() {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o', // Correct model name if different
    messages: [

      {
        role: 'user',
        content: JSON.stringify([
          { type: 'text', text: 'Hãy trích xuất cho tôi địa chỉ, diện tích và mục đích sử dụng của bức hình' },
          {
            type: 'image_url',
            image_url: {
              url: 'https://cdn.thuvienphapluat.vn//uploads/tintuc/2023/08/23/so-do-thua-dat.jpg'
            },
          },
        ]),
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);
