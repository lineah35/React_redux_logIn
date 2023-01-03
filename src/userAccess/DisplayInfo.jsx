// import { storePersonalInfo } from "./userAccessSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function DisplayInfo() {
  const navigate = useNavigate();
  const retrieveInfo = useSelector((state) => {
    return state.personalInfo;
  });

  const retrieveLogInInfo = useSelector((state) => {
    return state.logIn;
  });

  useEffect(() => {
    console.log("calling the function!", retrieveLogInInfo.isLoggedIn); //default state remains if we change the URL manually without entering info.
    if (retrieveLogInInfo.isLoggedIn == true) {
      console.log("current loggedIn state is:", retrieveLogInInfo.isLoggedIn);
    } else {
      navigate("/");
    }
    // retrieveLogInInfo.isLoggedIn? console.log("stay!"): navigate('/');
  }, []);

//   console.log("state.logIn in DisplayInfo:", retrieveLogInInfo);

  return (
    <div>
      <h1> Here is your information:</h1>
      <p>{retrieveInfo.hobby}</p>
      <p>{retrieveInfo.hobby2}</p>
      <p>{retrieveInfo.favouriteMovie}</p>
      <p>{retrieveInfo.favouriteBand}</p>
      <p>{retrieveInfo.petName}</p>
      <button onClick={() => navigate("/")}>Log Out</button>
    </div>
  );
}
