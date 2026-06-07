import Image from "next/image";
import loginFormCss from "./registrationlogin.module.css";
import Link from 'next/link';

export default function Register() {
  return (
    <section className={loginFormCss.mainLoginPageCss}>
       <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={loginFormCss.mainLoginFormCss}>
               <form >
                <h1>Create Your Account</h1>
                <p>Start improving your typing skills today!</p>
                <div className={loginFormCss.loginFormGroup}>
                  <label htmlFor="fname">Full Name</label>
                  <span>
                  <i className="fa-regular fa-user"></i>
                  <input type="fname" id="fname" name="fname" placeholder="Enter your name" required/>
                  </span>
                </div>
                <div className={loginFormCss.loginFormGroup}>
                  <label htmlFor="email">Email Address</label>
                  <span>
                  <i className="fa-regular fa-envelope"></i>
                  <input type="email" id="email" name="email" placeholder="Enter email " required/>
                  </span>
                </div>
                <div className={loginFormCss.loginFormGroup}>
                  <label htmlFor="number">Mobile Number</label>
                  <span>
                  <i className="fa-solid fa-phone"></i>
                  <input type="tel" id="number" name="number" placeholder="Enter Mobile Number" maxLength={10} inputMode="numeric" required/>
                  </span>
                </div>
                <div className={loginFormCss.loginFormGroup}>
                  <label htmlFor="password" >Password</label>
                  <span>
                    <i className="fa-solid fa-lock"></i>
                   <input type="password" id="password" name="password" placeholder="Password" required/>
                  </span>
                </div>
                <div className={loginFormCss.loginFormChecklist}>
                  <span>
                    <input type="checkbox" id="rememberme" name="rememberme" />
                    <label htmlFor="rememberme" >I agree to the <Link href={'/'}>Terms of Service</Link> and <Link href={'/'}>Privacy Policy</Link></label>
                  </span>
                </div>
                <div className={loginFormCss.loginFormButtonCss}>
                  <button type="submit">Register Now</button>
                </div>
                <div className={loginFormCss.mainLoginOtherCss}>
                      <span>Already have an account? <Link href="/login">Login here</Link></span>
                </div>
               </form>
            </div>
          </div>
        </div>
       </div>
    </section>
  );
}