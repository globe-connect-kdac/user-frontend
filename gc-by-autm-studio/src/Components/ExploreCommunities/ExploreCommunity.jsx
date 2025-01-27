import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreCommunity.css';

const ExploreCommunity = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        communityName: '',
        contentType: '',
        profileImage: null,
        description: '',
    });

    const communityGrid = () => {
        navigate('/explore-communities');
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profileImage: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Community created successfully!');
        setShowForm(false);
    };

    return (
        <>
            <div className="mainCommunityExplorer">
                <h2>Explore Communities</h2>
                <p>Create or join a community and start sharing your ideas</p>

                <div className="exploreCommunityButtonHolder">
                    <button onClick={() => setShowForm(true)}>Create Community</button>
                    <button onClick={communityGrid}>Join Community</button>
                </div>
            </div>

            {showForm && (
                <div className="communityFormOverlay">
                    <div className="communityFormContainer">
                        <h3>Create a New Community</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="formField">
                                <label htmlFor="communityName">Community Name:</label>
                                <input
                                    type="text"
                                    id="communityName"
                                    name="communityName"
                                    value={formData.communityName}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="contentType">Content Type:</label>
                                <select
                                    id="contentType"
                                    name="contentType"
                                    value={formData.contentType}
                                    onChange={handleFormChange}
                                    required
                                >
                                    <option value="">Select a type</option>
                                    <option value="science">Science</option>
                                    <option value="technology">Technology</option>
                                    <option value="coding">Coding</option>
                                    <option value="arts">Arts</option>
                                    <option value="trending news">Trending News</option>
                                    <option value="music">Music</option>
                                    <option value="gaming">Gaming</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="formField">
                                <label htmlFor="profileImage">Profile Image:</label>
                                <input
                                    type="file"
                                    id="profileImage"
                                    name="profileImage"
                                    onChange={handleFileChange}
                                    required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    placeholder="Describe your community..."
                                    rows="4"
                                    required
                                />
                            </div>

                            <div className="formButtons">
                                <button type="submit">Create</button>
                                <button type="button" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExploreCommunity;
