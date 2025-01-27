import './Post.css'
import Like from './like.png'
import Comment from './comment.png'
import Code from './code.jpg'
import Cat from './cat.jpg'
import NavBar from '../NavBar/NavBar'
import Avatar from './Avatar.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PostBlock = ({ postId, content, userId, postedOn }) => {

    const uId = localStorage.getItem("userId")

    const [likes, setLikes] = useState(1219);
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked); // Toggle the like state
        setLikes(likes + (liked ? -1 : 1)); // Increase or decrease the like count
    };


    return <>

        <div className="container mainPostBlockContainer">

            <div className="topUserInfoHolder">
                <Link to='/user-profile' style={{textDecoration:"none", color:"#dbdbdb"}}><h3 style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 400, gap: '0.5vw' }}><img src={Avatar} /> suyash_surve2002</h3></Link>
                <p>12-01-2002</p>
            </div>

            <div className="postContentHolder">
                <h2>How hard is it to go from python to c++?</h2>

                <img src={Code} />

                <p>Transitioning from Python to C++ can be challenging due to differences in syntax, memory management, and object-oriented concepts. While Python is high-level and handles memory automatically, C++ requires more attention to detail with pointers and resource management. However, if you're familiar with programming concepts, the learning curve can be manageable with practice.</p>
            </div>
            <hr />

            <div className="interactionHolder">
                <div className="likeContainer" onDoubleClick={handleLikeClick} onClick={handleLikeClick}>
                    {/* Conditional rendering of the heart SVG based on the like state */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill={liked ? "#ff0000" : "none"} stroke={liked ? "#ff0000" : "#dbdbdb"} strokeWidth="2" />
                    </svg>
                    <p>{likes} Likes</p>
                </div>
                <div className='commentContainer'>
                    <img src={Comment} />
                    <p>192 Comments</p>
                </div>
            </div>

        </div>

        <div className="container mainPostBlockContainer">
            <div className="topUserInfoHolder">
            <Link to='/user-profile' style={{textDecoration:"none", color:"#dbdbdb"}}><h3 style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 400, gap: '0.5vw' }}><img src={Avatar} /> suyash_surve2002</h3></Link>
                <p>12-01-2002</p>
            </div>
            <div className="postContentHolder">
                <h2>How hard is it to go from python to c++?</h2>

                <img src='https://assets.awwwards.com/awards/avatar/210282/63ed3bd6390c6148123811.jpg' />

                <p>Transitioning from Python to C++ can be challenging due to differences in syntax, memory management, and object-oriented concepts. While Python is high-level and handles memory automatically, C++ requires more attention to detail with pointers and resource management. However, if you're familiar with programming concepts, the learning curve can be manageable with practice.</p>
            </div>
            <hr />
            <div className="interactionHolder">
                <div className="likeContainer" onDoubleClick={handleLikeClick} onClick={handleLikeClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill={liked ? "#ff0000" : "none"} stroke={liked ? "#ff0000" : "#dbdbdb"} strokeWidth="2" />
                    </svg>
                    <p>{likes} Likes</p>
                </div>
                <div className='commentContainer'>
                    <img src={Comment} />
                    <p>192 Comments</p>
                </div>
            </div>
        </div>

        <div className="container mainPostBlockContainer">

            <div className="topUserInfoHolder">
            <Link to='/user-profile' style={{textDecoration:"none", color:"#dbdbdb"}}><h3 style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: 400, gap: '0.5vw' }}><img src={Avatar} /> suyash_surve2002</h3></Link>
                <p>12-01-2002</p>
            </div>

            <div className="postContentHolder">
                <h2>How hard is it to go from python to c++?</h2>

                <img src='https://assets.awwwards.com/awards/avatar/207/678e576bab1d5627112738.jpg' />

                <p>Transitioning from Python to C++ can be challenging due to differences in syntax, memory management, and object-oriented concepts. While Python is high-level and handles memory automatically, C++ requires more attention to detail with pointers and resource management. However, if you're familiar with programming concepts, the learning curve can be manageable with practice.</p>
            </div>
            <hr />

            <div className="interactionHolder">
                <div className="likeContainer" onDoubleClick={handleLikeClick} onClick={handleLikeClick}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill={liked ? "#ff0000" : "none"} stroke={liked ? "#ff0000" : "#dbdbdb"} strokeWidth="2" />
                    </svg>
                    <p>{likes} Likes</p>
                </div>
                <div className='commentContainer'>
                    <img src={Comment} />
                    <p>192 Comments</p>
                </div>
            </div>

        </div>


    </>

}

export default PostBlock