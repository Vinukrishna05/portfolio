import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Animated Intro Text */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Vinukrishnan
      </motion.h1>

      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        MERN Stack Developer
      </motion.p>

      {/* Button */}
      <motion.a
        href="#projects"
        className="mt-8 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        View Projects
      </motion.a>
    </section>
  );
}
