import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <div class="topbg">
        <nav class="fixnav">
            <div class="navbar">
                
                <div class="nav">
                    <a href="#" class="lnav">Home</a>
                </div>
                
                <div class="nav">
                    <a href="#aboutme" class="rnav aboutme1">About me</a>
                    <a href="#projects" class="rnav projects1">Projects</a>
                    <a href="#resume" class="rnav resume">Resume</a>
                </div>               
            </div>        
        </nav>  
        <div class="fixcont">
            <a href="#contacts"><img class='sm-icon' src="contacts.png" alt="Contacts"/></a>
        </div>

        <div class="hello">
            <h1>Full Stack Developer</h1>
            <h1>Hello! I am a full stack developer with background in biology and experience in CRM integration.
At last job, my duties were communication with the head of the sales department, identifying needs, developing widgets for CRM, setting CRM according to needs.
</h1>
        </div>

        <a name="aboutme"></a>
    </div>  
    <div class="header">
        <h1>About me</h1>
    </div>
    <div class="content">
        
            <div class="avatardiv">
                <img src="avatar.jfif" class="avatar"/>
            </div>
            <div class="infoabout">
                <p>Hello. My name is Uliana and six months ago my family and I became a new citizen of Israel. I have a bachelor's degree in biology and a master's degree in ecology. But my career developed in such a way that even before graduating from the university I was drawn into a high-tech company.
And it turned my life around. So now that we are in a new country, I immediately decided to continue my growth as a developer.
The Israeli market is a little different from ours, so before starting my way to high-tech in Israel, I decided to improve my skills and went to the full-stack programmer course at the Developers.Institute

This is my story, and very soon a new chapter of my life will begin - I am starting my journey in Israeli high-tech</p>
            </div>
    </div>
    <a name="projects"></a>
    <div class="bgproj">
        <div class="header">
            <h1>Projects</h1>
        </div>
        <div class="projectsbar">
            <img class="proj" src="pr1.jpg"/>
            <img class="proj" src="pr2.jpg"/>
            <img class="proj" src="pr3.jpg"/>
            <img class="proj" src="pr4.jpg"/>
            <img class="proj" src="pr5.jpg"/>
            <img class="proj" src="pr6.jpg"/>
        </div>
    </div>
    <a name="resume"></a>
    <div class="header">
        <h1>Resume</h1>
    </div>

    <div class="resumebox">
        <div class="resumegrid1"> 
            <div class="row1-1"><h3 class="gt gt1">Education</h3></div>
            <div class="row1-2">
                <h4 class="gt">Biology</h4>
                <p class="gt">09/2012 - 06/2016 <br/>
                Institute of Fundamental Medicine and Biology, Kazan Federal University, Kazan, Russia <br/>
                Microbiologist, Bachelor</p>
                <h4 class="gt">Ecology</h4>
                <p class="gt">09/2016 - 06/2018 <br/>
                Institute of Ecology and Nature Management, Kazan Federal University, Kazan, Russia <br/>
                Ecologist biotechnologist, Master</p>
                <h4 class="gt">Full Stack Web Development, Python and JavaScript program </h4>
                <p class="gt">09/2016 - 06/2018 <br/>
                Developers Institute, TLV Coding Bootcamp </p>
            
            
            </div>
        </div>
        <div class="resumegrid1">   
            <div class="row2-1"><h3 class="gt gt1">Skills</h3></div>
            <div class="row2-2">
                <h4 class="gt">Soft skills</h4>
                <p class="gt">Computer literacy<br/>
                Native Russian<br/>
                Intermediate English</p>            
            </div>
            <div class="row2-3">
                <h4 class="gt">Hard skills</h4>
                <p class="gt">HTML-5<br/>
                CSS-3<br/>
                Bootstrap 5.3</p>            
            </div>
            <div class="row2-4">
                <h4 class="gt">Personal qualities</h4>
                <p class="gt">
                learnability<br/>
                responsibility<br/>
                sociability</p>            
            </div>
        </div>
        <div class="resumegrid1">   
            <div class="row3-1"><h3 class="gt gt1">Professional <br/> experience</h3></div>
            <div class="row3-2">
                <h4 class="gt">Project manager</h4>
                <p class="gt">02/2018-06/2023<br/>
                CRM-integrator company "cubic-consulting, Kazan, Russia</p>
                <p class="gt">Duties included:<br/>
                Setting the internal functions of the CRM <br/>
                Widget integration <br/>  
                IP telephony setup <br/> 
                Preparation of technical specifications for development</p>            
            </div>
        </div>
    </div>

    <a name="contacts"></a>
    <div class="header cont">
        <h1>Contacts</h1>
    </div>
    <div class="contacts">
        <div class="socmed">
            <p>Get in Touch<br/>
            <a href="https://www.facebook.com/uliana.guseva.94"><img class='sm-icon' src="fb.png" alt="FaceBook"/></a>
            <a href="https://github.com/UlianaGuseva"><img class='sm-icon' src="github.png" alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/uliana-guseva-b96a5625a/"><img class='sm-icon' src="linked.png" alt="Instagram"/></a></p>
        </div>
        <div class="getintouch">
            <p><i class="fa-solid fa-phone"></i> 0585585728 <br/>
                <i class="fa-solid fa-at"></i> ulianaandrevna@gmail.com
            </p>
           
        </div>
    </div>



    </body>
  );
}

export default App;
