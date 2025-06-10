import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced knowledge base about Roy
const ROY_KNOWLEDGE = {
  personal: {
    name: "Roy Dinh",
    education: "Computer Science student",
    interests: [
      "Software Engineering",
      "Artificial Intelligence",
      "Web Development",
      "Problem Solving"
    ],
    skills: {
      languages: ["Python", "JavaScript", "Java", "C++", "C", "SQL", "x86-64 Assembly", "HTML/CSS"],
      frontend: ["React"],
      backend: ["Node.js", "Express.js", "Flask"],
      databases: ["PostgreSQL"],
      tools: ["Git", "Docker", "VS Code", "Jupyter Notebook"]
    },
    projects: [
      "Portfolio website with AI integration",
      "Various web development projects",
      "AI and machine learning experiments"
    ],
    personality: [
      "Passionate about technology",
      "Always eager to learn",
      "Problem solver",
      "Team player",
      "Detail-oriented"
    ]
  }
};

// Enhanced Computer Science Knowledge
const CS_KNOWLEDGE = {
  dataStructures: {
    arrays: {
      description: "Linear data structure that stores elements at contiguous memory locations.",
      useCases: "Used for storing and accessing sequential data efficiently.",
      complexity: {
        access: "O(1)",
        search: "O(n)",
        insertion: "O(n)",
        deletion: "O(n)"
      }
    },
    linkedLists: {
      description: "Linear data structure where elements are stored in nodes, and each node points to the next node.",
      useCases: "Useful for dynamic memory allocation and when the size of the data structure is unknown.",
      complexity: {
        access: "O(n)",
        search: "O(n)",
        insertion: "O(1)",
        deletion: "O(1)"
      }
    },
    stacks: {
      description: "LIFO (Last In First Out) data structure.",
      useCases: "Used in function calls, expression evaluation, and undo operations.",
      complexity: {
        push: "O(1)",
        pop: "O(1)",
        peek: "O(1)"
      }
    },
    queues: {
      description: "FIFO (First In First Out) data structure.",
      useCases: "Used in task scheduling, print queues, and message queues.",
      complexity: {
        enqueue: "O(1)",
        dequeue: "O(1)",
        peek: "O(1)"
      }
    }
  },
  algorithms: {
    sorting: {
      bubbleSort: {
        description: "Simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        complexity: "O(n²)",
        useCases: "Educational purposes and small datasets."
      },
      quickSort: {
        description: "Efficient, comparison-based, in-place sorting algorithm.",
        complexity: "Average: O(n log n), Worst: O(n²)",
        useCases: "General-purpose sorting, large datasets."
      },
      mergeSort: {
        description: "Divide and conquer algorithm that recursively breaks down the problem into smaller subproblems.",
        complexity: "O(n log n)",
        useCases: "External sorting, stable sorting required."
      }
    },
    searching: {
      linearSearch: {
        description: "Sequentially checks each element of the list until the target is found.",
        complexity: "O(n)",
        useCases: "Unsorted data, small datasets."
      },
      binarySearch: {
        description: "Efficient algorithm for finding an element in a sorted array.",
        complexity: "O(log n)",
        useCases: "Sorted data, large datasets."
      }
    }
  }
};

const RoyAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm RoyAI, a digital version of Roy. I can tell you about Roy's skills, experience, and interests. I also know basic computer science concepts and can do simple math. What would you like to know?",
      sender: 'ai'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const evaluateMathExpression = (expression) => {
    try {
      // Basic safety check - only allow numbers and basic operators
      if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        return null;
      }
      return eval(expression);
    } catch (e) {
      return null;
    }
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Check for math expressions
    const mathResult = evaluateMathExpression(input);
    if (mathResult !== null) {
      return `The result is: ${mathResult}`;
    }

    // Personal information responses
    if (lowerInput.includes('skill') || lowerInput.includes('language')) {
      return `I'm proficient in ${ROY_KNOWLEDGE.personal.skills.languages.join(', ')}. I also work with ${ROY_KNOWLEDGE.personal.skills.frontend.join(', ')}, ${ROY_KNOWLEDGE.personal.skills.backend.join(', ')}, and ${ROY_KNOWLEDGE.personal.skills.databases.join(', ')}.`;
    }
    
    if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return "I'm currently focused on Software Engineering with a specialization in Artificial Intelligence. I'm building my portfolio and looking for opportunities to apply my skills.";
    }
    
    if (lowerInput.includes('interest') || lowerInput.includes('hobby')) {
      return `I'm passionate about ${ROY_KNOWLEDGE.personal.interests.join(', ')}. I enjoy working on projects that combine these interests and am always eager to learn new technologies.`;
    }

    if (lowerInput.includes('personality') || lowerInput.includes('trait')) {
      return `My key personality traits include: ${ROY_KNOWLEDGE.personal.personality.join(', ')}.`;
    }

    // Computer Science knowledge responses
    if (lowerInput.includes('data structure')) {
      const structure = Object.keys(CS_KNOWLEDGE.dataStructures).find(key => 
        lowerInput.includes(key)
      );
      if (structure) {
        const info = CS_KNOWLEDGE.dataStructures[structure];
        return `${info.description} ${info.useCases} Time complexities: ${Object.entries(info.complexity).map(([op, comp]) => `${op}: ${comp}`).join(', ')}`;
      }
      return "I know about various data structures including arrays, linked lists, stacks, and queues. Which one would you like to learn about?";
    }

    if (lowerInput.includes('algorithm')) {
      if (lowerInput.includes('sort')) {
        const sortType = Object.keys(CS_KNOWLEDGE.algorithms.sorting).find(key => 
          lowerInput.includes(key.replace('Sort', '').toLowerCase())
        );
        if (sortType) {
          const info = CS_KNOWLEDGE.algorithms.sorting[sortType];
          return `${info.description} Time complexity: ${info.complexity}. ${info.useCases}`;
        }
        return `Common sorting algorithms include: ${Object.keys(CS_KNOWLEDGE.algorithms.sorting).join(', ')}. Which one would you like to learn about?`;
      }
      if (lowerInput.includes('search')) {
        const searchType = Object.keys(CS_KNOWLEDGE.algorithms.searching).find(key => 
          lowerInput.includes(key.replace('Search', '').toLowerCase())
        );
        if (searchType) {
          const info = CS_KNOWLEDGE.algorithms.searching[searchType];
          return `${info.description} Time complexity: ${info.complexity}. ${info.useCases}`;
        }
        return `Common searching algorithms include: ${Object.keys(CS_KNOWLEDGE.algorithms.searching).join(', ')}. Which one would you like to learn about?`;
      }
      return "I can tell you about sorting algorithms, searching algorithms, and their time complexities. What would you like to know?";
    }

    // Default response with suggestions
    return "I can tell you about:\n" +
           "1. My skills and experience\n" +
           "2. Data structures and their complexities\n" +
           "3. Sorting and searching algorithms\n" +
           "4. Basic math calculations\n" +
           "What would you like to know?";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate thinking time
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <motion.button
        className="roy-ai-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? 'Close RoyAI' : 'Chat with RoyAI'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.text}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="message ai"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thinking...
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="chat-input-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="chat-input"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={isLoading}
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RoyAI; 