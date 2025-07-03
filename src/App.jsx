import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  ArrowDown,
  ArrowLeft,
} from "lucide-react";
import CountdownTimer from "./components/CountdownTimer";
import RegistrationForm from "./components/RegistrationForm";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import FireworkAnimation from "./components/FireworkAnimation";
import bg from "./assets/bg.jpg";
import ve from "./assets/vem.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    selectedTags: [],
  });

  const activityTags = [
    "Nhậu bia tối thứ 6",
    "Nhậu bia tối thứ 7",
    "Đi camping cuối tuần",
    "mình thì sao cũng được",
  ];

  const handleTagToggle = (tag) => {
    setRegistrationData((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    if (
      registrationData.name.trim() &&
      registrationData.selectedTags.length > 0
    ) {
      try {
        await emailjs.send(
          "service_719qxvr",
          "template_xkdxell",
          {
            name: registrationData.name,
            options: registrationData.selectedTags.join(", "),
            // Thêm các trường khác nếu muốn
          },
          "Gfb4a74ZY3IcOP5DH"
        );
        alert("Đăng ký thành công!");
        setShowRegistration(false);
        setRegistrationData({ name: "", selectedTags: [] });
      } catch (err) {
        alert("Có lỗi khi gửi đăng ký, vui lòng thử lại!");
      }
    } else {
      alert("Vui lòng nhập tên và chọn ít nhất một hoạt động!");
    }
  };

  // Responsive clip-path for content block
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const contentClipPath = isMobile
    ? "none"
    : "polygon(18% 0, 100% 0, 100% 100%, 0 100%)";

  return (
    <div
      className="min-h-screen w-full relative"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      {/* Ảnh nền phủ toàn bộ trang */}
      <div className="fixed inset-0 -z-20">
        <img
          src={bg}
          alt="Ảnh tập thể lớp"
          className="w-full h-full object-cover object-center opacity-40"
          style={{ filter: "blur(1px)" }}
        />
      </div>
      {/* Header/Hero Section */}
      <section className="relative min-h-screen h-screen flex items-stretch justify-end overflow-hidden">
        {/* Firework animation overlay */}
        <FireworkAnimation />
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-32 w-24 h-24 bg-[var(--color-secondary)]/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-32 left-32 w-16 h-16 bg-[var(--color-card)]/10 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-20 h-20 bg-[var(--color-primary)]/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div
          className="relative z-10 text-center px-0 w-full md:w-[55%] ml-auto h-full flex justify-end items-stretch"
          style={{
            padding: isMobile ? "10%" : undefined,
          }}
        >
          <AnimatePresence mode="wait">
            {!showRegistration ? (
              <motion.div
                key="main-content"
                initial={{ x: 0 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`flex-1 flex flex-col justify-center items-center p-6 md:p-12 shadow-xl ${
                  isMobile ? "rounded-2xl" : ""
                }`}
                style={{
                  background: "rgba(223,221,197,0.85)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  clipPath: isMobile ? undefined : contentClipPath,
                  borderRadius: isMobile ? "1.5rem" : "0 2rem 2rem 0",
                  boxShadow: "0 8px 32px rgba(119,125,113,0.10)",
                  minHeight: isMobile ? "auto" : "100vh",
                  height: isMobile ? "auto" : "100vh",
                  maxHeight: isMobile ? "none" : "100vh",
                  overflow: "auto",
                  paddingLeft: !isMobile ? "20%" : undefined,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <h1
                      className="text-3xl md:text-5xl font-bold mb-2"
                      style={{ fontFamily: "Dancing Script, cursive" }}
                    >
                      không thể tin được
                    </h1>
                    <h2
                      className="text-2xl md:text-3xl font-semibold mb-2"
                      style={{ fontFamily: "Dancing Script, cursive" }}
                    >
                      mình đã quen nhau
                    </h2>
                    <div className="mb-2">
                      <span
                        className="block text-gradient font-extrabold"
                        style={{
                          fontSize: "4.5rem",
                          lineHeight: 1.1,
                          letterSpacing: "-0.05em",
                          textShadow: "0 2px 8px #BBD38B",
                          color: "#BBD38B",
                          WebkitTextStroke: "1px #777D71",
                        }}
                      >
                        10 năm
                      </span>
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-semibold mb-6"
                      style={{ fontFamily: "Dancing Script, cursive" }}
                    >
                      rồi
                    </h3>
                  </motion.div>
                  {/* GIF trung tâm khối content */}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "32px 0",
                    }}
                  >
                    <img
                      src="https://gifdb.com/images/high/unbelievable-shocked-cat-wide-eyed-5e4nny5biiae6sfd.gif"
                      alt="Surprised GIF"
                      style={{
                        width: "180px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "1rem",
                      }}
                    />
                  </div>
                  {/* Description dưới cùng */}
                  <div
                    style={{
                      width: "100%",
                      marginTop: "auto",
                      padding: "0 1.5rem 1.5rem 1.5rem",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p
                      className="text-xs md:text-lg mb-0 mt-4"
                      style={{
                        color: "var(--color-secondary)",
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                        maxWidth: "100%",
                        textAlign: "center",
                      }}
                    >
                      Chúng ta đã gặp nhau lần đầu cách đây 10 năm. Hãy cùng gặp
                      nhau ôn lại những kỷ niệm đẹp và tạo thêm những khoảnh
                      khắc mới!
                    </p>
                    <button
                      className="mt-6 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-lime-300 text-white font-bold shadow-lg hover:scale-105 transition-transform text-sm md:text-lg"
                      onClick={() => setShowRegistration(true)}
                      style={{
                        outline: "none",
                        border: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Đăng ký tham gia
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="registration-form"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`flex-1 flex flex-col  items-center p-6 md:p-12 shadow-xl ${
                  isMobile ? "rounded-2xl justify-start" : "justify-center"
                }`}
                style={{
                  background: "rgba(223,221,197,0.95)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  clipPath: isMobile ? undefined : contentClipPath,
                  borderRadius: isMobile ? "1.5rem" : "0 2rem 2rem 0",
                  boxShadow: "0 8px 32px rgba(119,125,113,0.10)",
                  minHeight: isMobile ? "auto" : "100vh",
                  height: isMobile ? "auto" : "100vh",
                  maxHeight: isMobile ? "none" : "100vh",
                  overflow: "auto",
                }}
              >
                <div
                  className="w-full max-w-md"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  {/* Back icon + title flex row */}
                  <div className="flex items-center justify-center mb-8 relative w-full">
                    <button
                      onClick={() => setShowRegistration(false)}
                      className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] focus:outline-none"
                      aria-label="Quay lại"
                      style={{ zIndex: 2 }}
                    >
                      <ArrowLeft size={24} />
                    </button>
                    <h2
                      className="w-full text-center text-sm md:text-2xl lg:text-3xl font-bold"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Đăng Ký Tham Gia
                    </h2>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <form
                      onSubmit={handleRegistrationSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <input
                          type="text"
                          value={registrationData.name}
                          onChange={(e) =>
                            setRegistrationData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                          className="w-full px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm md:text-base"
                          placeholder="Nhập họ và tên của bạn"
                          style={{ outline: "none" }}
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm md:text-base font-medium mb-3"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          Bạn chọn gì đi! chọn nhiều được nhé *
                        </label>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {activityTags.map((tag, index) => {
                            const selected =
                              registrationData.selectedTags.includes(tag);
                            return (
                              <button
                                type="button"
                                key={index}
                                onClick={() => handleTagToggle(tag)}
                                className={`px-3 py-1 md:px-5 md:py-2 rounded-full border-2 transition-all duration-200 text-sm md:text-base font-medium focus:outline-none
                                  ${
                                    selected
                                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--color-secondary)] shadow-md"
                                      : "bg-transparent border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-card)]"
                                  }
                                `}
                                style={{ minWidth: "fit-content" }}
                              >
                                {tag}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 py-2 md:px-8 md:py-4 rounded-full font-bold shadow-lg text-sm md:text-lg transition-all duration-300 border-2 border-[var(--color-secondary)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-card)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-bg)] hover:border-[var(--color-primary)]"
                        style={{ outline: "none" }}
                      >
                        Đăng Ký
                      </motion.button>
                    </form>
                  </motion.div>
                  {/* Ticket image bottom right */}
                  <img
                    src={ve}
                    style={{
                      position: "fixed",
                      right: 0,
                      bottom: 0,
                      width: !isMobile ? "35vh" : "80vw",
                      height: "auto",
                      zIndex: -1,
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[var(--color-secondary)]/60 cursor-pointer"
            onClick={() => scrollToSection("details")}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>
      {/* Gallery Section */}
      {/* <section className="py-20 px-4">
        <Gallery />
      </section> */}
      {/* Footer */}
      {/* <footer
        className="py-12 px-4 text-center"
        style={{ color: "var(--color-secondary)" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="w-5 h-5 text-[var(--color-primary)] animate-pulse" />
            <span className="text-lg font-medium">Tình bạn 10B1 bền vững</span>
            <Heart className="w-5 h-5 text-[var(--color-primary)] animate-pulse" />
          </div>
          <p className="mb-4">
            "Những người bạn tốt giống như những ngôi sao. Bạn không phải lúc
            nào cũng nhìn thấy họ, nhưng bạn biết họ luôn ở đó."
          </p>
          <div className="text-sm">
            <p>Liên hệ: example@email.com | 0123456789</p>
            <p className="mt-2">© 2024 Kỷ niệm 10 năm - 10B1</p>
          </div>
        </motion.div>
      </footer> */}
    </div>
  );
}

export default App;
