// server.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import OpenAI from 'openai';

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/send-to-openai', async (req, res) => {
  try {
    const userInput = req.body.text;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }]
    });
    console.log(response.choices[0].message.content);
    res.json({reply: response.choices[0].message.content});
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
