import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey,
});

export const generateAIResponse = async (message) => {
  const prompt = `
    ${message}
    Please generate a response to the user. Additionally,
    suggest four follow-up questions based on the user's message.
    Return each of these parameters in a JSON format as shown below:
    {
      "response": "[Generated response based on the information provided and it should be well structured]", 
      "follow_up_questions": [
        {"question": "Follow-up question 1"},
        {"question": "Follow-up question 2"},
        {"question": "Follow-up question 3"},
        {"question": "Follow-up question 4"}
      ]
    }`;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 250,
    });

    const result = chatCompletion.choices[0].message.content;
    return JSON.parse(result);
  } catch (error) {
    throw new Error('Error generating AI response');
  }
};
