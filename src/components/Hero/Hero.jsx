import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { TypeAnimation } from 'react-type-animation'
import './Hero.css'

export default function Hero() {
  const particlesInit = async (engine) => {
    await loadFull(engine)
  }

  const neonBeam = useRef(null)

  const handleHover = (e) => {
    const x = e.clientX / window.innerWidth * 100
    const y = e.clientY / window.innerHeight * 100
    neonBeam.current.style.background = `radial-gradient(circle at ${x}% ${y}%, 
      rgba(255, 45, 117, 0.3), transparent 70%)`
  }

  return (
    <section id="hero" className="hero-section" onMouseMove={handleHover}>
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#ff2d75", "#00f9ff", "#7b2dff"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1 }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.1 }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#7b2dff",
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" }
            }
          }
        }}
      />

      {/* Hover Light Beam */}
      <div className="neon-beam" ref={neonBeam} hidden/>

      {/* 3D Floating Tech Orb */}
      <div className="tech-orb" hidden>
        <div className="orb-core" />
        <div className="orb-ring orb-ring-1" />
        <div className="orb-ring orb-ring-2" />
        <div className="orb-ring orb-ring-3" />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Glitch Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glitch-main"
          data-text="VEDARC TECHNOLOGIES"
        >
          VEDARC TECHNOLOGIES
        </motion.h1>

        {/* Typing Subheading */}
        <TypeAnimation
          sequence={[
            'Web Development',
            2000,
            'AI & Machine Learning',
            2000,
            'Full Stack Solutions',
            2000,
            'Sustainable Tech Solutions',
            2000,
          ]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
          className="type-subtitle"
        />

        {/* CTA Buttons */}
        <div className="cta-group">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--neon-magenta)" }}
            whileTap={{ scale: 0.95 }}
            className="cta-primary"
          >
            Join Us
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--neon-cyan)" }}
            whileTap={{ scale: 0.95 }}
            className="cta-secondary"
          >
            View Projects
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="chevron" />
        <div className="chevron" />
        <div className="chevron" />
      </motion.div>
    </section>
  )
}