import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-07-05T18:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6">
        Còn lại bao lâu nữa?
      </h3>
      <div className="flex justify-center gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-white/80 mt-1">{unit.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
