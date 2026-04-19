import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../../services/geminiService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatAssistantProps {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}

export const ChatAssistant = ({ isOpen, onToggle }: ChatAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Hassan's AI Assistant. I can answer questions about Hassan's skills, projects, experience, and education. How can I help you today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(inputMessage);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again later.",
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
   {/* Chat Button */}
<motion.button
  onClick={() => onToggle(!isOpen)}
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#A67C52] px-4 py-3 text-white shadow-lg transition hover:bg-[#8B6F47]"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  {isOpen ? (
    <X className="h-5 w-5" />
  ) : (
    <>
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-medium">AI Assistant</span>
    </>
  )}
</motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] flex-col rounded-2xl border border-[#D4C4B0] bg-[#F5EFE6] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between rounded-t-2xl bg-[#A67C52] px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <h3 className="font-semibold">Hassan's Assistant</h3>
              </div>
              <button
                onClick={() => onToggle(false)}
                className="rounded-lg p-1 transition hover:bg-[#8B6F47]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-[#A67C52] text-white'
                        : 'bg-[#E8DFD0] text-[#111111] border border-[#D4C4B0]'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-[#666666]'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#E8DFD0] border border-[#D4C4B0] rounded-2xl px-4 py-2">
                    <Loader2 className="h-5 w-5 animate-spin text-[#A67C52]" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[#D4C4B0] p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Hassan's skills, projects..."
                  className="flex-1 rounded-xl border border-[#D4C4B0] bg-white px-4 py-2 text-sm text-[#111111] outline-none transition focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/20"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A67C52] text-white transition hover:bg-[#8B6F47] disabled:bg-[#D4C4B0] disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
