"use client";

import {useState} from 'react'
import Image from "next/image";
import mainTypingCss from "./typing.module.css";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';


export default function Exams () {
    const [isReadMoreFaq, setIsReadMoreFaq] = useState(false);
    
    const toggleFaqVisibility = () => {
            setIsReadMoreFaq(!isReadMoreFaq);
        };
  return (
        <section className={mainTypingCss.examsPageCss}>
            <div className={mainTypingCss.examsTopCss}>
                <div className='container'>
                    <div className="row">
                    <small>EXAMS</small>
                    <h1>Master Typing for <span>Competitive Exams</span></h1>
                    <p>Improve your typing speed and accuracy with our specialized practice tests designed for various government exams. Get ready to ace the typing test with confidence.</p>
                    <div className={mainTypingCss.examsTopButtonCss}>
                    <Link  href={'/'}>Start Practicing Now</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className={mainTypingCss.examsTypingCss}>
              <div className="container">
                <div className="row">
                  <div className={mainTypingCss.examsTypingHeadCss}>
                    <small>Exam Practice</small>
                    <h2>Practice for <span>Government Exams</span></h2>
                    <p>Prepare for SSC, RRB, DSSSB, Delhi Police and other competitive exams with real exam-style typing tests</p>
                  </div>
                  <ul>
                    <li>
                      <small><Image src="/images/sscl-png.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>SSC CHSL TYPING</h3>
                      <Link href={'/exam-test'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/rrb-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>RRB NTPC TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/dsssb-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>DSSSB JSA TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/kvs-jsa-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>KVS JSA TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/emrs-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>EMRS JSA TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/bsf-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>BSF HCM TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/delhi-police-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>DELHI POLICE TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/rssb-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>RSSB LDC TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    {isReadMoreFaq &&
                        <>
                    <li>
                      <small><Image src="/images/emrs-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>EMRS JSA TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/bsf-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>BSF HCM TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/delhi-police-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>DELHI POLICE TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/rssb-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>RSSB LDC TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/emrs-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>EMRS JSA TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/bsf-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>BSF HCM TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/delhi-police-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>DELHI POLICE TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    <li>
                      <small><Image src="/images/rssb-img.png" alt="Contests features" height={60} width={60}/></small>
                      <h3>RSSB LDC TYPING</h3>
                      <Link href={'/'}>Practice Now</Link>
                    </li>
                    </>}
                    <div className={mainTypingCss.homeLearnTypingallButtonCss}><span onClick={toggleFaqVisibility}>View {isReadMoreFaq ? 'Less' : 'All Exams'} </span></div>
                  </ul>
                </div>  
              </div>
            </div>
            {/* <div className={mainTypingCss.examsTypestCss}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                  <div className={mainTypingCss.examsTypestHeadCss}>
                    <small>Stories</small>
                    <h2>Success <span>Stories</span></h2>
                    <p>Prepare for SSC, RRB, DSSSB, Delhi Police and other competitive exams with real exam-style typing tests</p>
                  </div>
                  <div className={mainTypingCss.examsTypestStoriesCss}>
                      <Swiper
                          modules={[Navigation, A11y]}
                          spaceBetween={20}
                          loop={true}
                          navigation={{
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                          }}
                          breakpoints={{
                              320: {
                                  slidesPerView: 1,
                              },
                              768: {
                                  slidesPerView: 2,
                              },
                              992: {
                                  slidesPerView: 3,
                              },
                              1440: {
                                  slidesPerView: 3,
                              },
                          }}
                      >
                          <SwiperSlide>
                              <div className={mainTypingCss.typestReviewBox}>
                                  <div className={mainTypingCss.typestNameData}>
                                      <small>
                                        <Image priority={false} loading="lazy" src="/images/contests-cup.png" alt="Prakash Gupta - Square Insurance POSP" title="Prakash Gupta - Square Insurance POSP" width={100} height={120} />
                                      <b><i className="fa-solid fa-award"></i></b>
                                      </small>
                                      <span>
                                          <strong>Prakash Gupta</strong>
                                          <abbr>Square Insurance POSP</abbr>
                                      </span>
                                  </div>
                                  <div className={mainTypingCss.reviewDescription}>
                                      <u><i className="fa-solid fa-quote-right"></i></u>
                                      <p>Using Square Insurance&apos;s web portal and mobile app has revolutionized the way I sell insurance policies. It&apos;s incredibly user-friendly and efficient, saving me valuable time on every transaction.</p>
                                      <div className={mainTypingCss.PartnersVideoPart}>
                                          <b>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                          </b>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className={mainTypingCss.typestReviewBox}>
                                  <div className={mainTypingCss.typestNameData}>
                                      <small>
                                        <Image priority={false} loading="lazy" src="/images/contests-cup.png" alt="Mohit Bansal - Square Insurance POSP" title="Mohit Bansal - Square Insurance POSP" width={100} height={120} />
                                      <b><i className="fa-solid fa-award"></i></b>
                                      </small>
                                      <span>
                                          <strong>Mohit Bansal</strong>
                                          <abbr>Square Insurance POSP</abbr>
                                      </span>
                                  </div>
                                  <div className={mainTypingCss.reviewDescription}>
                                      <u><i className="fa-solid fa-quote-right"></i></u>
                                      <p>As a channel partner of Square Insurance, I appreciate the seamless experience provided by their web portal and mobile app. It&apos;s simplified the entire policy buying and renewal process, making it effortless for both me and my clients.</p>
                                      <div className={mainTypingCss.PartnersVideoPart}>
                                          <b>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                          </b>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className={mainTypingCss.typestReviewBox}>
                                  <div className={mainTypingCss.typestNameData}>
                                      <small>
                                        <Image priority={false} loading="lazy" src="/images/contests-cup.png" alt="Arvind Batad - Square Insurance POSP" title="Arvind Batad - Square Insurance POSP" width={100} height={120} />
                                      <b><i className="fa-solid fa-award"></i></b>
                                      </small>
                                      <span>
                                          <strong>Arvind Batad</strong>
                                          <abbr>Square Insurance POSP</abbr>
                                      </span>
                                  </div>
                                  <div className={mainTypingCss.reviewDescription}>
                                      <u><i className="fa-solid fa-quote-right"></i></u>
                                      <p>Thanks to Square Insurance&apos;s innovative platform, I can now focus more on building relationships with my clients rather than getting bogged down in paperwork.</p>
                                      <div className={mainTypingCss.PartnersVideoPart}>
                                          <b>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                          </b>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className={mainTypingCss.typestReviewBox}>
                                  <div className={mainTypingCss.typestNameData}>
                                      <small>
                                        <Image priority={false} loading="lazy" src="/images/contests-cup.png" alt="Ujjwal Tank - Square Insurance POSP" title="Ujjwal Tank - Square Insurance POSP" width={100} height={120} />
                                      <b><i className="fa-solid fa-award"></i></b>
                                      </small>
                                      <span>
                                          <strong>Ujjwal Tank</strong>
                                          <abbr>Square Insurance POSP</abbr>
                                      </span>
                                  </div>
                                  <div className={mainTypingCss.reviewDescription}>
                                      <u><i className="fa-solid fa-quote-right"></i></u>
                                      <p>I&apos;m impressed by the level of support and efficiency provided by Square Insurance technology solutions. Their web portal and mobile app have made it incredibly convenient for me to serve my clients, resulting in increased sales and customer satisfaction.</p>
                                      <div className={mainTypingCss.PartnersVideoPart}>
                                          <b>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                              <i className="fa-solid fa-star"></i>
                                          </b>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>
                      </Swiper>
                      <div className='swiperslider'>
                          <div className="swiper-button-prev"><i className="fa-solid fa-chevron-left"></i></div>
                          <div className="swiper-button-next"><i className="fa-solid fa-chevron-right"></i></div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className={mainTypingCss.dataHistoryCss}>
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
        </section>
   );
}