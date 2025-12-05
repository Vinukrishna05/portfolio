import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, level: 80 },
  { name: "JavaScript", icon: <FaJs />, level: 85 },
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "Git / GitHub", icon: <FaGitAlt />, level: 75 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-2">
              <span className="flex items-center gap-2 text-lg font-semibold">
                <span className="text-cyan-400 text-2xl">{skill.icon}</span>
                {skill.name}
              </span>
              <span className="text-cyan-400 font-semibold">{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-gray-700 rounded-full">
              <motion.div
                className="h-3 bg-cyan-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
