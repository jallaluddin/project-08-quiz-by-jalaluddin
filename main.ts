#! /usr/bin/env node
import inquirer from "inquirer";
const questions = [
    {
        type: "list",
        name: "q1",
        choices: ["Islamabad", "Peshawar", "Lahore", "Multan"],
        message: "Which city of the following is the capital of Pakistan?:",
    },
    {
        type: "list",
        name: "q2",
        choices: ["Lion", "Deer", "Fox", "Markhor"],
        message: "Which of the following is the national animal of Pakistan?:",
    },
    {
        type: "list",
        name: "q3",
        choices: ["RAM", "Motherboard", "ROM", "CPU"],
        message: "Which part of the following is the brain of a computer:",
    }
];
const answers = {
    q1: "Islamabad",
    q2: "Markhor",
    q3: "CPU",
};
function startQuiz() {
    inquirer.prompt(questions).then(responses => {
        const score = calculateScore(responses, questions, answers);
        console.log(`\n Your quiz result: ${score} out of ${questions.length}`);
    });
}
function calculateScore(responses, questions, answers) {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];
        const userResponse = responses[currentQuestion.name];
        if (userResponse === answers[currentQuestion.name]) {
            score++;
        }
    }
    return score;
}
startQuiz();