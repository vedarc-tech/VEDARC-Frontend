import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home/Home'
// import Internships from './pages/Internships'
import Navbar from './components/Navbar/Navbar'
import './index.css' // Using only index.css for global styles

// Page transition animation
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Fixed Navbar with dark tech styling */}
      <Navbar />
      
      {/* Animated page transitions */}
      <AnimatePresence mode='wait'>
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="page-container"
              >
                <Home />
              </motion.div>
            } 
          />
          
          <Route 
            path="/internships" 
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                className="page-container"
              >
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}