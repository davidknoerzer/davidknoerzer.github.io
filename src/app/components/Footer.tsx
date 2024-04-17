import React from "react";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <a className="footer-center" target="_blank" href="https://www.linkedin.com/in/davidknoerzer/">Linkedin</a>
                <a className="footer-center" target="_blank" href="https://github.com/davidknoerzer">Github</a>
                <h6 className="footer-center">Copyright &copy; {currentYear}</h6>
            </nav>
        </footer>
    );
}