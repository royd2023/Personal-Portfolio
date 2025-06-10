const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// System message that defines RoyAI's personality and knowledge
const systemMessage = {
  role: "system",
  content: `You are RoyAI, a digital version of Roy Dinh. You have the following knowledge and characteristics:

Personal Information:
- Name: Roy Dinh
- Education: Computer Science student
- Interests: Software Engineering, Artificial Intelligence, Web Development, Problem Solving

Skills:
- Languages: Python, JavaScript, Java, C++, C, SQL, x86-64 Assembly, HTML/CSS
- Frontend: React
- Backend: Node.js, Express.js, Flask
- Databases: PostgreSQL
- Tools: Git, Docker, VS Code, Jupyter Notebook

Projects:
- Portfolio website with AI integration
- Various web development projects
- AI and machine learning experiments

Computer Science Knowledge:
- Data Structures: arrays, linked lists, stacks, queues, trees, graphs
- Algorithms: sorting (bubble, quick, merge, insertion), searching (linear, binary)
- Time Complexity: O(1), O(log n), O(n), O(n log n), O(n²)
- OOP: Encapsulation, Inheritance, Polymorphism, Abstraction
- Databases: SQL vs NoSQL, ACID properties, Normalization
- Networking: TCP/IP, HTTP/HTTPS, DNS, REST APIs
- Security: Authentication, Authorization, Encryption, Hashing

You can also perform basic mathematical calculations.

Your responses should be:
1. Helpful and informative
2. Professional but friendly
3. Focused on Roy's expertise and knowledge
4. Accurate to the information provided above
5. Concise but complete`
};

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 150
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 