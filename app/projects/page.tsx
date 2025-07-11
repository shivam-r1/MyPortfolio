"use client"

import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip } from "@mui/material"
import { Launch, GitHub, ChevronRight } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      icon: "🛒",
      description: "Full-stack e-commerce solution with authentication, cart, payment integration",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: ["User authentication", "Shopping cart", "Payment gateway", "Admin dashboard"],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Social Media Dashboard",
      icon: "📱",
      description: "Interactive dashboard for social media management with real-time analytics",
      tech: ["React", "Node.js", "Chart.js", "MongoDB"],
      features: ["Real-time analytics", "Post scheduling", "User management", "Data visualization"],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Task Management System",
      icon: "✅",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      features: ["Real-time updates", "Team collaboration", "Task tracking", "File sharing"],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Algorithm Visualizer",
      icon: "🧮",
      description: "Interactive visualization of sorting and searching algorithms",
      tech: ["JavaScript", "HTML5 Canvas", "CSS"],
      features: ["Step-by-step visualization", "Multiple algorithms", "Speed control", "Code display"],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Personal Portfolio",
      icon: "💼",
      description: "Modern responsive portfolio with dark theme and animations",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive design", "Smooth animations", "Contact form", "Dark theme"],
      liveDemo: "#",
      github: "#",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
  ]

  return (
    <Box sx={{ minHeight: "100vh", pt: 12, pb: 8, position: "relative", zIndex: 1 }}>
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
            }}
          >
            Featured Projects
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}>
            A showcase of my web applications with live demos and source code
          </Typography>
        </motion.div>

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
                  <CardContent sx={{ p: { xs: 2, md: 3 }, display: "flex", flexDirection: "column", height: "100%" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
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
                            transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                              <ChevronRight sx={{ color: "primary.main", fontSize: "1rem", mr: 0.5 }} />
                              <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
                                {feature}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<Launch />}
                          href={project.liveDemo}
                          sx={{
                            background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                            flex: 1,
                            "&:hover": {
                              background: "linear-gradient(45deg, #00d4ff, #0055ff)",
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
  )
}
