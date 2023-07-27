import React, { useState } from 'react';

const ColorBoxGenerator = () => {
  // State to store the list of generated colors
  const [colors, setColors] = useState([]);

  // Function to generate a random color in hexadecimal format
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Event handler for the button click
  const handleButtonClick = () => {
    const newColor = getRandomColor();
    setColors((prevColors) => [...prevColors, newColor]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Generate Color Box</button>
      <div>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: '100px',
              height: '100px',
              margin: '10px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorBoxGenerator;
