import { useNavigate } from "react-router-dom";
import { UilStethoscopeAlt } from '@iconscout/react-unicons'
import video from '../assets/video.mp4';
// import Login from "../components/register";
// import token from "../utils/rough";
const MainPage = () => {

  //   const handleBackClick = () => eventRef.current.scrollIntoView({ behavior: "smooth" });
  let navigate = useNavigate();

  return (
    <div className="main-page">
      <div className="main-header">
        <div className="main-header-sf">
          <UilStethoscopeAlt className="main-header-icon" />OMCS
        </div>
        <div className="main-btns">
          <div className="main-title-btn link" onClick={() => navigate("/omcs/hospitals")}>
            Hospitals
          </div>
          <div className="main-title-btn link" onClick={() => navigate("/omcs/register/doctor")}>
            Doctor Register
          </div>
          <div className="main-title-btn link" onClick={() => navigate("/omcs/register/patient")}>
            Patient Register
          </div>
          <div className="main-title-btn link" onClick={() => navigate("/omcs/login")}>
            Login
          </div>
        </div>

      </div>
      <div className="main-title">

        {/* <video className='videoTag' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video> */}
        
        {/* <svg viewBox="0 0 600 300">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="50%" dy=".35em">Interstellar</text>
  </symbol>
  <use xlinkHref="#s-text" />
  <use xlinkHref="#s-text" />
  <use xlinkHref="#s-text" />
  <use xlinkHref="#s-text" />
  <use xlinkHref="#s-text" />
</svg> */}

        
        <div className="bg_move">
          <i className="fas fa-palette"></i>
          <h1 >Welcome to MedBud</h1>
        </div>
      </div>

    </div>
  );
}

export default MainPage;