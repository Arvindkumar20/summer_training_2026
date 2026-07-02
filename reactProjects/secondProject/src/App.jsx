import React from "react";
import Form from "./components/common/Form";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import ImageCard from "./components/common/ImageCard";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="h-screen w-full flex items-center justify-center gap-20 ">
        <Form />
        <ImageCard />
      </div>
      <Footer />
    </>
  );
}
