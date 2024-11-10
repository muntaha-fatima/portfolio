import Image from "next/image";
export default function About() {
  return (
    <div className="about-container">
      
      <div className="about-text">
        <h1 className="about-title">About</h1>
        <p className="about-description">
          I&apos;m Seerat Fatima, a web developer with a passion for both technology and Islamic studies.
          Alongside my expertise in web development using HTML, CSS, JavaScript, and Next.js, I have
          completed courses in Seerat and Alima studies, deepening my understanding of Islamic teachings.
          I enjoy combining creativity with purpose, aiming to bring value to both the tech world and the
          community. Whether I&apos;m building user-friendly websites or expanding my knowledge, I am driven by
          a desire to make meaningful contributions.
        </p>
      </div>
      <div className="about-image-container">
        <Image
          src="/image/b-4.jpg"
          alt="Profile image of Seerat Fatima"
          layout="responsive"
          width={336}
          height={400}
          className="about-image"
        />
      </div>
      <footer className="about-footer">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <div className="about-social-links">
          <a href="https://github.com/muntaha-fatima" aria-label="GitHub profile">
            <i className="fab fa-github social-icon"></i>
          </a>
          <a href="https://www.instagram.com/seeratfatima39" aria-label="Instagram profile">
            <i className="fab fa-instagram social-icon instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6" aria-label="LinkedIn profile">
            <i className="fab fa-linkedin social-icon linkedin"></i>
          </a>
        </div>
        <p className="about-footer-text">Follow me for more updates</p>
        <p className="about-email">Seeratfatima@gmail.com</p>
      </footer>
    </div>
  );
}
