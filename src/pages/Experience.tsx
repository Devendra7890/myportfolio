import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="px-6 py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800">Experience</h2>
      <div className="mt-10 max-w-3xl mx-auto space-y-8">
        <motion.div
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold">MERN-Stack Developer</h3>
          <p className="text-gray-500">Micro Technologies | Apr 2023 – Present</p>
          <ul className="list-disc list-inside mt-3 text-gray-600">
            <li>Developed and deployed 5+ MERN stack applications with CI/CD.</li>
            <li>Designed secure REST APIs with JWT, OAuth2, AWS Cognito.</li>
            <li>Integrated Razorpay & AI APIs to enhance functionality.</li>
            <li>Optimized MySQL & MongoDB performance with indexing & schema design.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
