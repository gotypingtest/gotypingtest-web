"use client";

import {useState} from 'react'
import Image from "next/image";
import mainExamsCss from "./examscss.module.css";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';


export default function Typingtest () {

  return (
        <section className={mainExamsCss.examsTypingResultCss}>
            <div className={mainExamsCss.examsTypingHead}>
              <div className={mainExamsCss.examsTypingHeading}>
                  <h2>SSC CHSL Typing — Test 1</h2>
                  <p>English Typing · Required: 35 WPM · 95% Accuracy</p>
              </div>
              <div className={mainExamsCss.examsTypingNameTiming}>
                  <div className={mainExamsCss.examsTypingNameDetails}>
                    <small>Candidate</small>
                    <strong>Himanshu Sharma</strong>
                  </div>
                  <div className={mainExamsCss.examsTypingTiming}>
                    <small>Time Left</small>
                    <strong>10:00</strong>
                  </div>
              </div>
            </div>
            <div className={`container ${mainExamsCss.examsTypingCardHead}`}>
              <div className='row'>
                <div className='col-md-8 mx-auto p-5'>
                  <div className={mainExamsCss.examsTypingCandidateCard}>
                    <div className={mainExamsCss.examsTypingCandidateDetails}>
                        <strong>H</strong>
                        <h2>
                          <small>Candidate Name</small>
                          <b>Himanshu Sharma</b>
                        </h2>
                    </div>
                    <div className={mainExamsCss.examsTypingTimeRemain}>
                        <small>Time Remaining</small>
                        <strong>10:00</strong>
                    </div>
                  </div>
                  <div className={mainExamsCss.examsTypingPara}>
                    <p> SSC CHSL typing test will be conducted by staff selection board (SSC)
                      SSC CHSL typing requires a minimum speed of 35 w.p.m. for English
                      or 30 w.p.m. for Hindi for a duration of 10 minutes. The test is
                      mandatory for qualifying and is conducted on a computer. While no
                      marks are awarded, candidates must meet the speed requirements and
                      maintain high accuracy. SSC CHSL typing test 2025 is required so as
                      to qualify for the final selection.</p>
                  </div>
                  <div className={mainExamsCss.examsTypingInput}>
                    <textarea className="exam-input" rows={5} placeholder="Start typing here..." spellCheck={false} autoCorrect="off" autoComplete="off" autoCapitalize="off"></textarea>
                  </div>
                  <div className={mainExamsCss.examsTypingControllBar}>
                    <div className={mainExamsCss.examsTypingFontSize}>
                        <button id="decreaseFontBtn">A +</button>
                        <button id="increaseFontBtn">A -</button>
                    </div>
                    <div className={mainExamsCss.examsTypingBarButton}>
                        <div className={mainExamsCss.examsTypingProgBar}>
                          <div className={mainExamsCss.examsTypingProgScale}></div>
                        </div>
                        <div className={mainExamsCss.examsTypingProgPresnts}>0%</div>
                        <button className={mainExamsCss.examsTypingbutton}><i className="fa-solid fa-play"></i> Start Test</button>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
   );
}