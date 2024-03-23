"use client";

import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="theme" defaultTheme="system" enableSystem>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="m-0 p-0"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </Provider>
  );
}
