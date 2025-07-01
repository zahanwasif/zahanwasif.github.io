"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const fullName = "Zahan Wasif";
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let current = 0;
    let direction: "forward" | "backward" = "forward";

    function typeLoop() {
      if (direction === "forward") {
        if (current < fullName.length) {
          setDisplayedName(fullName.slice(0, current + 1));
          current++;
          timeout = setTimeout(typeLoop, 120);
        } else {
          direction = "backward";
          timeout = setTimeout(typeLoop, 1200);
        }
      } else {
        if (current > 0) {
          setDisplayedName(fullName.slice(0, current - 1));
          current--;
          timeout = setTimeout(typeLoop, 60);
        } else {
          direction = "forward";
          timeout = setTimeout(typeLoop, 600); // Pause before typing again
        }
      }
    }
    typeLoop();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <>
      <section className='min-h-screen flex items-center justify-center py-10 sm:py-16 md:py-24 lg:py-32 w-full'>
        <div className='w-full max-w-6xl mx-auto px-4 sm:px-8 py-20 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-16 sm:gap-20 md:gap-24'>
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 sm:mb-0 gap-8 sm:gap-10'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
              I'm{" "}
              <AnimatePresence mode='wait'>
                <motion.span
                  key={displayedName}
                  initial={{}}
                  animate={{}}
                  exit={{}}
                  transition={{ duration: 0.2 }}
                  className='text-blue-600 dark:text-blue-400'>
                  {displayedName}
                </motion.span>
              </AnimatePresence>
              <span className='inline-block w-2'>{showCursor ? "|" : " "}</span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
              A passionate full-stack developer specializing in building modern
              web applications with Next.js, React, and MongoDB.
            </p>
            <div className='flex gap-4'>
              <a
                href='#contact'
                className='bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity'>
                Get in Touch
              </a>
              <a
                href='#projects'
                className='border border-black dark:border-white px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors'>
                View Projects
              </a>
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex items-center justify-center mb-10 sm:mb-0'>
            <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1.3, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.35, rotate: 6 }}
                className='relative w-full h-full rounded-2xl shadow-xl border-4 border-blue-400 bg-white dark:bg-gray-900 flex items-center justify-center group'>
                <Image
                  src='/avatar.jpg'
                  alt='Zahan Wasif profile'
                  fill
                  className='object-cover rounded-[12px]'
                  priority
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1.5, rotate: -20 }}
                  transition={{ type: "spring", duration: 0.8, bounce: 0.1 }}
                  className='absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1 pointer-events-none w-[60px] h-auto lg:w-[120px]'>
                  <Image
                    src='/hero.png'
                    alt='Message box'
                    width={120}
                    height={80}
                    className='drop-shadow-xl'
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className='flex justify-center mt-8'>
        <div className='w-[500px] max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center'>
          <AnimatedCodeWindow />
          <TerminalOutput />
        </div>
      </div>
    </>
  );
}

// Move the code window and terminal output into a new component
function AnimatedCodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      className='bg-gradient-to-br from-gray-900/90 to-gray-700/90 dark:from-gray-800/90 dark:to-gray-900/90 rounded-2xl shadow-2xl border border-gray-700/60 w-[500px] h-[360px] p-4 flex flex-col gap-2 relative overflow-hidden ring-1 ring-blue-400/10 mb-4'>
      <div className='flex items-center gap-2 mb-2'>
        <span className='w-3 h-3 rounded-full bg-red-400/80'></span>
        <span className='w-3 h-3 rounded-full bg-yellow-300/80'></span>
        <span className='w-3 h-3 rounded-full bg-green-400/80'></span>
        <span className='ml-auto text-xs text-gray-400 font-mono tracking-tight select-none'>
          main.tsx
        </span>
      </div>
      <AnimatedCodeLines />
    </motion.div>
  );
}

// AnimatedCodeLines component
function getSynthwaveColor(word: string): string {
  // Simple mapping for demo; you can expand this for more keywords
  if (["function", "return", "const"].includes(word))
    return "text-[#f92aad] font-bold";
  if (["greet", "user", "name", "role"].includes(word)) return "text-[#ffe66d]";
  if (["console", "log"].includes(word)) return "text-[#ff8f40] font-bold";
  if (
    ["'Zahan'", "'Full", "Stack", "Dev'", "`Hello,"].includes(word) ||
    word.startsWith("`Hello")
  )
    return "text-[#39ff14]";
  if (["${", "}"].includes(word)) return "text-[#ae81ff]";
  if (["(", ")", "{", "}", ",", ";", ".", ":", "=", "[", "]"].includes(word))
    return "text-[#ae81ff]";
  if (["main.tsx"].includes(word)) return "text-[#36f9f6]";
  return "text-[#36f9f6]";
}

function AnimatedCodeLines() {
  const codeLinesRaw = [
    "function greet(name) { ",
    "  return `Hello, ${name}!`;",
    "}",
    "\n",
    "const user = { name: 'Zahan', role: 'Full Stack Dev' };",
    "\n",
    "console.log(greet(user.name));",
  ];
  type Token = { text: string; className: string };
  const codeLines: Token[][] = codeLinesRaw.map((line) =>
    line
      .split(/(\s+|\{|\}|\(|\)|\[|\]|,|;|\.|:|=|`|\$\{|\}|!)/g)
      .filter(Boolean)
      .map((word) => ({
        text: word,
        className: getSynthwaveColor(word.trim()),
      }))
  );
  const [typedLines, setTypedLines] = useState<Token[][]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    if (fadeOut) return;
    if (currentLine >= codeLines.length) {
      setFadeOut(true);
      fadeTimeout.current = setTimeout(() => {
        setTypedLines([]);
        setCurrentLine(0);
        setFadeOut(false);
      }, 900);
      return;
    }
    let char = 0;
    function typeLine() {
      setTypedLines((prev) => [
        ...prev.slice(0, currentLine),
        codeLines[currentLine].slice(0, char + 1),
      ]);
      char++;
      if (char < codeLines[currentLine].length) {
        typingTimeout.current = setTimeout(typeLine, 40);
      } else {
        typingTimeout.current = setTimeout(() => {
          setCharIndex(0);
          setCurrentLine((prev) => prev + 1);
        }, 600);
      }
    }
    typeLine();
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
    // eslint-disable-next-line
  }, [currentLine, fadeOut, charIndex]);

  return (
    <motion.div
      className='flex-1 flex flex-col justify-start gap-1 min-h-[120px] break-words whitespace-pre-line'
      animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {typedLines.map((lineTokens, i) => (
        <div
          key={i}
          className={`font-mono text-[clamp(0.7rem,2vw,1rem)] break-words whitespace-pre-line drop-shadow-sm ${
            i === currentLine ? "" : "opacity-70"
          }`}>
          {lineTokens.map((token, j) => (
            <span key={j} className={token.className}>
              {token.text}
            </span>
          ))}
          {i === currentLine && showCursor && !fadeOut ? (
            <span className='text-green-200'>|</span>
          ) : null}
        </div>
      ))}
    </motion.div>
  );
}

// TerminalOutput component
function TerminalOutput() {
  const command = "node main.tsx";
  const output = "Hello, Zahan!";
  const [typedCmd, setTypedCmd] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  useEffect(() => {
    let char = 0;
    function typeCmd() {
      setTypedCmd(command.slice(0, char + 1));
      char++;
      if (char < command.length) {
        setTimeout(typeCmd, 60);
      } else {
        setTimeout(() => setShowOutput(true), 600);
      }
    }
    typeCmd();
    // eslint-disable-next-line
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className='w-full mt-2 bg-black/90 border border-gray-800 rounded-lg px-4 py-3 font-mono text-sm text-green-200 shadow-inner min-h-[56px]'>
      <span className='text-blue-400'>$</span> {typedCmd}
      {showOutput && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-white mt-2'>
          {output}
        </motion.div>
      )}
    </motion.div>
  );
}

