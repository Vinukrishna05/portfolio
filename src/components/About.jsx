import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-gray-900 text-white"
    >
      {/* Text */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi! I'm Vinukrishnan, a passionate MERN Stack developer and software engineer.
          I love building interactive and visually stunning web experiences with React,
          Express and modern web technologies.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          I enjoy learning new technologies, solving challenging problems, and
          creating web applications that users love to interact with.
        </p>
      </motion.div>

      {/* Image or Illustration */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/src/assets/vk.jpg"  // replace with your image
          alt="Vinukrishnan"
          className="rounded-2xl w-80 md:w-96 shadow-lg border-4 border-cyan-500"
        />
      </motion.div>
    </section>
  );
}
