import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import CatergorySlider from "@/components/Categories/CategorySlider";
import BlogsSlider from "@/components/blockCards/BlogsSlider";

export default function Home() {
  return (
      <main>
        <Navbar />
        <HomeSlider />
        <CatergorySlider />
        <BlogsSlider/>
        <h1>-----Footer-----</h1>
      </main>
  )
}
