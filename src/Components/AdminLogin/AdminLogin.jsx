import React, { useState } from 'react'
import "./AdminLogin.css"
import { Link } from 'react-router-dom'

const AdminLogin = () => {
    const [container,setContainer] = useState('')
  return (
    <div className ={`container ${container}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title" >Admin Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid"  />

            <Link to={"/buyer_login"}><p>Or Sign in as a Buyer</p></Link>
            <Link to={"/user_login"}><p>Or Sign in as an Seller</p></Link>

            {/* <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>


          <form action="" className="sign-up-form">
            <h2 className="title" > Admin Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />

            <Link to={"/buyer_login"}><p>Or Sign in as a Buyer</p></Link>
            <Link to={"/user_login"}><p>Or Sign in as an Seller</p></Link>

            {/* <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>
        </div>
      </div>
      <div className="panels-container">

        <div className="panel left-panel">
            <div className="login_content">
                <h3>New here?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
                <button className="btn transparent" id="sign-up-btn" onClick={() => setContainer('sign-up-mode')}>Sign Up</button>
            </div>
            <img src="./img/log.svg" className="image" alt="" />
        </div>

        <div className="panel right-panel">
            <div className="login_content">
                <h3>One of us?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
                <button className="btn transparent" id="sign-in-btn" onClick={() => setContainer('')}>Sign In</button>
            </div>
            <img src="./img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdminLogin