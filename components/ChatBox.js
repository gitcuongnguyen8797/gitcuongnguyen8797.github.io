import React, { useState, useEffect, useRef } from "react";

const ChatBox = () => {
  const initializedTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const [messages, setMessages] = useState([
    { type: "bot", text: "System initialized...", time: initializedTime },
    { type: "bot", text: "Welcome to the terminal", time: initializedTime },
    { type: "bot", text: "AI Assistant With RAG is ready", time: initializedTime },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(62);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Simulate real-time clock
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });
      // Update clock if needed
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSend = () => {
    if (inputValue.trim()) {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });

      setMessages([...messages, { 
        type: "user", 
        text: inputValue, 
        time: timeString 
      }]);

      // Simulate bot response
      setTimeout(() => {
        const responses = [
          "Command executed successfully",
          "Processing your request...",
          "System status: ONLINE",
          "Access granted",
          "Initializing protocol...",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const responseTime = new Date();
        const responseTimeString = responseTime.toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        });

        setMessages(prev => [...prev, { 
          type: "bot", 
          text: Responses(inputValue) || randomResponse, 
          time: responseTimeString 
        }]);
      }, 1000);

      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const Responses = (response) => {
    if (response == 'clear' || response == 'cls') {
      setMessages([]);
    }
  }

  return (
    <div className="cyber-chatbox">
      <div className="cyber-chatbox__header">
        <div className="header-corner header-corner--tl"></div>
        <div className="header-corner header-corner--tr"></div>
        <div className="header-status">
          <div className="status-indicator"></div>
          <span className="status-text">ONLINE</span>
        </div>
        <div className="header-battery">
          <div className="battery-icon">
            <div className="battery-level" style={{ width: `${batteryLevel}%` }}></div>
          </div>
          <span className="battery-text">{batteryLevel}%</span>
        </div>
      </div>

      <div className="cyber-chatbox__display">
        <div className="display-border display-border--top"></div>
        <div className="display-border display-border--bottom"></div>
        <div className="display-corner display-corner--tl"></div>
        <div className="display-corner display-corner--tr"></div>
        <div className="display-corner display-corner--bl"></div>
        <div className="display-corner display-corner--br"></div>
        
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message message--${msg.type}`}>
              <div className="message-content">
                <span className="message-time">[{msg.time}]</span>
                <span className="message-text">{msg.text}</span>
              </div>
              <div className="message-line"></div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="cyber-chatbox__input">
        <div className="input-corner input-corner--l"></div>
        <div className="input-corner input-corner--r"></div>
        <div className="input-prefix">&gt;</div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter command..."
          className="input-field"
        />
        <button onClick={handleSend} className="input-button">
          <span className="button-text">SEND</span>
          <div className="button-glow"></div>
        </button>
      </div>

      <div className="cyber-chatbox__footer">
        <div className="footer-line"></div>
        <div className="footer-indicators">
          <div className="indicator indicator--active"></div>
          <div className="indicator"></div>
          <div className="indicator"></div>
          <div className="indicator indicator--active"></div>
        </div>
      </div>

      {/* Animated corner effects */}
      <div className="corner-effect corner-effect--tl"></div>
      <div className="corner-effect corner-effect--tr"></div>
      <div className="corner-effect corner-effect--bl"></div>
      <div className="corner-effect corner-effect--br"></div>

      {/* Scan lines effect */}
      <div className="scanlines"></div>
    </div>
  );
};

export default ChatBox;
