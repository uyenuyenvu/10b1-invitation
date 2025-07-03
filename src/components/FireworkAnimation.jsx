import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tạo confetti pieces với màu sắc đa dạng
const confettiColors = [
  "#ff6b6b",
  "#4ecdc4",
  "#45b7d1",
  "#96ceb4",
  "#feca57",
  "#ff9ff3",
  "#54a0ff",
  "#5f27cd",
  "#00d2d3",
  "#ff9f43",
  "#ff6348",
  "#2ed573",
  "#1e90ff",
  "#ff4757",
  "#ffa502",
  "#ff3838",
  "#ff9ff3",
  "#54a0ff",
  "#5f27cd",
  "#00d2d3",
];

// Tạo confetti với hiệu ứng tự nhiên hơn
const createConfetti = () => {
  const confetti = [];

  // Tạo 800 mảnh confetti nhỏ (tăng số lượng)
  for (let i = 0; i < 800; i++) {
    confetti.push({
      id: Math.random(),
      left: Math.random() * 100, // Vị trí ngang từ 0-100%
      top: -Math.random() * 50 - 20, // Bắt đầu từ trên màn hình
      endLeft: Math.random() * 100, // Điểm kết thúc ngang
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: Math.random() * 6 + 4, // Kích thước nhỏ hơn: 4-10px
      delay: Math.random() * 3, // Delay dài hơn để tạo hiệu ứng liên tục
      duration: Math.random() * 4 + 3, // Thời gian rơi dài hơn
      shape: Math.floor(Math.random() * 4), // 0: square, 1: circle, 2: triangle, 3: rectangle
      rotation: Math.random() * 360,
      wobble: Math.random() * 40 - 20, // Hiệu ứng lắc lư mạnh hơn
    });
  }

  return confetti;
};

const ConfettiPiece = ({ piece }) => {
  const getShapeStyle = () => {
    const baseStyle = {
      position: "absolute",
      backgroundColor: piece.color,
      zIndex: 1000,
      pointerEvents: "none",
    };

    switch (piece.shape) {
      case 0: // Square
        return {
          ...baseStyle,
          width: `${piece.size}px`,
          height: `${piece.size}px`,
        };
      case 1: // Circle
        return {
          ...baseStyle,
          width: `${piece.size}px`,
          height: `${piece.size}px`,
          borderRadius: "50%",
        };
      case 2: // Triangle
        return {
          ...baseStyle,
          width: 0,
          height: 0,
          borderLeft: `${piece.size / 2}px solid transparent`,
          borderRight: `${piece.size / 2}px solid transparent`,
          borderBottom: `${piece.size}px solid ${piece.color}`,
          backgroundColor: "transparent",
        };
      case 3: // Rectangle
        return {
          ...baseStyle,
          width: `${piece.size * 1.5}px`,
          height: `${piece.size * 0.8}px`,
        };
      default:
        return baseStyle;
    }
  };

  return (
    <motion.div
      initial={{
        left: `${piece.left}%`,
        top: `${piece.top}%`,
        rotate: piece.rotation,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        left: `${piece.endLeft + piece.wobble}%`,
        top: "100%",
        rotate: piece.rotation + 1080, // Xoay nhiều vòng hơn
        scale: [0, 1, 1, 0.8],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        delay: piece.delay,
        duration: piece.duration,
        ease: "easeOut",
        times: [0, 0.1, 0.8, 1], // Timing cho scale và opacity
      }}
      style={getShapeStyle()}
    />
  );
};

const FireworkAnimation = () => {
  const [show, setShow] = useState(true);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const pieces = createConfetti();
    setConfetti(pieces);

    const timer = setTimeout(() => setShow(false), 8000); // Tăng thời gian hiển thị
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
        >
          {confetti.map((piece) => (
            <ConfettiPiece key={piece.id} piece={piece} />
          ))}

          {/* Thêm hiệu ứng sparkle nhỏ khắp màn hình */}
          {Array.from({ length: 120 }).map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{
                scale: 0,
                opacity: 0,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              transition={{
                delay: Math.random() * 5,
                duration: 1.5,
                repeat: 5,
                ease: "easeInOut",
              }}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{ pointerEvents: "none" }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FireworkAnimation;
