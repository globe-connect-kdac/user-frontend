import './Popular.css'
import Avatar from './women.png'

const Popular = () => {

    return <>
        <div className="popularHolder">
            <h2>Top Communities</h2>
            <div className="communitiesNameHolder">
                <a><img src='https://cdn.logojoy.com/wp-content/uploads/20230412135724/green-minimalist-logo.png'/>Burokratik</a>
                <a><img src='https://cdn.logojoy.com/wp-content/uploads/20191030162930/apple%402x-1024x422.png'/>Immersive Garden</a>
                <a><img src='https://cdn.logojoy.com/wp-content/uploads/20191030163048/Uber%402x-600x247.png'/>DEPT</a>
                <a><img src='https://cdn.logojoy.com/wp-content/uploads/20191030163102/Airbnb%402x-1024x422.png'/>We are AUTM</a>
                <a><img src='https://cdn.logojoy.com/wp-content/uploads/20191030163119/Nike%402x-1024x422.png'/>Resn</a>
                <a><img src='https://cdn.logojoy.com/wp-content/uploads/20191030163138/louisVuitton%402x-1024x422.png'/>Burokratik</a>
                <a><img src={Avatar}/>Immersive Garden</a>
                <a><img src={Avatar}/>DEPT</a>
                <a><img src={Avatar}/>We are AUTM</a>
                <a><img src={Avatar}/>Resn</a>
            </div>
        </div>
    </>

}

export default Popular