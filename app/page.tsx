"use client";

import React from "react";

import styles from "../components/Background.module.css";

import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  TextField,
  IconButton,
} from "@mui/material";
import {
  Download,
  GitHub,
  LinkedIn,
  Code,
  School,
  Work,
  EmojiEvents,
  Email,
  Phone,
  LocationOn,
  Launch,
  ChevronRight,
  Send,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const fullText = "Hi, I'm Shivam";

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 150);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const skillCategories = {
    "Programming Languages": [
      {
        name: "C++",
        level: 90,
        icon: "⚡",
        color: "linear-gradient(45deg, #f39c12, #e67e22)",
      },
      {
        name: "JavaScript",
        level: 85,
        icon: "📜",
        color: "linear-gradient(45deg, #f1c40f, #f39c12)",
      },
      {
        name: "Python",
        level: 80,
        icon: "🐍",
        color: "linear-gradient(45deg, #27ae60, #3498db)",
      },
    ],
    "Frontend Technologies": [
      {
        name: "React.js",
        level: 88,
        icon: "⚛️",
        color: "linear-gradient(45deg, #3498db, #00f5ff)",
      },
      {
        name: "HTML/CSS",
        level: 92,
        icon: "🎨",
        color: "linear-gradient(45deg, #e67e22, #e74c3c)",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: "💨",
        color: "linear-gradient(45deg, #00f5ff, #3498db)",
      },
    ],
    "Backend & Database": [
      {
        name: "Node.js",
        level: 82,
        icon: "🟢",
        color: "linear-gradient(45deg, #27ae60, #2ecc71)",
      },
      {
        name: "Express.js",
        level: 80,
        icon: "🚀",
        color: "linear-gradient(45deg, #7f8c8d, #95a5a6)",
      },
      {
        name: "MongoDB",
        level: 85,
        icon: "🍃",
        color: "linear-gradient(45deg, #27ae60, #16a085)",
      },
    ],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      icon: "🛒",
      description:
        "Full-stack e-commerce solution with authentication, cart, payment integration",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "User authentication",
        "Shopping cart",
        "Payment gateway",
        "Admin dashboard",
      ],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Social Media Dashboard",
      icon: "📱",
      description:
        "Interactive dashboard for social media management with real-time analytics",
      tech: ["React", "Node.js", "Chart.js", "MongoDB"],
      features: [
        "Real-time analytics",
        "Post scheduling",
        "User management",
        "Data visualization",
      ],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Task Management System",
      icon: "✅",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      features: [
        "Real-time updates",
        "Team collaboration",
        "Task tracking",
        "File sharing",
      ],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Algorithm Visualizer",
      icon: "🧮",
      description:
        "Interactive visualization of sorting and searching algorithms",
      tech: ["JavaScript", "HTML5 Canvas", "CSS"],
      features: [
        "Step-by-step visualization",
        "Multiple algorithms",
        "Speed control",
        "Code display",
      ],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Personal Portfolio",
      icon: "💼",
      description: "Modern responsive portfolio with dark theme and animations",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Contact form",
        "Dark theme",
      ],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Aideo",
      duration: "6 Months",
      type: "Internship",
      icon: Work,
      color: "#00f5ff",
      description: [
        "Developed and maintained a semi-government website using modern web technologies",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Gained expertise in full-stack development with React, Node.js, MongoDB, and Express",
        "Learned government project protocols and compliance requirements",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "Git",
      ],
      achievements: [
        "Successfully delivered semi-government project on time",
        "Improved application performance by 30%",
        "Implemented secure authentication system",
        "Created responsive design for mobile compatibility",
      ],
    },
    {
      title: "B.Tech Computer Science",
      company: "Delhi Technological University",
      duration: "2022-2026",
      type: "Education",
      icon: School,
      color: "#0066ff",
      description: [
        "Strong foundation in Computer Science fundamentals and programming",
        "Active participation in coding competitions and hackathons",
        "Consistent academic performance with focus on practical applications",
        "500+ problems solved on LeetCode demonstrating algorithmic skills",
      ],
      technologies: [
        "C++",
        "Python",
        "Java",
        "Data Structures",
        "Algorithms",
        "DBMS",
        "OS",
      ],
      achievements: [
        "Maintained excellent academic record",
        "500+ LeetCode problems solved",
        "Active participant in coding competitions",
        "Member of technical societies",
      ],
    },
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: { xs: 10, md: 12 },
          pb: { xs: 4, md: 6 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                  }}
                >
                  {typedText}
                  {showCursor && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      |
                    </motion.span>
                  )}
                </Typography>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "text.secondary",
                      mb: 3,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                    }}
                  >
                    Full Stack Developer & CS Student
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.secondary",
                      mb: 4,
                      maxWidth: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    Delhi Technological University Student passionate about
                    crafting digital experiences with clean, efficient code.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <Box
                    sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => router.push("/projects")}
                        sx={{
                          background:
                            "linear-gradient(45deg, #00f5ff, #0066ff)",
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          fontWeight: 600,
                          "&:hover": {
                            background:
                              "linear-gradient(45deg, #00d4ff, #0055ff)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(0, 245, 255, 0.3)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        View My Work
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outlined"
                        size="large"
                        startIcon={<Download />}
                        sx={{
                          borderColor: "#00f5ff",
                          color: "#00f5ff",
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: "#00f5ff",
                            background: "rgba(0, 245, 255, 0.1)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(0, 245, 255, 0.2)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Download Resume
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {[
                      { icon: GitHub, href: "#", color: "#ffffff" },
                      { icon: LinkedIn, href: "#", color: "#0077b5" },
                      { icon: Code, href: "#", color: "#00f5ff" },
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          href={social.href}
                          sx={{
                            minWidth: "auto",
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            color: social.color,
                            border: `2px solid ${social.color}`,
                            "&:hover": {
                              background: `${social.color}20`,
                              boxShadow: `0 0 20px ${social.color}40`,
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          <social.icon />
                        </Button>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 300, md: 400 },
                        height: { xs: 300, md: 400 },
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, rgba(0, 245, 255, 0.1), rgba(0, 102, 255, 0.1))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: -2,
                          borderRadius: "50%",
                          background: "linear-gradient(45deg, #00f5ff, #0066ff, #ff006e)",
                          zIndex: -1,
                        },
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Avatar
                          sx={{
                            width: { xs: 200, md: 300 },
                            height: { xs: 200, md: 300 },
                            fontSize: { xs: "6rem", md: "8rem" },
                            background: "rgba(10, 10, 15, 0.8)",
                            border: "3px solid #00f5ff",
                          }}
                        >
                          👨‍💻
                        </Avatar>
                      </motion.div>
                    </Box>
                  </motion.div>

                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                      }}
                      animate={{
                        x: [0, 100 * Math.cos((i * Math.PI) / 3), 0],
                        y: [0, 100 * Math.sin((i * Math.PI) / 3), 0],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Grid> */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 300, md: 400 },
                        height: { xs: 300, md: 400 },
                        borderRadius: "50%",
                        background:
                          "linear-gradient(45deg, rgba(0, 245, 255, 0.1), rgba(0, 102, 255, 0.1))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: -2,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(45deg, #00f5ff, #0066ff, #ff006e)",
                          zIndex: -1,
                        },
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Box
                          component="img"
                          src="/shivam5.png"
                          alt="Shivam Ruhela"
                          sx={{
                            width: { xs: 200, md: 300 },
                            height: { xs: 200, md: 300 },
                            borderRadius: "50%",
                            objectFit: "cover",
                            background: "rgba(10, 10, 15, 0.8)",
                            border: "3px solid #00f5ff",
                      
                          }}
                        />
                      </motion.div>
                    </Box>
                  </motion.div>

                  {/* Floating elements around photo */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                      }}
                      animate={{
                        x: [0, 100 * Math.cos((i * Math.PI) / 3), 0],
                        y: [0, 100 * Math.sin((i * Math.PI) / 3), 0],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      {/* <Box id="about" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              About Me
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}>
              A passionate Computer Science student with hands-on industry experience
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            <Grid item xs={6} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
                    I'm currently pursuing B.Tech in Computer Science at Delhi Technological University (2022-2026),
                    where I've built a strong foundation in programming and software development.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
                    During my 6-month internship at Aideo as a Full Stack Developer, I gained valuable industry
                    experience working on a semi-government website project.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
                    I'm passionate about problem-solving and have solved 500+ problems on LeetCode, demonstrating my
                    commitment to continuous learning and algorithmic thinking.
                  </Typography>
                </Box>

                <Box>
                  {[
                    { name: "Problem Solving", level: 95 },
                    { name: "Team Collaboration", level: 90 },
                    { name: "Learning Agility", level: 98 },
                    { name: "Communication", level: 88 },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                          <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600 }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "& .MuiLinearProgress-bar": {
                              background: "linear-gradient(90deg, #00f5ff, #0066ff)",
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={6} md={6}>
              <Card
                sx={{
                  background: "rgba(26, 26, 46, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  borderRadius: 4,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ color: "primary.main", mb: 3, fontWeight: 600, textAlign: "center" }}>
                    Quick Facts
                  </Typography>
                  {[
                    {
                      icon: School,
                      title: "Delhi Technological University",
                      subtitle: "B.Tech Computer Science (2022-2026)",
                    },
                    { icon: Work, title: "6 Months Internship", subtitle: "Aideo - Full Stack Developer" },
                    { icon: Code, title: "500+ Problems Solved", subtitle: "LeetCode & Competitive Programming" },
                    { icon: EmojiEvents, title: "Semi-Govt Project", subtitle: "Real-world development experience" },
                  ].map((fact, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(0, 245, 255, 0.05)",
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 2,
                        }}
                      >
                        <fact.icon sx={{ color: "white", fontSize: "1.2rem" }} />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                          {fact.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                          {fact.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <AboutSection />

      {/* Skills Section */}
      <Box id="skills" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              background: "linear-gradient(45deg, #00f5ff, #0066ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 6,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Skills & Technologies
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {Object.entries(skillCategories).map(
              ([category, skills], categoryIndex) => (
                <Grid item xs={12} sm={6} lg={4} key={category}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        background: "rgba(26, 26, 46, 0.6)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(0, 245, 255, 0.2)",
                        borderRadius: 4,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          border: "1px solid rgba(0, 245, 255, 0.4)",
                          boxShadow: "0 10px 40px rgba(0, 245, 255, 0.2)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "primary.main",
                            mb: 3,
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          {category}
                        </Typography>

                        <Box sx={{ space: 3 }}>
                          {skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              }}
                            >
                              <Box sx={{ mb: 3 }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 1,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      sx={{ fontSize: "1.2rem" }}
                                    >
                                      {skill.icon}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: "text.primary",
                                        fontWeight: 500,
                                      }}
                                    >
                                      {skill.name}
                                    </Typography>
                                  </Box>
                                  <Chip
                                    label={`${skill.level}%`}
                                    size="small"
                                    sx={{
                                      background: skill.color,
                                      color: "white",
                                      fontWeight: 600,
                                      fontSize: "0.75rem",
                                    }}
                                  />
                                </Box>
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{
                                    duration: 1,
                                    delay:
                                      categoryIndex * 0.1 + skillIndex * 0.1,
                                  }}
                                >
                                  <LinearProgress
                                    variant="determinate"
                                    value={skill.level}
                                    sx={{
                                      height: 6,
                                      borderRadius: 3,
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.1)",
                                      "& .MuiLinearProgress-bar": {
                                        background: skill.color,
                                        borderRadius: 3,
                                      },
                                    }}
                                  />
                                </motion.div>
                              </Box>
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              background: "linear-gradient(45deg, #00f5ff, #0066ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 6,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Featured Projects
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(26, 26, 46, 0.6)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(0, 245, 255, 0.2)",
                      borderRadius: 4,
                      overflow: "hidden",
                      position: "relative",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        border: "1px solid rgba(0, 245, 255, 0.4)",
                        boxShadow: "0 20px 60px rgba(0, 245, 255, 0.2)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: project.gradient,
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: { xs: 2, md: 3 },
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Typography variant="h4" sx={{ mr: 2 }}>
                          {project.icon}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "text.primary",
                            fontWeight: 600,
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 3,
                          lineHeight: 1.6,
                          flexGrow: 1,
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            mb: 2,
                          }}
                        >
                          {project.tech.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                background: "rgba(0, 245, 255, 0.2)",
                                color: "#00f5ff",
                                border: "1px solid rgba(0, 245, 255, 0.3)",
                                fontSize: "0.75rem",
                              }}
                            />
                          ))}
                        </Box>

                        <Box>
                          {project.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1 + featureIndex * 0.05,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mb: 0.5,
                                }}
                              >
                                <ChevronRight
                                  sx={{
                                    color: "primary.main",
                                    fontSize: "1rem",
                                    mr: 0.5,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "text.secondary",
                                    fontSize: "0.85rem",
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            </motion.div>
                          ))}
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<Launch />}
                            href={project.liveDemo}
                            sx={{
                              background:
                                "linear-gradient(45deg, #00f5ff, #0066ff)",
                              flex: 1,
                              "&:hover": {
                                background:
                                  "linear-gradient(45deg, #00d4ff, #0055ff)",
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<GitHub />}
                            href={project.github}
                            sx={{
                              borderColor: "#00f5ff",
                              color: "#00f5ff",
                              flex: 1,
                              "&:hover": {
                                borderColor: "#00f5ff",
                                background: "rgba(0, 245, 255, 0.1)",
                              },
                            }}
                          >
                            GitHub
                          </Button>
                        </motion.div>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              background: "linear-gradient(45deg, #00f5ff, #0066ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 6,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Professional Journey
          </Typography>

          <Box sx={{ maxWidth: 800, mx: "auto" }}>
            <Box sx={{ position: "relative" }}>
              {/* Vertical line */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 20, md: 40 },
                  top: 0,
                  bottom: 0,
                  width: 3,
                  background: "linear-gradient(180deg, #00f5ff, #0066ff)",
                  borderRadius: 1.5,
                }}
              />

              {experiences.map((experience, index) => (
                <Box key={index} sx={{ position: "relative", mb: 6 }}>
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: 8, md: 28 },
                        top: 20,
                        width: { xs: 24, md: 24 },
                        height: { xs: 24, md: 24 },
                        background: `linear-gradient(45deg, ${experience.color}, #ff006e)`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      <experience.icon
                        sx={{
                          color: "white",
                          fontSize: { xs: "1rem", md: "1.2rem" },
                        }}
                      />
                    </Box>
                  </motion.div>

                  {/* Content card */}
                  <Box sx={{ ml: { xs: 7, md: 10 } }}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Card
                        sx={{
                          background: "rgba(26, 26, 46, 0.6)",
                          backdropFilter: "blur(20px)",
                          border: `1px solid ${experience.color}40`,
                          borderRadius: 4,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            border: `1px solid ${experience.color}80`,
                            boxShadow: `0 10px 40px ${experience.color}30`,
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "start",
                              mb: 2,
                            }}
                          >
                            <Box>
                              <Typography
                                variant="h5"
                                sx={{
                                  color: "text.primary",
                                  fontWeight: 600,
                                  mb: 1,
                                }}
                              >
                                {experience.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  color: experience.color,
                                  fontWeight: 500,
                                }}
                              >
                                {experience.company}
                              </Typography>
                            </Box>
                            <Chip
                              label={experience.duration}
                              sx={{
                                background: `${experience.color}20`,
                                color: experience.color,
                                border: `1px solid ${experience.color}40`,
                                fontWeight: 600,
                              }}
                            />
                          </Box>

                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "text.primary",
                                mb: 2,
                                fontSize: "1.1rem",
                              }}
                            >
                              Key Responsibilities:
                            </Typography>
                            {experience.description.map((item, itemIndex) => (
                              <Typography
                                key={itemIndex}
                                variant="body2"
                                sx={{
                                  color: "text.secondary",
                                  mb: 1,
                                  display: "flex",
                                  alignItems: "flex-start",
                                  "&::before": {
                                    content: '"•"',
                                    color: experience.color,
                                    fontWeight: "bold",
                                    width: "1em",
                                    marginRight: "0.5em",
                                  },
                                }}
                              >
                                {item}
                              </Typography>
                            ))}
                          </Box>

                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "text.primary",
                                mb: 2,
                                fontSize: "1.1rem",
                              }}
                            >
                              Technologies Used:
                            </Typography>
                            <Box
                              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
                            >
                              {experience.technologies.map((tech) => (
                                <Chip
                                  key={tech}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    background: `${experience.color}15`,
                                    color: experience.color,
                                    border: `1px solid ${experience.color}30`,
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>

                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "text.primary",
                                mb: 2,
                                fontSize: "1.1rem",
                              }}
                            >
                              Key Achievements:
                            </Typography>
                            {experience.achievements.map(
                              (achievement, achievementIndex) => (
                                <Typography
                                  key={achievementIndex}
                                  variant="body2"
                                  sx={{
                                    color: "text.secondary",
                                    mb: 1,
                                    display: "flex",
                                    alignItems: "flex-start",
                                    "&::before": {
                                      content: '"🏆"',
                                      width: "1.5em",
                                      marginRight: "0.5em",
                                    },
                                  }}
                                >
                                  {achievement}
                                </Typography>
                              )
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              background: "linear-gradient(45deg, #00f5ff, #0066ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Let's Build Something Amazing Together
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}
          >
            Available for full-time opportunities starting 2026. Let's discuss
            how I can contribute to your team.
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: "rgba(26, 26, 46, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  borderRadius: 4,
                  mb: 4,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "primary.main",
                      mb: 4,
                      fontWeight: 600,
                    }}
                  >
                    Get In Touch
                  </Typography>

                  {[
                    {
                      icon: Email,
                      title: "Email",
                      value: "shivam.ruhela@example.com",
                      color: "#00f5ff",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      value: "+91 XXXXX XXXXX",
                      color: "#0066ff",
                    },
                    {
                      icon: LocationOn,
                      title: "Location",
                      value: "Delhi, India",
                      color: "#ff006e",
                    },
                  ].map((contact, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(0, 245, 255, 0.05)",
                        border: "1px solid rgba(0, 245, 255, 0.1)",
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          background: `linear-gradient(45deg, ${contact.color}, #ff006e)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: 3,
                        }}
                      >
                        <contact.icon sx={{ color: "white" }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.primary", fontWeight: 600 }}
                        >
                          {contact.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: contact.color }}
                        >
                          {contact.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}

                  <Box
                    sx={{
                      mt: 4,
                      pt: 4,
                      borderTop: "1px solid rgba(0, 245, 255, 0.2)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 3 }}
                    >
                      Usually responds within 24 hours
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      {[
                        { icon: GitHub, href: "#", color: "#ffffff" },
                        { icon: LinkedIn, href: "#", color: "#0077b5" },
                        { icon: Code, href: "#", color: "#00f5ff" },
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.2, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconButton
                            href={social.href}
                            sx={{
                              width: 50,
                              height: 50,
                              color: social.color,
                              border: `2px solid ${social.color}`,
                              "&:hover": {
                                background: `${social.color}20`,
                                boxShadow: `0 0 20px ${social.color}40`,
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            <social.icon />
                          </IconButton>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  background: "rgba(0, 255, 0, 0.1)",
                  border: "1px solid rgba(0, 255, 0, 0.3)",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "#00ff00", fontWeight: 600 }}
                >
                  🟢 Available for full-time opportunities starting 2026
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: "rgba(26, 26, 46, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  borderRadius: 4,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "primary.main",
                      mb: 4,
                      fontWeight: 600,
                    }}
                  >
                    Send Message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              background: "rgba(0, 0, 0, 0.2)",
                              "& fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.3)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.5)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#00f5ff",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "text.secondary",
                              "&.Mui-focused": {
                                color: "#00f5ff",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              background: "rgba(0, 0, 0, 0.2)",
                              "& fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.3)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.5)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#00f5ff",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "text.secondary",
                              "&.Mui-focused": {
                                color: "#00f5ff",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              background: "rgba(0, 0, 0, 0.2)",
                              "& fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.3)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.5)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#00f5ff",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "text.secondary",
                              "&.Mui-focused": {
                                color: "#00f5ff",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              background: "rgba(0, 0, 0, 0.2)",
                              "& fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.3)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(0, 245, 255, 0.5)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#00f5ff",
                              },
                            },
                            "& .MuiInputLabel-root": {
                              color: "text.secondary",
                              "&.Mui-focused": {
                                color: "#00f5ff",
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          endIcon={<Send />}
                          sx={{
                            background:
                              "linear-gradient(45deg, #00f5ff, #0066ff)",
                            py: 2,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            "&:hover": {
                              background:
                                "linear-gradient(45deg, #00d4ff, #0055ff)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 8px 25px rgba(0, 245, 255, 0.3)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}

interface Skill {
  name: string;
  level: number;
}

interface Fact {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const AboutSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 90 },
    { name: "Learning Agility", level: 98 },
    { name: "Communication", level: 88 },
  ];

  const facts: Fact[] = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          style={{ width: "20px", height: "20px", fill: "white" }}
        >
          <path d="M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18M12,3L1,9L12,15L21,9L12,3Z" />
        </svg>
      ),
      title: "Delhi Technological University",
      subtitle: "B.Tech Computer Science (2022-2026)",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          style={{ width: "20px", height: "20px", fill: "white" }}
        >
          <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z" />
        </svg>
      ),
      title: "6 Months Internship",
      subtitle: "Aideo - Full Stack Developer",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          style={{ width: "20px", height: "20px", fill: "white" }}
        >
          <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" />
        </svg>
      ),
      title: "500+ Problems Solved",
      subtitle: "LeetCode & Competitive Programming",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          style={{ width: "20px", height: "20px", fill: "white" }}
        >
          <path d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C21.53,8 22,8.2 22,8.53V9.91C22,10.04 21.97,10.17 21.94,10.3L19.21,18.9C19.02,19.57 18.41,20 17.72,20H9M9,19H17.72L20.25,11H8.5V19Z" />
        </svg>
      ),
      title: "Semi-Govt Project",
      subtitle: "Real-world development experience",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
      padding: "2rem 1rem",
      color: "#e0e0e0",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    } as React.CSSProperties,

    maxWidth: {
      maxWidth: "1200px",
      margin: "0 auto",
    } as React.CSSProperties,

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem",
      alignItems: "start",
    } as React.CSSProperties,

    gridLarge: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      alignItems: "start",
    } as React.CSSProperties,

    mainTitle: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "2rem",
      background: "linear-gradient(45deg, #00f5ff, #0066ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    } as React.CSSProperties,

    mainTitleLarge: {
      fontSize: "3.5rem",
    } as React.CSSProperties,

    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#00f5ff",
      marginBottom: "1.5rem",
    } as React.CSSProperties,

    sectionTitleLarge: {
      fontSize: "2rem",
    } as React.CSSProperties,

    textContent: {
      fontSize: "1rem",
      lineHeight: 1.8,
      marginBottom: "1.5rem",
      color: "#e0e0e0",
    } as React.CSSProperties,

    textContentLarge: {
      fontSize: "1.1rem",
    } as React.CSSProperties,

    skillsContainer: {
      paddingTop: "1.5rem",
    } as React.CSSProperties,

    skillItem: {
      marginBottom: "1.5rem",
    } as React.CSSProperties,

    skillHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "0.5rem",
    } as React.CSSProperties,

    skillName: {
      fontWeight: 600,
      color: "#e0e0e0",
      fontSize: "0.9rem",
    } as React.CSSProperties,

    skillNameLarge: {
      fontSize: "1rem",
    } as React.CSSProperties,

    skillPercentage: {
      fontWeight: 600,
      color: "#00f5ff",
      fontSize: "0.9rem",
    } as React.CSSProperties,

    skillPercentageLarge: {
      fontSize: "1rem",
    } as React.CSSProperties,

    progressBar: {
      width: "100%",
      height: "6px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "4px",
      overflow: "hidden",
    } as React.CSSProperties,

    progressBarLarge: {
      height: "8px",
    } as React.CSSProperties,

    progressFill: {
      height: "100%",
      background: "linear-gradient(90deg, #00f5ff, #0066ff)",
      borderRadius: "4px",
      transition: "width 1s ease",
    } as React.CSSProperties,

    factsCard: {
      background: "rgba(26, 26, 46, 0.8)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(0, 245, 255, 0.3)",
      borderRadius: "1rem",
      padding: "1.5rem",
      boxShadow: "0 20px 40px rgba(0, 245, 255, 0.1)",
    } as React.CSSProperties,

    factsCardLarge: {
      padding: "2rem",
      position: "sticky" as const,
      top: "20px",
    } as React.CSSProperties,

    factsTitle: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#00f5ff",
      textAlign: "center" as const,
      marginBottom: "1.5rem",
    } as React.CSSProperties,

    factsTitleLarge: {
      fontSize: "2rem",
    } as React.CSSProperties,

    factItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
      padding: "1rem",
      background: "rgba(0, 245, 255, 0.08)",
      border: "1px solid rgba(0, 245, 255, 0.1)",
      borderRadius: "0.5rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
    } as React.CSSProperties,

    factItemLarge: {
      padding: "1.25rem",
      marginBottom: "1.5rem",
    } as React.CSSProperties,

    factIcon: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #00f5ff, #0066ff)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0.75rem",
      flexShrink: 0,
    } as React.CSSProperties,

    factIconLarge: {
      width: "40px",
      height: "40px",
      marginRight: "1rem",
    } as React.CSSProperties,

    factContent: {
      flex: 1,
      minWidth: 0,
    } as React.CSSProperties,

    factTitle: {
      fontWeight: 600,
      color: "#e0e0e0",
      marginBottom: "0.25rem",
      fontSize: "0.9rem",
    } as React.CSSProperties,

    factTitleLarge: {
      fontSize: "1rem",
    } as React.CSSProperties,

    factSubtitle: {
      fontSize: "0.75rem",
      color: "#a0a0a0",
      lineHeight: 1.3,
    } as React.CSSProperties,

    factSubtitleLarge: {
      fontSize: "0.8rem",
    } as React.CSSProperties,
  };

  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <div style={isLargeScreen ? styles.gridLarge : styles.grid}>
          {/* Left Column - About Text & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h1
                style={{
                  ...styles.mainTitle,
                  ...(isLargeScreen ? styles.mainTitleLarge : {}),
                }}
              >
                About Me
              </h1>

              <div>
                <p
                  style={{
                    ...styles.textContent,
                    ...(isLargeScreen ? styles.textContentLarge : {}),
                  }}
                >
                  I'm currently pursuing B.Tech in Computer Science at Delhi
                  Technological University (2022-2026), where I've built a
                  strong foundation in programming and software development.
                </p>

                <p
                  style={{
                    ...styles.textContent,
                    ...(isLargeScreen ? styles.textContentLarge : {}),
                  }}
                >
                  During my 6-month internship at Aideo as a Full Stack
                  Developer, I gained valuable industry experience working on a
                  semi-government website project.
                </p>

                <p
                  style={{
                    ...styles.textContent,
                    ...(isLargeScreen ? styles.textContentLarge : {}),
                  }}
                >
                  I'm passionate about problem-solving and have solved 500+
                  problems on LeetCode, demonstrating my commitment to
                  continuous learning and algorithmic thinking.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            {/* <div style={styles.skillsContainer}>
              <h2 style={{
                ...styles.sectionTitle,
                ...(isLargeScreen ? styles.sectionTitleLarge : {})
              }}>
                Skills & Expertise
              </h2>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    style={styles.skillItem}
                  >
                    <div style={styles.skillHeader}>
                      <span style={{
                        ...styles.skillName,
                        ...(isLargeScreen ? styles.skillNameLarge : {})
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        ...styles.skillPercentage,
                        ...(isLargeScreen ? styles.skillPercentageLarge : {})
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{
                      ...styles.progressBar,
                      ...(isLargeScreen ? styles.progressBarLarge : {})
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        style={styles.progressFill}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div> */}
          </motion.div>

          {/* Right Column - Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              style={{
                ...styles.factsCard,
                ...(isLargeScreen ? styles.factsCardLarge : {}),
              }}
            >
              <h2
                style={{
                  ...styles.factsTitle,
                  ...(isLargeScreen ? styles.factsTitleLarge : {}),
                }}
              >
                Quick Facts
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                    }}
                    style={{
                      ...styles.factItem,
                      ...(isLargeScreen ? styles.factItemLarge : {}),
                    }}
                  >
                    <div
                      style={{
                        ...styles.factIcon,
                        ...(isLargeScreen ? styles.factIconLarge : {}),
                      }}
                    >
                      {fact.icon}
                    </div>
                    <div style={styles.factContent}>
                      <h3
                        style={{
                          ...styles.factTitle,
                          ...(isLargeScreen ? styles.factTitleLarge : {}),
                        }}
                      >
                        {fact.title}
                      </h3>
                      <p
                        style={{
                          ...styles.factSubtitle,
                          ...(isLargeScreen ? styles.factSubtitleLarge : {}),
                        }}
                      >
                        {fact.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
