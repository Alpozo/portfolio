import './App.css';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Content } from './screens/Content/Content';
import { Tabs } from './components/Tabs/Tabs';
import { ImageBackground } from './screens/VideoBackground/VideoBackground';

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };


  return (
    <div className="body-wrapper">
      <div className="main-wrapper">
        <Header />
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <Content
          activeTab={activeTab}
          onHoverItem={handleHover}
          onLeaveImage={handleLeave}
        />
      </div>
      <div className="background-wrapper">
        <ImageBackground />
        {hoveredItem && (
          <div className="hovered-image-wrapper">
           {hoveredItem.video ? 
            <video width="auto" height="auto" autoPlay loop muted>
              <source src={hoveredItem.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            :
            <img src={hoveredItem.image} alt=''></img>}

          </div>
        )}
      </div>
    </div>
  );
};