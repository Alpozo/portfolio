import './Content.css';
import { Featured } from './Featured/Featured';
import { Experience } from './Experience/Experience';
import { About } from './About/About';
import { Connect } from './Connect/Connect';

export const Content = ({ activeTab, onHoverItem, onLeaveImage }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Featured onHoverItem={onHoverItem} onLeaveImage={onLeaveImage} />;
      case 1:
        return <Experience />;
      case 2:
        return <About />;
      case 3:
        return <Connect />;
      default:
        return null;
    }
  };

  return <div className="content-wrapper">{renderContent()}</div>;
};