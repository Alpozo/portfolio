import './App.css';
import './screens/Articles/articles.css';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Content } from './screens/Content/Content';
import { Article } from './screens/Article/Article';
import { Tabs } from './components/Tabs/Tabs';
import { Carousel } from './components/Carousel/Carousel';
import { ImageBackground } from './screens/VideoBackground/VideoBackground';
import { TABS } from './components/Tabs/constants';
import { addQueryParam } from './utils/queryParams'

import { CookieBanner } from './components/CookieBanner/CookieBanner';


export const App = () => {
  const params = new URLSearchParams(window.location.search);
  const tabURL = params.get("view");
  const postURL = params.get("post");

  const [ activeTab, setActiveTab ] = useState(Math.max(TABS.findIndex((tab) => tab === tabURL), 0));
  const [ isAnimating, setIsAnimating ] = useState(false);
  const [ hoveredItem, setHoveredItem ] = useState(null);
  const [ isModalOpen, setIsModalOpen ] = useState(!!postURL)
  const [ article, setArticle ] = useState('')

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  const animate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }

  const onTabChange = (currentTab) => {
    setActiveTab(currentTab)
    addQueryParam("view", TABS[ currentTab ])
    animate()
  }

  const NotionFile = () => {
    hoveredItem?.fileType === 'mp4'
      ?
      <video width="auto" height="auto" autoPlay loop muted>
        <source src={hoveredItem?.file} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      :
      <img src={hoveredItem?.file} alt='' />
  }

  const LocalFile = () => {
    return hoveredItem?.localFile?.video
      ?
      <video width="auto" height="auto" autoPlay loop muted>
        <source src={hoveredItem?.localFile?.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      :
      <img src={hoveredItem?.localFile?.image} alt='' />
  }


  document.body.addEventListener("pointermove", (e) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 2);
    el.style.setProperty('--posY', y - t - h / 2);
  })




  return (
    <>
      <div className="body-wrapper">
        <div className="main-wrapper">
          <Header />
          <Tabs activeTab={activeTab} onTabChange={onTabChange} />
          <Content
            activeTab={activeTab}
            isAnimating={isAnimating}
            onHoverItem={handleHover}
            onLeaveImage={handleLeave}
            handleIsModalOpen={setIsModalOpen}
            setArticle={setArticle}
          />
        </div>
        <div className="background-wrapper">
          <ImageBackground />
          {hoveredItem && (
            <div className="hovered-image-wrapper">
              {hoveredItem?.localFile ? <LocalFile /> : <NotionFile />}
            </div>
          )}
          {activeTab === 2 && <Carousel />}
        </div>
      </div>
      <Article article={article} isModalOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />

      {/* Banner de cookies */}
      <CookieBanner />
    </>
  );
};