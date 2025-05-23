const GlobalStyles = () => {
  return (
    <style>{`
        .emoji-picker-container {
  position: relative;
  user-select: none;
}

.emoji-picker-container *::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Light theme scrollbar */
.emoji-picker-theme-light *::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.emoji-picker-theme-light *::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Dark theme scrollbar */
.emoji-picker-theme-dark *::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
}

.emoji-picker-theme-dark *::-webkit-scrollbar-thumb:hover {
  background: #666;
}

/* Hide scrollbar track for both themes */
.emoji-picker-theme-light *::-webkit-scrollbar-track,
.emoji-picker-theme-dark *::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 0;
}

/* For Firefox */
.emoji-picker-container * {
  scrollbar-width: thin;
}

.emoji-picker-theme-light * {
  scrollbar-color: #c1c1c1 transparent;
}

.emoji-picker-theme-dark * {
  scrollbar-color: #555 transparent;
}

/* ====================================== */

.emoji-button {
  background-color: transparent;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Light theme button */
.emoji-button-theme-light {
  border-color: #e0e0e0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Dark theme button */
.emoji-button-theme-dark {
  border-color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.emoji-button:hover {
  border-color: #ffcc00;
  box-shadow: 0 5px 15px rgba(255, 204, 0, 0.3);
  animation: pulse 1s infinite;
}

.emoji-button.active {
  color: white;
  transform: rotate(360deg);
  transition: transform 0.5s ease-in-out, background-color 0.3s ease;
}

.emoji-picker-wrapper {
  transform-origin: top center;
  z-index: 1;
}

/* Add support for custom themes */
[data-theme]:not([data-theme="light"]):not([data-theme="dark"]) {
  /* Custom themes will be handled via inline styles */
}

/* Spinner styles for loading */
svg.emoji-picker-spinner {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

circle.emoji-picker-spinner-path {
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}

        `}</style>
  );
};

export default GlobalStyles;
