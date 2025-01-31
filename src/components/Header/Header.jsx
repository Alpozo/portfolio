import './Header.css';
import profilePicture from "../../assets/profile-picture.jpg";

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <a href='https://alpozo.github.io/portfolio/'>
        {/* <img className="profile-picture" src={profilePicture} alt="Alejandro"></img> */}
        <div>
          <p className="text-header">
            Alejandro del Pozo
          </p>
          <p className="text-body-regular">
            Digital Product Designer
          </p>
        </div>
      </a>
    </div>
  )
}