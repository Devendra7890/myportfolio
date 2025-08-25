// import ProjectCard from "../components/ProjectCard";

// const projects = [
//   {
//     title: "ThinkLoop | EdTech Platform",
//     description: "Multi-role dashboards with Razorpay integration.",
//     tech: ["React", "Node.js", "MySQL", "AWS"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "Real Estate Management System",
//     description: "Property listing & inquiry with role-based dashboards.",
//     tech: ["React", "Node.js", "MySQL", "AWS"],
//     github: "#",
//     live: "#",
//   },
//   {
//     title: "SustaNetSystem | SDG Tracker",
//     description: "Dashboards for monitoring SDGs with NGO food donation.",
//     tech: ["React", "Node.js", "MySQL", "Firebase"],
//     github: "#",
//     live: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="px-6 py-10">
//       <h2 className="text-3xl font-bold text-center">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//         {projects.map((p, i) => (
//           <ProjectCard key={i} project={p} />
//         ))}
//       </div>
//     </div>
//   );
// }


// import ProjectCard from "../components/ProjectCard";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "ThinkLoop | EdTech Platform",
//     description: "Multi-role dashboards with Razorpay integration.",
//     tech: ["React", "Node.js", "MySQL", "AWS"],
//     github: "#",
//     live: "#",
//     image: "https://source.unsplash.com/600x400/?education,code",
//   },
//   {
//     title: "Real Estate Management System",
//     description: "Property listing & inquiry with role-based dashboards.",
//     tech: ["React", "Node.js", "MySQL", "AWS"],
//     github: "#",
//     live: "#",
//     image: "https://source.unsplash.com/600x400/?real-estate,building",
//   },
//   {
//     title: "SustaNetSystem | SDG Tracker",
//     description: "Dashboards for monitoring SDGs with NGO food donation.",
//     tech: ["React", "Node.js", "MySQL", "Firebase"],
//     github: "#",
//     live: "#",
//     image: "https://source.unsplash.com/600x400/?sustainability,earth",
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="px-6 py-12 bg-gray-50">
//       <motion.h2
//         className="text-4xl font-bold text-center text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Projects
//       </motion.h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.3 }}
//           >
//             <ProjectCard project={p} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

import dev1 from "../assets/asset/edutech.jpg";
import dev2 from "../assets/asset/realestate.jpg";
import dev3 from "../assets/asset/sde.jpg";

const projects = [
  {
    title: "ThinkLoop | EdTech Platform",
    description:
      "Multi-role dashboards (admin/instructor/student), course purchase via Razorpay, enrollments & progress tracking.",
    tech: ["React","Node.js","Express","MySQL","AWS S3","Firebase","Socket.io","Postman"],
    image: dev1,
  },
  {
    title: "Real Estate Management System",
    description:
      "Property listing & real-time inquiry, role-based dashboards, Razorpay payments. Scalable assets on AWS S3.",
    tech: ["React","Node.js","Express","MySQL","AWS S3","Razorpay"],
    image: dev2,
  },
  {
    title: "SustaNetSystem | SDG Tracker",
    description:
      "Interactive SDG dashboards with real-time data; feature to connect NGOs with donors for leftover food.",
    tech: ["React","Node.js","Express","MySQL","AWS S3","Firebase"],
    image: dev3,
  },
];

export default function Projects() {
  return (
    <div className="px-6 py-14">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
