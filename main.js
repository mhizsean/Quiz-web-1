function check () {

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let correct = 0

    if (question1 == 4) {
        correct++
    }

    if (question2 == 7) {
        correct++
    }

    if (question3 == "Donald Trump") {
        correct++
    }

    let alerts = ["Great Job!", "That's Okay, but can be better", "You really need to do better"];
    let scoreRange;

        if (correct < 1) {
            scoreRange = 2;
        }
        if (correct > 0 && correct < 3) {
            scoreRange = 1;
        }
        if (correct > 3) {
            scoreRange = 0;
        }
        



   document.getElementById("message").innerHTML = alerts[scoreRange]
    document.getElementById("num-correct").innerHTML = "You got " + correct + " correct";



} 