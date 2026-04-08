import React, { useEffect, useState } from "react";
import desktopVideo from "../images/welcome.mp4";
import mobileVideo from "../images/mobile.mp4";
import Nav from "./nav";
import "../css/main.css";

const Main_App = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    document.body.classList.add("video-playing");

    const timer = setTimeout(() => {
      setShowVideo(false);
      document.body.classList.remove("video-playing");
    }, 5000); 

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("video-playing");
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <div>
      <div className={`video-overlay ${!showVideo ? "hide" : ""}`}>
        <video
          src={isMobile ? mobileVideo : desktopVideo}
          autoPlay
          muted
          playsInline
          className="responsive-video"
        />
      </div>
      {!showVideo && <Nav />}
    </div>
  );
};

export default Main_App;
