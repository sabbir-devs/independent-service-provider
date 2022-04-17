import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className='home'>
            <div className="banner-text">
                <div><h1 style={{color:'#72ae31'}}>Take Your Fitness</h1>
                <h1>To The Next Level</h1>
                <p>PREMIUM ONLINE & PERSONAL TRAINING IN FAREHAM WITH ROBERT COTTERILL.</p>
                <button>See Our service</button></div>
            </div>
        </div>
            <Services></Services>
            </>
    );
};

export default Home;