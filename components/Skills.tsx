"use client";

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

export default function SkillsSection() {
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
      {
        name: "Bootstrap",
        level: 80,
        icon: "🅱️",
        color: "linear-gradient(45deg, #9b59b6, #e91e63)",
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
      {
        name: "SQL",
        level: 78,
        icon: "🗄️",
        color: "linear-gradient(45deg, #3498db, #2980b9)",
      },
    ],
    "Core CS Subjects": [
      {
        name: "Data Structures",
        level: 88,
        icon: "🔢",
        color: "linear-gradient(45deg, #e74c3c, #c0392b)",
      },
      {
        name: "Algorithms",
        level: 85,
        icon: "🧮",
        color: "linear-gradient(45deg, #f39c12, #d35400)",
      },
      {
        name: "DBMS",
        level: 82,
        icon: "📁",
        color: "linear-gradient(45deg, #3498db, #2980b9)",
      },
      {
        name: "Operating Systems",
        level: 80,
        icon: "💻",
        color: "linear-gradient(45deg, #9b59b6, #8e44ad)",
      },
    ],
    "Tools & Platforms": [
      {
        name: "Git/GitHub",
        level: 85,
        icon: "🔧",
        color: "linear-gradient(45deg, #e67e22, #d35400)",
      },
      {
        name: "REST APIs",
        level: 80,
        icon: "📡",
        color: "linear-gradient(45deg, #3498db, #2980b9)",
      },
      {
        name: "EJS",
        level: 75,
        icon: "📄",
        color: "linear-gradient(45deg, #27ae60, #2ecc71)",
      },
    ],
    "Coding Platforms": [
      {
        name: "LeetCode (500+)",
        level: 90,
        icon: "💡",
        color: "linear-gradient(45deg, #f1c40f, #f39c12)",
      },
      {
        name: "GeeksforGeeks",
        level: 85,
        icon: "🏆",
        color: "linear-gradient(45deg, #27ae60, #2ecc71)",
      },
      {
        name: "CodeChef",
        level: 80,
        icon: "🏅",
        color: "linear-gradient(45deg, #3498db, #2980b9)",
      },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 8, md: 12 },
        pb: 8,
        position: "relative",
        zIndex: 1,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Skills & Technologies
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "text.secondary",
              mb: 6,
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            A comprehensive toolkit for full-stack development and
            problem-solving
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {Object.entries(skillCategories).map(
            ([category, skills], categoryIndex) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={category}
                sx={{
                  display: "flex",
                  minWidth: {
                    xs: "270px",
                    sm: "250px",
                    md: "320px",
                    lg: "350px",
                  },
                  maxWidth: {
                    xs: "100%",
                    sm: "calc(50% - 16px)",
                    md: "calc(33.33% - 16px)",
                    lg: "calc(33.33% - 24px)",
                  },
                  flexGrow: 1,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{ width: "100%" }}
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
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: { xs: 2, md: 3 },
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "primary.main",
                          mb: 3,
                          fontWeight: 600,
                          textAlign: "center",
                          fontSize: { xs: "1.1rem", sm: "1.2rem" },
                        }}
                      >
                        {category}
                      </Typography>

                      <Box sx={{ flexGrow: 1 }}>
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
                                  gap: 1,
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
                                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
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
                                    fontSize: "0.7rem",
                                    height: "24px",
                                  }}
                                />
                              </Box>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                  duration: 1,
                                  delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                }}
                              >
                                <LinearProgress
                                  variant="determinate"
                                  value={skill.level}
                                  sx={{
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
  );
}
