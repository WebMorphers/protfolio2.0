import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import toast  from 'react-hot-toast';
import { motion } from 'framer-motion';
import Footer  from '../Footer/Footer';
import { useInView } from 'react-intersection-observer';



const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    emailjs.sendForm('service_cun2hzn', 'template_v472mse', form, '7niKQoYNaU-tgFelD')
      .then((result) => {
        toast.success('Mail sent successfully !')
        console.log(result.text); 
        setEmail('');
        setName('');
        setMessage('');
        
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
     
    <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={iconVariants}
          transition={{ duration: 0.5 }}
         >
 
     

    <section className="bg-white dark:bg-[#7081decb]"> 
       <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Want to start a project ?</h2>
        <p className="mb-8 lg:mb-16 font-bold text-center text-gray-500 dark:text-green-900 sm:text-xl   ">Let’s Talk</p>
        <form onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@webmorphers.com"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="your name"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
    className="group relative inline-block focus:outline-none focus:ring"
    type="submit"
    value="Send"
  >
    <span
      className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
    ></span>

    <span
      className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
    >
      Send message
    </span>
  </button>
         </form>
      </div>

      
    
    </section>
    <Footer />
    
    </motion.div>
     
  );
};

export default Contact;
