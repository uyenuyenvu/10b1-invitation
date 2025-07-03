import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Ảnh mẫu - bạn có thể thay thế bằng ảnh thật sau
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop",
      alt: "Lớp học năm 2014",
      caption: "Ngày đầu tiên gặp mặt",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      alt: "Hoạt động ngoại khóa",
      caption: "Dã ngoại cuối năm",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      alt: "Lễ tốt nghiệp",
      caption: "Ngày tốt nghiệp",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      alt: "Tiệc chia tay",
      caption: "Tiệc chia tay cuối khóa",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      alt: "Kỷ niệm đáng nhớ",
      caption: "Những khoảnh khắc đáng nhớ",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=400&h=300&fit=crop",
      alt: "Tình bạn bền vững",
      caption: "Tình bạn bền vững",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="card p-8 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-gradient mb-8">
        Kỷ Niệm Đáng Nhớ
      </h2>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Những khoảnh khắc đẹp của chúng ta trong suốt những năm học tập và phát
        triển cùng nhau. Mỗi bức ảnh là một câu chuyện, một kỷ niệm không thể
        nào quên.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-medium text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal xem ảnh */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-medium text-lg">{selectedImage.caption}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;
