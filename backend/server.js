import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { OpenAI } from 'openai'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
app.get('/', (req, res) => {
  res.send('Backend is up and running 🚀');
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: "You're a friendly assistant on Emma's portfolio site."
          },
          { role: 'user', content: message }
        ]
      })
    });

    const data = await response.json();
    console.log(data);

    if (data.error) {
      console.error('OpenAI error:', data.error);
      return res.status(500).json({ reply: 'Sorry, something went wrong.' });
    }

    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ reply: 'Oops, an error occurred.' });
  }
});


app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000')
})

