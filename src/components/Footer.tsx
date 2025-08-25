// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white text-center py-4">
//       <p>© {new Date().getFullYear()} Devendra Malviya | Full-Stack Developer</p>
//     </footer>
//   );
// }


// export default function Footer() {
//   return (
//     <footer className="mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
//       <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
//         <p className="text-sm">
//           © {new Date().getFullYear()} Devendra Malviya — Full-Stack Developer
//         </p>
//         <div className="flex items-center gap-4 text-sm">
//           <a href="mailto:malviyad789@gmail.com" className="hover:underline">Email</a>
//           <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
//           <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Devendra Malviya — Full-Stack Developer
        </p>
        <div className="flex items-center gap-6 text-xl">
          <a
            href="mailto:malviyad789@gmail.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Devendra7890"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-100 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/devendra-malviya-253819284"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
