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
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("correct").innerHTML = "You got " + correct + " correct";

} 