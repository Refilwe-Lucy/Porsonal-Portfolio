import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
// import { MdAttachEmail } from "react-icons/md";

function Header() {
    return(
        <body>
        <header className="header">
            <div className="logo">
            <a href="#">Lucy<span>.</span></a>

            </div>
            
            
           
        <nav className="NavBar">
           
            <a href="#">Home</a>
             <a href="#about">About</a>
             <a href="#services">Services</a>
             <a href="#portfolio">Porfolio</a>
             <a href="#contact">Contact</a>

            </nav>
        
            <button className="HireMebtn">
                <a href="#" className="me">Hire Me</a>
            
            </button>
           
        </header>
      <section className="home">
       
        <div className="home-content">
            <h1>Hi, I'm Makuwa Lucy</h1>
            <h3>Software Developer Intern | Frontend Enthusiast</h3>
            <p>Welcome to my porfolio! I am currently pursuing an Advanced Diploma in Computer Science,
               building upon my foundation in IT with a National Diploma in Software Development. 
               Passionate about frontend development, I enjoy crafting user-friendly interfaces and diving into latest web technologies.
               Explore my projects below to see how I bring creativity and functionality together.</p>
            <div className="cv-btn">
            <a href="#"><i className="fa fa-cloud-download"></i>Download CV</a>


            </div>
              
            <div className="home-sci">
                <a className="home-sci_1" href="#"><FaWhatsapp /></a>
                <a className="home-sci_1" href="#"><FaFacebook /></a>
                <a className="home-sci_1" href="#"><FaLinkedin /></a>
                <a className="home-sci_1" href="#"><MdAttachEmail/></a>
                <a className="home-sci_1" href="#"><FaPhone />
                </a>
                <a className="home-sci_1" href="#"><FaGithub /></a>
            



            </div>
               
              
          </div>
     
        </section>
        

      </body>
    

    );
}
export default Header;