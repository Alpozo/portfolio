import './Connect.css';
import {ModalCell} from  '../../../components/ModalCell/ModalCell';

export const Connect = () => {
  return (
      <div className='list-wrapper'>
            <p className='connect-txt font-body-regular'>I'm always open to new opportunities, adventures, or friends. If you have something to share, reach me out!</p>
            <ModalCell title="Calendy" subtitle="Let’s meet each other on a 30’ call" link={"http://www.google.com"}/>
            <ModalCell title="seriously@alejandro.wtf" subtitle="Send me an email" link={"http://www.google.com"}/>
            <ModalCell title="LinkedIn" subtitle="Write me a message" link={"http://www.google.com"}/>
            <ModalCell title="Instagram" subtitle="Take a look to my photos" link={"http://www.google.com"}/>
       </div>
  )
}