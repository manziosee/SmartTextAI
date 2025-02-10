import React, { useState } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Message, ChatState } from './types';
import { Bot } from 'lucide-react';

function App() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const handleSend = async (content: string) => {
    const newMessage: Message = { role: 'user', content };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      isLoading: true,
      error: null,
    }));

    try {
      // Call your backend server instead of OpenAI directly
      const response = await fetch('https://ai-text-api.onrender.com/api/recruit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: content }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the server');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response || 'No response',
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, newMessage, assistantMessage],
        isLoading: false,
      }));
    } catch {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to get response from the server',
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Bot className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-900">AI Chat Interface</h1>
        </div>

        {state.error && (
          <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
            {state.error}
          </div>
        )}

        <div className="mb-4 rounded-lg bg-white p-4 shadow-lg">
          <div className="mb-4 space-y-4">
            {state.messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {state.isLoading && (
              <div className="flex justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
            )}
          </div>
          <ChatInput onSend={handleSend} disabled={state.isLoading} />
        </div>
      </div>
    </div>
  );
}

export default App;