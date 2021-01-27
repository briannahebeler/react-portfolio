import React  from 'react';
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutMe() {
    return (
        <div class="container pt-5 pb-5">
            <div class="row">
                <div class="col-9">
                <div class="card">
                    <div class="card-body">
                    <header class="page-header">
                        <h1 class="font-weight-bold" style="color:#1C3553;">About Me
                        </h1>
                        <hr />
                    </header>
                    <div class="row">
                        <div class="col-12">
                        <img id="about-me" class="img.fluid" style="height:266.67px; width: 200px; margin-right:10px;"
                            src="./Assets/images/profile-picture.jpeg" alt="Responsive image">
                        <p style="color: #B45A76;">
                            Hello! My name is Brianna Hebeler and this is my full stack web development portfolio. In the spring
                            of 2019 I graduated from Liberty University with a Bachelor of Sciences in Business Administration.
                            Since 2015, I have been working in the health and beauty industry, filling various administrative
                            and management roles, but I ultimately decided to change my career path.
                        </p>
                        <p style="color: #B45A76;">
                            With the decision to change my career path came the need to reskill myself and add to my education
                            with a more focused program. I have always been drawn to the tech field and have a knack for logic
                            and problem-solving which led me to this decision. I joined the Rutgers Full Stack Web Development
                            Bootcamp in October of 2020. I am so excited to dive into the unknown and put in the work to master
                            these new skills. My biggest strengths are being able to effectively deal with ambiguity, manage my
                            time effectively, and carry impeccable organizational skills.
                        </p>
                        <p style="color: #B45A76;">
                            Apart from my studies and professional goals, I enjoy spending time with my family. I currently live
                            in Toms River, NJ with my husband and our two dogs, Lyla, 5 years old, and Kylo, 4 months old. I
                            also enjoy cooking and baking, watching tv and movies, listening to all different types of music,
                            going to hockey games, and traveling as often as I can. I am really looking forward to where this
                            investment in myself will take me!
                        </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                        <a href="./Assets/pdf/BriannaHebelerResume2020.pdf" target="blank">Brianna Hebeler Resume</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
