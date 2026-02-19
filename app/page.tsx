"use client";
import {motion} from "framer-motion";
import GalleryCard from "@/components/GalleryCard";
import {FaGithub,FaLinkedin,FaLaptopCode,FaCertificate,FaBriefcase} from "react-icons/fa";
import {HiOutlineMail, HiOutlineDownload} from "react-icons/hi";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <section className="py-20 px-10">

  {/* Subtle Glow Background */}
  <div className="absolute w-[500px] h-[500px] bg-green-500 rounded-full blur-[120px] opacity-10"></div>
  
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
    className="text-5xl font-bold mb-2 text-white drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] "
  >
    David | Protecting the Digital World
  </motion.h1>
  
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3, delay: 0.3 }}
    className="text-gray-400 text-lg"
  >
    <a
    href="/IT Help Deskn (1).pdf"
    download
    className="flex items-center space-x-2 text-lg text-white  hover:text-green-200 hover: drop shadow-lg transition-all mb-2"
  >
    <HiOutlineDownload className="text-med" />
    <span >Download Resume</span>
  </a>
  </motion.div>

  <motion.p
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3, delay: 0.3 }}
    className="text-gray-400 text-lg"
  >
    Cloud & Network Security Professional
  </motion.p>

</section>


<section className="py-20 px-6 flex justify-center">
  <div className="max-w-6xl w-full">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <GalleryCard
  title="Projects"
  description="Hands-on labs, Capture the Flag exercises, and real-world security projects."
  Icon={FaLaptopCode}
/>

<GalleryCard
  title="Certifications"
  description="Google Cybersecurity Certificate, Cisco Intro to Cybersecurity, and more."
  Icon={FaCertificate}
/>

<GalleryCard
  title="Experience"
  description="IT Helpdesk roles, cybersecurity projects, and hands-on lab work."
  Icon={FaBriefcase}
/>
    
    </div>

  </div>
</section>



<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

  <motion.div
  className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-10 border border-gray-700 w-screen h-screen flex flex-col items-center justify-center text-center"
>
  <h2 className="text-3xl font-semibold mb-6">About Me</h2>
  <p className="text-gray-400 text-left">
    I am a cybersecurity student specializing in <span className="text-white italic">cloud security, network defense, and threat intelligence.</span> I am passionate about protecting individuals and organizations from cybercrimes and enjoy building hands-on labs and real-world security projects to sharpen my skills.</p>
  <p className="text-gray-400 ">Beyond cybersecurity, I am an avid sports enthusiast and love exploring the internet, learning about the latest technology trends, and experimenting with new tools and platforms. I thrive in problem-solving challenges and am constantly seeking ways to grow my knowledge and contribute to the digital security community. </p>
  <p className="text-gray-400 mb-10">I am eager to apply my skills in practical scenarios and collaborate on projects that make a real impact, while also sharing insights with others and staying up-to-date with emerging threats and innovative solutions.</p>

  <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

  <div className="flex space-x-6 mt-6">
    <a href="mailto:davidekene42@gmail.com" target="_blank" rel="noopener noreferrer">
      <HiOutlineMail className="text-2xl text-gray-400 hover:text-white transition-colors" />
    </a>
    <a href="https://www.linkedin.com/in/cyberdav/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition-colors" />
    </a>
    <a href="https://github.com/Cyberdave1" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-2xl text-gray-400 hover:text-white transition-colors" />
    </a>
  </div>
</motion.div>

</div>
    </main>
  );
}
