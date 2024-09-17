import React from 'react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center text-white p-8 rounded-lg shadow-lg animate-fade-in-up z-10">
        <h1 className="text-5xl font-bold tracking-wide bg-clip-text ">
          Welcome to the React Component Library
        </h1>

        <p className="mt-6 text-lg font-light animate-fade-in-up delay-200">
          A React-powered component library with TypeScript, Vite, and Tailwind.
        </p>

        <button className="mt-8 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold shadow-md hover:bg-indigo-500 hover:text-white transform hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
