"use client";

import React from "react";
import mainFooterCss from './headerfooter.module.css';
import Link from "next/link";


function Footer() {
    return (
        <>
        <div className={mainFooterCss.footerPageCss}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <h2><Link href={'/'} className={mainFooterCss.websitelogo}>GOTyping<span>Test.com</span></Link></h2>
                        <p>We help aspirants prepare for typing tests in various competitive exams through specialized practice modules and detailed performance analysis.</p>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="row">
                            <div className={`col-lg-3 col-md-3 col-6 ${mainFooterCss.footerLinks}`}>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Home</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Typing</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Dashboard</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`col-lg-3 col-md-3 col-6 ${mainFooterCss.footerLinks}`}>
                                <h3>Practice</h3>
                                <ul>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>SSC CGL</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>SSC CHSL</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>RRB NTPC</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>All Exams</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`col-lg-3 col-md-3 col-6 ${mainFooterCss.footerLinks}`}>
                                <h3>Company</h3>
                                <ul>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>About Us</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Support</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`col-lg-3 col-md-3 col-6 ${mainFooterCss.footerLinks}`}>
                                <h3>Legality</h3>
                                <ul>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Terms of Service</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Refund Policy</Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}><i className="fa-solid fa-angles-right"></i>Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-12 ${mainFooterCss.websitefooterrights}`}>
                        <span>© 2024 <Link href={'/'}>GOTypingTest.com</Link> All rights reserved.</span>
                        <span><Link href={'/'}>Legal</Link> <Link href={'/'}>Sitemap</Link></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;