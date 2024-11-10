export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-input"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      
      
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
