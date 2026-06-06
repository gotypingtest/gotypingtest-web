import Image from "next/image";
import mainHomePage from "./home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <section className={mainHomePage.homePageCss}>
        <div className={mainHomePage.homeSectionCss}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className={mainHomePage.homePageContent}>
                  <h1>Learn to Type Faster <span>& Earn Real Rewards</span></h1>
                  <p>Join live typing contests, compete with thousands of typists across India, and win real cash rewards. Practice for government exams too!</p>
                  <div className={mainHomePage.homePageButtons}>
                      <Link className={mainHomePage.buttonJoin} href={'/'}><i className="fa-solid fa-trophy"></i>Join Contests</Link>
                      <Link className={mainHomePage.buttonStart} href={'/'}>Start Free <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                  <div className={mainHomePage.homePageTags}>
                    <span><i className="fa-solid fa-circle-check"></i>Free to start</span>
                    <span><i className="fa-solid fa-circle-check"></i>Instant withdrawals</span>
                    <span><i className="fa-solid fa-circle-check"></i>Anti-cheat system</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                  <ul className={mainHomePage.homeImagesCss}>
                    <li>
                      <Image src="/images/for-students.png" alt="student features" height={200} width={200}/>
                      <span>
                         <h3>For Students</h3>
                         <p>Join millions of GoTypingTest.com users and learn to type at your own pace with gamified lessons and student-led progression.</p>
                         <Link href={'/'}>Start Typing Today <i className="fa-solid fa-angles-right"></i></Link>
                      </span>
                    </li>
                    <li>
                      <Image src="/images/for-educators.png" alt="student features" height={200} width={200}/>
                      <span>
                         <h3>For Educators</h3>
                         <p>Join millions of GoTypingTest.com users and learn to type at your own pace with gamified lessons and student-led progression.</p>
                         <Link href={'/'}>Create Your Account <i className="fa-solid fa-angles-right"></i></Link>
                      </span>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={mainHomePage.dataHistoryCss}>
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <strong>25K+</strong>
                  <small>Registered Users</small>
                </li>
                <li>
                  <strong>5K+</strong>
                  <small>Contests Done</small>
                </li>
                <li>
                  <strong>1M+</strong>
                  <small>Words Typed</small>
                </li>
                <li>
                  <strong><i className="fa-solid fa-indian-rupee-sign"></i> 1L+</strong>
                  <small>Rewards Won</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={mainHomePage.homeFeaturesCss}>
          <div className="container">
            <div className="row">
              <div className={mainHomePage.homeFeaturesHeadCss}>
                <small>Features</small>
                <h2>Everything You Need <span>to Compare & Win</span></h2>
              </div>
              <ul>
                <li>
                  <small><i className="fa-solid fa-graduation-cap"></i></small>
                  <strong>Exam Practice</strong>
                  <p>Practice for SSC, RRB, DSSSB, BSF and other government typing exams.</p>
                </li>
                <li>
                  <small><i className="fa-solid fa-chart-line"></i></small>
                  <strong>Real-Time Stats</strong>
                  <p>Track your WPM, accuracy, mistakes and progress live during the contest.</p>
                </li>
                <li>
                  <small><i className="fa-solid fa-chart-simple"></i></small>
                  <strong>Leaderboards</strong>
                  <p>Compete for the top spot and become the typing champion. Contest and weekly boards.</p>
                </li>
                <li>
                  <small><i className="fa-solid fa-wallet"></i></small>
                  <strong>Wallet & Rewards</strong>
                  <p>Earn rewards, manage your wallet and withdraw easily via UPI, bank transfer.</p>
                </li>
                <li>
                  <small><i className="fa-solid fa-user-shield"></i></small>
                  <strong>Fair & Secure</strong>
                  <p>Advanced anti-cheat system ensures fair play for everyone. Verified results.</p>
                </li>
                <li>
                  <small><i className="fa-solid fa-trophy"></i></small>
                  <strong>Live Contests</strong>
                  <p>Participate in real-time typing contests with players worldwide. Win cash prizes instantly.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={mainHomePage.homeWorksCss}>
          <div className="container">
            <div className="row">
              <div className={mainHomePage.homeWorksHeadCss}>
                <small>How it Works</small>
                <h2>Simple Steps to <span>Get Started</span></h2>
              </div>
              <ul>
                <li>
                    <small>1</small>
                    <strong>Sign Up</strong>
                    <p>Create your account in seconds. Email or mobile.</p>
                </li>
                <li>
                    <small>2</small>
                    <strong>Add Money</strong>
                    <p>Add balance to your wallet via Razorpay. Min ₹10.</p>
                </li>
                <li>
                    <small>3</small>
                    <strong>Join & Type</strong>
                    <p>Choose a contest, pay entry fee, type the paragraph.</p>
                </li>
                <li>
                    <small>4</small>
                    <strong>Win & Earn</strong>
                    <p>Top performers win exciting cash rewards to wallet.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={mainHomePage.homeContestsCss}>
          <div className="container">
            <div className="row">
              <div className={mainHomePage.homeContestsHeadCss}>
                <div className={mainHomePage.homeContestsLeftCss}>
                  <small>Contests</small>
                  <h2>Join Ongoing <span>Contests</span></h2>
                </div>
                <div className={mainHomePage.homeContestsRightCss}>
                  <Link href={'/'}>View All Contests <i className="fa-solid fa-arrow-right-long"></i></Link>
                </div>
              </div>
              <ul>
                <li>
                  <div className={mainHomePage.homeContestsItemTopCss}>
                  <span>Live</span>
                  <abbr>5 Min .English</abbr>
                  </div>
                  <div className={mainHomePage.homeContestsItemSecondCss}>
                  <strong>Speed Blitz</strong>
                  <span><i className="fa-solid fa-indian-rupee-sign"></i>500 <small>Prize Pool</small></span>
                  <abbr>Entry: <b><i className="fa-solid fa-indian-rupee-sign"></i>20</b><small>25/50 joined</small></abbr>
                  </div>
                  <div className={mainHomePage.homeContestsItemThirdCss}>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 1st</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>250</strong>
                    </span>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 2nd</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>150</strong>
                    </span>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 3rd</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>100</strong>
                    </span>
                  </div>
                  <div className={mainHomePage.homeContestsItemFourCss}>
                      <Link href={'/'}>Join Now</Link>
                  </div>
                </li>
                <li>
                  <div className={mainHomePage.homeContestsItemTopCss}>
                  <span>Live</span>
                  <abbr>10 Min .English</abbr>
                  </div>
                  <div className={mainHomePage.homeContestsItemSecondCss}>
                  <strong>Accuracy Battle</strong>
                  <span><i className="fa-solid fa-indian-rupee-sign"></i>800 <small>Prize Pool</small></span>
                  <abbr>Entry: <b><i className="fa-solid fa-indian-rupee-sign"></i>20</b><small>25/50 joined</small></abbr>
                  </div>
                  <div className={mainHomePage.homeContestsItemThirdCss}>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 1st</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>250</strong>
                    </span>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 2nd</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>150</strong>
                    </span>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 3rd</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>100</strong>
                    </span>
                  </div>
                  <div className={mainHomePage.homeContestsItemFourCss}>
                    <Link href={'/'}>Join Now</Link>
                  </div>
                </li>
                <li>
                  <div className={mainHomePage.homeContestsItemTopCss}>
                  <span>Live</span>
                  <abbr>15 Min .English</abbr>
                  </div>
                  <div className={mainHomePage.homeContestsItemSecondCss}>
                  <strong>Pro Typist League</strong>
                  <span><i className="fa-solid fa-indian-rupee-sign"></i>1500 <small>Prize Pool</small></span>
                  <abbr>Entry: <b><i className="fa-solid fa-indian-rupee-sign"></i>20</b><small>25/50 joined</small></abbr>
                  </div>
                  <div className={mainHomePage.homeContestsItemThirdCss}>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 1st</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>250</strong>
                    </span>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 2nd</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>150</strong>
                    </span>
                    <span>
                        <small><i className="fa-solid fa-medal"></i> 3rd</small>
                        <strong><i className="fa-solid fa-indian-rupee-sign"></i>100</strong>
                    </span>
                  </div>
                  <div className={mainHomePage.homeContestsItemFourCss}>
                    <Link href={'/'}>Join Now</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={mainHomePage.homeLeaderboardCss}>
          <div className="container">
            <div className="row">
              <div className={mainHomePage.homeLeaderboardHeadCss}>
                <small>Leaderboard</small>
                <h2>Top Typists <span>This Week</span></h2>
              </div>
              <div className="col-lg-6 col-md-6">
                  <ul className={mainHomePage.homeLeaderboardListCss}>
                    <li>
                        <div className={mainHomePage.homeNameListCss}>
                          <small>1</small>
                          <strong>Ram Kumar</strong>
                        </div>
                        <div className={mainHomePage.homeRecordsLettersCss}>
                          <small>96%</small>
                          <strong>120 WPM</strong>
                        </div>
                    </li>
                    <li>
                        <div className={mainHomePage.homeNameListCss}>
                          <small>2</small>
                          <strong>Ravi Yadav</strong>
                        </div>
                        <div className={mainHomePage.homeRecordsLettersCss}>
                          <small>90%</small>
                          <strong>100 WPM</strong>
                        </div>
                    </li>
                    <li>
                        <div className={mainHomePage.homeNameListCss}>
                          <small>3</small>
                          <strong>Raghav Verma</strong>
                        </div>
                        <div className={mainHomePage.homeRecordsLettersCss}>
                          <small>80%</small>
                          <strong>90 WPM</strong>
                        </div>
                    </li>
                    <li>
                        <div className={mainHomePage.homeNameListCss}>
                          <small>4</small>
                          <strong>Rashmi Gaur</strong>
                        </div>
                        <div className={mainHomePage.homeRecordsLettersCss}>
                          <small>78%</small>
                          <strong>78 WPM</strong>
                        </div>
                    </li>
                    <li>
                        <div className={mainHomePage.homeNameListCss}>
                          <small>5</small>
                          <strong>Ram Kumar</strong>
                        </div>
                        <div className={mainHomePage.homeRecordsLettersCss}>
                          <small>96%</small>
                          <strong>120 WPM</strong>
                        </div>
                    </li>
                  </ul>
                  <div className={mainHomePage.homeLeaderboardbuttonCss}>
                    <Link href={'/'}>View Full Leaderboard <i className="fa-solid fa-arrow-right-long"></i></Link>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className={mainHomePage.homeLeaderboardImage}>
                  <Image src="/images/contests-cup.png" alt="student features" height={200} width={200}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={mainHomePage.homeLearnTypingCss}>
          <div className="container">
            <div className="row">

            </div>  
          </div>
        </div>
    </section>
  );
}
