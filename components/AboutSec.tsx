import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Award,
  Users,
  Coffee,
  GitBranch,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Lightbulb,
  ChevronRight,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Calendar,
  BookOpen,
  Briefcase,
  Star,
  User,
} from "lucide-react";

const AboutPage = () => {
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


  const achievements = [
    {
      icon: Code,
      title: "500+ Problems Solved",
      description: "LeetCode & Competitive Programming",
      metric: "500+",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description: "6 months at Aideo as Full Stack Developer",
      metric: "6 Months",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Award,
      title: "Semi-Govt Project",
      description: "Led development of government website",
      metric: "1 Project",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Managed cross-functional development teams",
      metric: "3+ Teams",
      color: "from-pink-500 to-rose-600",
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20"
          > */}
            {/* Right Content - Profile Image & Stats */}
            {/* <div className="flex-1 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
               
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <motion.div
                    className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center overflow-hidden">
                      <div className="text-8xl">👨‍💻</div>
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Your Name
                    </h3>
                    <p className="text-blue-400 font-medium mb-4">
                      Full Stack Developer
                    </p>

                
                    <div className="flex justify-center gap-3">
                      {[
                        {
                          icon: Github,
                          href: "https://github.com/yourusername",
                          color: "hover:bg-gray-700",
                        },
                        {
                          icon: Linkedin,
                          href: "https://linkedin.com/in/yourprofile",
                          color: "hover:bg-blue-600",
                        },
                        {
                          icon: Twitter,
                          href: "https://twitter.com/yourhandle",
                          color: "hover:bg-sky-500",
                        },
                        {
                          icon: Mail,
                          href: "mailto:your.email@example.com",
                          color: "hover:bg-red-500",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

              
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-xs text-blue-100">Problems Solved</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-4 shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">6M+</div>
                    <div className="text-xs text-green-100">Experience</div>
                  </div>
                </motion.div>
              </motion.div>
            </div> */}
          {/* </motion.div> */}

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-400 mb-4">
                  My Journey
                </h2>
                <p className="text-gray-300">
                  Key milestones in my development career
                </p>
              </div>
              {/* About Text */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-blue-400">
                    Who Am I?
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      I'm a passionate Computer Science student at Delhi
                      Technological University, with a strong foundation in
                      full-stack development and a love for solving complex
                      problems.
                    </p>
                    <p>
                      During my 6-month internship at Aideo, I developed a
                      semi-government website that serves thousands of users
                      daily. This experience taught me the importance of
                      scalable architecture and user-centered design.
                    </p>
                    <p>
                      When I'm not coding, you'll find me solving algorithmic
                      challenges on LeetCode or exploring new technologies. I
                      believe in continuous learning and pushing the boundaries
                      of what's possible with code.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-purple-400">
                    What I Do
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: Globe,
                        title: "Web Development",
                        desc: "Modern, responsive websites",
                      },
                      {
                        icon: Smartphone,
                        title: "Mobile Apps",
                        desc: "Cross-platform solutions",
                      },
                      {
                        icon: Database,
                        title: "Database Design",
                        desc: "Scalable data architecture",
                      },
                      {
                        icon: Server,
                        title: "API Development",
                        desc: "RESTful & GraphQL APIs",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className="text-blue-400 mb-2" size={24} />
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {achievement.metric}
                    </div>
                    <div className="font-semibold text-gray-200 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* {activeTab === "journey" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="relative flex items-start gap-6 pb-8"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                          item.type === "work"
                            ? "bg-blue-500"
                            : item.type === "education"
                            ? "bg-green-500"
                            : "bg-purple-500"
                        }`}
                      >
                        {item.type === "work" && (
                          <Briefcase size={16} className="text-white" />
                        )}
                        {item.type === "education" && (
                          <BookOpen size={16} className="text-white" />
                        )}
                        {item.type === "achievement" && (
                          <Star size={16} className="text-white" />
                        )}
                      </div>

                      <div className="flex-1 bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-blue-400">
                            {item.year}
                          </span>
                          <span className="text-sm bg-white/10 px-2 py-1 rounded-full">
                            {item.company}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )} */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
