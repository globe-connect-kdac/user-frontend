import './Post.css'
import Like from './like.png'
import Comment from './comment.png'
import Code from './code.jpg'
import Cat from './cat.jpg'
import NavBar from '../NavBar/NavBar'
import Avatar from './Avatar.png'

const PostBlock = ({postId, content, userId, postedOn}) => {
    
        const uId = localStorage.getItem("userId")
        

    

    return <>

        <div className="container mainPostBlockContainer">
            
            <div className="topUserInfoHolder">
                <h3 style={{display:'flex', alignItems:'center', fontSize:'16px', fontWeight:400, gap:'0.5vw'}}><img src={Avatar}/> suyash_surve2002</h3>
                <p>12-01-2002</p>
            </div>

            <div className="postContentHolder">
                <h2>How hard is it to go from python to c++?</h2>

                <img src={Code}/>

                <p>Transitioning from Python to C++ can be challenging due to differences in syntax, memory management, and object-oriented concepts. While Python is high-level and handles memory automatically, C++ requires more attention to detail with pointers and resource management. However, if you're familiar with programming concepts, the learning curve can be manageable with practice.</p>
            </div>
            <hr/>

            <div className="interactionHolder">
                <div className='likeContainer'>
                    <img src={Like} />
                    <p>1219 Likes</p>
                </div>
                <div className='commentContainer'>
                    <img src={Comment} />
                    <p>192 Comments</p>
                </div>
            </div>

        </div>

        <div className="container mainPostBlockContainer">
            
            <div className="topUserInfoHolder">
                <h3 style={{display:'flex', alignItems:'center', fontSize:'16px', fontWeight:400, gap:'0.5vw'}}><img src={Avatar}/> suyash_surve2002</h3>
                <p>12-01-2002</p>
            </div>

            <div className="postContentHolder">
                <h2>How hard is it to go from python to c++?</h2>

                <img src='https://assets.awwwards.com/awards/avatar/210282/63ed3bd6390c6148123811.jpg'/>

                <p>Transitioning from Python to C++ can be challenging due to differences in syntax, memory management, and object-oriented concepts. While Python is high-level and handles memory automatically, C++ requires more attention to detail with pointers and resource management. However, if you're familiar with programming concepts, the learning curve can be manageable with practice.</p>
            </div>
            <hr/>

            <div className="interactionHolder">
                <div className='likeContainer'>
                    <img src={Like} />
                    <p>1219 Likes</p>
                </div>
                <div className='commentContainer'>
                    <img src={Comment} />
                    <p>192 Comments</p>
                </div>
            </div>

        </div>

        <div className="container mainPostBlockContainer">
            
            <div className="topUserInfoHolder">
                <h3 style={{display:'flex', alignItems:'center', fontSize:'16px', fontWeight:400, gap:'0.5vw'}}><img src={Avatar}/> suyash_surve2002</h3>
                <p>12-01-2002</p>
            </div>

            <div className="postContentHolder">
                <h2>How hard is it to go from python to c++?</h2>

                <img src='https://assets.awwwards.com/awards/avatar/207/678e576bab1d5627112738.jpg'/>

                <p>Transitioning from Python to C++ can be challenging due to differences in syntax, memory management, and object-oriented concepts. While Python is high-level and handles memory automatically, C++ requires more attention to detail with pointers and resource management. However, if you're familiar with programming concepts, the learning curve can be manageable with practice.</p>
            </div>
            <hr/>

            <div className="interactionHolder">
                <div className='likeContainer'>
                    <img src={Like} />
                    <p>1219 Likes</p>
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