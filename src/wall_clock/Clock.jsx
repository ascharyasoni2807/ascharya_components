import React, { useEffect, useState } from "react";
import "./Clock.css"; // Assume the CSS is in a separate file called Clock.css

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const hr_rotation = 30 * hr + min / 2; // Converting current time
  const min_rotation = 6 * min;
  const sec_rotation = 6 * sec;

  return (
    <div id="clockContainer">
      <div id="hour" style={{ transform: `rotate(${hr_rotation}deg)` }}></div>
      <div
        id="minute"
        style={{ transform: `rotate(${min_rotation}deg)` }}
      ></div>
      <div
        id="second"
        style={{ transform: `rotate(${sec_rotation}deg)` }}
      ></div>
      <div>
        <span className="h3">3</span>
        <span className="h6">6</span>
        <span className="h9">9</span>
        <span className="h12">12</span>
      </div>
    </div>
  );
};

export default Clock;
