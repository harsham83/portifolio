import './index.css'
import NavBar from '../navbar'

const Home=()=>(
    <div className='outer-box'>
        <div className="inner-box">
            <NavBar/>
            <div className='discandImg'>
                <div>
                    <h1 className='hello-home'>Hello,</h1>
                    <h1 className='myName-home'>I am Harsha.</h1>
                    <h1 className='role-home'>Front-end Developer</h1>
                    <p className='disc-home'>
                        I am a passionate React developer a well-trained individual skilled in 
                        translating design concepts into interactive and functional front-end experiences,
                        seamlessly blending creativity with user-friendly interfaces.
                        {/*https://youtu.be/RXvyXvw2v24*/}
                    </p>
                    <button type='button' className='exploreme-btn-home'>Explore Me</button>   
                </div>
                <div className='imgcontainer'>
                    <img className='devImage-Home' src='https://globaliasoft.com/wp-content/uploads/2021/09/reactjs_development.png' alt='developer'/>
                </div>
            </div>
        </div>
    </div>
)

export default Home