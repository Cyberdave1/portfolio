"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  Icon?: React.ComponentType<{className?: string}>;
};

export default function GalleryCard({ title, description, Icon }: Props) {
  return (
    <Link href={`/${title.toLowerCase()}`}>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 
    min-h-[300px] flex flex-col justify-between
    border border-gray-700 hover:border-green-500/50 
    hover:scale-105 transition duration-300 cursor-pointer">{Icon && <Icon className="text-4xl text-green-400"/>}
  
    <h3 className="text-2xl font-semibold mb-4 text-white">
      {title}
    </h3>
    <p className="text-gray-400">
      {description}
    </p>
  </motion.div>
</Link>

  );
}
