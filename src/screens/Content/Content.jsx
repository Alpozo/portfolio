import './Content.css';
import { Experience } from './Experience/Experience';
import { About } from './About/About';
import { Connect } from './Connect/Connect';
import { Projects } from './Projects/Projects';

export const Content = ({ activeTab, isAnimating, onHoverItem, onLeaveImage }) => {
  const TABS = {
    0: <Projects onHoverItem={onHoverItem} onLeaveImage={onLeaveImage} />,
    1: <Experience />,
    2: <About />,
    3: <Connect />
  }

  return (
    <div className={`content-wrapper ${isAnimating ? 'fade-in-move-up' : ''}`}>
      {TABS[ activeTab ]}
    </div>
  );
};