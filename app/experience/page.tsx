"use client";
import {motion} from "framer-motion";
export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Experience</h1>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 
    min-h-[300px] flex flex-col justify-between
    border border-gray-700 hover:border-green-500/50 
    hover:scale-105 transition duration-300 cursor-pointer mb-10"
>
  <h1 className="text-3xl font-bold mb-1">IT Help Desk</h1>
  <div className="flex justify-between items-center mb-1">
    <p className="italic">OneEdge Solutions</p>
    <p className="italic">Jan 2023 - Jan 2024</p>
  </div>

  <ul className="list-disc list-inside text-gray-400 leading-relaxed">
    <li className="italic">Provided Tier 1 technical support for end users by diagnosing and resolving hardware, software amd network issues across Windows systems</li>
    <li className="italic">Ensuring timely resolution of support tickets and high user satisfaction</li>
    <li className="italic">Troubleshooting common issues including user login problems, password resets and basic network connectivity (Wi-Fi, DNS, IP configuration)</li>
  </ul>
</motion.div>
    </main>
  );
}
