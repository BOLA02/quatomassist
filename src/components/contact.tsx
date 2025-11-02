import { AnimatedTitle } from "./animated-title";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className=" w-full bg-[#090d14] text-white flex flex-col items-center px-6 md:px-16 py-20"
    >
      {/* Heading */}
      <motion.div
        className="w-full text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-cyan-400 uppercase tracking-wider text-sm mb-4 font-semibold">
          Get In Touch
        </p>
        <AnimatedTitle containerClass="text-4xl md:text-6xl font-bold text-white">
          {"CONTACT US"}
        </AnimatedTitle>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Have questions or want to join our community? We'd love to hear from you.
          Reach out and let's start a conversation.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl">
        {/* Contact Info Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-white font-semibold text-lg mb-2">Email Us</h4>
            <p className="text-white-400 text-sm">info@quantumassist.com</p>
            <p className="text-white-400 text-sm">support@quantumassist.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-white font-semibold text-lg mb-2">Call Us</h4>
            <p className="text-white-400 text-sm">+234 (0) 123 456 7890</p>
            <p className="text-white-400 text-sm">Mon - Fri, 9am - 6pm WAT</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-white font-semibold text-lg mb-2">Visit Us</h4>
            <p className="text-white-400 text-sm">Kaduna, Kaduna State Nigeria.</p>
            <p className="text-white-400 text-sm">Nigeria</p>
          </div>
        </motion.div>

      
        
      </div>
    </section>
  );
};