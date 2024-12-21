import React, { useState, useEffect } from "react";

export function Roasts({ delay = 2000 }: { delay?: number }) { // Add `delay` prop
  const [visibleMessages, setVisibleMessages] = useState<number>(0); // Tracks the number of visible messages
  const messages = [
    { id: 1, time: "12:45", text: "What kind of nonsense is this" },
    { id: 2, time: "12:47", text: "Put me on the Council and not make me a Master!?!" },
    { id: 3, time: "12:47", text: "That's never been done in the history of the Jedi. It's insulting!" },
    { id: 4, time: "12:48", text: "Calm down, Anakin.", type: "end" },
    { id: 5, time: "12:48", text: "Calm down, Anakin. He's just a fat fuck." },
    { id: 6, time: "12:48", text: "Jesus.", type: "end" },
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => prev + 1); // Increment visible messages
      }, delay); // Use the `delay` prop
      return () => clearTimeout(timer); // Cleanup the timer on unmount or state change
    }
  }, [visibleMessages, messages.length, delay]); // Include `delay` as a dependency

  return (
    <div>
      {messages.slice(0, visibleMessages).map((message) => (
        <div key={message.id} className={`chat ${message.type === "end" ? "chat-end" : "chat-start"}`}>
          <time className="text-xs opacity-50">{message.time}</time>
          <div
            className={`chat-bubble ${
              message.type === "end" ? "text-black bg-base-200" : "chat-bubble-info"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}
