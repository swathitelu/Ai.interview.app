const questions = [

"Tell me about yourself.",

"What are your strengths?",

"What are your weaknesses?",

"Why should we hire you?",

"What is your dream job?",

"Explain teamwork.",

"How do you handle pressure?",

"Describe a challenge you faced.",

"What are your career goals?",

"Why do you want this job?"

];

let currentQuestion = "";

function nextQuestion(){

    const randomIndex =
    Math.floor(Math.random() * questions.length);

    currentQuestion = questions[randomIndex];

    document.getElementById("question").innerText =
    currentQuestion;

    document.getElementById("answer").value = "";

    document.getElementById("result").innerHTML =
    "Feedback will appear here...";
}

function checkAnswer(){

    const answer =
    document.getElementById("answer").value.trim();

    if(answer === ""){
        alert("Please enter your answer");
        return;
    }

    let score = 0;

    // Length checking
    if(answer.length > 20){
        score += 30;
    }

    if(answer.length > 50){
        score += 30;
    }

    // Keyword checking
    const keywords = [
        "team",
        "hardworking",
        "experience",
        "learn",
        "skill",
        "positive",
        "leadership"
    ];

    keywords.forEach(word => {

        if(answer.toLowerCase().includes(word)){
            score += 5;
        }

    });

    if(score > 100){
        score = 100;
    }

    let feedback = "";

    if(score >= 80){
        feedback = "Excellent Answer!";
    }
    else if(score >= 50){
        feedback = "Good Answer!";
    }
    else{
        feedback = "Try to explain more clearly.";
    }

    document.getElementById("result").innerHTML = `

        <div class="score">
            Score : ${score}/100
        </div>

        <br>

        <b>Feedback:</b> ${feedback}

        <br><br>

        <b>Tips:</b>

        <ul>
            <li>Speak confidently</li>
            <li>Use real examples</li>
            <li>Show positive attitude</li>
            <li>Keep answer clear</li>
        </ul>

    `;
}
function startVoice(){

const recognition =
new webkitSpeechRecognition();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = function(event){

document.getElementById("answer").value =
event.results[0][0].transcript;

};

}
function toggleMode(){

document.body.classList.toggle("light");

}
localStorage.setItem("lastScore", score);
const saved =
localStorage.getItem("lastScore");

console.log(saved);
"What motivates you?",

"Explain leadership.",

"Tell me about a failure.",

"What are your technical skills?"