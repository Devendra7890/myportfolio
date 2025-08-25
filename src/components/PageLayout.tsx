// src/components/PageLayout.tsx
import { motion } from "framer-motion";

export default function PageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-5xl mx-auto py-14 px-6">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="mt-6 text-gray-700 leading-relaxed text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
