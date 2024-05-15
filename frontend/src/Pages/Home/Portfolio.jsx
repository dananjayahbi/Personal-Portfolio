import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import Workspace from "../../Images/ProjectMainImages/Workspace.png";
import WordsCounter from "../../Images/ProjectMainImages/WordsCounter.png";
import TorrentsDirect from "../../Images/ProjectMainImages/TorrentsDirect.png";
import FitnessSocial from "../../Images/ProjectMainImages/FitnessSocial.png";
import Ecommerce from "../../Images/ProjectMainImages/Ecommerce.png";
import EcoLite from "../../Images/ProjectMainImages/EcoLite.png";
import CompCollectionApp from "../../Images/ProjectMainImages/CompCollectionApp.png";
import ChatOpenAI from "../../Images/ProjectMainImages/ChatOpenAI.png";
import ChatGemini from "../../Images/ProjectMainImages/ChatGemini.png";
import ViewModal from "./ViewModal";

//Import gallery images
// Workspace-ITP
import ImgId1in1 from "../../Images/GalleryImages/Workspace-ITP/1.png";
import ImgId1in2 from "../../Images/GalleryImages/Workspace-ITP/2.png";
import ImgId1in3 from "../../Images/GalleryImages/Workspace-ITP/3.png";
import ImgId1in4 from "../../Images/GalleryImages/Workspace-ITP/4.png";
import ImgId1in5 from "../../Images/GalleryImages/Workspace-ITP/5.png";
import ImgId1in6 from "../../Images/GalleryImages/Workspace-ITP/6.png";
import ImgId1in7 from "../../Images/GalleryImages/Workspace-ITP/7.png";
import ImgId1in8 from "../../Images/GalleryImages/Workspace-ITP/8.png";
import ImgId1in9 from "../../Images/GalleryImages/Workspace-ITP/9.png";
import ImgId1in10 from "../../Images/GalleryImages/Workspace-ITP/10.png";

// Words-counter
import ImgId2in1 from "../../Images//GalleryImages/Words-counter/1.png";
import ImgId2in2 from "../../Images//GalleryImages/Words-counter/2.png";

// Torrents-Direct
import ImgId3in1 from "../../Images/GalleryImages/Torrentsa-direct-download/1.png";

// Fitness-Social
import ImgId4in1 from "../../Images/GalleryImages/PAF/1.png";
import ImgId4in2 from "../../Images/GalleryImages/PAF/2.png";
import ImgId4in3 from "../../Images/GalleryImages/PAF/3.png";
import ImgId4in4 from "../../Images/GalleryImages/PAF/4.png";
import ImgId4in5 from "../../Images/GalleryImages/PAF/5.png";
import ImgId4in6 from "../../Images/GalleryImages/PAF/6.png";

// Ecommerce
import ImgId5in1 from "../../Images/GalleryImages/Ecommerce-platform/1.png";
import ImgId5in2 from "../../Images/GalleryImages/Ecommerce-platform/2.png";
import ImgId5in3 from "../../Images/GalleryImages/Ecommerce-platform/3.png";
import ImgId5in4 from "../../Images/GalleryImages/Ecommerce-platform/4.png";
import ImgId5in5 from "../../Images/GalleryImages/Ecommerce-platform/5.png";
import ImgId5in6 from "../../Images/GalleryImages/Ecommerce-platform/6.png";
import ImgId5in7 from "../../Images/GalleryImages/Ecommerce-platform/7.png";
import ImgId5in8 from "../../Images/GalleryImages/Ecommerce-platform/8.png";
import ImgId5in9 from "../../Images/GalleryImages/Ecommerce-platform/9.png";

// EcoLite
import ImgId6in1 from "../../Images/GalleryImages/Ecolite/1.png";
import ImgId6in2 from "../../Images/GalleryImages/Ecolite/2.png";
import ImgId6in3 from "../../Images/GalleryImages/Ecolite/3.png";
import ImgId6in4 from "../../Images/GalleryImages/Ecolite/4.png";
import ImgId6in5 from "../../Images/GalleryImages/Ecolite/5.png";
import ImgId6in6 from "../../Images/GalleryImages/Ecolite/6.png";

// CompCollectionApp
import ImgId7in1 from "../../Images/GalleryImages/Components-collection-app/1.png";
import ImgId7in2 from "../../Images/GalleryImages/Components-collection-app/2.png";
import ImgId7in3 from "../../Images/GalleryImages/Components-collection-app/3.png";
import ImgId7in4 from "../../Images/GalleryImages/Components-collection-app/4.png";
import ImgId7in5 from "../../Images/GalleryImages/Components-collection-app/5.png";
import ImgId7in6 from "../../Images/GalleryImages/Components-collection-app/6.png";
import ImgId7in7 from "../../Images/GalleryImages/Components-collection-app/7.png";
import ImgId7in8 from "../../Images/GalleryImages/Components-collection-app/8.png";
import ImgId7in9 from "../../Images/GalleryImages/Components-collection-app/9.png";

// ChatOpenAI
import ImgId8in1 from "../../Images/GalleryImages/Chatbot-with-OpenAI-API/1.png";

// ChatGemini
import ImgId9in1 from "../../Images/GalleryImages/Chatbot-with-Gemini-API/1.png";
import ImgId9in2 from "../../Images/GalleryImages/Chatbot-with-Gemini-API/2.png";


const Portfolio = () => {
  const [viewModal, setViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  // Array for workspace
  const [workspaceImages, setWorkspaceImages] = useState([
    ImgId1in1,
    ImgId1in2,
    ImgId1in3,
    ImgId1in4,
    ImgId1in5,
    ImgId1in6,
    ImgId1in7,
    ImgId1in8,
    ImgId1in9,
    ImgId1in10,
  ]);

  // Array for words-counter
  const [wordsCounterImages, setWordsCounterImages] = useState([ImgId2in1, ImgId2in2]);

  // Array for torrents-direct
  const [torrentsDirectImages, setTorrentsDirectImages] = useState([ImgId3in1]);

  // Array for fitness-social
  const [fitnessSocialImages, setFitnessSocialImages] = useState([
    ImgId4in1,
    ImgId4in2,
    ImgId4in3,
    ImgId4in4,
    ImgId4in5,
    ImgId4in6,
  ]);

  // Array for ecommerce
  const [ecommerceImages, setEcommerceImages] = useState([
    ImgId5in1,
    ImgId5in2,
    ImgId5in3,
    ImgId5in4,
    ImgId5in5,
    ImgId5in6,
    ImgId5in7,
    ImgId5in8,
    ImgId5in9,
  ]);

  // Array for ecolite
  const [ecoliteImages, setEcoliteImages] = useState([
    ImgId6in1,
    ImgId6in2,
    ImgId6in3,
    ImgId6in4,
    ImgId6in5,
    ImgId6in6,
  ]);

  // Array for components-collection-app
  const [componentsCollectionAppImages, setComponentsCollectionAppImages] = useState([
    ImgId7in1,
    ImgId7in2,
    ImgId7in3,
    ImgId7in4,
    ImgId7in5,
    ImgId7in6,
    ImgId7in7,
    ImgId7in8,
    ImgId7in9,
  ]);

  // Array for chatbot-with-OpenAI-API
  const [chatbotWithOpenAIImages, setChatbotWithOpenAIImages] = useState([ImgId8in1]);

  // Array for chatbot-with-Gemini-API
  const [chatbotWithGeminiImages, setChatbotWithGeminiImages] = useState([ImgId9in1, ImgId9in2]);

  const portfolioItems = [
    {
      id: 1,
      image: Workspace,
      topic: "Project Management System",
      description: "A project management system that helps you manage your projects and tasks efficiently.",
      galaryArray: workspaceImages,
    },
    {
      id: 2,
      image: WordsCounter,
      topic: "Words Counter App",
      description: "A simple words counter app that counts the number of words in a given text excluding spaces and special characters.",
      galaryArray: wordsCounterImages,
    },
    {
      id: 3,
      image: TorrentsDirect,
      topic: "Torrents Direct Download App",
      description: "A torrents direct download app that allows you to download torrents directly. (Backend)",
      galaryArray: torrentsDirectImages,
    },
    {
      id: 4,
      image: FitnessSocial,
      topic: "Fitness Social Media App",
      description: "A fitness social media app that helps you connect with other fitness enthusiasts.",
      galaryArray: fitnessSocialImages,
    },
    {
      id: 5,
      image: Ecommerce,
      topic: "Ecommerce Dashboard",
      description: "An ecommerce dashboard that helps you manage your ecommerce store efficiently.",
      galaryArray: ecommerceImages,
    },
    {
      id: 6,
      image: EcoLite,
      topic: "EcoLite Garbage Collection App",
      description: "An EcoLite garbage collection app that helps you manage your garbage collection efficiently.",
      galaryArray: ecoliteImages,
    },
    {
      id: 7,
      image: CompCollectionApp,
      topic: "Components Management app",
      description: "A components management app that helps you manage your web components efficiently.",
      galaryArray: componentsCollectionAppImages,
    },
    {
      id: 8,
      image: ChatOpenAI,
      topic: "Chatbot with OpenAI API",
      description: "A chatbot that uses the OpenAI API to generate responses to user queries.",
      galaryArray: chatbotWithOpenAIImages,
    },
    {
      id: 9,
      image: ChatGemini,
      topic: "Chatbot with Gemini API",
      description: "A chatbot that uses the Gemini API to generate responses to user queries.",
      galaryArray: chatbotWithGeminiImages,
    },
    // Add more portfolio items here
  ];

  const handleViewModal = (item) => {
    setSelectedItem(item);
    setViewModal(!viewModal);
  };

  const handleModalClose = () => {
    setViewModal(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#0a101e",
        minHeight: "100vh", // Adjusted height for responsiveness
        fontFamily: "sans-serif",
        padding: "50px 20px", // Adjusted padding for responsiveness
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        <span
          style={{
            color: "#fec544",
            fontSize: "clamp(24px, 6vw, 32px)",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          PORTFOLIO
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              cover={
                <img
                  alt={item.topic}
                  src={item.image}
                  style={{ height: 250, objectFit: "cover" }}
                />
              }
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card.Meta title={item.topic} />
                <Button
                  type="primary"
                  style={{
                    marginTop: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100px",
                    color: "#7a827c",
                  }}
                  onClick={() => handleViewModal(item)}
                >
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <ViewModal visible={viewModal} onCancel={handleModalClose} item={selectedItem} />
    </div>
  );
};

export default Portfolio;
