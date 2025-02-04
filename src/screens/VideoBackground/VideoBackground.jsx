import './VideoBackground.css';
import Image from "../../assets/main-background.mp4";


export const ImageBackground = () => {
    return (

        // <img className="background-image" src={Image} alt="Dunas en blanco y negro" />
        <>
            <video autoPlay loop muted playsInline id="background-video">
                <source src={Image} type="video/mp4" />
            </video>
        </>


    );
}

