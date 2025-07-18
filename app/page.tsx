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
  Coffee,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SkillsSection from "@/components/Skills";
import AboutSec from "@/components/AboutSec";
import { Calendar, CoffeeIcon, MapPin } from "lucide-react";

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
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <MapPin size={16} className="text-blue-400" />
                    <span className="text-sm">Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <Calendar size={16} className="text-green-400" />
                    <span className="text-sm">Available for Projects</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <CoffeeIcon size={16} className="text-orange-400" />
                    <span className="text-sm">500+ Problems Solved</span>
                  </div>
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

      <AboutSec />

      {/* Skills Section */}

      <SkillsSection />

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
                 
    </main>
  );
}
