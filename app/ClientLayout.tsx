"use client";

import type React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { useState } from "react";
import "./globals.css";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00f5ff",
      dark: "#0066ff",
    },
    secondary: {
      main: "#ff006e",
    },
    background: {
      default: "#0a0a0f",
      paper: "rgba(26, 26, 46, 0.8)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(26, 26, 46, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 245, 255, 0.2)",
          borderRadius: "16px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ position: "relative" }}>
        <BackgroundAnimation />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(10,10,15,0.7) 0%, rgba(26,26,46,0.5) 100%)",
            minHeight: "100vh",
          }}
        >
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <Footer></Footer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
