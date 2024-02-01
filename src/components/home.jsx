import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { templateCreator } from "../redux/actions/templateActions";
import "./css/home.css";

let Home = () => {
  let user = useSelector((state) => state.user);
  let history = useHistory();
  let dispatch = useDispatch();
return (
  <>
    {user ? "" : <Redirect to="/login" />}

    <h2>Select Template</h2>

    <div className="template-container">
        <div
          onClick={() => {
            dispatch(templateCreator("A"));
            history.push("/personal");
          }}
          className="template"
        >
          <img src="http://localhost:3000/skin 1.svg" />
        </div>
        <div
          onClick={() => {
            dispatch(templateCreator("B"));
            history.push("/personal");
          }}
          className="template"
        >
          <img src="http://localhost:3000/skin 2.svg" />
        </div>
      </div>
    
    <button
    className="btn-primary home-logout-btn"
      onClick={() => {
        auth.signOut();
      }}
    >
      Logout
    </button>
  </>
);
};

export default Home;