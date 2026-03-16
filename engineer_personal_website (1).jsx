import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MapPin,
  GraduationCap,
  Cpu,
  Microchip,
  BookOpen,
  Linkedin,
  Award,
  Briefcase,
  FileText,
  ChevronRight,
  FlaskConical,
  Wrench,
  ScrollText,
} from "lucide-react";
import { motion } from "framer-motion";

export default function EngineerWebsite() {
  const profile = {
    name: "Atif Afroz",
    title: "VLSI & Embedded Systems Engineer",
    subtitle:
      "Building intelligent hardware systems at the intersection of FPGA design, embedded electronics, IoT, and high-performance digital engineering.",
    photo: "/mnt/data/1769029468365.jpg",
    location: "Guwahati, India",
    email: "atifafroz@ieee.org",
    linkedin: "https://www.linkedin.com/in/atif-afroz/",
    resume: "#",
  };

  const skills = [
    "VLSI Design",
    "FPGA Prototyping",
    "FPGA Development",
    "Embedded Systems",
    "Verilog / HDL",
    "MATLAB / Simulink",
    "Stateflow",
    "Arduino",
    "Python",
    "C++",
    "Internet of Things",
    "IoT System Design",
    "Home Automation Systems",
    "Smart Power Management Systems",
    "Digital Design",
    "Electronic Instrumentation",
    "Basys 3 FPGA",
    "Vivado",
    "Cadence",
    "KiCad",
    "EasyEDA",
    "Keil uVision",
    "PSoC Creator",
    "Lumerical FDTD",
    "PCB Design",
    "Signal Processing",
    "Sensor Interfacing",
    "Hardware Prototyping",
  ];

  const highlights = [
    "IEEE student member",
    "IAENG student member",
    "Research and industry-oriented hardware profile",
    "Hands-on experience in FPGA, embedded systems, IoT, PCB design, and signal processing",
    "Academic publication with practical implementation experience",
  ];

  const projects = [
    {
      title: "Compact and Time-Efficient All-Optical Two-Qubit Quantum Controlled-NOT Gate",
      desc: "Project focused on compact and time-efficient implementation of an all-optical two-qubit quantum Controlled-NOT gate, emphasizing faster operation, reduced structural complexity, and scalable photonic logic realization for quantum information processing.",
      tags: ["Quantum Computing", "All-Optical Logic", "Two-Qubit CNOT", "Photonic Systems"],
    },
    {
      title: "Solar Powered Smart Home Automation and Smart Health Monitoring",
      desc: "Developed a solar-powered IoT-based system integrating smart home automation, security, MPPT-based energy management, and real-time health monitoring.",
      tags: ["IoT", "Automation", "Smart Systems"],
    },
    {
      title: "IoT-Based Intelligent Garbage Monitoring System",
      desc: "Designed an intelligent monitoring solution for waste management using IoT connectivity and sensing.",
      tags: ["IoT", "Smart City", "Monitoring"],
    },
    {
      title: "Smart Maximum Power Point Tracking (MPPT) System",
      desc: "Built a smart MPPT-oriented power management system focused on efficient energy utilization in embedded and renewable applications.",
      tags: ["Power Electronics", "MPPT", "Embedded"],
    },
    {
      title: "Modified Electronic Load Controller for Micro-Hydro Power Plant",
      desc: "Worked on applied electrical and embedded implementation concepts for modified load control in micro-hydro power systems.",
      tags: ["Power Systems", "Control", "Applied Research"],
    },
    {
      title: "LMS Adaptive Noise Canceller on FPGA",
      desc: "Developed HDL-compatible and fixed-point LMS adaptive noise cancellation workflows for FPGA deployment, including Verilog-oriented implementation, 40-tap adaptive filtering work, and Basys 3 targeting.",
      tags: ["FPGA", "Verilog", "Signal Processing"],
    },
    {
      title: "Dual-Channel and Single-Channel FIR Filter Engine on FPGA",
      desc: "Implemented FIR filter engine architectures for FPGA-based digital signal processing with support for single-channel and dual-channel operation.",
      tags: ["FPGA", "DSP", "Digital Design"],
    },
    {
      title: "Dual Port SRAM using Basys 3 FPGA",
      desc: "Implemented a dual-port SRAM architecture in Verilog with demonstration support using slow clock generation, LEDs, and 7-segment display visualization.",
      tags: ["RTL Design", "Memory", "Basys 3"],
    },
    {
      title: "State Machine Controller for Real-Time Motor Control",
      desc: "Designed an HDL/MATLAB Stateflow-based state machine controller for real-time motor control with PWM generation and planned Arduino panel integration.",
      tags: ["Stateflow", "Motor Control", "PWM"],
    },
    {
      title: "Adaptive Noise Cancellation using AI in MATLAB/Simulink",
      desc: "Explored adaptive noise cancellation using AI-assisted modeling in MATLAB Simulink and HDL Coder with a view toward FPGA implementation.",
      tags: ["MATLAB", "AI", "HDL Coder"],
    },
    {
      title: "Digital Touch Project",
      desc: "Worked on tactile sensing, embedded systems, PCB designing, signal processing, and sensor data acquisition during internship at IIT Mandi.",
      tags: ["Tactile Sensing", "PCB", "Embedded Systems"],
    },
    {
      title: "Sensor-Based Smart Water Dispenser",
      desc: "Designed an automated dispenser concept with sensor-based activation, solenoid valve control, display support, and PCB-oriented architecture for multi-outlet dispensing.",
      tags: ["Embedded Systems", "Sensors", "PCB"],
    },
    {
      title: "Automatic Monitoring of Garden",
      desc: "Created an embedded monitoring solution for gardening applications involving circuit design, analysis, and automatic monitoring using sensors.",
      tags: ["IoT", "Monitoring", "Embedded"],
    },
    {
      title: "Home Security System",
      desc: "Designed a smart home security solution using sensors and embedded control for monitoring and protection applications.",
      tags: ["Security", "IoT", "Embedded"],
    },
    {
      title: "Automatic Hand Sanitizer Dispenser",
      desc: "Developed a touch-free automatic sanitizer dispenser using sensor-based actuation and embedded control.",
      tags: ["Automation", "Sensors", "Embedded"],
    },
    {
      title: "Sensor-Based Temperature and Humidity Monitoring System",
      desc: "Built an environmental monitoring system for temperature and humidity data acquisition using sensors and embedded interfaces.",
      tags: ["Sensors", "Monitoring", "IoT"],
    },
    {
      title: "Underground Cable Fault Detection System",
      desc: "Worked on a system for detecting underground cable faults using electrical sensing and monitoring techniques.",
      tags: ["Electrical", "Detection", "Instrumentation"],
    },
    {
      title: "FM Signal Generation using Op-Amp in PSoC 5LP",
      desc: "Worked on FM signal generation using operational amplifier design flow in PSoC Creator for the CY8CKIT-050 PSoC 5LP platform.",
      tags: ["PSoC", "Analog Design", "Signal Generation"],
    },
  ];

  const experience = [
    {
      role: "IoT Engineer Intern",
      org: "AKVO Atmospheric Water Systems Pvt. Ltd.",
      desc: "Working on industry-oriented engineering tasks involving practical IoT system development and implementation-focused hardware solutions.",
    },
    {
      role: "IoT Intern",
      org: "Aquasense Private Limited",
      desc: "Worked in the Research & Development department on ongoing projects, gaining hands-on industry experience in IoT systems and practical engineering workflows.",
    },
    {
      role: "Research Intern",
      org: "IIT Mandi",
      desc: "Worked on the Digital Touch project with contributions in PCB designing, signal processing, and embedded systems for sensor data acquisition.",
    },
    {
      role: "Research Intern",
      org: "IIIT Guwahati",
      desc: "Worked on Automatic Monitoring of Garden, contributing to circuit design, analysis, and development of embedded monitoring solutions.",
    },
    {
      role: "Research Intern",
      org: "IIT Patna",
      desc: "Worked on Solar Powered Smart Home Automation and Smart Health Monitoring using IoT, with strong hardware implementation work.",
    },
    {
      role: "Research Intern",
      org: "NIT Arunachal Pradesh",
      desc: "Worked on Modified Electronic Load Controller for micro-hydro power plant applications, gaining experience in practical electrical systems and controller-oriented implementation.",
    },
  ];

  const education = [
    {
      degree: "M.Tech in VLSI and Embedded System",
      org: "IIIT Guwahati",
      note: "Current",
    },
    {
      degree: "B.Tech in Electrical Engineering",
      org: "Gurukula Kangri (Deemed to be University), Haridwar",
      note: "Completed",
    },
  ];

  const publications = [
    {
      title: "Solar Powered Smart Home Automation and Smart Health Monitoring with IoT",
      venue: "Intelligent Systems, Lecture Notes in Networks and Systems, vol. 728, Springer, 2024",
      authors: "Afroz, A., Khamari, S.S., Behera, R.K.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-white/20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(168,85,247,0.16),transparent_25%),linear-gradient(to_bottom,rgba(15,23,42,0.95),rgba(2,6,23,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-5 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm text-slate-200 hover:bg-white/10">
                Engineer • Researcher • Hardware Systems Enthusiast
              </Badge>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">{profile.name}</h1>
              <p className="mt-4 text-xl font-medium text-slate-200 md:text-2xl">{profile.title}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{profile.subtitle}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="h-12 rounded-2xl px-6 text-base" asChild>
                  <a href="#projects" className="flex items-center gap-2">
                    Explore Projects <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-2xl border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <a href={profile.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="space-y-6">
                <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                  <div className="p-6 pb-0">
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">Profile Photo</p>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                      <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </Card>

                <Card className="rounded-[2rem] border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                  <CardContent className="space-y-6 p-8">
                    <div>
                      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-400">Profile Snapshot</p>
                      <div className="space-y-4 text-sm text-slate-200">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="mt-0.5 h-4 w-4" />
                          <span>M.Tech in VLSI and Embedded System, IIIT Guwahati</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Cpu className="mt-0.5 h-4 w-4" />
                          <span>Focus on FPGA, HDL design, Photonic Integrated Circuit, IoT system design, embedded systems, and intelligent electronics</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Award className="mt-0.5 h-4 w-4" />
                          <span>Student Member, IEEE & IAENG</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-4 w-4" />
                          <span>{profile.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-400">Connect</p>
                      <div className="grid gap-3">
                        <a
                          href={`mailto:${profile.email}`}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10"
                        >
                          <Mail className="h-4 w-4" /> {profile.email}
                        </a>
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10"
                        >
                          <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:py-20">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[2rem] border-0 bg-white text-slate-900 shadow-xl">
            <CardContent className="p-8 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-2xl font-bold md:text-3xl">About</h2>
              </div>
              <p className="leading-8 text-slate-700">
                I am an engineer with academic and implementation experience in embedded systems, IoT system design, digital hardware design, FPGA development, sensor-driven systems, and applied electronics. My work focuses on translating system ideas into practical hardware-oriented solutions through modeling, prototyping, and implementation.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                I am especially interested in RTL design, FPGA-based signal processing, embedded and IoT product development, smart sensing applications, and research that connects theory with deployable engineering systems.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-white/10 bg-slate-900 shadow-xl">
            <CardContent className="p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3 text-white">
                <Microchip className="h-5 w-5" />
                <h2 className="text-2xl font-bold md:text-3xl">Technical Skills</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experience.map((item) => (
              <Card key={`${item.role}-${item.org}`} className="rounded-[2rem] border-white/10 bg-white/5 shadow-lg">
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-2 font-medium text-slate-300">{item.org}</p>
                  <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-[2rem] border-0 bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-3 text-slate-900">
                <ScrollText className="h-5 w-5" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.degree}>
                    <h3 className="font-semibold text-slate-900">{item.degree}</h3>
                    <p className="text-slate-600">{item.org}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-0 bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-3 text-slate-900">
                <FlaskConical className="h-5 w-5" />
                <h2 className="text-2xl font-bold">Publication</h2>
              </div>
              {publications.map((pub) => (
                <div key={pub.title} className="space-y-2">
                  <h3 className="leading-7 font-semibold text-slate-900">{pub.title}</h3>
                  <p className="text-slate-600">{pub.authors}</p>
                  <p className="leading-7 text-slate-500">{pub.venue}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="projects">
          <div className="mb-8 flex items-center gap-3">
            <Wrench className="h-5 w-5" />
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-slate-400">Portfolio</p>
              <h2 className="text-3xl font-bold md:text-4xl">Selected Projects</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-[2rem] border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold leading-7 text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-[2rem] border-0 bg-gradient-to-br from-white to-slate-100 shadow-xl">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Academic Interests</h2>
              <p className="leading-8 text-slate-700">
                Interested in research opportunities in VLSI systems, FPGA architecture, Photonic Integrated Circuits, IoT system design, embedded hardware, digital design, signal processing implementation, cyber-physical systems, and intelligent sensing platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-0 bg-gradient-to-br from-white to-slate-100 shadow-xl">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Industry Interests</h2>
              <p className="leading-8 text-slate-700">
                Open to roles in RTL design, FPGA development, Photonic Integrated Circuit design, IoT product engineering, embedded product engineering, hardware prototyping, verification support, control-oriented electronics, and intelligent hardware system design.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <Card className="rounded-[2rem] border-0 bg-white shadow-2xl">
            <CardContent className="p-8 md:p-10">
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Contact</h2>
              <p className="max-w-3xl leading-8 text-slate-700">
                I am available for research collaboration, academic discussions, internships, and engineering opportunities in VLSI, FPGA, embedded systems, IoT systems, and hardware product development.
              </p>
              <div className="mt-8 grid gap-4 text-sm md:grid-cols-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-slate-700 transition hover:bg-slate-50"
                >
                  <strong>Email:</strong> {profile.email}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-slate-700 transition hover:bg-slate-50"
                >
                  <strong>LinkedIn:</strong> Open Profile
                </a>
                <div className="rounded-2xl border border-slate-200 px-5 py-4 text-slate-700">
                  <strong>Location:</strong> {profile.location}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
