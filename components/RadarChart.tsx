import React, { useMemo } from 'react';
import { CATEGORIES, Scores } from '../types';

interface RadarChartProps {
  selfScores: Scores;
  testScores: Scores;
  size?: number;
  printMode?: boolean;
}

const RadarChart: React.FC<RadarChartProps> = ({ selfScores, testScores, size = 400, printMode = false }) => {
  const center = size / 2;
  const radius = (size / 2) - 60; // Padding for labels
  const levels = 5; // 2, 4, 6, 8, 10
  const angleSlice = (Math.PI * 2) / CATEGORIES.length;

  // Helper to calculate coordinates
  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleSlice - Math.PI / 2; // Start from top
    // Normalize value (0-10) to radius
    const r = (value / 10) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate grid points
  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const levelValue = (i + 1) * 2;
    return CATEGORIES.map((_, index) => {
      return getCoordinates(levelValue, index);
    });
  });

  // Generate polygon points strings
  const createPolygonPoints = (data: Scores) => {
    return CATEGORIES.map((cat, i) => {
      const { x, y } = getCoordinates(data[cat] || 0, i);
      return `${x},${y}`;
    }).join(' ');
  };

  const selfPoints = useMemo(() => createPolygonPoints(selfScores), [selfScores]);
  const testPoints = useMemo(() => createPolygonPoints(testScores), [testScores]);

  // Colors
  const gridColor = printMode ? "#cccccc" : "rgba(255, 255, 255, 0.1)";
  const textColor = printMode ? "#000000" : "#a1a1aa"; // Zinc-400
  
  // Self Layer Style - Purple
  const selfStroke = printMode ? "#000000" : "#a855f7"; // purple-500
  const selfFill = printMode ? "transparent" : "rgba(168, 85, 247, 0.15)";
  const selfDash = "5, 5"; // Dashed line

  // Test Layer Style - Yellow/Orange (to match design)
  const testStroke = printMode ? "#000000" : "#fbbf24"; // amber-400
  const testFill = printMode ? "rgba(0,0,0,0.1)" : "rgba(251, 191, 36, 0.2)";
  const testWidth = printMode ? 2 : 3;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      {/* Grid Lines */}
      {gridLevels.map((points, levelIndex) => (
        <polygon
          key={levelIndex}
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
          fill="transparent"
          stroke={gridColor}
          strokeWidth="1"
        />
      ))}

      {/* Axis Lines */}
      {CATEGORIES.map((_, i) => {
        const { x, y } = getCoordinates(10, i);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke={gridColor}
            strokeWidth="1"
          />
        );
      })}

      {/* Labels */}
      {CATEGORIES.map((cat, i) => {
        const { x, y } = getCoordinates(11.5, i); // Push labels out slightly
        const angle = i * angleSlice - Math.PI / 2;
        let textAnchor: "start" | "middle" | "end" = "middle";
        if (angle > -Math.PI / 2 && angle < Math.PI / 2) {
          // Right side
          // textAnchor = "start"; 
        } else if (angle === -Math.PI / 2 || angle === Math.PI / 2) {
          textAnchor = "middle";
        } else {
          // Left side
          // textAnchor = "end";
        }

        return (
          <text
            key={cat}
            x={x}
            y={y}
            fill={textColor}
            fontSize={printMode ? "10" : "12"}
            fontWeight="600"
            textAnchor={textAnchor}
            dominantBaseline="middle"
            className="select-none"
          >
            {cat}
          </text>
        );
      })}

      {/* Data Layer: Self Assessment */}
      <polygon
        points={selfPoints}
        fill={selfFill}
        stroke={selfStroke}
        strokeWidth="2"
        strokeDasharray={selfDash}
      />

      {/* Data Layer: Test Result */}
      <polygon
        points={testPoints}
        fill={testFill}
        stroke={testStroke}
        strokeWidth={testWidth}
      />
      
      {/* Data Points (Dots) */}
       {CATEGORIES.map((cat, i) => {
        const { x, y } = getCoordinates(testScores[cat] || 0, i);
        return (
          <circle 
            key={i}
            cx={x}
            cy={y}
            r={4}
            // Color based on score relative to "good/bad"
            fill={printMode ? "#000" : (testScores[cat] >= 7 ? "#4ade80" : testScores[cat] >= 4 ? "#fbbf24" : "#f87171")}
          />
        );
      })}

    </svg>
  );
};

export default RadarChart;