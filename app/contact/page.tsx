"use client"

import type React from "react"

import { Container, Typography, Box, Grid, Card, CardContent, TextField, Button, IconButton } from "@mui/material"
import { Email, Phone, LocationOn, GitHub, LinkedIn, Code, Send } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
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
  ]

  const socialLinks = [
    { icon: GitHub, href: "#", color: "#ffffff", label: "GitHub" },
    { icon: LinkedIn, href: "#", color: "#0077b5", label: "LinkedIn" },
    { icon: Code, href: "#", color: "#00f5ff", label: "LeetCode" },
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
            Let's Build Something Amazing Together
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto" }}>
            Available for full-time opportunities starting 2026. Let's discuss how I can contribute to your team.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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

                  <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
                    {contactInfo.map((contact, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          whileHover={{ x: 10 }}
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
                              <Typography variant="body1" sx={{ color: "text.primary", fontWeight: 600 }}>
                                {contact.title}
                              </Typography>
                              <Typography variant="body2" sx={{ color: contact.color }}>
                                {contact.value}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ mt: 4, pt: 4, borderTop: "1px solid rgba(0, 245, 255, 0.2)" }}>
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                      Usually responds within 24 hours
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      {socialLinks.map((social, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
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

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3,
                    background: "rgba(0, 255, 0, 0.1)",
                    border: "1px solid rgba(0, 255, 0, 0.3)",
                    borderRadius: 3,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 255, 0, 0.3)",
                        "0 0 30px rgba(0, 255, 0, 0.6)",
                        "0 0 20px rgba(0, 255, 0, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "inherit",
                    }}
                  />
                  <Typography variant="body1" sx={{ color: "#00ff00", fontWeight: 600, position: "relative" }}>
                    🟢 Available for full-time opportunities starting 2026
                  </Typography>
                </Box>
              </motion.div>
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
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
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
                        </motion.div>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                        >
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
                        </motion.div>
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
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
                        </motion.div>
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                        >
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
                        </motion.div>
                      </Grid>
                      <Grid item xs={12}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.0 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            endIcon={<Send />}
                            sx={{
                              background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                              py: 2,
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              "&:hover": {
                                background: "linear-gradient(45deg, #00d4ff, #0055ff)",
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 25px rgba(0, 245, 255, 0.3)",
                              },
                              transition: "all 0.3s ease",
                            }}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
