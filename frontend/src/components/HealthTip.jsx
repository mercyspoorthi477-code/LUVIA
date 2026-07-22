import { useState, useEffect } from "react";
import "./HealthTip.css";

function HealthTip() {
  const tips = [
    "💧 Drink at least 8 glasses of water every day.",
    "🥗 Include iron-rich foods in your meals.",
    "😴 Get 7–8 hours of sleep for better health.",
    "🚶 A 20-minute walk every day improves well-being.",
    "🌸 Track your menstrual cycle regularly.",
    "🍎 Eat fresh fruits and vegetables daily."
  ];

  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  }, []);

  return (
    <div className="health-tip">
      <h2>🌸 Health Tip of the Day</h2>
      <p>{tip}</p>
    </div>
  );
}

export default HealthTip;