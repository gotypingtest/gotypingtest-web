import Image from "next/image";
import loginFormCss from "./registrationlogin.module.css";
import Link from 'next/link';

export default function Login() {
  return (
    <section className={loginFormCss.mainLoginPageCss}>
       <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={loginFormCss.mainLoginFormCss}>
               <form>
                <h1>Welcome Back</h1>
                <p>Login to continue your account.</p>
                <div className={loginFormCss.loginFormGroup}>
                  <label htmlFor="email">Email Address</label>
                  <span>
                  <i className="fa-regular fa-envelope"></i>
                  <input type="email" id="email" name="email" required/>
                  </span>
                </div>
                <div className={loginFormCss.loginFormGroup}>
                  <label htmlFor="password" >Password</label>
                  <span>
                    <i className="fa-solid fa-lock"></i>
                   <input type="password" id="password" name="password" required/>
                  </span>
                </div>
                <div className={loginFormCss.loginFormChecklist}>
                  <span>
                    <input type="checkbox" id="rememberme" name="rememberme" />
                    <label htmlFor="rememberme" >Remember Me</label>
                  </span>
                  <Link href={'/'}>Forgot Password?</Link>
                </div>
                <div className={loginFormCss.loginFormButtonCss}>
                  <button type="submit">Login Now</button>
                </div>
               </form>
            </div>
          </div>
        </div>
       </div>
    </section>
  );
}