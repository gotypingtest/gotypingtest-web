"use client";

import React from "react";
import mainHeaderCss from './headerfooter.module.css';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <>
        <header className={mainHeaderCss.headerPageCss}>
          <nav className={mainHeaderCss.navbar}>
            <i className={mainHeaderCss.navOpenBtn}></i>
            <Link href={'/'} className={mainHeaderCss.websitelogo}>GOTyping<span>Test.com</span></Link>

            <ul className={mainHeaderCss.navlinks}>
                <i className="uil uil-times navCloseBtn"></i>
                <li><Link href={'/'} className={mainHeaderCss.active}>Home</Link></li>
                <li><Link href={'/'}>Typing</Link></li>
                <li><Link href={'/'}>Leaderboard</Link></li>
                <li><Link href={'/'}>Pricing</Link></li>
                <li><Link href={'/'}>About Us</Link></li>
            </ul>

            <div className={mainHeaderCss.registerbox}>
                <ThemeToggle />
                <Link className={mainHeaderCss.loginCss} href={'/login'}><i className="fa-solid fa-arrow-right-to-bracket"></i>Login</Link>
                <Link className={mainHeaderCss.registerCss} href={'/register'}><i className="fa-solid fa-user-plus"></i>Register</Link>
            </div>
            </nav>
        </header>
        </>
    )

}
export default Header;