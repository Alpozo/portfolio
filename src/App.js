import './App.css';
import './screens/Articles/articles.css';

import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Content } from './screens/Content/Content';
import { Tabs } from './components/Tabs/Tabs';
import { ImageBackground } from './screens/VideoBackground/VideoBackground';
import { TABS } from './components/Tabs/constants';
import { addQueryParam } from './utils/queryParams'


export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const urlTab = params.get("tab");
  const [ activeTab, setActiveTab ] = useState(TABS.findIndex((tab) => tab === urlTab) || 0);

  const [ hoveredItem, setHoveredItem ] = useState(null);

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  const onTabChange = (currentTab) => {
    setActiveTab(currentTab)
    addQueryParam("tab", TABS[ currentTab ])
  }

  return (
    <>
      <div className="body-wrapper">

        <div className="main-wrapper">
          <Header />
          <Tabs activeTab={activeTab} onTabChange={(currentTab) => onTabChange(currentTab)} />

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
              {hoveredItem.fileType === 'mp4' ?
                <video width="auto" height="auto" autoPlay loop muted>
                  <source src={hoveredItem?.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                :
                <img src={hoveredItem?.file} alt='' />}

            </div>
          )}
        </div>
      </div>
    </>
  );
};