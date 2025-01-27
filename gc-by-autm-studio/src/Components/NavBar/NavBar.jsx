import { useNavigate } from 'react-router-dom'
import './NavBar.css'

import logout from '../../Images/logout.png'

const NavBar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        
        navigate('/login')
    }
    
    const goToAddPost = ()=>{

        navigate('/add-post')

    }

 

    return <>

        <div className="navHolder">
            <nav className="navBar">
                <div className="logoHolder">
                    <h2>autm</h2>
                </div>
                <div className='searchBarHolder'>
                    <input type='text' placeholder='Search user/topic '/>
                </div>
                <div className="buttonsHolder">
                    {/* <button onClick={goToAddPost}>Add Post</button> */}
                    <button onClick={onLogout}><img src ={logout}/>Logout</button>
                </div>
            </nav>
            
        </div>


    </>

}

export default NavBar