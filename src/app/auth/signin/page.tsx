"use client"
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import img from "@/assets/signin.jpg"
import "../auth.css"

export default function Signin() {
  return (
      <div className="authout">
        <Navbar />
        <div className="authin">
            <div className="left">
                <Image src= {img} alt="signup-image" width="400" height="400" />
            </div>
            <div className="right">
                <h2>Welcome Back to your Blog content</h2>
                
                <form style={{
                    display:"flex",
                    flexDirection: "column",
                }}>
                    <div className="forminput_cont">
                        <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="forminput_cont">
                        <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                    </div>

                    <div className="remember_cont">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>

                    <button type="submit" className="main_button">Login </button>
                    
                    <p className="authLink">Don't have an account? <a href="/auth/signup">Register</a></p>
                </form>
            </div>
        </div>
      </div >
  )
}
