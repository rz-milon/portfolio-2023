import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaAngleUp, FaFacebookSquare, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import { VscGithubInverted } from 'react-icons/vsc';


const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='hero min-h-screen'>
            {/* <ContactParticle /> */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:mx-40 md:mx-36 sm:mx-32" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-sine">

                <div className="flex flex-col justify-center lg:justify-between lg:flex-row lg:space-x-32">
                    <div className="mb-12 lg:ml-0 lg:mb-0">
                        <div className="mb-6">
                            <h2 className="max-w-full lg:text-left mb-6 text-4xl tracking-tight font-light text-center text-[#ff3d00]">
                                Get In Touch
                            </h2>
                            <p className="text-white lg:text-left tracking-normal text-center md:text-lg w-full">
                                I would love to hear from you.
                            </p>
                        </div>
                        <hr className="mb-6 border-gray-300 mt-20" />
                        <div className="">
                            <ul className="flex space-x-6 justify-center">
                                <li><a href="http://rzmilon@gmail.com" target="_blank" rel="noopener noreferrer"><FaRegEnvelope className='w-10 h-10 mb-3 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a></li>
                                <li><a href="https://github.com/rz-milon" target="_blank" rel="noopener noreferrer"><VscGithubInverted className='w-10 h-10 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a></li>
                                <li><a href="https://www.linkedin.com/in/rzmilon" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-10 h-10 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a></li>
                                <li> <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-10 h-10 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='w-10 h-10 hover:text-[#ff3d00] hover:-translate-y-1 duration-700 text-gray-400' /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-5 w-full lg:mx-0 justify-center">
                        <div className='space-y-5'>
                            <input type="text" placeholder="Full Name" name='name' required
                                className="outline-none hover:bg-black/20 px-4 py-3 border-b border-black/20 hover:border-[#ff3d00] w-full lg:max-w-lg md:w-full  bg-transparent" />
                            <input type="email" placeholder="Email" name='email' required className="outline-none hover:bg-black/20 px-4 py-3 border-b border-black/20 hover:border-[#ff3d00] w-full lg:max-w-lg md:w-full bg-transparent" />

                            <textarea type='text' name='message' required className="outline-none hover:bg-black/20 px-4 py-3 border-b border-black/20 hover:border-[#ff3d00] w-full lg:max-w-lg md:w-full h-36 bg-transparent" placeholder="Message"></textarea>
                        </div>
                        <div className='flex justify-center w-full lg:w-30'>
                            <button type="submit" className='mt-5 text-xl text-white px-4 py-2 hover:bg-[#ff3d00] border border-[#ff3d00]'>Send Message</button>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 overflow-hidden'>
                    <a href="#home"><FaAngleUp className='animate-bounce w-10 h-10 text-[#ff3d00]' /></a>
                </div>
            </div>
        </div>

    );
};

export default Contact;