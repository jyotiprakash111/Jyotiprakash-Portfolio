import React, { useState, useEffect } from "react";
import "../Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Jyotiprakash's AI assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(true);

  // Show floating icon after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingIcon(true);
    }, 3000); // Show floating icon after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    if (!showChatbot) {
      setShowFloatingIcon(false);
    }
  };

  // Predefined responses about Jyotiprakash
  const getPredefinedResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn more about Jyotiprakash. Feel free to ask about his experience, skills, or projects!";
    }
    
    if (input.includes('experience') || input.includes('work')) {
      return "Jyotiprakash has 5+ years of experience as a web/mobile app engineer. He has worked at companies like Jio Platforms, HSBC Bank, and others. He specializes in React, React Native, and Node.js development.";
    }
    
    if (input.includes('skills') || input.includes('technology') || input.includes('tech')) {
      return "His key skills include ReactJs (80%), React Native (70%), JavaScript (88%), TypeScript (77%), CSS (90%), Node.js (50%), AWS (30%), and UI/UX (70%). He's passionate about creating dynamic and interactive user interfaces.";
    }
    
    if (input.includes('education') || input.includes('study') || input.includes('degree')) {
      return "He holds a Master's in Computer Applications (MCA) from Biju Pattnaik University Of Technology (2017-2019) and a Bachelor's in Computer Application (BCA) from Utkal University (2013-2016).";
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
      return "You can reach Jyotiprakash at jyotiprakash526@gmail.com or call him at +917377000535. He's located in Bangalore, Karnataka.";
    }
    
    if (input.includes('project') || input.includes('portfolio') || input.includes('work')) {
      return "He has worked on various projects including Jio Things Business App, SABB Mobile (HSBC Bank), and several other web and mobile applications. Check out his GitHub: https://github.com/jyotiprakash111";
    }
    
    if (input.includes('jio') || input.includes('hsbc') || input.includes('sabb')) {
      return "At Jio Platforms, he works on IoT-based applications. Previously at HSBC Bank, he developed the SABB Mobile banking application with mortgage modules for loan processing.";
    }
    
    if (input.includes('location') || input.includes('address') || input.includes('where')) {
      return "Jyotiprakash is based in Bangalore, Karnataka, India. Specifically at SGR Dental College Road, Marathahalli, Bangalore - 560037.";
    }
    
    if (input.includes('tell me about jyoti') || input.includes('about jyoti') || input.includes('who is jyoti')) {
      return "Jyotiprakash Sethy is a passionate web and mobile app engineer with 5+ years of experience. He's currently working at Jio Platforms on IoT applications and has previously worked at HSBC Bank. He specializes in React, React Native, JavaScript, and creating dynamic user interfaces. He holds an MCA degree and is based in Bangalore, Karnataka.";
    }
    
    return "I'm here to help you learn about Jyotiprakash's professional background. You can ask me about his experience, skills, education, projects, or how to contact him!";
  };

  // Function to send a message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setIsLoading(true);
    
    const userInput = input;
    setInput("");

    try {
      // Use predefined responses instead of OpenAI API
      const botResponse = getPredefinedResponse(userInput);
      
      // Simulate API delay for better UX
      setTimeout(() => {
        setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error("Error processing message:", error);
      setMessages([...newMessages, { 
        text: "Sorry, I'm having trouble responding right now. Please try asking about Jyotiprakash's experience, skills, or contact information!", 
        sender: "bot" 
      }]);
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Bot Icon */}
      {!showChatbot && showFloatingIcon && (
        <div className="floating-bot-icon" onClick={toggleChatbot}>
          <div className="bot-icon">
            🤖
          </div>
          <div className="bot-pulse"></div>
        </div>
      )}

      {/* Chatbot Container */}
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chat-header">
            <span>💼 Ask about Jyotiprakash</span>
            <button className="close-btn" onClick={() => {
              setShowChatbot(false);
              setShowFloatingIcon(true);
            }}>✖</button>
          </div>

          <div className="chatbox">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <b>{msg.sender === "user" ? "You" : "Assistant"}:</b> {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <b>Assistant:</b> <span className="typing">Typing...</span>
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about experience, skills, projects..."
              disabled={isLoading}
            />
            <button className="chat-btn" onClick={sendMessage} disabled={isLoading || !input.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
