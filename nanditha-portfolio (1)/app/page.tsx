"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BookOpen,
  Briefcase,
  User,
  Home,
  GraduationCap,
  FileText,
  Trophy,
  MessageCircle,
  Dna,
  Microscope,
  Atom,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "publications", "skills", "awards", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-cyan-100 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-60" />
        <div className="absolute top-1/2 left-10 w-1 h-20 bg-gradient-to-b from-cyan-500 to-transparent opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-10 w-1 h-32 bg-gradient-to-b from-green-500 to-transparent opacity-30 animate-pulse" />

        {/* Floating DNA Helixes */}
        <motion.div
          animate={{
            rotate: 360,
            y: [-20, 20, -20],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-1/3 opacity-10"
        >
          <Dna size={60} className="text-cyan-400" />
        </motion.div>

        <motion.div
          animate={{
            rotate: -360,
            y: [20, -20, 20],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute bottom-1/4 right-1/3 opacity-10"
        >
          <Atom size={80} className="text-purple-400" />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Nanditha G S
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "about", label: "About", icon: User },
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "publications", label: "Publications", icon: FileText },
                { id: "skills", label: "Skills", icon: BookOpen },
                { id: "awards", label: "Awards", icon: Trophy },
                { id: "contact", label: "Contact", icon: MessageCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
                    activeSection === id
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-500/25"
                      : "text-cyan-100/70 hover:bg-slate-800/50 hover:text-cyan-300 border-transparent hover:border-cyan-500/30"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </motion.div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-56 h-56 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl relative overflow-hidden">
                <span className="relative z-10">NG</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-cyan-300"
          >
            Nanditha G S
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl mb-4 text-cyan-300 font-light">Biotechnology Innovator & Researcher</p>
            <div className="flex items-center justify-center space-x-4 text-lg text-green-400">
              <Zap className="w-5 h-5" />
              <span>Future of Science</span>
              <Atom className="w-5 h-5" />
              <span>Molecular Innovation</span>
              <Dna className="w-5 h-5" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg mb-12 text-cyan-200/80 max-w-2xl mx-auto leading-relaxed"
          >
            Pioneering the convergence of biology and technology through cutting-edge research, advanced microbiology,
            and revolutionary scientific exploration in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border border-cyan-400/50"
            >
              <Microscope className="w-5 h-5 mr-2 inline" />
              Explore My Research
            </button>
            <button className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent">
              <Zap className="w-5 h-5 mr-2 inline" />
              Connect
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <ChevronDown
              size={32}
              className="text-cyan-400 mx-auto cursor-pointer hover:text-cyan-300 transition-colors"
              onClick={() => scrollToSection("about")}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-blue-900/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300 flex items-center">
                    <Dna className="w-6 h-6 mr-3 text-green-400" />
                    My Scientific Journey
                  </h3>
                  <p className="text-cyan-100/80 leading-relaxed mb-6">
                    As a passionate biotechnology researcher at Madha Engineering College, I am at the forefront of
                    scientific innovation, exploring the fascinating intersection of biological systems and advanced
                    technology. My journey is driven by an insatiable curiosity about molecular mechanisms and their
                    technological applications.
                  </p>
                  <p className="text-cyan-100/80 leading-relaxed">
                    With extensive hands-on experience in microbiology, published research, and a commitment to
                    scientific excellence, I am dedicated to pushing the boundaries of biotechnological advancement
                    while contributing to groundbreaking discoveries that shape our future.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-purple-500/20 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-purple-400 mr-3" size={20} />
                    <span className="text-cyan-300 font-semibold">Location</span>
                  </div>
                  <p className="text-cyan-100/80">Thuraiyur, Trichy District, Tamil Nadu</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 backdrop-blur-xl border border-green-500/20 shadow-xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-green-400 mr-3" size={20} />
                    <span className="text-cyan-300 font-semibold">Current Status</span>
                  </div>
                  <p className="text-cyan-100/80">3rd Year B.Tech Biotechnology Student</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/70 backdrop-blur-xl border border-blue-500/20 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="text-blue-400 mr-3" size={20} />
                    <span className="text-cyan-300 font-semibold">Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Tamil", "English", "French"].map((lang) => (
                      <Badge
                        key={lang}
                        className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/30 to-slate-900/50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/30 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-300 flex items-center">
                    <Atom className="mr-3 text-cyan-400" size={24} />
                    B.Tech - Biotechnology
                  </CardTitle>
                  <CardDescription className="text-lg text-purple-300">
                    Madha Engineering College | 2022 - 2026
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-100/80">
                    Currently pursuing 3rd year with specialization in advanced biotechnology concepts, molecular
                    biology, genetic engineering, and cutting-edge research methodologies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-green-500/30 shadow-xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-300 flex items-center">
                    <Microscope className="mr-3 text-green-400" size={24} />
                    Higher Secondary Certificate (HSC)
                  </CardTitle>
                  <CardDescription className="text-lg text-green-300">
                    Our Lady of Lourdes Girls Higher Secondary School | 2020 - 2021
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-100/80">Biology Mathematics Stream | Percentage: 75%</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-purple-500/30 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-300 flex items-center">
                    <BookOpen className="mr-3 text-purple-400" size={24} />
                    Secondary School Leaving Certificate (SSLC)
                  </CardTitle>
                  <CardDescription className="text-lg text-purple-300">
                    Our Lady of Lourdes Girls Higher Secondary School | 2020
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-100/80">Percentage: 80%</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-teal-900/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-slate-900/70 backdrop-blur-xl border border-green-500/30 shadow-xl shadow-green-500/10">
              <CardHeader>
                <CardTitle className="text-3xl text-cyan-300 flex items-center">
                  <Microscope className="mr-3 text-green-400" size={32} />
                  Microbiology Research Intern
                </CardTitle>
                <CardDescription className="text-xl text-green-300">
                  SASAAM Biological Lab Services | January 29, 2025 - February 14, 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-cyan-100/80 text-lg leading-relaxed">
                  Gained comprehensive hands-on experience in advanced microbiological techniques, laboratory protocols,
                  and cutting-edge research methodologies in a professional biotechnology environment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-300 flex items-center">
                      <Dna className="w-5 h-5 mr-2 text-green-400" />
                      Core Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside text-cyan-100/80 space-y-2">
                      <li>Advanced bacterial isolation and identification</li>
                      <li>Sterile media preparation and optimization</li>
                      <li>Sophisticated staining techniques</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-cyan-300 flex items-center">
                      <Atom className="w-5 h-5 mr-2 text-purple-400" />
                      Specialized Techniques:
                    </h4>
                    <ul className="list-disc list-inside text-cyan-100/80 space-y-2">
                      <li>Antimicrobial sensitivity analysis</li>
                      <li>MIC determination protocols</li>
                      <li>Quality assurance procedures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-900/30 to-indigo-900/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="bg-slate-900/70 backdrop-blur-xl border border-blue-500/30 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-300 flex items-center">
                  <FileText className="mr-3 text-blue-400" size={24} />
                  Research Publication
                </CardTitle>
                <CardDescription className="text-lg text-blue-300">
                  International Journal of Science and Research (IJSR)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 leading-relaxed">
                  "Pharmacological Activity of Synthetic Piperidine Against Bacterial Isolates of Cigarette Smoking Men"
                </h3>
                <p className="text-cyan-100/80 leading-relaxed mb-6">
                  This groundbreaking research investigates the antimicrobial efficacy of synthetic piperidine compounds
                  against pathogenic bacterial isolates from cigarette smoking individuals. The study provides crucial
                  insights into novel therapeutic approaches and contributes significantly to pharmacological and
                  microbiological research.
                </p>
                <div className="flex items-center p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg border border-blue-500/20">
                  <ExternalLink className="text-blue-400 mr-3" size={20} />
                  <span className="text-blue-300 font-medium">
                    Published in International Journal of Science and Research
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: "System Knowledge", level: 90, icon: "💻", color: "cyan" },
              { skill: "Team Work", level: 95, icon: "🤝", color: "green" },
              { skill: "Leadership", level: 85, icon: "👑", color: "purple" },
              { skill: "Adaptability", level: 90, icon: "🔄", color: "blue" },
              { skill: "Efficiency", level: 88, icon: "⚡", color: "yellow" },
              { skill: "Time Management", level: 92, icon: "⏰", color: "pink" },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/20 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">{item.skill}</h3>
                    <div className="w-full bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-3 rounded-full shadow-lg"
                        style={{
                          width: `${item.level}%`,
                          background:
                            item.color === "cyan"
                              ? "linear-gradient(to right, #22d3ee, #0891b2)"
                              : item.color === "green"
                                ? "linear-gradient(to right, #4ade80, #059669)"
                                : item.color === "purple"
                                  ? "linear-gradient(to right, #a855f7, #7c3aed)"
                                  : item.color === "blue"
                                    ? "linear-gradient(to right, #3b82f6, #1d4ed8)"
                                    : item.color === "yellow"
                                      ? "linear-gradient(to right, #eab308, #ca8a04)"
                                      : "linear-gradient(to right, #ec4899, #be185d)",
                        }}
                      />
                    </div>
                    <span className="text-cyan-100/80 font-medium">{item.level}%</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-teal-900/30 to-cyan-900/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Awards & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "National Science Expo Certificate",
                organization: "Gene Genera Association",
                description: "Recognized for conducting national level science expo",
                icon: Trophy,
                color: "yellow",
              },
              {
                title: "Marine Biotechnology Seminar",
                organization: "National Seminar",
                description: "Active participation in advanced marine biotechnology research",
                icon: Microscope,
                color: "blue",
              },
              {
                title: "Biological Data Archiving Webinar",
                organization: "Indian Biological Data Centre",
                description: "Completed online training on biological data management",
                icon: FileText,
                color: "green",
              },
              {
                title: "Food Technology Hackathon",
                organization: "SSIET Department",
                description: "Participated in intercollege national food hackathon",
                icon: Atom,
                color: "purple",
              },
              {
                title: "Digital 101 Journey",
                organization: "IT-ITeS SSC NASSCOM & AICTE",
                description: "Successfully completed digital literacy program",
                icon: Zap,
                color: "cyan",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/70 backdrop-blur-xl border border-teal-500/20 shadow-xl shadow-teal-500/10 hover:shadow-teal-500/20 transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-300 flex items-center">
                      <award.icon className="mr-3 text-teal-400" size={20} />
                      {award.title}
                    </CardTitle>
                    <CardDescription className="text-teal-300 font-medium">{award.organization}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-100/80">{award.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8" />
            <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto">
              Ready to collaborate on revolutionary biotechnology projects or discuss cutting-edge research
              opportunities? Let's connect and shape the future of science together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/30 shadow-xl shadow-cyan-500/10 text-center hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <Mail className="text-cyan-400 mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Email</h3>
                  <p className="text-cyan-100/80">nandithagnanasekar58@gmail.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-green-500/30 shadow-xl shadow-green-500/10 text-center hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <Phone className="text-green-400 mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Phone</h3>
                  <p className="text-cyan-100/80">+91 6369181903</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-slate-900/70 backdrop-blur-xl border border-purple-500/30 shadow-xl shadow-purple-500/10 text-center hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Location</h3>
                  <p className="text-cyan-100/80">Thuraiyur, Trichy District, Tamil Nadu</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white px-12 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border border-cyan-400/50"
              onClick={() => window.open("mailto:nandithagnanasekar58@gmail.com")}
            >
              <Zap className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-500/20 text-cyan-100/60 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">© 2025 Nanditha G S. Engineered with precision for biotechnology innovation.</p>
        </div>
      </footer>
    </div>
  )
}
