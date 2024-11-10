import Image from "next/image";
export default function Project() {
    return (
        <div className="projectContainer">
            <h1 className="homes-title">My Projects</h1>

            <div className="projectItem">
                <Image
                    src="/image/Screenshot 2024-11-08 200729.png"
                    alt="Calculator Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                A simple, functional calculator built with HTML, CSS, and JavaScript. This project showcases my ability to build
                 basic applications using HTML structure, CSS styling, and JavaScript for interactive functionality. Users can 
                 perform basic arithmetic operations like addition, subtraction, multiplication.
                    <a href="https://calculator-muntaha-fatimas-projects.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/image/Screenshot 2024-11-09 124150.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                A static resume webpage created with HTML and CSS, designed to present professional information in a clear, 
                structured format. This page includes sections for personal information, work experience, education, skills, and contact details.
                    <a href="https://create-portfolio-eosin.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/image/Screenshot 2024-11-09 124247.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                My personal portfolio website created with HTML and CSS, designed to showcase my projects, skills,
                 and journey in web development. This project focuses on clean design, responsive layout, and an engaging
                  user experience, presenting a well-organized view of my work and experience.

                    <a href="https://create-portfolio-eosin.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/image/Screenshot 2024-11-09 124958.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                A Figma design prototype showcasing the layout and user interface of my portfolio or resume project. This design 
                serves as a blueprint for development, focusing on a clean and visually engaging layout. I used Figma&apos;s design 
                tools to create a user-centric interface, ensuring a smooth transition from concept to code.
                    <a href="https://create-portfolio-eosin.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>

            <div className="projectItem">
                <Image
                    src="/image/Screenshot 2024-11-09 124517.png"
                    alt="Portfolio Project"
                    width={350}
                    height={350}
                    className="projectImage"
                />
                <p className="projectDescription">
                I&apos;ve created a dynamic resume builder that allows you to customize your resume in real time 
                This tool lets users input personal details, skills, work experience, and more to automatically generate a 
                professional-looking resume. Whether you&apos;re a developer, designer, or in any other field, you can easily adjust 
                the layout and content to suit your needs.
                    <a href="https://create-portfolio-eosin.vercel.app/" className="underline text-blue-400">
                        <i className="fas fa-link text-3xl"></i>
                    </a>
                </p>
            </div>


<footer className="contact-footer">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <div className="footer-social-links">
          <a href="https://github.com/muntaha-fatima" aria-label="GitHub profile">
            <i className="fab fa-github footer-icon"></i>
          </a>
          <a href="https://www.instagram.com/seeratfatima39" aria-label="Instagram profile">
            <i className="fab fa-instagram footer-icon instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6" aria-label="LinkedIn profile">
            <i className="fab fa-linkedin footer-icon linkedin"></i>
          </a>
        </div>
        <p className="footer-text">Follow me for more updates</p>
        <p className="footer-email">Seeratfatima@gmail.com</p>
      </footer>
    </div>
  );
}
