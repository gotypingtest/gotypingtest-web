"use client";

import {useState} from 'react'
import Image from "next/image";
import mainExamTableCss from "./examtable.module.css";
import Link from 'next/link';


export default function LeaderBoard () {
    const [isReadMoreFaq, setIsReadMoreFaq] = useState(false);
    
    const toggleFaqVisibility = () => {
            setIsReadMoreFaq(!isReadMoreFaq);
        };
    
  return (
        <section className={mainExamTableCss.ExamsTableCss}>
            <div className='container'>
                <div className='row'>
                    <div className={mainExamTableCss.ExamsDetailsTop}>
                        <div className={mainExamTableCss.ExamsLogo}>
                            <Image src="/images/rrb-img.png" alt="Contests features" height={60} width={60}/>
                        </div>
                        <h1>SSC CHSL TYPING</h1>
                        <p>
                           SSC CHSL typing test will be conducted by staff selection board (SSC)
                           SSC CHSL typing requires a minimum speed of 35 w.p.m. for English
                           or 30 w.p.m. for Hindi for a duration of 10 minutes. The test is
                           mandatory for qualifying and is conducted on a computer. While no
                           marks are awarded, candidates must meet the speed requirements and
                           maintain high accuracy. SSC CHSL typing test 2025 is required so as
                           to qualify for the final selection.
                       </p>
                    </div>
                    <div className={mainExamTableCss.ExamsTestTable}>
                        <h2>Practice Passages</h2>
                        <p>Practice and improve your typing skills with these exams</p>
                        <span></span>
                        <div className={mainExamTableCss.tablewrapper}>
                        <table>
                            <thead>
                            <tr>
                                <th>Practice Test</th>
                                <th>Duration</th>
                                <th>Language</th>
                                <th>Start Test</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>SSC CGL Typing Test 1</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.startbtn}><i className="fa-solid fa-play"></i> Start Test</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 2</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.startbtn}><i className="fa-solid fa-play"></i> Start Test</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 3</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.startbtn}><i className="fa-solid fa-play"></i> Start Test</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 4</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.startbtn}><i className="fa-solid fa-play"></i> Start Test</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 5</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.startbtn}><i className="fa-solid fa-play"></i> Start Test</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 6</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 7</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 8</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            {isReadMoreFaq &&
                             <>
                             <tr>
                                <td>SSC CGL Typing Test 9</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 10</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 11</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 12</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 13</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>SSC CGL Typing Test 14</td>
                                <td><span className={mainExamTableCss.timebadge}>⏱ 15 Minutes</span></td>
                                <td><span className={mainExamTableCss.langbadge}>English</span></td>
                                <td>
                                <Link href={'/'} className={mainExamTableCss.premiumbtn}><i className="fa-solid fa-lock"></i> Premium</Link>
                                </td>
                            </tr>

                             </>}
                             <tr>
                                <td colSpan={4}>
                                    <div className={mainExamTableCss.ReadMoreBttn}><span onClick={toggleFaqVisibility}>View {isReadMoreFaq ? 'Less' : 'More'} </span></div>
                                </td>
                             </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   );
}