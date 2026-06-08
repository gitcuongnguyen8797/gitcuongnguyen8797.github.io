'use client'
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_TIME_PLACEHOLDER = "00:00:00";

const createInitialMessages = () => ([
  { type: "bot", text: "System initialized...", time: INITIAL_TIME_PLACEHOLDER },
  { type: "bot", text: "Welcome to the terminal", time: INITIAL_TIME_PLACEHOLDER },
  { type: "bot", text: "Message relay to operator is ready", time: INITIAL_TIME_PLACEHOLDER },
]);

const ChatBox = () => {
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const [messages, setMessages] = useState(createInitialMessages);
  const [inputValue, setInputValue] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(62);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const sessionIdRef = useRef(uuidv4());
  const wsRef = useRef(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const ws = new WebSocket(`wss://murmuring-frantic-startle.ngrok-free.dev/${sessionIdRef.current}`);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);

      setMessages((prev) => [
        ...prev,
        { type: "bot", text: event.data, time: getCurrentTime() },
      ]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    const mountedAt = getCurrentTime();
    setMessages((prev) =>
      prev.map((message, index) => {
        if (index > 2 || message.time !== INITIAL_TIME_PLACEHOLDER) {
          return message;
        }

        return {
          ...message,
          time: mountedAt,
        };
      })
    );
  }, []);


  const handleLocalCommand = (command) => {
    if (command === 'clear' || command === 'cls') {
      setMessages([]);
      return true;
    }

    return false;
  };

  const handleSend = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isSending) {
      return;
    }

    const requestTime = getCurrentTime();

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: trimmedInput,
        time: requestTime,
      },
    ]);
    setInputValue("");

    if (handleLocalCommand(trimmedInput.toLowerCase())) {
      return;
    }

    setIsSending(true);

    try {
      wsRef.current.send(trimmedInput);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: `Delivery failed: ${error.message}`,
          time: getCurrentTime(),
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

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
          onKeyDown={handleKeyPress}
          placeholder="Enter command..."
          className="input-field"
          disabled={isSending}
        />
        <button onClick={handleSend} className="input-button" disabled={isSending}>
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
