import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const TimeLine = () => {
    return (
        <section className="timeline" id="timeline">
            <h2 className="heading">My <span>Timeline</span></h2>
            <br />
            <br />
            <br />
            <div className="tcontainer left-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LoWbN-KOJzASBaRmmzZH9JdH0MM8gOJu0qQvKdvUkg&s" />
                <div className="text-box">
                    <h2>Associate Software Engineer - <span>Hasthiya IT</span></h2>
                    <small>2023 Aug - Present</small>
                    <p>
                    Currently, as a part time associate software engineer at Hasthiya IT, I'm working on diverse projects that have further honed my skills in technologies such as React and Nest.js. These experiences have not only refined my technical abilities but also instilled in me a deep understanding of project management and collaboration.
                    </p>
                    <p className="tl-duration">React</p>
                    <p className="tl-duration">Flutter</p>
                    <p className="tl-duration">Firebase</p>
                    <p className="tl-duration">Nodejs</p>

                    <span className="left-container-arrow"></span>
                </div>
            </div>

            <div className="tcontainer right-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd-f4htrprAqxWDBN3tEDtWVRpGZAyTxRuhuCZhIJIQ&s" />
                <div className="text-box">
                    <h2>Trainee Software Engineer - <span>Pristine Solution</span></h2>
                    <small>2023 Jan - 2023 July</small>
                    <p>
                    During my internship at Pristine Solutions (Pvt) Ltd, I spearheaded the development of the TPL Petty Cash mobile application. From learning the framework's basics to conducting demo presentations for clients, I gained hands-on experience in mobile development, collaboration, and client interaction, fostering both technical prowess and effective communication skills.
                    </p>
                    <p className="tl-duration">React Native</p>
                    <p className="tl-duration">Firebase</p>
                    <p className="tl-duration">SQLite</p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>

            <div className="tcontainer left-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0imfe-kbZpB6_8vA6l7xwLYdoQUOYSg4u-fb2JRbyg&s" />
                <div className="text-box">
                    <h2>Final Year Research Project</h2>
                    <small>2023 Oct - Present</small>
                    <p>
                        This project aims to bridge the gap between human expertise and machine
                        intelligence in the realm of web design. The UI/UX Recommendation Engine is
                        not just a tool for analysis; it is an advisor, equipped to provide expert-level
                        recommendations.
                    </p>
                    <p className="tl-duration">Python</p>
                    <p className="tl-duration">Image Processing</p>
                    <p className="tl-duration">Machine Learning</p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>

            <div className="tcontainer right-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0imfe-kbZpB6_8vA6l7xwLYdoQUOYSg4u-fb2JRbyg&s" />
                <div className="text-box">
                    <h2>Second Year Software Project</h2>
                    <small>2021 Oct - 2022 May</small>
                    <p>
                        A user-friendly social media affiliate marketing platform for non-tech users.
                        Mobile and web apps empower advertisers to create campaigns, while
                        publishers earn commissions by sharing and promoting creatives.
                    </p>
                    <p className="tl-duration">React</p>
                    <p className="tl-duration">Nestjs</p>
                    <p className="tl-duration">React Native</p>
                    <p className="tl-duration">Mysql</p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>

        </section>
    );
};

export default TimeLine;