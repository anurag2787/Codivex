# Codivex

A modern, feature-rich code snippet editor and viewer built with Next.js, React, and TypeScript. Perfect for creating beautiful, shareable code snippets with customizable themes, syntax highlighting, and export capabilities.

## Features

- **Code Editor**: Built-in code editor with syntax highlighting using Highlight.js
- **Multiple Languages**: Support for various programming languages
- **Theme Customization**: Choose from multiple color themes
- **Dark Mode**: Toggle between light and dark modes
- **Font Selection**: Multiple font options for code display
- **Adjustable Padding**: Control padding around code snippets
- **Font Size Control**: Resize code text on the fly
- **Export Options**: Export snippets as images (png, jpg, svg)
- **Responsive Design**: Works seamlessly on desktop and responsive layouts
- **State Management**: Persistent preferences using Zustand store

## Tech Stack

- **Framework**: [Next.js 15.3.1](https://nextjs.org/)
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Code Editor**: [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor)
- **Syntax Highlighting**: [Highlight.js](https://highlightjs.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Export**: [html-to-image](https://github.com/bubkoo/html-to-image)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Codivex
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── CodeEditor.tsx           # Main code editor component
│   │   ├── WidthMeasurement.tsx     # Width measurement utility
│   │   ├── controls/                # Control components
│   │   │   ├── BackgroundSwitch.tsx
│   │   │   ├── DarkModeSwitch.tsx
│   │   │   ├── ExportOptions.tsx
│   │   │   ├── FontSelect.tsx
│   │   │   ├── FontSizeInput.tsx
│   │   │   ├── LanguageSelect.tsx
│   │   │   ├── PaddingSlider.tsx
│   │   │   └── ThemeSelect.tsx
│   │   └── ui/                      # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── slider.tsx
│   │       └── switch.tsx
│   └── type/
│       ├── utils.ts
│       └── store/
│           └── use-preferences-store.ts
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## Features in Detail

### Code Editor
The main `CodeEditor` component provides a real-time code editing experience with instant syntax highlighting.

### Customization Controls
- **Language Selection**: Choose your programming language for proper syntax highlighting
- **Theme Selection**: Pick from multiple color themes
- **Font Options**: Select from various fonts for better readability
- **Dark Mode**: Toggle dark mode for comfortable viewing
- **Padding Control**: Adjust spacing around your code snippet
- **Font Size**: Control the size of the code text

### Export Functionality
Export your code snippets as high-quality images in multiple formats:
- PNG
- JPG
- SVG

### State Management
User preferences (theme, font, language, etc.) are persisted using Zustand store, so they'll be remembered across sessions.

## Keyboard Shortcuts

The application supports keyboard shortcuts via react-hotkeys-hook for improved productivity.

## Browser Support

Works on all modern browsers that support:
- ES2020+
- CSS Grid and Flexbox
- LocalStorage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created with ❤️ for developers who love beautiful code snippets with **Codivex**.
