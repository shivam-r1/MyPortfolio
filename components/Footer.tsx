import { GitHub, LinkedIn, Mail, Twitter } from "@mui/icons-material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
   <div className="min-h-auto bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
   
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center  py-12 border-t border-white/10"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Let's Build Something Amazing Together
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and challenging projects.
          Feel free to reach out if you'd like to collaborate!
        </p>

        <div className="flex justify-center gap-4">
          {[
            {
              icon: Mail,
              href: "mailto:your.email@example.com",
              label: "Email",
            },
            {
              icon: GitHub,
              href: "https://github.com/yourusername",
              label: "GitHub",
            },
            {
              icon: LinkedIn,
              href: "https://linkedin.com/in/yourprofile",
              label: "LinkedIn",
            },
            {
              icon: Twitter,
              href: "https://twitter.com/yourhandle",
              label: "Twitter",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
