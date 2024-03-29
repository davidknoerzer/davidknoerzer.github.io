import React from "react";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-center">Linkedin</h6>
                <h6 className="footer-center">Copyright &copy; {currentYear}</h6>
            </nav>
        </footer>
    );
}