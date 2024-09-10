function Resume() {
    return (
        <div className="Resume-body">
            <div className="Resume-header">
                <h2>RESUME</h2>
            </div>

            {/* Education Section */}
            <div className="Resume-section">

                <div className="Section-header">
                    <div className="Section-num">01</div>
                    <h2>EDUCATION</h2>
                </div>
                <div className="Section-content">
                    <div className="Education-item">
                        <h3>St Joseph’s College (Autonomous), Bangalore - Degree 2024</h3>
                        <p>Bachelors in Computer Applications (BCA)</p>
                    </div>
                    <div className="Education-item">
                        <h3>St Joseph’s Pre-University College - PU 2021</h3>
                        <p>Computer Science, Statistics, Business Studies, and Accounts (CSBA)</p>
                    </div>
                    <div className="Education-item">
                        <h3>St Francis High School, Bangalore - School 2019</h3>
                        <p>SSLC</p>
                    </div>
                </div>
            </div>

            {/* Achievements / Leadership Section */}
            <div className="Resume-section">
                <div className="Section-header">
                    <div className="Section-num">02</div>
                    <h2>ACHIEVEMENTS & LEADERSHIP</h2>
                </div>
                <div className="Section-content">
                    <p>
                        Vice President and Public Relations Head, National Service Scheme (NSS), 
                        St Joseph’s University 2022-2023. <br></br> <br></br>
                        Attended State and Rural Camp NSS, Karnataka. Participated in 
                        Inter-Department and Inter-Collegiate Competitions at University level.
                    </p>
                </div>
            </div>

                        {/* Intership*/}
                        <div className="Resume-section">
                <div className="Section-header">
                    <div className="Section-num">03</div>
                    <h2>INTERSHIP</h2>
                </div>
                <div className="Section-content">
                    <p>
                    Mantarlee Social Innovations Federation (3 months )<br></br>
                    Developed a react application for their company with documentation
                    </p>
                </div>
            </div>



            {/* Future Skills Section */}
            <div className="Resume-section">
                <div className="Section-header">
                    <div className="Section-num">04</div>
                    <h2>SKILLS</h2>
                </div>
                <div className="Section-content">
                    <ul>
                        <li>Programming Langue : JAVA (intermediate)</li>
                        <li>Scripting Language : JAVA SCRIPT, HTML,CSS (intermediate)</li>
                        <li>Frame Work : REACT (intermediate)</li>
                        <li>DSA</li>
                        <li>Backend : MongoDB (Beginner)</li>
                        <br></br>
                        <li>Video Editing </li>
                        <li>Poster Making</li>
                        <li>MS Office</li>
                    </ul>
                </div>
            </div>

            <div className="Resume-section">
                <div className="Section-header">
                    <div className="Section-num">05</div>
                    <h2>CERTIFICATIONS</h2>
                </div>
                <div className="Section-content">
                    <ul>
                        <li>HTML AND CSS (UDEMY) 2023</li>
                        <li>JAVASCRIPT (INFOSYS) 2023</li>
                        <li>REACT.JS (UDEMY) 2023</li>
                        <li>REACT.JS (INFOSYS) ON-GOING</li>
                        <li>MONGO DB (COURSERA) ON-GOING</li>
                        <li>MEARN Stack <br></br>full Stack developer (Null Class) ON-GOING </li>
                        
                    </ul>
                </div>
            </div>

            <div className="Resume-section">
                <div className="Section-header">
                    <div className="Section-num">06</div>
                    <h2>INTRESTS and HOBBIES</h2>
                </div>
                <div className="Section-content">
                    <ul>
                        <li>Travelling</li>
                        <li>Designing</li>
                        <li>Hiking</li>
                        <li>Video and Photo Editing</li>
                        <li>Community Service</li>
                    </ul>
                </div>
            </div>

            <div className="Resume-section">
                <div className="Section-header">
                    <div className="Section-num">07</div>
                    <h2>LANGUAGES</h2>
                </div>
                <div className="Section-content">
                    <ul>
                        <li>ENGLISH</li>
                        <li>KANNADA</li>
                        <li>HINDI</li>
                        <li>TAMIL</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;
