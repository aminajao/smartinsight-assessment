import { generateAIResponse } from '../services/openaiService.js';

export const handleUserMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const result = await generateAIResponse(message);
    res.json(result);
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).json({ error: 'Error generating response' });
  }
};
