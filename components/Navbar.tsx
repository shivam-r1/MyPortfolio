"use client"

import { useState, useEffect } from "react"
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery, useTheme } from "@mui/material"
import { Menu, Home, Person, Code, Work, Email, Star } from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Person },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Projects", path: "/projects", icon: Star },
    { name: "Experience", path: "/experience", icon: Work },
    { name: "Contact", path: "/contact", icon: Email },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled ? "rgba(10, 10, 15, 0.95)" : "rgba(10, 10, 15, 0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 245, 255, 0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                background: "linear-gradient(45deg, #00f5ff, #0066ff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
              onClick={() => handleNavigation("/")}
            >
              Shivam Ruhela
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 1 }}>
              <AnimatePresence>
                {navItems.map((item, index) => {
                  const IconComponent = item.icon
                  const isActive = pathname === item.path

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        color="inherit"
                        onClick={() => handleNavigation(item.path)}
                        startIcon={
                          <motion.div
                            animate={
                              isActive
                                ? {
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.2, 1],
                                  }
                                : {}
                            }
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent />
                          </motion.div>
                        }
                        sx={{
                          mx: 0.5,
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          position: "relative",
                          color: isActive ? "#00f5ff" : "inherit",
                          "&:hover": {
                            background: "rgba(0, 245, 255, 0.1)",
                            color: "#00f5ff",
                          },
                          "&::after": isActive
                            ? {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "80%",
                                height: "2px",
                                background: "linear-gradient(90deg, #00f5ff, #0066ff)",
                                borderRadius: "1px",
                              }
                            : {},
                        }}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </Box>
          ) : (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                color="inherit"
                onClick={onMenuClick}
                sx={{
                  color: "#00f5ff",
                  "&:hover": {
                    background: "rgba(0, 245, 255, 0.1)",
                  },
                  p: { xs: 1, md: 1.5 },
                }}
              >
                <motion.div animate={{ rotate: [0, 180, 0] }} transition={{ duration: 0.3 }}>
                  <Menu />
                </motion.div>
              </IconButton>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  )
}
