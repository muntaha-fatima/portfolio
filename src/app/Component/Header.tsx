"use client";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">
                    <span>S</span>eerat <span>P</span>ortfolio
                </h1>

                <nav className="nav-links">
                    <ul>
                        <li><Link className="link" href="/">Home</Link></li>
                        <li><Link className="link" href="About">About</Link></li>
                        <li><Link  className="link" href="Project">Projects</Link></li>
                        <li><Link className="link" href="Contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="nav-links-mobile">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        &#9776;
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <nav className="nav-links-mobile">
                    <ul>
                        <li><Link className="link" href="/">Home</Link></li>
                        <li><Link className="link" href="About">About</Link></li>
                        <li><Link  className="link" href="Project">Projects</Link></li>
                        <li><Link  className="link"href="Contact">Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
