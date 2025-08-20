"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar/Navbar"

export default function AddBlog() {
  const [blogName, setBlogName] = useState("")
  const [blogContent, setBlogContent] = useState("")
  const [blogImage, setBlogImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setBlogImage(file)
      
      // Create a preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the data to your backend
    console.log({
      blogName,
      blogContent,
      blogImage
    })
    
    // Reset form after submission
    setBlogName("")
    setBlogContent("")
    setBlogImage(null)
    setImagePreview(null)
  }

  return (
    <div>
      <Navbar />
      <div className="addblog">
        <h1 className="head1">Add New Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="forminput_cont">
            <label>Blog Name: </label>
            <input 
              type="text" 
              placeholder="Enter Blog Title" 
              value={blogName}
              onChange={(e) => setBlogName(e.target.value)}
              required 
            />
          </div>

          <div className="forminput_cont">
            <label>Blog Content: </label>
            <textarea 
              placeholder="Enter Blog Content" 
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
              required 
            />
          </div>

          <div className="forminput_cont">
            <label>Blog Image: </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              required 
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>
          
          <button type="submit" className="main_button">
            Publish Blog
          </button>
        </form>
      </div>
      
      <style jsx>{`
        :root {
          --col1: #ffde59;
          --col2: #ffde592b;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .addblog {
          padding: 2rem;
          background-color: #f9f9f9;
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .head1 {
          font-size: 30px;
          font-weight: 500;
          font-family: 'Courier New', Courier, monospace;
          color: black;
          margin-bottom: 1.5rem;
        }
        
        form {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 70%;
          min-width: 250px;
          display: flex;
          flex-direction: column;
        }
        
        .forminput_cont {
          display: flex;
          flex-direction: column;
          margin: 10px 0px;
          gap: 10px;
        }
        
        .forminput_cont label {
          font-family: 'Times New Roman', Times, serif;
          font-weight: bold;
          font-size: 1.2rem;
          color: darkblue;
          margin-top: 0.7rem;
        }
        
        .forminput_cont input {
          font-family: 'Times New Roman', Times, serif;
          color: cadetblue;
          font-size: 1.2rem;
          padding: 1rem 2rem;
          border-radius: 0.2rem;
          border: none;
          width: 100%;
          border: 1px solid var(--col1);
        }
        
        .forminput_cont textarea {
          font-family: 'Times New Roman', Times, serif;
          color: #333;
          font-size: 1.2rem;
          padding: 1rem 2rem;
          border-radius: 0.2rem;
          background-color: white;
          border: 1px solid var(--col1);
          width: 100%;
          min-height: 300px;
          resize: vertical;
        }
        
        .forminput_cont input:focus,
        .forminput_cont textarea:focus {
          outline: none;
          box-shadow: 0px 0px 10px 0px var(--col1);
        }
        
        .main_button {
          font-family: 'Times New Roman', Times, serif;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          padding: 15px 32px;
          border: none;
          border-bottom: 1px solid var(--col1);
          width: fit-content;
          align-self: center;
          background-color: var(--col1);
          color: blue;
          margin: 10px;
          cursor: pointer;
        }
        
        .main_button:hover {
          border: 1px solid var(--col1);
          background-color: var(--col1);
          border-radius: 10px;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        
        .image-preview {
          margin-top: 10px;
        }
        
        .image-preview img {
          max-width: 200px;
          max-height: 200px;
          border: 2px solid var(--col1);
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}