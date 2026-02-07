# CKR Fitness - Fitness Coaching Platform

A modern full-stack fitness coaching platform built with React, TypeScript, and Tailwind CSS.

## About CKR Fitness

CKR Fitness provides personalized fitness, nutrition, and yoga coaching backed by a real team of experts. We offer daily support, weekly check-ins, and structured programs designed to help you achieve sustainable results.

## Features

- **Personalized Coaching Programs**: One-on-one fitness coaching, nutrition coaching, and yoga classes
- **Real Team Support**: Multiple experts supporting each client (fitness coaches, nutrition coaches, physiotherapist, program lead)
- **Daily Communication**: WhatsApp chat support and regular check-ins
- **Free Trial Week**: Experience the system before committing
- **Flexible Programs**: Adaptive programs that evolve with your goals and lifestyle

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Bun (recommended) or npm

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start the development server
bun dev
# or
npm run dev
```

The app will be available at `http://localhost:8080`

### Build

```bash
# Build for production
bun run build
# or
npm run build
```

## Deployment

You can deploy this project to any hosting platform that supports modern web applications.

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy your project

### Deploy on Other Platforms

- **Netlify**: Connect your GitHub repo to Netlify for automatic deployments
- **Firebase Hosting**: Build and deploy using Firebase CLI
- **AWS Amplify**: Connect your repository for CI/CD deployments

## Project Structure

```
src/
├── components/
│   ├── sections/     # Page sections (Hero, FAQ, Programs, etc.)
│   └── ui/          # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── assets/          # Static assets
└── styles/          # Global styles
```

## Available Scripts

- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run type-check` - Run TypeScript type checking
- `bun run test` - Run tests

## Environment Variables

If you need to configure environment variables, create a `.env.local` file in the root directory:

```
VITE_API_URL=your_api_url_here
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT

## Contact

For inquiries about CKR Fitness coaching programs, visit our website or follow us on Instagram: [@ckrfitness](https://instagram.com/ckrfitness)
