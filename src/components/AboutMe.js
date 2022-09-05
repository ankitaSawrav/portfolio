import Typewriter from 'typewriter-effect';
import './AboutMe.css'

function AboutMe() {

    return(
        <section className="about-me">
            <h1>About Me</h1>
            <div className="decription">
                <div className='anki-intro'>
                    <h2>Hi, I am </h2>
                    <br></br>
                    <h2>
                        <Typewriter
                            options={{
                                strings: ['Ankita Sawrav.', 'a Junior Software Developer.'],
                                autoStart: true,
                                loop: true,
                            }}
                    /></h2>
                </div>
               
                <div className='abtme-sub-container'>
                    <p>
                    I am a junior software developer with a passion for learning and solving real-world problems. My journey to become a professional software developer began with undertaking the Software Engineering immersive course at General Assembly Australia. I have grown a lot as an engineer since then, and it has been a gratifying experience so far. Learning how to build apps that solve real world problems has been an exhilarating Experience. I have been and will be building more apps as I go. As a continuous learner, I will keep improving my development skills to become a better developer than I was yesterday.
                    </p>
                    <p>
                    I am an ex-software tester and have been a full time parent for the last 7 years. Over this time I have experienced the power of technology, first hand, while contributing towards building it and also by consuming it to help my children grow better. This is what I want to continue on while I switch to, now, developing these solutions.
                    </p>
                    <p>
                    Playing with my kids, reading books to them, scribbling, and painting are some of my favorite things to do when not coding.
                    </p>
                </div>           
               
            </div>
            <section className="skills-tab">
                <h1>Skills</h1>
                
                <div>

                <img className="logo" src='../images/react.png' alt="React"/>
                <img className="logo" src='../images/html-5.png' alt="HTML"/>
                <img className="logo" src='../images/javascript.png' alt="Javascript"/>
                <img className="logo"  src='../images/nodejs.png' alt="Nodejs"/>
                <img  className="logo" src='../images/python.png' alt="python"/>
                <img  className="logo" src='../images/css-3.png' alt="CSS"/>

                </div>
            </section>
            
        </section>

    )
}

export default AboutMe