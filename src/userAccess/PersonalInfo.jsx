import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storePersonalInfo } from "./userAccessSlice";

export function PersonalInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let infoObj = {
    hobby: "",
    hobby2: "",
    favouriteMovie: "",
    favouriteBand: "",
    petName: "",
  };

  function handleSubmit(event){
    dispatch(storePersonalInfo(infoObj));
    event.preventDefault();    
    navigate('/display/info')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Hobby: 
          <input onChange={(e) => (infoObj.hobby = e.target.value)} />
        </label>
        <br />
        <label>
          Second hobby, if any: 
          <input onChange={(e) => (infoObj.hobby2 = e.target.value)} />
        </label>
        <br />
        <label>
          Favourite Movie: 
          <input onChange={(e) => (infoObj.favouriteMovie = e.target.value)} />
        </label>
        <br />
        <label>
          Favourite Band: 
          <input onChange={(e) => (infoObj.favouriteBand = e.target.value)} />
        </label>
        <br />
        <label>
          Pet Name: 
          <input onChange={(e) => (infoObj.petName = e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
