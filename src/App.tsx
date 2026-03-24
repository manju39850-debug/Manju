import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Cpu, 
  Globe, 
  Terminal, 
  ExternalLink, 
  ChevronRight, 
  Moon, 
  Sun,
  GraduationCap,
  Briefcase,
  Send,
  Menu,
  X
} from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Components ---

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-primary"
        >
          Manju<span className="text-secondary">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 section-padding overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
            Available for Opportunities
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I'm <span className="text-primary">Manju</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg">
            Aspiring Software Developer & AI Enthusiast based in India. 
            Passionate about building creative solutions and learning new technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://picsum.photos/seed/manju-profile/800/800" 
              alt="Manju Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-primary rounded-tr-3xl z-0" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-secondary rounded-bl-3xl z-0" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/coding-passion/1200/900" 
                alt="Coding Passion" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 md:right-8 glass p-8 rounded-2xl shadow-2xl max-w-md"
            >
              <h3 className="text-xl font-display font-bold mb-3 text-primary">My Passion</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                I am a passionate college student interested in software development and artificial intelligence. 
                I love learning new technologies, improving my skills, and building creative projects. 
                My goal is to become a successful developer and work on innovative solutions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Based in India, I'm currently pursuing my education and diving deep into the world of tech. 
                My journey started with a curiosity about how things work, which led me to programming. 
                Now, I'm focused on mastering web technologies and exploring the vast potential of AI.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Terminal size={24} />
                </div>
                <h4 className="font-bold mb-2">Coding</h4>
                <p className="text-xs text-gray-500">Loves solving complex problems with clean code.</p>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
                  <Cpu size={24} />
                </div>
                <h4 className="font-bold mb-2">AI Enthusiast</h4>
                <p className="text-xs text-gray-500">Exploring neural networks and generative models.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm font-medium">
              <div className="flex items-center text-primary">
                <MapPin size={16} className="mr-2" />
                India
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center text-primary">
                <Mail size={16} className="mr-2" />
                manju39850@gmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: 'Programming',
      icon: <Code2 size={24} />,
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe size={24} />,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'React', level: 70 },
      ]
    },
    {
      title: 'Tools & Tech',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 glass rounded-3xl"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {group.icon}
                </div>
                <h3 className="text-xl font-display font-bold">{group.title}</h3>
              </div>
              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and Tailwind CSS to showcase my work and skills.',
      tech: ['React', 'Tailwind', 'Motion'],
      image: 'https://picsum.photos/seed/portfolio-project/800/600'
    },
    {
      title: 'Student Web App',
      description: 'A management system for students to track their grades, attendance, and assignments efficiently.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: 'https://picsum.photos/seed/student-app/800/600'
    },
    {
      title: 'Simple AI Project',
      description: 'An exploration into basic machine learning models using Python to solve classification problems.',
      tech: ['Python', 'NumPy', 'Pandas'],
      image: 'https://picsum.photos/seed/ai-project/800/600'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white rounded-full text-primary shadow-xl">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 border-l-2 border-primary/30 space-y-12"
          >
            <div className="relative">
              <div className="absolute -left-[53px] top-0 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">2023 - Present</span>
                <h3 className="text-2xl font-display font-bold mb-2">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Your College Name Here</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Focusing on core computer science subjects including Data Structures, Algorithms, 
                  Database Management Systems, and Web Technologies. Actively participating in 
                  coding competitions and technical workshops.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[53px] top-0 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-secondary/30">
                <Briefcase size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Ongoing</span>
                <h3 className="text-2xl font-display font-bold mb-2">Self-Taught AI & Web Development</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Online Platforms (Coursera, Udemy, YouTube)</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Deepening knowledge in modern JavaScript frameworks, Python for AI, and 
                  exploring various machine learning libraries. Building real-world projects 
                  to apply theoretical concepts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Let's talk about your project</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-6 p-6 glass rounded-2xl hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Call Me</p>
                  <p className="font-bold">9817214078</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 glass rounded-2xl hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email Me</p>
                  <p className="font-bold">manju39850@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 glass rounded-2xl hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="font-bold">India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 glass rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-2xl font-display font-bold text-primary">
          Manju<span className="text-secondary">.</span>
        </div>
        
        <p className="text-sm text-gray-500">
          © 2026 Manju. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="font-sans selection:bg-primary/30">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to top button (optional) */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 glass rounded-full shadow-xl z-40 hover:text-primary transition-colors"
      >
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>
    </div>
  );
}
