"use client";

import PageTitle from "@/app/components/home/PageTitle";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <div>
            <PageTitle title="Community" />

            <main>
                {/* Community Forum Section */}
                <div className="forum-section" style={{marginTop:'-50px', marginBottom:'50px'}}>
                    <h2>Community Forum</h2>
                    <p>
                        Join the discussion! Connect with other community members, ask questions, and share your experiences.
                    </p>
                    <button className="forum-button" onClick={() => router.push("/community-forum")}>
                        Visit Forum
                    </button>
                </div>

                {/* Client Testimonials Section */}
                <div className="testimonials-section">
                    <h2>Client Testimonials</h2>
                    <p>See what our clients have to say about us:</p>

                    <div className="testimonial-card">
                        <img src="/path/to/client1.jpg" alt="Client 1" className="testimonial-image" />
                        <div className="testimonial-content">
                            <blockquote>
                                "Good service, would recommend!"
                            </blockquote>
                            <p className="client-name">- Alex R.</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <img src="/path/to/client2.jpg" alt="Client 2" className="testimonial-image" />
                        <div className="testimonial-content">
                            <blockquote>
                                "I make money!"
                            </blockquote>
                            <p className="client-name">- Jamie L.</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <img src="/path/to/client3.jpg" alt="Client 3" className="testimonial-image" />
                        <div className="testimonial-content">
                            <blockquote>
                                "Ron is the GOAT!!!!"
                            </blockquote>
                            <p className="client-name">- Dylan S.</p>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <img src="/path/to/client4.jpg" alt="Client 4" className="testimonial-image" />
                        <div className="testimonial-content">
                            <blockquote>
                                "Got my bread up!"
                            </blockquote>
                            <p className="client-name">- Jaqaun P.</p>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .forum-section {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .testimonials-section {
                    text-align: center;
                    padding: 2rem;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                }
                .testimonial-card {
                    display: flex;
                    align-items: center;
                    background: white;
                    padding: 1.5rem;
                    margin: 1rem auto;
                    max-width: 600px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .testimonial-image {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    margin-right: 1rem;
                }
                .testimonial-content {
                    text-align: left;
                }
                .client-name {
                    font-weight: bold;
                    color: #555;
                    margin-top: 0.5rem;
                }
                .forum-button {
                    background-color: #007bff;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background 0.3s;
                    display: inline-block;
                    margin-top: 1rem;
                }
                .forum-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
}
