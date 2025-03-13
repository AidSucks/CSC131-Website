"use client"; // Mark the file as a client component

import PageTitle from "@/app/components/PageTitle";
import { useState } from "react";

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState("");

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.trim()) {
            const timestamp = new Date().toLocaleString(); // Get current timestamp
            setPosts([...posts, { content: newPost, replies: [], timestamp }]);
            setNewPost(""); // Clear the input field
        }
    };

    const handleReplySubmit = (postIndex, reply) => {
        if (reply.trim()) {
            const updatedPosts = [...posts];
            const replyTimestamp = new Date().toLocaleString(); // Get current timestamp for reply
            updatedPosts[postIndex].replies.push({ content: reply, timestamp: replyTimestamp });
            setPosts(updatedPosts);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            margin: '0',
            fontFamily: "'Arial', sans-serif",
            backgroundColor: "#f0f0f0"
        }}>
            <PageTitle title="Community Forum" />

            <div style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                width: "90%",
                maxWidth: "800px",
                margin: "20px 0"
            }}>
                <h2 style={{ color: "#333" }}>Discussion Posts</h2>
                <form onSubmit={handlePostSubmit} style={{ marginBottom: "20px" }}>
                    <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="Share your thoughts..."
                        rows="4"
                        cols="50"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            marginBottom: "10px"
                        }}
                    />
                    <br />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#0070f3",
                            color: "#fff",
                            padding: "10px 15px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                    >
                        Post
                    </button>
                </form>

                <div>
                    <h3 style={{ color: "#555" }}>All Posts:</h3>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {posts.map((post, postIndex) => (
                            <li key={postIndex} style={{
                                backgroundColor: "#f9f9f9",
                                padding: "10px",
                                borderRadius: "4px",
                                margin: "10px 0",
                                boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)"
                            }}>
                                <p>{post.content}</p>
                                <small style={{ color: "#777" }}>{post.timestamp}</small> {/* Display timestamp for the post */}
                                <div>
                                    <h4>Replies:</h4>
                                    <ul style={{ listStyleType: "none", padding: 0, margin: "10px 0" }}>
                                        {post.replies.map((reply, replyIndex) => (
                                            <li key={replyIndex} style={{
                                                backgroundColor: "#e9ecef",
                                                padding: "8px",
                                                borderRadius: "4px",
                                                margin: "5px 0"
                                            }}>
                                                {reply.content}
                                                <br />
                                                <small style={{ color: "#777" }}>{reply.timestamp}</small> {/* Display timestamp for the reply */}
                                            </li>
                                        ))}
                                    </ul>

                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        const replyInput = e.target.elements.reply;
                                        handleReplySubmit(postIndex, replyInput.value);
                                        replyInput.value = ""; // Clear the input field
                                    }}>
                                        <input
                                            name="reply"
                                            type="text"
                                            placeholder="Reply..."
                                            style={{
                                                width: "calc(100% - 22px)", // Adjust width to account for padding
                                                padding: "10px",
                                                borderRadius: "4px",
                                                border: "1px solid #ccc",
                                                fontSize: "16px",
                                                marginBottom: "10px"
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            style={{
                                                backgroundColor: "#0070f3",
                                                color: "#fff",
                                                padding: "10px 15px",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                                fontSize: "16px"
                                            }}
                                        >
                                            Reply
                                        </button>
                                    </form>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
