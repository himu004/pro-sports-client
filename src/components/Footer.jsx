import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import logo from '../assets/logo2.png';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 mt-20">
            <div className='flex items-center gap-5'>
            <img className='w-14' src={logo} alt="" />
            <h1 className='text-5xl font-bold'>Pro Sports</h1>
            </div>
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/md-himu-chowdhury/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6 text-blue-500 hover:text-blue-700"/>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="w-6 h-6 text-red-500 hover:text-red-700" />
                    </a>
                    <a href="https://www.facebook.com/himu.chowdhury.73/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-6 h-6 text-blue-700 hover:text-blue-900" />
                    </a>
                </div>
            </nav>
            <aside>
                <p className="text-sm">
                    Copyright © {new Date().getFullYear()} - All rights reserved by Himu
                    Chowdhury
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
