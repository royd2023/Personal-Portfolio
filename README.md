# Roy Dinh's Personal Portfolio

This is a full-stack personal portfolio project for Roy Dinh, featuring a modern, animated React frontend and an Express/Node.js backend with OpenAI integration. The site showcases Roy's skills, experience, and interests, and includes an interactive AI chatbot ("RoyAI") that can answer questions about Roy and basic computer science concepts.

---

## Features

### 🌌 Modern Animated Frontend

- **Full-Screen Sections:**  
  Each section (Intro, Languages, Frontend, Backend, Databases, Tools, Learning) spans the entire viewport, creating a clean, immersive experience.
- **Smooth Scroll Animations:**  
  As you scroll, each section fades in with a modern animation using Framer Motion.
- **Responsive Design:**  
  The layout adapts beautifully to all screen sizes.
- **Dark Theme:**  
  Uses a deep blue/purple gradient background with glassmorphism effects for cards and sections.
- **Profile Picture:**  
  Prominently displays a circular profile picture (with a placeholder image if not set).
- **Top Bar:**  
  Fixed top bar with Roy's name and a creative GitHub link (with icon and hover effects) that fades out as you scroll.
- **RoyAI Chatbot:**  
  A floating RoyAI button opens a chat window where users can interact with a digital version of Roy.

### 🧠 RoyAI Chatbot

- **Frontend:**  
  - Simulates Roy's knowledge and personality.
  - Can answer questions about Roy's skills, experience, interests, and basic computer science concepts.
  - Can perform simple math calculations.
  - Provides suggestions for what to ask.
- **Backend:**  
  - Node.js/Express server with a `/api/chat` endpoint.
  - Integrates with OpenAI's GPT-3.5-turbo for more advanced responses (requires an API key in `.env`).
  - Uses a system prompt to ensure RoyAI stays on-topic and in character.

### 🛠️ Tech Stack

- **Frontend:**  
  - React (with hooks)
  - Framer Motion (for animations)
  - React Icons
  - CSS (custom, with glassmorphism and dark theme)
- **Backend:**  
  - Node.js
  - Express
  - OpenAI API
  - dotenv, cors

---

## Project Structure

```
/frontend
  /public
  /src
    App.js         # Main React app with full-screen sections and RoyAI
    App.css        # Modern dark theme and section styling
    /components
      RoyAI.js     # RoyAI chatbot component
      RoyAI.css    # Chatbot styling
  package.json     # React dependencies and scripts

/backend
  server.js        # Express server with OpenAI integration
  package.json     # Backend dependencies and scripts

.gitignore         # Ignores node_modules, .env, etc.
README.md          # Project overview (this file)
```

---

## Setup & Usage

### 1. Clone the repository

```bash
git clone https://github.com/royd2023/Personal-Portfolio.git
cd Personal-Portfolio
```

### 2. Install dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `backend` directory with your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Run the project

**Start the backend:**
```bash
cd backend
npm run dev
```

**Start the frontend:**
```bash
cd ../frontend
npm start
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:3001`.

---

## Customization

- **Profile Picture:**  
  Place your image in `frontend/public` and update the filename in `App.js` if needed.
- **Skills/Sections:**  
  Edit the arrays in `App.js` to update your skills, tools, and learning topics.
- **RoyAI Knowledge:**  
  Update the system prompt in `backend/server.js` and the knowledge base in `RoyAI.js` for more personalized responses.

---

## Roadmap / TODO

- Add more project showcases and interactive demos
- Enhance RoyAI with more advanced AI features
- Add contact and resume download sections
- Improve accessibility and SEO

---

## License

This project is for personal and educational use.

---

Let me know if you'd like to add or change anything in this README!