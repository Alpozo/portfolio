import './Header.css';
import profilePicture from "../../assets/profile-picture.jpg";   

export const Header = () => {
  return (
        <div className='header-wrapper'>
          <img className="profile-picture" src={profilePicture} alt="Alejandro"></img>
          <p className="text-header">
          Alejandro del Pozo
          </p>
          <p className="text-body-regular">
          Digital Product Designer
          </p>
       </div>
  )
}