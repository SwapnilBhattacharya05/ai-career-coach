"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const floating = {
  float: {
    y: [-10, 10],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        ease: "easeInOut",
      },
    },
  },
};

const pulse = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

export default function NotFound() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grid background with subtle animation */}
      <motion.div
        className="grid-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated cursor gradient effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        animate={{
          background: `radial-gradient(300px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(174, 209, 239, 0.15) 0%, rgba(0, 0, 0, 0) 80%)`,
        }}
        transition={{ type: "keyframes", damping: 30 }}
      />

      <motion.div
        className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Animated 404 text */}
        <motion.div className="mb-8 flex items-center justify-center space-x-4">
          <motion.h1
            className="gradient-title text-8xl font-black tracking-tighter sm:text-[12rem]"
            variants={item}
          >
            4
          </motion.h1>

          <motion.div
            className="relative h-32 w-32 sm:h-40 sm:w-40"
            variants={floating}
            animate="float"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#AED1EF] via-[#F2DFC1] to-[#F0B9EF] opacity-80 blur-xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                rotate: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                },
              }}
            />
            <motion.div
              className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#AED1EF] via-[#F2DFC1] to-[#F0B9EF]"
              variants={pulse}
              animate="pulse"
            >
              <span className="text-4xl font-black text-gray-900 sm:text-6xl">
                0
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            className="gradient-title text-8xl font-black tracking-tighter sm:text-[12rem]"
            variants={item}
          >
            4
          </motion.h1>
        </motion.div>

        {/* Main message with staggered animation */}
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          variants={item}
        >
          Lost in the digital void
        </motion.h2>

        <motion.p
          className="mb-8 max-w-md text-lg text-muted-foreground"
          variants={item}
        >
          The page you're looking for doesn't exist or has been moved. Don't
          worry, we'll help you find your way back.
        </motion.p>

        {/* Animated button */}
        <motion.div variants={item}>
          <Link href="/">
            <Button
              size="lg"
              className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <motion.span
                className="relative z-10 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Return to Safety
              </motion.span>
              <motion.span
                className="absolute inset-0 -z-0 rounded-md bg-gradient-to-r from-[#AED1EF] via-[#F2DFC1] to-[#F0B9EF] opacity-0"
                animate={{
                  opacity: [0, 0.2, 0],
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="absolute inset-0 -z-0 rounded-md bg-gradient-to-r from-[#AED1EF] via-[#F2DFC1] to-[#F0B9EF] opacity-0"
                animate={{
                  opacity: [0, 0.2, 0],
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </Button>
          </Link>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#AED1EF] opacity-20 blur-3xl"
          animate={{
            x: [-20, 20],
            y: [0, -40],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F0B9EF] opacity-20 blur-3xl"
          animate={{
            x: [20, -20],
            y: [-20, 20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
}
