import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { addpost } from "../Services/Post";
import "./AddPost.css";

const AddPost = () => {
    const [content, setContent] = useState("");
    const [attachments, setAttachments] = useState([]); // To hold uploaded files
    const navigate = useNavigate();

    const addPost = async () => {
        if (content.length === 0 && attachments.length === 0) {
            toast.warn("Please type something or attach a file before submitting...!!!");
        } else {
            
            const result = await addpost(content, userIdFromSessionStorage);
            console.log(result);

            if (result.affectedRows === 1) {
                toast.success("Posted Content Successfully...!!!");
                navigate("/home");
            } else {
                toast.error(result["error"]);
            }
        }
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setAttachments((prev) => [...prev, ...files]);
    };

    return (
        <>
            <div className="addPostMainHolder">
                <textarea
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your thoughts... "
                ></textarea>

            </div>

            <div className="addPostFlexHolder">
                
            <div className="uploadIconsHolder">
                    <label>
                        <input type="file" accept="image/*" hidden onChange={handleFileUpload} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="uploadIcon"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p>Image</p>
                    </label>

                    <label>
                        <input type="file" accept="video/*" hidden onChange={handleFileUpload} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="uploadIcon"
                        >
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        <p>Video</p>
                    </label>

                    <label>
                        <input type="file" accept=".pdf,.doc,.docx" hidden onChange={handleFileUpload} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="uploadIcon"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" y1="18" x2="12" y2="12" />
                            <line x1="9" y1="15" x2="15" y2="15" />
                        </svg>
                        <p>Document</p>
                    </label>
                </div>
{/* 
                <div className="attachmentsPreview">
                    {attachments.map((file, index) => (
                        <div key={index} className="attachmentItem">
                            {file.type.startsWith("image") ? (
                                <img src={URL.createObjectURL(file)} alt="preview" />
                            ) : (
                                <p>{file.name}</p>
                            )}
                        </div>
                    ))}
                </div> */}

                <div className="postButtonHolder">
                    <button onClick={addPost}>Post</button>
                </div>
            </div>

        </>
    );
};

export default AddPost;
