import { Link } from 'react-router-dom'
// import 'animate.css';

function Home() {

    return (
        <div className='home'>
            {/* <h1 className='animate__animated animate__slideInRight'>Simon Says</h1> */}
            <h1 className='animate__animated animate__pulse animate__infinite'>Simon Says</h1>
            <h2>Do what Simon Says...</h2>
            <p>Follow the pattern of the lights and sounds for as long as you can... if you can!</p>
            <Link to='/game'>Play</Link>
        </div>
    )

}

export default Home