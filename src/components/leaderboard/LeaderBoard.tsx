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
                    <div className={`col-md-12 ${mainLeaderBoardCss.LeaderBoardHead}`}>
                        <small>Leaderboard</small>
                        <h1>Top Typists</h1>
                        <p>See who's dominating the typing arena</p>
                    </div>
                    <div className={mainLeaderBoardCss.FiltersRankedTopper}>
                        <div></div>
                        <ul>
                            <li>
                                <span className={mainLeaderBoardCss.UserRankTop}>
                                    <abbr>SK</abbr>
                                    <h3>Simon Kaur</h3>
                                    <p>100 WPM</p>
                                </span>
                                <small className={mainLeaderBoardCss.UserRanked}>
                                    🥈 <b>Second Rank</b>
                                </small>
                            </li>
                            <li>
                                <span className={mainLeaderBoardCss.UserRankTop}>
                                    <abbr className={mainLeaderBoardCss.UserRankedName}>VK</abbr>
                                    <h3>Vaibhav Kaur</h3>
                                    <p>120 WPM</p>
                                </span>
                                <small className={mainLeaderBoardCss.UserRanked}>
                                    🥇 <b>Champion</b>
                                </small>
                            </li>
                            <li>
                                <span className={mainLeaderBoardCss.UserRankTop}>
                                    <abbr className={mainLeaderBoardCss.UserRankedName}>NC</abbr>
                                    <h3>Nikhil Chhabra</h3>
                                    <p>97 WPM</p>
                                </span>
                                <small className={mainLeaderBoardCss.UserRanked}>
                                    🥉 <b>Third Rank</b>
                                </small>
                            </li>
                        </ul>
                    </div>
                    <div className={mainLeaderBoardCss.tableWrapper}>
                        <div className={mainLeaderBoardCss.tableHeader}>
                            <h2>Full Rankings</h2>
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Player</th>
                                    <th>WPM</th>
                                    <th>Accuracy</th>
                                    <th>Score</th>
                                    <th>Badge</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className={mainLeaderBoardCss.playerInfo}>
                                            <Image src="/images/rrb-img.png" alt="Contests features" height={60} width={60}/>
                                            Ajay Verma
                                        </div>
                                    </td>
                                    <td className={mainLeaderBoardCss.green}>102</td>
                                    <td>98%</td>
                                    <td>1985</td>
                                    <td><span className={mainLeaderBoardCss.badge}>Champion</span></td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className={mainLeaderBoardCss.playerInfo}>
                                            <Image src="/images/rrb-img.png" alt="Contests features" height={60} width={60}/>
                                            Simon Kaur
                                        </div>
                                    </td>
                                    <td className={mainLeaderBoardCss.green}>97</td>
                                    <td>97%</td>
                                    <td>1900</td>
                                    <td><span className={mainLeaderBoardCss.badge}>Expert</span></td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div className={mainLeaderBoardCss.playerInfo}>
                                            <Image src="/images/rrb-img.png" alt="Contests features" height={60} width={60}/>
                                            Rohan Mehta
                                        </div>
                                    </td>
                                    <td className={mainLeaderBoardCss.green}>95</td>
                                    <td>96%</td>
                                    <td>1840</td>
                                    <td><span className={mainLeaderBoardCss.badge}>Pro</span></td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>
                                        <div className={mainLeaderBoardCss.playerInfo}>
                                            <Image src="/images/rrb-img.png" alt="Contests features" height={60} width={60}/>
                                            Neha Sharma
                                        </div>
                                    </td>
                                    <td className={mainLeaderBoardCss.green}>92</td>
                                    <td>95%</td>
                                    <td>1785</td>
                                    <td><span className={mainLeaderBoardCss.badge}>Rising</span></td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>
                                        <div className={mainLeaderBoardCss.playerInfo}>
                                            <Image src="/images/rrb-img.png" alt="Contests features" height={60} width={60}/>
                                            Vivek Singh
                                        </div>
                                    </td>
                                    <td className={mainLeaderBoardCss.green}>90</td>
                                    <td>94%</td>
                                    <td>1720</td>
                                    <td><span className={mainLeaderBoardCss.badge}>Advanced</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>
   );
}




    {/* <div className={mainLeaderBoardCss.filterButtons}>
        <button className={mainLeaderBoardCss.active}>This Week</button>
        <button>Monthly</button>
        <button>All Time</button>
    </div>

    <div className={mainLeaderBoardCss.topUsers">

        <div className={mainLeaderBoardCss.userCard rank2">
            <div class="userTop">
                <div class="avatar">SK</div>
                <h3>Simon Kaur</h3>
                <p>97 WPM</p>
            </div>
            <div class="userBottom">
                🥈 Second Rank
            </div>
        </div>

        <div class="userCard rank1">
            <div class="userTop">
                <div class="avatar">AV</div>
                <h3>Ajay Verma</h3>
                <p>102 WPM</p>
            </div>
            <div class="userBottom">
                🥇 Champion
            </div>
        </div>

        <div class="userCard rank3">
            <div class="userTop">
                <div class="avatar">RM</div>
                <h3>Rohan Mehta</h3>
                <p>95 WPM</p>
            </div>
            <div class="userBottom">
                🥉 Third Rank
            </div>
        </div>

    </div>

    <div class="tableWrapper">

        <div class="tableHeader">
            <h2>Full Rankings</h2>

            <select>
                <option>English</option>
                <option>Hindi</option>
            </select>
        </div>

        <table>

            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>WPM</th>
                    <th>Accuracy</th>
                    <th>Score</th>
                    <th>Badge</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>1</td>
                    <td>
                        <div class="playerInfo">
                            <img src="https://i.pravatar.cc/100?img=1">
                            Ajay Verma
                        </div>
                    </td>
                    <td class="green">102</td>
                    <td>98%</td>
                    <td>1985</td>
                    <td><span class="badge">Champion</span></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>
                        <div class="playerInfo">
                            <img src="https://i.pravatar.cc/100?img=2">
                            Simon Kaur
                        </div>
                    </td>
                    <td class="green">97</td>
                    <td>97%</td>
                    <td>1900</td>
                    <td><span class="badge">Expert</span></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>
                        <div class="playerInfo">
                            <img src="https://i.pravatar.cc/100?img=3">
                            Rohan Mehta
                        </div>
                    </td>
                    <td class="green">95</td>
                    <td>96%</td>
                    <td>1840</td>
                    <td><span class="badge">Pro</span></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>
                        <div class="playerInfo">
                            <img src="https://i.pravatar.cc/100?img=4">
                            Neha Sharma
                        </div>
                    </td>
                    <td class="green">92</td>
                    <td>95%</td>
                    <td>1785</td>
                    <td><span class="badge">Rising</span></td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>
                        <div class="playerInfo">
                            <img src="https://i.pravatar.cc/100?img=5">
                            Vivek Singh
                        </div>
                    </td>
                    <td class="green">90</td>
                    <td>94%</td>
                    <td>1720</td>
                    <td><span class="badge">Advanced</span></td>
                </tr>

            </tbody>

        </table>

    </div>

    <div class="footerText">
        © 2026 GOTypingTest. All rights reserved.
    </div> */}

