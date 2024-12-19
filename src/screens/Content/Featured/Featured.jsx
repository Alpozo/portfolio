import './Featured.css';
import {Cell} from  '../../../components/Cell/Cell';

export const Featured = () => {
  return (
      <div className='list-wrapper'>
          <Cell title="Find the right problem to solve" subtitle="Problem framing, Campainge" link={"http://www.google.com"}/>
          <Cell title="Business Insights Dashboard" subtitle="Data visualization, Marketplace"/>
          <Cell title="Multimodal Mobility App" subtitle="User research, Safari testing"/>
          <Cell title="Illustration System" subtitle="Design System, Illustration"/>
          {/* <Cell title="Find the right problem to solve" subtitle="Problem framing, Campainge" link={"http://www.google.com"}/>
          <Cell title="Business Insights Dashboard" subtitle="Data visualization, Marketplace"/>
          <Cell title="Multimodal Mobility App" subtitle="User research, Safari testing"/>
          <Cell title="Illustration System" subtitle="Design System, Illustration"/>         
          <Cell title="Find the right problem to solve" subtitle="Problem framing, Campainge" link={"http://www.google.com"}/>
          <Cell title="Business Insights Dashboard" subtitle="Data visualization, Marketplace"/>
          <Cell title="Multimodal Mobility App" subtitle="User research, Safari testing"/>
          <Cell title="Illustration System" subtitle="Design System, Illustration"/>                */}
       </div>
  )
}