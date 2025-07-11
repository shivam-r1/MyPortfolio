"use client"

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, Divider, IconButton } from "@mui/material"
import { Home, Person, Code, Work, Email, Star, Close } from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
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

  const handleNavigation = (path: string) => {
    router.push(path)
    onClose()
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: 280, sm: 320 },
          background: "rgba(10, 10, 15, 0.95)",
          backdropFilter: "blur(20px)",
          border: "none",
          borderRight: "1px solid rgba(0, 245, 255, 0.2)",
        },
      }}
    >
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        exit={{ x: -280 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(45deg, #00f5ff, #0066ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Shivam Ruhela
          </Typography>
          <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
            <IconButton onClick={onClose} sx={{ color: "#00f5ff" }}>
              <Close />
            </IconButton>
          </motion.div>
        </Box>

        <Divider sx={{ borderColor: "rgba(0, 245, 255, 0.2)" }} />

        <List sx={{ pt: 2 }}>
          <AnimatePresence>
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              const isActive = pathname === item.path

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <ListItem
                    button
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      mx: 1,
                      mb: 1,
                      borderRadius: 2,
                      background: isActive ? "rgba(0, 245, 255, 0.1)" : "transparent",
                      border: isActive ? "1px solid rgba(0, 245, 255, 0.3)" : "1px solid transparent",
                      "&:hover": {
                        background: "rgba(0, 245, 255, 0.1)",
                        transform: "translateX(8px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ListItemIcon>
                      <motion.div
                        animate={
                          isActive
                            ? {
                                rotate: [0, 15, -15, 0],
                                scale: [1, 1.2, 1],
                              }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent sx={{ color: isActive ? "#00f5ff" : "#b0b0b0" }} />
                      </motion.div>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        "& .MuiListItemText-primary": {
                          color: isActive ? "#00f5ff" : "#ffffff",
                          fontWeight: isActive ? 600 : 400,
                        },
                      }}
                    />
                  </ListItem>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </List>

        <Box sx={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 245, 255, 0.3)",
                "0 0 30px rgba(0, 245, 255, 0.6)",
                "0 0 20px rgba(0, 245, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Box
              sx={{
                p: 2,
                background: "rgba(0, 245, 255, 0.1)",
                border: "1px solid rgba(0, 245, 255, 0.3)",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="body2" sx={{ color: "#00f5ff", fontWeight: 600 }}>
                Full Stack Developer
              </Typography>
              <Typography variant="caption" sx={{ color: "#b0b0b0" }}>
                Available for opportunities
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Drawer>
  )
}
