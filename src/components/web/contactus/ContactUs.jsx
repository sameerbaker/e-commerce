// src/component/contactus/ContactUs.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ContactUs.css'; // Import the CSS file
import TagCloud from "TagCloud";


const TextSphere = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "FACEBOOK",
      "INSTAGRAM",
      "TWITTER",
      "YOUTUBE",
      "LINKEDIN",
      "EMAIL",
      "PHONE",
      "GITHUB",
      "PRPORTFOLIO"
    ];

    const options = {
      radius: 250, // Adjust radius for better visibility
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    try {
      TagCloud(container, texts, options);
    } catch (error) {
      console.error("TagCloud failed to initialize:", error);
    }

    // Attach click event listener to each tag after the TagCloud is created
    // Using setTimeout to ensure tags are rendered
    setTimeout(() => {
      const tagElements = document.querySelectorAll(".tagcloud span");
      tagElements.forEach((tag) => {
        tag.style.cursor = "pointer";
        tag.onclick = () => {
          handleNavigation(tag.innerText);
        };
      });
    }, 500);

    return () => {
      // Cleanup if necessary (optional)
    };
  }, [navigate]);

  const handleNavigation = (label) => {
    switch (label) {
      case "FACEBOOK":
        navigate("/Facebook");
        break;
      case "INSTAGRAM":
        navigate("/Instagram");
        break;
      case "TWITTER":
        navigate("/Twitter");
        break;
      case "YOUTUBE":
        navigate("/Youtube");
        break;
      case "LINKEDIN":
        navigate("/Linkedin");
        break;
      case "EMAIL":
        navigate("/Email");
        break;
      case "PHONE":
        navigate("/Phone");
        break;
      case "GITHUB":
        navigate("/Github");
        break;
      case "PRPORTFOLIO":
        navigate("/Prportfolio");
        break;
      // Add additional cases for other labels if needed
      default:
        navigate("/");
        break;
    }
  };

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
