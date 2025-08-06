import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '' }) {
  return (
    <motion.div 
      className={`rounded-2xl p-8 backdrop-blur-lg bg-gray-800/30 border border-gray-700/50 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}