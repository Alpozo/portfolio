import './Featured.css';
import { ModalCell } from '../../../components/ModalCell/ModalCell';
import Insights from '../../../assets/featured/insights.mp4'
import Wondo from '../../../assets/featured/wondo.mp4'
import Ontruck from '../../../assets/featured/illustration.gif'

export const Featured = ({ onHoverItem, onLeaveImage }) => {
  const items = [
    {
      title: "Find the right problem to solve",
      subtitle: "Problem framing, Campaign",
      video: Insights,
    },
    {
      title: "Business Insights Dashboard",
      subtitle: "Data visualization, Marketplace",
      video: Insights,
    },
    {
      title: "Multimodal Mobility App",
      subtitle: "User research, Safari testing",
      video: Wondo,
    },
    {
      title: "Illustration System",
      subtitle: "Design System, Illustration",
      image: Ontruck,
    },
  ];

  return (
    <div className="list-wrapper">
      {items.map((item, index) => (
        <div key={index} onMouseEnter={() => onHoverItem(item)} onMouseLeave={onLeaveImage}>
          <ModalCell title={item.title} subtitle={item.subtitle} />
        </div>
      ))}
    </div>
  );
};