import { useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import './CommunityProfile.css';
import PostBlock from '../Components/Post/PostBlock';

const CommunityProfile = () => {
    const [showForm, setShowForm] = useState(false);
    
    // The data that is used to display the profile content
    const [profileContent, setProfileContent] = useState({
        username: 'immersive_gdn',
        name: 'Immersive Garden',
        email: 'ig@example.com',
        profilePicture: 'https://assets.awwwards.com/awards/avatar/207/678e576bab1d5627112738.jpg',
    });

    // The data that is used in the form and can be modified
    const [formData, setFormData] = useState({
        username: 'immersive_gdn',
        name: 'Immersive Garden',
        email: 'ig@example.com',
        password: '',
        profilePicture: 'https://assets.awwwards.com/awards/avatar/1575266/64954d4fa9f85175182279.png',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePicture: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the profileContent with the modified form data
        setProfileContent({ 
            username: formData.username,
            name: formData.name,
            email: formData.email,
            profilePicture: formData.profilePicture
        });
        setShowForm(false);
        alert('Profile updated successfully!');
    };

    return (
        <>
            <NavBar />
            <div className="profileMainHolder">
                <h2 style={{ textAlign: "center", fontSize:"5vh" }}>{profileContent.username}</h2>
                <div className="userInfoHolder">
                    <div className="profileHolder">
                        <div className="profileImageHolder">
                            <img src={profileContent.profilePicture} alt="Profile" />
                        </div>
                        <div className="userNameAndDescHolder">
                            <h4>{profileContent.name}</h4>
                            <p>We talk about the 3D web design and development</p>
                            <div className="statsHolder">
                                <p><b>15</b> Posts</p>
                                <p><b>123</b> Community Members</p>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setShowForm(true)}>Join Community</button>
                </div>

                <hr style={{ width: "90vw" }} />
                <h2 style={{ padding: "5vh 0 0 5vw" }}>Recent Posts</h2>
                <div className="postsHolder">
                    <PostBlock/>
                </div>
            </div>

            {/* {showForm && (
                <div className="profileEditOverlay">
                    <div className="profileEditContainer">
                        <h3>Edit Profile</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="formField">
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleFormChange}
                                    // required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="name">Full Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    // required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    // required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleFormChange}
                                    // required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="profilePicture">Profile Picture:</label>
                                <input
                                    type="file"
                                    id="profilePicture"
                                    name="profilePicture"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </div>

                            <div className="formButtons">
                                <button type="submit">Save Changes</button>
                                <button type="button" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}
        </>
    );
};

export default CommunityProfile;
