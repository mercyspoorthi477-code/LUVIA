const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


const chatWithLuna = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }


    const prompt = `
You are Luna, a friendly menstrual health assistant.

Rules:
- Answer only women's health, menstrual health, PCOS, pregnancy basics, nutrition, hygiene, mood, exercise and wellness questions.
- Be supportive and simple.
- If unrelated, politely say you only answer women's health questions.

User question:
${message}
`;


    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });


    res.json({
      reply: response.choices[0].message.content,
    });


  } catch (error) {
    console.log("Luna Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  chatWithLuna,
};