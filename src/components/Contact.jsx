import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { SectionWrapper } from "../hoc";
import toast from 'react-hot-toast';

const Contact = () => {
    const toastId = toast.loading('Sending email...');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const serviceId = "service_76gfqgt";
        const templateId = "template_hev4i5p";
        const userId = "alfCXzLnZj8TcAxqx";
        const emailData = {
            user_name: formData.name,
            user_email: formData.email,
            user_message: formData.message,
        };
    
        try{
            toast.success("Email Send Successfully...", { id: toastId });
            console.log("Sending EmailJS Data:", emailData);
            await emailjs.send(serviceId, templateId, emailData, userId);
            setIsSubmitted(true);
        } 
        catch(err){
            toast.error(`Failed to send mail...`, { id: toastId });
            console.error("EmailJS Error:", err);
            setError("Failed to send the message. Please try again later.");
        }
    };

    return (
        <motion.div className="contactpage pulse max-w-3xl mx-auto p-6 rounded-2xl mt-10 duration-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-6">
                Get in Touch
            </h2>
            {isSubmitted?(
                <motion.div className="text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-semibold text-green-600">
                        Thank you for reaching out!
                    </h3>
                    <p className="text-gray-100">We will get back to you soon.</p>
                </motion.div>
            ):(
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <motion.div className="flex flex-col" whileTap={{ scale: 0.98 }}>
                        <label htmlFor="name" className="text-gray-400 font-medium mb-2">
                            Name
                        </label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                    </motion.div>
                    <motion.div className="flex flex-col" whileTap={{ scale: 0.98 }}>
                        <label htmlFor="email" className="text-gray-400 font-medium mb-2">
                            Email
                        </label>
                        <input type="email" name="email" id="email" value={formData.email}onChange={handleChange} className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                    </motion.div>
                    <motion.div className="flex flex-col" whileTap={{ scale: 0.98 }}>
                        <label htmlFor="message" className="text-gray-400 font-medium mb-2">
                            Message
                        </label>
                        <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows="4" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea>
                    </motion.div>
                    {error&&(
                        <p className="text-red-600 text-sm text-center">{error}</p>
                    )}
                    <motion.button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" whileTap={{ scale: 0.95 }}>
                        Send
                    </motion.button>
                </form>
            )}
        </motion.div>
    );
};

export default SectionWrapper(Contact, "contact");
