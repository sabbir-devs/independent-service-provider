import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="home">
        <div className="banner-text">
          <div>
            <h1 style={{ color: "#72ae31" }}>Take Your Fitness</h1>
            <h1>To The Next Level</h1>
            <p>
              PREMIUM ONLINE & PERSONAL TRAINING IN FAREHAM WITH ROBERT
              COTTERILL.
            </p>
            <button onClick={() => navigate('/services')}>See Our service</button>
          </div>
        </div>
      </div>
      <Banner></Banner>
      <Services></Services>
    </>
  );
};

export default Home;
