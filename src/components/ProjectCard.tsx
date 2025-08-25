// interface Props {
//   project: {
//     title: string;
//     description: string;
//     tech: string[];
//     github: string;
//     live: string;
//   };
// }

// export default function ProjectCard({ project }: Props) {
//   return (
//     <div className="border rounded-xl p-5 shadow hover:shadow-lg transition">
//       <h3 className="text-xl font-semibold">{project.title}</h3>
//       <p className="text-gray-600 mt-2">{project.description}</p>
//       <p className="text-sm text-gray-500 mt-1">
//         Tech: {project.tech.join(", ")}
//       </p>
//       <div className="mt-3 flex space-x-4">
//         <a href={project.github} className="text-blue-600">GitHub</a>
//         <a href={project.live} className="text-green-600">Live</a>
//       </div>
//     </div>
//   );
// }



type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
