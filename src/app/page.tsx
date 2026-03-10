'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            SN
          </motion.h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I&apos;m <span className="text-primary">Swastik Naikada</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-8"
          >
            Full Stack Web Developer | Building Modern Web Solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/swastiknaikada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition"
            >
              <FaGithub size={20} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/swastik-naikada-53407a295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="mailto:swastiknaikada@gmail.com"
              className="flex items-center gap-2 bg-primary hover:bg-blue-600 px-6 py-3 rounded-lg transition"
            >
              <FaEnvelope size={20} /> Contact
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed text-center"
          >
            I&apos;m a passionate Full Stack Web Developer with expertise in building scalable, 
            user-centric web applications. I specialize in modern JavaScript frameworks, 
            cloud deployment, and API integration. My goal is to deliver clean, efficient 
            code that solves real-world problems and creates meaningful digital experiences.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={<FaCode size={32} />}
              title="Frontend"
              skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']}
              delay={0.2}
            />
            <SkillCard
              icon={<FaServer size={32} />}
              title="Backend"
              skills={['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL']}
              delay={0.4}
            />
            <SkillCard
              icon={<FaDatabase size={32} />}
              title="Database"
              skills={['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Prisma']}
              delay={0.6}
            />
            <SkillCard
              icon={<FaTools size={32} />}
              title="Tools"
              skills={['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD']}
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-Commerce Platform"
              description="Full-stack e-commerce solution with admin dashboard, payment integration, and inventory management."
              tech={['React', 'Node.js', 'MongoDB', 'Stripe']}
              delay={0.2}
            />
            <ProjectCard
              title="Real-Time Chat App"
              description="Slack-like messaging platform with WebSocket connections, channels, and file sharing."
              tech={['Next.js', 'Socket.io', 'PostgreSQL', 'Redis']}
              delay={0.4}
            />
            <ProjectCard
              title="AI Resume Builder"
              description="Intelligent resume builder with AI-driven content suggestions and ATS scoring."
              tech={['React', 'Python', 'OpenAI API', 'PostgreSQL']}
              delay={0.6}
            />
            <ProjectCard
              title="Task Management SaaS"
              description="Project management tool with Kanban boards, sprint planning, and team collaboration."
              tech={['React', 'Node.js', 'MongoDB', 'Socket.io']}
              delay={0.8}
            />
            <ProjectCard
              title="Social Media Analytics"
              description="Unified dashboard aggregating data from Instagram, Twitter, and LinkedIn APIs."
              tech={['Next.js', 'Python', 'REST APIs', 'Chart.js']}
              delay={1.0}
            />
            <ProjectCard
              title="Healthcare Booking System"
              description="Appointment scheduling platform with SMS reminders and calendar integration."
              tech={['React', 'Node.js', 'MySQL', 'Twilio']}
              delay={1.2}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 mb-8"
          >
            Available for freelance projects. Let&apos;s build something amazing together!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="mailto:swastiknaikada@gmail.com"
              className="flex items-center gap-2 bg-primary hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              <FaEnvelope size={20} /> Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/swastik-naikada-53407a295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              <FaLinkedin size={20} /> Connect
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-400">
        <p>© 2025 Swastik Naikada. All rights reserved.</p>
      </footer>
    </main>
  )
}

function SkillCard({ icon, title, skills, delay }: { icon: React.ReactNode, title: string, skills: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary transition"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="text-slate-300">{skill}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function ProjectCard({ title, description, tech, delay }: { title: string, description: string, tech: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary transition"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
