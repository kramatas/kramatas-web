import React from 'react';

type DecorativeBackgroundProps = {
  rowCount?: number; // Number of rows, default is 5
};

const generateCircles = (rowCount: number) => {
  const circles = [];
  const fillColor = '#93C5FD';

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    for (let colIndex = 0; colIndex < 4; colIndex++) {
      const cx = 6 * colIndex + 0.7;
      const cy = 6 * rowIndex + 1.6;
      const r = 0.646687;

      circles.push(
        <circle
          key={`${rowIndex}-${colIndex}`}
          cx={cx}
          cy={cy}
          r={r}
          transform={`rotate(-90 ${cx} ${cy})`}
          fill={fillColor}
        />
      );
    }
  }
  return circles;
};

const DecorativeBackground: React.FC<DecorativeBackgroundProps> = ({ rowCount = 5 }) => {
  return (
    <>
      {/* Bottom-left SVG */}
      <span className="absolute bottom-0 left-0">
        <svg
          width="61"
          height="30"
          viewBox="0 0 61 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="45" r="45" fill="#BFDBFE" fillOpacity="0.11" />
        </svg>
      </span>

      {/* Top-right SVG with dynamic circles */}
      <span className="absolute right-0 top-0">
        <svg
          width="20"
          height={6 * rowCount + 5}
          viewBox={`0 0 20 ${6 * rowCount + 5}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {generateCircles(rowCount)}
        </svg>
      </span>
    </>
  );
};

export default DecorativeBackground;
