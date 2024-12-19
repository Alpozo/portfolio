import './Content.css';
import { Featured } from './Featured/Featured';

export const Content = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Featured />; // Contenido de la pestaña "Featured"
      case 1:
        return <div>Experience Content</div>; // Contenido de la pestaña "Experience"
      case 2:
        return <div>About Content</div>; // Contenido de la pestaña "About"
      case 3:
        return <div>Connect Content</div>; // Contenido de la pestaña "Connect"
      default:
        return null;
    }
  };

  return <div className="content-wrapper">{renderContent()}</div>;
};