"use client"

import { Container, Typography, Box, Card, CardContent, Chip } from "@mui/material"
import { Work, School } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function Experience() {
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
        "Implemented responsive design and optimized application performance",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Git"],
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
        "Leadership roles in technical societies and student organizations",
      ],
      technologies: ["C++", "Python", "Java", "Data Structures", "Algorithms", "DBMS", "OS"],
      achievements: [
        "Maintained excellent academic record",
        "500+ LeetCode problems solved",
        "Active participant in coding competitions",
        "Member of technical societies",
      ],
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
            Professional Journey
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}>
            My experience in the industry and key achievements
          </Typography>
        </motion.div>

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
                    <experience.icon sx={{ color: "white", fontSize: { xs: "1rem", md: "1.2rem" } }} />
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
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", mb: 2 }}>
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
                          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontSize: "1.1rem" }}>
                            Key Responsibilities:
                          </Typography>
                          {experience.description.map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                            >
                              <Typography
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
                            </motion.div>
                          ))}
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontSize: "1.1rem" }}>
                            Technologies Used:
                          </Typography>
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                            {experience.technologies.map((tech) => (
                              <motion.div key={tech} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Chip
                                  label={tech}
                                  size="small"
                                  sx={{
                                    background: `${experience.color}15`,
                                    color: experience.color,
                                    border: `1px solid ${experience.color}30`,
                                    "&:hover": {
                                      background: `${experience.color}25`,
                                    },
                                  }}
                                />
                              </motion.div>
                            ))}
                          </Box>
                        </Box>

                        <Box>
                          <Typography variant="h6" sx={{ color: "text.primary", mb: 2, fontSize: "1.1rem" }}>
                            Key Achievements:
                          </Typography>
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                            >
                              <Typography
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
                            </motion.div>
                          ))}
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
  )
}
