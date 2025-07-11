"use client"

import { Container, Typography, Box, Grid, Card, CardContent, LinearProgress } from "@mui/material"
import { School, Work, Code, EmojiEvents } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function About() {
  const skills = [
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 90 },
    { name: "Learning Agility", level: 98 },
    { name: "Communication", level: 88 },
  ]

  const facts = [
    { icon: School, title: "Delhi Technological University", subtitle: "B.Tech Computer Science (2022-2026)" },
    { icon: Work, title: "6 Months Internship", subtitle: "Aideo - Full Stack Developer" },
    { icon: Code, title: "500+ Problems Solved", subtitle: "LeetCode & Competitive Programming" },
    { icon: EmojiEvents, title: "Semi-Govt Project", subtitle: "Real-world development experience" },
  ]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
        px: { xs: 2, sm: 0 },
        position: "relative",
        zIndex: 1,
      }}
    >
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
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            About Me
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}>
            A passionate Computer Science student with hands-on industry experience
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
                  I'm currently pursuing B.Tech in Computer Science at Delhi Technological University (2022-2026), where
                  I've built a strong foundation in programming and software development.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
                  During my 6-month internship at Aideo as a Full Stack Developer, I gained valuable industry experience
                  working on a semi-government website project, where I honed my skills in React, Node.js, and MongoDB.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: "text.primary" }}>
                  I'm passionate about problem-solving and have solved 500+ problems on LeetCode, demonstrating my
                  commitment to continuous learning and algorithmic thinking.
                </Typography>
              </Box>

              <Box>
                {skills.map((skill, index) => (
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

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  background: "rgba(26, 26, 46, 0.6)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 245, 255, 0.2)",
                  borderRadius: 4,
                  overflow: "visible",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -1,
                    borderRadius: "inherit",
                    background: "linear-gradient(45deg, #00f5ff, #0066ff, #ff006e)",
                    zIndex: -1,
                    opacity: 0.5,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "primary.main",
                      mb: 3,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Quick Facts
                  </Typography>

                  {facts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 3,
                          p: 2,
                          borderRadius: 2,
                          background: "rgba(0, 245, 255, 0.05)",
                          border: "1px solid rgba(0, 245, 255, 0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(0, 245, 255, 0.1)",
                            border: "1px solid rgba(0, 245, 255, 0.3)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "50%",
                            background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          <fact.icon sx={{ color: "white" }} />
                        </Box>
                        <Box>
                          <Typography variant="body1" sx={{ color: "text.primary", fontWeight: 600 }}>
                            {fact.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {fact.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
