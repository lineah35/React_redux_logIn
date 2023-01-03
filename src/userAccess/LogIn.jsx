import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeLogInInfo } from "./userAccessSlice";

export function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let logInInfo = {
        userName: "",
        password: "",
        isLoggedIn: false
    };

    function handleSubmit(event){
        logInInfo.isLoggedIn = true;
        dispatch(storeLogInInfo(logInInfo));
        event.preventDefault();
        navigate('/personal/info');
    }

    return(
        <div>
            <h1> Log in </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input onChange={(event) => (logInInfo.userName = event.target.value)}/>
                </label>
                <br />
                <label>
                    Password
                    <input onChange={(event) => (logInInfo.password = event.target.value)}/>
                </label>
                <br />
                <button type="submit">Log in</button>
            </form>
        </div>
    )

}