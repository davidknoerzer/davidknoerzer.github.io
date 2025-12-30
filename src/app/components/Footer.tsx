export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer p-4 max-w-7xl">
      <nav>
        <h6 className="footer-title">Kontakt</h6>
        <a
          className="footer-center"
          target="_blank"
          href="https://www.linkedin.com/in/davidknoerzer/"
        >
          Linkedin
        </a>
        <a
          className="footer-center"
          target="_blank"
          href="https://github.com/davidknoerzer/"
        >
          Github
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Techstack</h6>
        <div className="badge badge-outline" key="">
          React
        </div>
        <div className="badge badge-outline" key="">
          TailwindCSS
        </div>
        <div className="badge badge-outline" key="">
          DaisyUI
        </div>
        <div className="badge badge-outline" key="">
          Next.js
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">More</h6>
        <h6 className="footer-center">Copyright &copy; {currentYear}</h6>
      </nav>
    </footer>
  );
}
