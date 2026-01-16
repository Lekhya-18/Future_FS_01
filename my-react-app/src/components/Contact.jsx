import email from "../assets/email.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-links">
        <a href="mailto:lekhyapitta@gmail.com">
          <img src={email} alt="Email" />
          <span>Email</span>
        </a>

        <a href="https://www.linkedin.com/in/lekhya-p-103274345" target="_blank">
          <img src={linkedin} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/Lekhya-18" target="_blank">
          <img src={github} alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  )
}
