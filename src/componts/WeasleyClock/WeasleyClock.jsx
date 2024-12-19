import React, { useState } from 'react';
import './WeasleyClock.css'
import Pointer from './Pointer';

const WeasleyClock = ({ familyStatus, radius = 100 }) => {
  const [pointers, setPointers] = useState(familyStatus);

  const sectors = [
    { startAngle: 0, endAngle: 90, name: 'Home' },
    { startAngle: 90, endAngle: 180, name: 'Work' },
    { startAngle: 180, endAngle: 270, name: 'School' },
    { startAngle: 270, endAngle: 360, name: 'Travel' },
  ];

  // 渲染扇区
  const renderSectors = () => {
    return sectors.map((sector, index) => {
      const startAngleRad = (sector.startAngle * Math.PI) / 180;
      const endAngleRad = (sector.endAngle * Math.PI) / 180;
      const largeArcFlag = sector.endAngle - sector.startAngle > 180 ? 1 : 0;

      return (
        <path
          key={index}
          d={`M${radius + 5},${radius + 5}
               L${radius + 5 + radius * Math.cos(startAngleRad)},${radius + 5 + radius * Math.sin(startAngleRad)}
               A${radius},${radius} 0 ${largeArcFlag},1 ${radius + 5 + radius * Math.cos(endAngleRad)},${radius + 5 + radius * Math.sin(endAngleRad)}
               L${radius + 5},${radius + 5}`}
          fill="none"
          stroke="black"
        />
      );
    });
  };

  // 渲染扇区名称
  const renderSectorNames = () => {
    return sectors.map((sector, index) => {
      const midAngle = (sector.startAngle + sector.endAngle) / 2;
      const midAngleRad = (midAngle * Math.PI) / 180;
      const x = radius + 5 + radius * 0.75 * Math.cos(midAngleRad);
      const y = radius + 5 + radius * 0.75 * Math.sin(midAngleRad);

      return (
        <text
          key={index}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="black"
          fontSize="10"
        >
          {sector.name}
        </text>
      );
    });
  };

  // 渲染子组件
  const renderPointer = () => {
    return pointers.map((item, index) => (
      <Pointer key={index} name={item.name} status={item.status} icon={item.icon} />
    ));
  };

  return (
    <div>
      <svg width={2 * radius + 10} height={2 * radius + 10} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={radius + 5} cy={radius + 5} r={radius} fill="white" stroke="black" strokeWidth="2" />
        {renderSectors()}
        {renderSectorNames()}
      </svg>
      {renderPointer()}
    </div >
  );
};

export default WeasleyClock;
