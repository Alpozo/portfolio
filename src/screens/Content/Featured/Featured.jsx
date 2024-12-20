import './Featured.css';
import {ModalCell} from  '../../../components/ModalCell/ModalCell';

export const Featured = () => {
  return (
      <div className='list-wrapper'>
          <ModalCell title="Find the right problem to solve" subtitle="Problem framing, Campainge" link={"http://www.google.com"}/>
          <ModalCell title="Business Insights Dashboard" subtitle="Data visualization, Marketplace"/>
          <ModalCell title="Multimodal Mobility App" subtitle="User research, Safari testing"/>
          <ModalCell title="Illustration System" subtitle="Design System, Illustration"/>
       </div>
  )
}