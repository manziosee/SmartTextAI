# AI Chat Interface

A modern, production-ready chat interface built with React, TypeScript, and OpenAI's GPT-3.5 Turbo. This application provides a clean and intuitive interface for interacting with OpenAI's language model.

![AI Chat Interface](https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=1200)

## Features

- 🤖 Real-time chat with OpenAI's GPT-3.5 Turbo
- 💨 Built with Vite for lightning-fast development
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Real-time message updates
- ❌ Comprehensive error handling
- 🔒 Type-safe with TypeScript
- 🎯 Component-based architecture

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- OpenAI API key

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```
   VITE_OPENAI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── ChatInput.tsx    # Message input component
│   └── ChatMessage.tsx  # Individual message display
├── types.ts            # TypeScript interfaces
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- OpenAI API
- Lucide React (icons)

## Security Considerations

⚠️ **Important**: This implementation uses client-side API calls to OpenAI. For production use, consider:

1. Moving API calls to a backend service
2. Implementing proper authentication
3. Adding rate limiting
4. Setting up usage tracking
5. Securing your API keys

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the GPT-3.5 Turbo API
- The React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons