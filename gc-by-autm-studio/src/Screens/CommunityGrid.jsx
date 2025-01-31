import './CommunityGrid.css'
import NavBar from '../Components/NavBar/NavBar'
import {getCommunities} from '../Services/Community'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
const CommunityGrid = () => {

    /*====================== GET ALL COMMUNITIES API CALL ===================== */

    const [community, setCommunity] = useState([])

    const onLoadCommunity = async () => {
        const result = await getCommunities();

        if (result != null) {
            setCommunity(result);
            // console.log("result: " + JSON.stringify(result));

        }
        else {
            toast.warn("Error Occurred on Our Side");
        }
    }


    useEffect(() => {
        return () => {
            onLoadCommunity();
        }
    }, [])


    /*====================== JOIN COMMUNITY GOES HERE ===================== */


    return <>
        <div className='communityPageMainContainer'>
            <NavBar />

            <div className='topHeading'>
                <h2>Creators<br />
                    Hub</h2>
                <p>This community is awesome.
                    Proud of all of them.</p>
            </div>

            <div className='cardsContainer'>
                <div className='cardHolder'>
                   
                {
                        community.map((comnyt) => {
                            
                            return (
                                <div className='card'>
                        <img src='https://assets.awwwards.com/awards/avatar/207/678e576bab1d5627112738.jpg' />
                        <div className='cardTop'>
                            <h2>{comnyt.title}</h2>
                            <p>@{comnyt.category}</p>
                        </div>
                        <div className='cardMiddle'>
                            <p>Members: </p>
                            <p>192</p>
                        </div>
                        <hr style={{width: "90%", border: "1px solid #353636", background: "#353636"}} />



                        <div className='cardBottom'>
                            <p><b>About: </b></p>
                            <p>{comnyt.description}</p>

                        </div>


                        <div className='buttonHolder'>
                            <button>Join</button>
                        </div>
                    </div>
                        )
                    })
            }
               

                </div>
            </div>

        </div>

    </>

}


export default CommunityGrid