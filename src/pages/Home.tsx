// export default function Home() {
//   return (
//     <div className="flex flex-col items-center text-center py-16 px-6">
//       <h2 className="text-4xl font-bold">Hi, I'm Devendra 👋</h2>
//       <p className="mt-4 max-w-2xl text-lg text-gray-600">
//         MERN Full-Stack Developer with 2.4 years of experience delivering
//         cloud-integrated, AI-enabled apps. Skilled in React, NestJS, MongoDB, MySQL,
//         and AWS. Passionate about building scalable web apps with clean UI.
//       </p>
//       <a
//         href="/resume"
//         className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//       >
//         View Resume
//       </a>
//     </div>
//   );
// }


// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center text-center py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
//       <motion.h2
//         className="text-5xl font-extrabold text-gray-800"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Hi, I'm Devendra 👋
//       </motion.h2>

//       <motion.p
//         className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         MERN Full-Stack Developer with 2.4 years of experience delivering
//         cloud-integrated, AI-enabled apps. Skilled in React, NestJS, MongoDB,
//         MySQL, and AWS. Passionate about building scalable web apps with clean
//         UI.
//       </motion.p>

//       <motion.a
//         href="/resume"
//         className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 1, type: "spring", stiffness: 120 }}
//       >
//         View Resume
//       </motion.a>
//     </div>
//   );
// }


// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Hero */}
//       <section className="flex flex-col items-center text-center py-20 px-6">
//         <motion.h2
//           className="text-5xl font-extrabold text-gray-800"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Hi, I'm Devendra 👋
//         </motion.h2>
//         <motion.p
//           className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Full-Stack Developer with 2.4 years of experience building scalable,
//           AI-enabled web applications. I love crafting modern UIs, secure APIs,
//           and integrating cloud services to deliver real-world business value.
//         </motion.p>
//         <motion.a
//           href="/resume"
//           className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5, type: "spring" }}
//         >
//           View Resume
//         </motion.a>
//       </section>

//       {/* About Me */}
//       <section className="max-w-4xl mx-auto text-center py-16 px-6">
//         <h3 className="text-3xl font-bold text-gray-800">About Me</h3>
//         <p className="mt-6 text-gray-600 leading-relaxed">
//           I'm a passionate developer who thrives at the intersection of{" "}
//           <span className="font-semibold">frontend elegance</span> and{" "}
//           <span className="font-semibold">backend robustness</span>. My journey
//           started with MERN stack, and now I specialize in{" "}
//           <span className="font-semibold">React + TypeScript</span> for UI and{" "}
//           <span className="font-semibold">NestJS + MySQL/MongoDB</span> for
//           backend services. I've worked on EdTech, Real Estate, and SDG-related
//           platforms — solving problems that impact users at scale.
//         </p>
//       </section>

//       {/* Skills */}
//       <section className="bg-white py-16 px-6">
//         <h3 className="text-3xl font-bold text-center text-gray-800">
//           Skills & Tools
//         </h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center">
//           <div className="p-4 border rounded-lg shadow-sm hover:shadow-md">
//             <h4 className="font-semibold">Frontend</h4>
//             <p className="text-gray-500">React, Next.js, Tailwind, Redux</p>
//           </div>
//           <div className="p-4 border rounded-lg shadow-sm hover:shadow-md">
//             <h4 className="font-semibold">Backend</h4>
//             <p className="text-gray-500">Node.js, NestJS, Express</p>
//           </div>
//           <div className="p-4 border rounded-lg shadow-sm hover:shadow-md">
//             <h4 className="font-semibold">Database</h4>
//             <p className="text-gray-500">MySQL, MongoDB, PostgreSQL</p>
//           </div>
//           <div className="p-4 border rounded-lg shadow-sm hover:shadow-md">
//             <h4 className="font-semibold">Cloud & DevOps</h4>
//             <p className="text-gray-500">AWS, Docker, GitHub Actions</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          Hi, I’m{" "}
          <motion.span
            className="text-blue-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Devendra 👋
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          MERN Full-Stack Developer (2.4+ yrs) building{" "}
          <span className="font-semibold">cloud-integrated</span>,{" "}
          <span className="font-semibold">AI-enabled apps</span>. Skilled in React +
          TypeScript, NestJS, MongoDB/MySQL, AWS, CI/CD, and secure APIs.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.7, type: "spring", stiffness: 120 },
            },
          }}
        >
          <motion.a
            href="/resume"
            className="px-6 py-3 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
          <motion.a
            href="/projects"
            className="px-6 py-3 rounded-full bg-white text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Projects
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-14 px-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="mt-6 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I build products where{" "}
          <span className="font-semibold text-blue-600">
            frontend elegance
          </span>{" "}
          meets{" "}
          <span className="font-semibold text-blue-600">
            backend robustness
          </span>
          . I’ve shipped{" "}
          <span className="font-semibold">EdTech, Real Estate</span>, and{" "}
          <span className="font-semibold">SDG dashboards</span>—integrating
          Razorpay, AI APIs, and AWS. My focus:{" "}
          <span className="italic">performance, security</span>, and{" "}
          <span className="italic">developer-friendly DX</span>.
        </motion.p>
      </section>
    </div>
  );
}
