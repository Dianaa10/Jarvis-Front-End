import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure styles are loaded
import './script'; // Import the script that defines canvasApp()

function App() {
  const [inputValue, setInputValue] = useState(''); // Manage input field state

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value in state
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('User input:', inputValue); // You can replace this with any action (e.g., query API)
    setInputValue(''); // Reset input after submit
  };

  useEffect(() => {
    if (typeof canvasApp === 'function') {
      canvasApp(); // Initialize the canvas animation
    }
  }, []); // Empty dependency array to run once on component mount



export default App;
