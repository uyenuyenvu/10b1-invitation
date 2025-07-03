import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Gift } from "lucide-react";

const EventDetails = () => {
  const eventInfo = {
    date: "05/07/2024",
    time: "18:00 - 22:00",
    location: "Nhà hàng ABC - 123 Đường XYZ, Quận 1, TP.HCM",
    capacity: "50 người",
    dressCode: "Smart Casual",
  };

  const program = [
    { time: "18:00", activity: "Đón tiếp khách" },
    { time: "18:30", activity: "Khai mạc và chào mừng" },
    { time: "19:00", activity: "Tiệc buffet" },
    { time: "20:00", activity: "Chia sẻ kỷ niệm" },
    { time: "21:00", activity: "Chụp ảnh lưu niệm" },
    { time: "22:00", activity: "Kết thúc" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="card p-8 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-gradient mb-8">
        Thông Tin Sự Kiện
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Chi tiết sự kiện
          </h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Ngày</p>
                <p className="text-gray-600">{eventInfo.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Thời gian</p>
                <p className="text-gray-600">{eventInfo.time}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Địa điểm</p>
                <p className="text-gray-600">{eventInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Sức chứa</p>
                <p className="text-gray-600">{eventInfo.capacity}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Gift className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-800">Trang phục</p>
                <p className="text-gray-600">{eventInfo.dressCode}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Chương trình
          </h3>

          <div className="space-y-3">
            {program.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
              >
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium min-w-[60px] text-center">
                  {item.time}
                </div>
                <span className="text-gray-700">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
      >
        <h4 className="font-semibold text-yellow-800 mb-2">📝 Lưu ý:</h4>
        <ul className="text-yellow-700 space-y-1 text-sm">
          <li>• Vui lòng đến đúng giờ để không làm gián đoạn chương trình</li>
          <li>• Có thể mang theo ảnh kỷ niệm cũ để chia sẻ</li>
          <li>• Miễn phí tham gia, chi phí ăn uống được tài trợ</li>
          <li>• Có chỗ đậu xe miễn phí tại địa điểm</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default EventDetails;
