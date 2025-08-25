// import { motion } from "framer-motion";

// const skills = [
//   {
//     title: "Frontend Development",
//     description:
//       "Building responsive and dynamic user interfaces using React, Next.js, TypeScript, Redux, and modern styling frameworks like Tailwind CSS and Material UI.",
//     tools: ["React", "Next.js", "TypeScript", "Redux", "Tailwind", "MUI"],
//     color: "from-blue-500 to-indigo-600",
//   },
//   {
//     title: "Backend Development",
//     description:
//       "Designing scalable REST APIs and microservices with Node.js, Express, and NestJS. Implementing authentication, security, and real-time features with WebSockets.",
//     tools: ["Node.js", "Express", "NestJS", "JWT", "OAuth2"],
//     color: "from-green-500 to-emerald-600",
//   },
//   {
//     title: "Databases",
//     description:
//       "Expertise in both SQL and NoSQL databases. Skilled in schema design, optimization, and query tuning for MySQL, MongoDB, and PostgreSQL.",
//     tools: ["MySQL", "MongoDB", "PostgreSQL"],
//     color: "from-yellow-400 to-orange-500",
//   },
//   {
//     title: "Cloud & DevOps",
//     description:
//       "Leveraging AWS services (EC2, S3, SNS, RDS) for scalable applications. Skilled in Docker and CI/CD pipelines with GitHub Actions.",
//     tools: ["AWS", "Docker", "GitHub Actions"],
//     color: "from-purple-500 to-pink-500",
//   },
// ];

// export default function Skills() {
//   return (
//     <div className="px-6 py-16 bg-gray-50">
//       <h2 className="text-4xl font-bold text-center text-gray-800">
//         Skills & Expertise
//       </h2>
//       <div className="mt-12 space-y-10 max-w-5xl mx-auto">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             className={`p-8 rounded-2xl shadow-xl bg-gradient-to-r ${skill.color} text-white`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.3, duration: 0.7 }}
//           >
//             <h3 className="text-2xl font-semibold">{skill.title}</h3>
//             <p className="mt-4 text-lg">{skill.description}</p>
//             <div className="mt-4 flex flex-wrap gap-3">
//               {skill.tools.map((tool, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-white text-gray-800 px-4 py-1 rounded-full text-sm font-medium shadow"
//                 >
//                   {tool}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Responsive, accessible UIs with React, Next.js, TypeScript. State management via Redux/Zustand, styling with Tailwind/MUI.",
    tools: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "Tailwind", "MUI"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Backend Development",
    description:
      "Secure REST APIs and services with Node.js, Express, NestJS. Auth (JWT, OAuth2, Cognito), real-time using Socket.io.",
    tools: ["Node.js", "Express", "NestJS", "JWT", "OAuth2", "AWS Cognito", "Socket.io"],
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Databases",
    description:
      "Schema design, indexing, perf tuning across SQL & NoSQL: MySQL, MongoDB, PostgreSQL. Messaging with Kafka/RabbitMQ.",
    tools: ["MySQL", "MongoDB", "PostgreSQL", "Sequelize", "Kafka", "RabbitMQ", "Redis"],
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS for infra (EC2, S3, RDS, SNS/SQS), Dockerized apps, CI/CD via GitHub Actions. Observability & SOC best practices.",
    tools: ["AWS", "Docker", "GitHub Actions", "S3", "EC2", "RDS", "SNS", "SQS"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI & Integrations",
    description:
      "AI APIs, chatbots, Google APIs, Razorpay payments, Swagger docs, Postman testing, clean SDLC in Agile.",
    tools: ["AI APIs", "Chatbots", "Google APIs", "Razorpay", "Swagger", "Postman", "Agile/SCRUM"],
    color: "from-cyan-500 to-sky-500",
  },
];

export default function Skills() {
  return (
    <div className="px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Skills & Expertise
      </h2>

      <div className="mt-12 space-y-8 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            className={`p-8 rounded-2xl shadow-xl bg-gradient-to-r ${skill.color} text-white`}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold">{skill.title}</h3>
            <p className="mt-3 text-sm md:text-base">{skill.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-white/95 text-gray-900 px-3 py-1 rounded-full text-xs font-medium shadow"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        
      </div>
          
    </div>
 
  );
}
