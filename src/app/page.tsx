import Image from "next/image";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text home-text-left">
        <h1 className="home-title ">
          Hi, I&apos;m <span>Seerat fatima</span>
        </h1>
        <p className="home-description">
          A passionate Web Developer specialized in TypeScript, HTML, CSS, and Next.js.
        </p>
        <div className="home-buttons">
          <button className="button-pink">
            <a href="/Project">View My Work</a>
          </button>
          <button className="button-white">
            <a href="/Contact">Contact Me</a>
          </button>
        </div>
      </div>

      <div className="home-image-container">
        <Image
          src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
          alt="profile"
          layout="responsive"
          width={336}
          height={400}
          className="home-image"
        />
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
