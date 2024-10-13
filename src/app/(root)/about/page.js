"use client"

import { Coffee, Code, Lightbulb, Laptop, Book, Headphones } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-center mb-8">
          A Day in the Life of a Programmer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            {...fadeInUp}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <Coffee className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Morning Fuel</h2>
            <p className="text-gray-300">
              Start the day with a steaming cup of coffee, the essential fuel
              for coding adventures.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <Code className="w-12 h-12 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Coding Sessions</h2>
            <p className="text-gray-300">
              Dive into intense coding sessions, solving complex problems and
              building amazing software.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <Lightbulb className="w-12 h-12 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Eureka Moments</h2>
            <p className="text-gray-300">
              Experience those brilliant "aha!" moments when solutions suddenly
              become clear.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <Laptop className="w-12 h-12 text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Remote Work</h2>
            <p className="text-gray-300">
              Enjoy the flexibility of working from anywhere, be it a cozy home
              office or a bustling café.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <Book className="w-12 h-12 text-red-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Continuous Learning</h2>
            <p className="text-gray-300">
              Stay updated with the latest technologies through constant
              learning and exploration.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <Headphones className="w-12 h-12 text-pink-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Coding Soundtrack</h2>
            <p className="text-gray-300">
              Code to the rhythm of your favorite tunes, enhancing focus and
              productivity.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-xl text-gray-300">
            Being a programmer is more than just writing code. It's a lifestyle
            of continuous learning, problem-solving, and creating innovative
            solutions that shape the digital world.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
