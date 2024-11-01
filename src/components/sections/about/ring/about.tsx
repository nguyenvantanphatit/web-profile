"use client"
import React, { useEffect, useState } from 'react'
export default function Introduce() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    '#ffad00',
    '#01c5c4',
    '#ffa5a5',
    '#d789d7',
    '#f09ae9',
    '#e7305b',
    '#303960'
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--golden-glow', colors[colorIndex]);
  }, [colorIndex]);
  return (
    <>
      <div className="wrapper">
        <div className="rings">
          <div className="ring ring1">
            <div className="ring ring2">
              <div className="ring ring3">
                <div className="ring ring4">
                  <div className="ring ring5">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
