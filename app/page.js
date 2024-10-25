'use client'
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
 
// 初始化日志记录器
initLogger();
 
  return (
    <>
      <Header/>
      <BlogList/>
      <Footer />
    </>
  );
}
