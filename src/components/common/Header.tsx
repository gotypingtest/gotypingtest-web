"use client";

import React, { useState } from "react";
import mainHeaderCss from './headerfooter.module.css';
import Link from "next/link";
import Image from "next/image"
import ThemeToggle from "./ThemeToggle";



function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
        <header className={mainHeaderCss.headerPageCss}>
          <nav  className={`${mainHeaderCss.navbar} ${isNavOpen ? mainHeaderCss.openNav : "" }`}>
            <i className={`fa-solid fa-bars ${mainHeaderCss.navOpenBtn}`} onClick={() => setIsNavOpen(true)} aria-label="Open Menu"></i>
            <Link href={'/'} className={mainHeaderCss.websitelogo}><Image src="/images/logo.png" alt="Website Logo" height={40} width={235}/></Link>
            {/* <div className={mainHeaderCss.wrappernavlinks}> */}
            <ul className={mainHeaderCss.navlinks}>
                <i className={`fa-solid fa-xmark ${mainHeaderCss.navCloseBtn}`} onClick={() => setIsNavOpen(false)} aria-label="Close Menu"></i>
                <li><Link href={'/'} className={mainHeaderCss.active}>Home</Link></li>
                <li className={mainHeaderCss.dropdownMainMenu}>
                    <button >Typing <i className="fa-solid fa-caret-down"></i></button>
                    <span className={mainHeaderCss.dropdownMenu}>
                        <Link href={'/'}><i className="fa-solid fa-caret-right"></i> TypingTest</Link>
                        <Link href={'/exams'}><i className="fa-solid fa-caret-right"></i> Exams</Link>
                        <Link href={'/'}><i className="fa-solid fa-caret-right"></i> Contests</Link>
                    </span>
                </li>
                <li><Link href={'/leaderboard'}>Leaderboard</Link></li>
                <li><Link href={'/'}>Pricing</Link></li>
                <li><Link href={'/dashboard'}>Dashboard</Link></li>
                <li><Link href={'/'}>About Us</Link></li>
            </ul>
            {/* </div> */}
            <div className={mainHeaderCss.registerbox}>
                <div className={mainHeaderCss.themeToggleWrapper}>
                    <ThemeToggle />
                </div>
                <Link className={mainHeaderCss.loginCss} href={'/login'}><i className="fa-solid fa-arrow-right-to-bracket"></i>Login</Link>
                <Link className={mainHeaderCss.registerCss} href={'/register'}><i className="fa-solid fa-user-plus"></i>Register</Link>
            </div>
            </nav>
        </header>
        </>
    )
}
export default Header;

