"use client";
import {motion} from "framer-motion";
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 
    min-h-[300px] flex flex-col justify-between
    border border-gray-700 hover:border-green-500/50 
    hover:scale-105 transition duration-300 cursor-pointer mb-10"
>
  <h1 className="text-3xl font-bold mb-4">Smart Facility Risk Monitor</h1>
  <ul className="list-disc list-inside text-gray-400 leading-relaxed">
    <li className="italic">Developed a simulation of a real time sensor monitoring system using Python, simulating readings of 3 IoT sensors(soil.temperature, distance) across 1400+ JSON data points</li>
    <li className="italic">Visualized sensor data dynamically with Mathplotlib, producing interactive graphs updating every 2 seconds to monitor environmental trends</li>
    <li className="italic">Applied JSON parsing and Python scripting to process multiple concurrent sensor files, simulating real-time IoT device behaviour</li>
  </ul>
</motion.div>


     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 
    min-h-[300px] flex flex-col justify-between
    border border-gray-700 hover:border-green-500/50 
    hover:scale-105 transition duration-300 cursor-pointer mb-10"

>
  <h1 className="text-3xl font-bold mb-4">IT Support Automation Script</h1>
  <ul className="list-disc list-inside text-gray-400 ">
    <li className="italic">Developed beginner-friendly automation script to perform common Tier 1 IT support checks, including disk space, system uptime, installed software and network adapter status</li>
    <li className="italic">Used script to quickly collect system information and export reports, helping reduce manual troubleshooting time during intial ticket triage</li>
    <li className="italic">Designed the project with a help desk use case in mind , demonstrating practical scripting skills,troubleshooting methodology and documentation for non-technical users</li>
  </ul>
</motion.div>
    </main>

    
  );
}

