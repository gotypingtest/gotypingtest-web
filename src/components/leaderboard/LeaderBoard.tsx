"use client";

import {useState} from 'react'
import Image from "next/image";
import mainLeaderBoardCss from "./leaderboard.module.css";
import Link from 'next/link';


export default function LeaderBoard () {
    
  return (
        <section className={mainLeaderBoardCss.LeaderBoardCss}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className={mainLeaderBoardCss.welcomecard}>
                            <div className={mainLeaderBoardCss.welcomecardTop}>
                                <span>H</span>
                                <div className={mainLeaderBoardCss.UserName}>
                                    <h2>Welcome back, Himanshu Sharma! 👋</h2>
                                    <p>
                                        Track your typing progress, manage subscriptions,
                                        and improve your skills with premium features.
                                    </p>
                                </div>
                            </div>
                            <ul className={mainLeaderBoardCss.userStatusBoard}>
                                <li>
                                    <i className="fa-solid fa-keyboard"></i>
                                    <strong>0</strong>
                                    <small>Total Tests Taken</small>
                                </li>
                                <li>
                                    <i className="fa-brands fa-atlassian"></i>
                                    <strong>0</strong>
                                    <small>Active Days (10d)</small>
                                </li>
                                <li>
                                    <i className="fa-solid fa-chess-king"></i>
                                    <strong>0</strong>
                                    <small>Current Plan</small>
                                </li>
                            </ul>
                        </div>
                        <div className={mainLeaderBoardCss.premiumFeatures}>
                            <div className={mainLeaderBoardCss.premiumFeaturesContent}>
                                <h2>🚀 Unlock Premium Features!</h2>
                                <p>Upgrade your plan to access advanced typing tests, detailed analytics, and priority support. Start your journey to typing mastery today!</p>
                            </div>
                            <Link  href={'/'}><i className="fa-solid fa-rocket"></i>Upgrade Now</Link>
                        </div>
                        <div className={mainLeaderBoardCss.quickActions}>
                            <h2>⚡ Quick Action</h2>
                            <ul className={mainLeaderBoardCss.quickActionsBoxes}>
                                <li>
                                    <small><i className="fa-solid fa-wallet"></i></small>
                                    <strong>Registration & Wallet</strong>
                                </li>
                                <li>
                                    <small><i className="fa-solid fa-user-secret"></i></small>
                                    <strong>Contests Selections</strong>
                                </li>
                                <li>
                                    <small><i className="fa-solid fa-user-secret"></i></small>
                                    <strong>Join Contests</strong>
                                    <span>(Live Typing Contests)</span>
                                </li>
                                <li>
                                    <small><i className="fa-solid fa-chart-column"></i></small>
                                    <strong>LeaderBoard</strong>
                                </li>
                                <li>
                                    <small><i className="fa-solid fa-share-nodes"></i></small>
                                    <strong>Refer & Earn</strong>
                                </li>
                            </ul>
                        </div>
                        <div className={mainLeaderBoardCss.improvetypingbox}>
                            <h2>Are You Ready To Improve Your Typing?</h2>
                            <p>Start  typing now and track your progress on time</p>
                            <ul>
                                <li>
                                    <Link href={'/'}><i className="fa-solid fa-circle-play"></i> Start Practice</Link>
                                </li>
                                <li>
                                    <Link href={'/'}><i className="fa-solid fa-paper-plane"></i> Live Challenge</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
   );
}