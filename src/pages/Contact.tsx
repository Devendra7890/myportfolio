// // import { useState } from "react";

// // export default function Contact() {
// //   const [form, setForm] = useState({ name: "", email: "", message: "" });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     alert("Message Sent! (Later: Save to DB via backend)");
// //   };

// //   return (
// //     <div className="px-6 py-10 max-w-lg mx-auto">
// //       <h2 className="text-3xl font-bold text-center">Contact Me</h2>
// //       <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Your Name"
// //           value={form.name}
// //           onChange={handleChange}
// //           className="w-full border px-4 py-2 rounded-lg"
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Your Email"
// //           value={form.email}
// //           onChange={handleChange}
// //           className="w-full border px-4 py-2 rounded-lg"
// //         />
// //         <textarea
// //           name="message"
// //           placeholder="Your Message"
// //           value={form.message}
// //           onChange={handleChange}
// //           className="w-full border px-4 py-2 rounded-lg"
// //           rows={4}
// //         />
// //         <button
// //           type="submit"
// //           className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// //         >
// //           Send
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Message Sent! (Later: Save to DB via backend)");
//   };

//   return (
//     <motion.div
//       className="px-6 py-12 max-w-lg mx-auto"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//     >
//       <h2 className="text-4xl font-bold text-center text-gray-800">Contact Me</h2>
//       <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
//           rows={4}
//         />
//         <button
//           type="submit"
//           className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Send
//         </button>
//       </form>
//     </motion.div>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! (Later: Save to DB via backend)");
  };

  return (
    <motion.div
      className="px-6 py-14 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Contact Me</h2>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
          rows={4}
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}
