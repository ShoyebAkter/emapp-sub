import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

const Buttons = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [fbClicked, setFbClicked] = useState(false);
  const [linkedinClicked, setlinkedinClicked] = useState(false);
  const [tiktokClicked, settiktokClicked] = useState(false);
  const [youtubeClicked, setyoutubeClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleFbClick = () => {
    setFbClicked(!fbClicked);
  };

  const loginToYoutube = () => {
    setyoutubeClicked(!youtubeClicked);
    // window.location.href =`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:5173/socialmedia&response_type=token&client_id=${import.meta.env.VITE_REACT_APP_OAUTH_CLIENT_ID}`
  };

  const logInToLinkedin = () => {
    setlinkedinClicked(!linkedinClicked);
  };
  const selectAll = () => {
    setFbClicked(!fbClicked);
    setIsClicked(!isClicked);
    setlinkedinClicked(!linkedinClicked);
    settiktokClicked(!tiktokClicked);
    setyoutubeClicked(!youtubeClicked);
  };

  return (
    <div className="flex justify-around mt-10  mx-32">
      <div
        onClick={handleClick}
        style={{
          backgroundColor: isClicked ? "#4c4c4c" : "#F9F9F9",
          color: isClicked ? "#ffffff" : "#000000",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaInstagram /> Instagram
      </div>
      <div
        onClick={handleFbClick}
        style={{
          backgroundColor: fbClicked ? "#4c4c4c" : "#F9F9F9",
          color: fbClicked ? "#ffffff" : "#000000",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaFacebookF /> Facebook
      </div>
      <div
        onClick={logInToLinkedin}
        style={{
          backgroundColor: linkedinClicked ? "#4c4c4c" : "#F9F9F9",
          color: linkedinClicked ? "#ffffff" : "#000000",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <CiLinkedin /> Linkedin
      </div>
      <div
        // onClick={loginToTiktok}
        style={{
          backgroundColor: tiktokClicked ? "#4c4c4c" : "#F9F9F9",
          color: tiktokClicked ? "#ffffff" : "#000000",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaTiktok /> Tiktok
      </div>
      <div
        onClick={loginToYoutube}
        style={{
          backgroundColor: youtubeClicked ? "#4c4c4c" : "#F9F9F9",
          color: youtubeClicked ? "#ffffff" : "#000000",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        <FaYoutube /> Youtube
      </div>
      <div
        onClick={selectAll}
        style={{
          backgroundColor: youtubeClicked ? "#4c4c4c" : "#F9F9F9",
          color: youtubeClicked ? "#ffffff" : "#000000",
          height: "40px",
        }}
        className="flex justify-between items-center rounded-xl px-3 gap-5"
      >
        All
      </div>
    </div>
  );
};

export default Buttons;
