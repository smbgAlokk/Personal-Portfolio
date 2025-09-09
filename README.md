# Alok Kumar Portfolio

A modern, responsive portfolio website built with React.js, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### VS Code Extensions (Recommended)

Install these extensions for a better development experience:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

### Setting Up the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/smbgAlokk/Personal-Portfolio.git
   cd alok-kumar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   The built files will be in the `dist` directory

## 📁 Project Structure

```
alok-kumar-portfolio/
├── src/
│   ├── components/         # React components
│   ├── App.jsx            # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## 🛠️ Built With

- [React.js](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [React Scroll](https://www.npmjs.com/package/react-scroll) - Smooth scrolling

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme can be modified in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#800020',
    light: '#a6163c',
    dark: '#590016',
  },
  dark: {
    DEFAULT: '#1a1a1a',
    light: '#2d2d2d',
    lighter: '#3d3d3d',
  },
}
```

### Content
Update the content in the respective component files under `src/components/`.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens

## 🔧 Troubleshooting

If you encounter any issues:

1. **Development server not starting**
   - Ensure all dependencies are installed
   - Check if the port 5173 is available
   - Try deleting `node_modules` and running `npm install` again

2. **Styles not updating**
   - Clear your browser cache
   - Ensure Tailwind CSS is properly configured
   - Check for any CSS syntax errors

3. **Build errors**
   - Check the console for specific error messages
   - Ensure all imports are correct
   - Verify that all required dependencies are installed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
