"use client"
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import img from "@/assets/signup.webp"
import "../auth.css"

export default function Signup() {
  return (
      <div className="authout">
        <Navbar />
        <div className="authin">
            <div className="left">
                <Image src= {img} alt="signup-image" width="400" height="400" />
            </div>
            <div className="right">
                <h2>Sign Up</h2>
                
                <form style={{
                    display:"flex",
                    flexDirection: "column",
                }}>
                    <div className="forminput_cont">
                        <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="forminput_cont">
                        <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="forminput_cont">
                        <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="forminput_cont">
                        <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" />
                    </div>

                    <button type="submit" className="main_button">Register </button>
                    
                    <p className="authLink">Already have an account? <a href="/auth/signin">Login</a></p>
                </form>
            </div>
        </div>
      </div >
  )
}
