function send()
{
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    actual_number = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box>'<br>";
    check_button = "<br><br><button onclick='check()'><span class='material-symbols-outlined'> done </span></button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}