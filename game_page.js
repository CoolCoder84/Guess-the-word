player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ": ";
document.getElementById("player2_name").innerHTML=player2_name + ": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase is"+word);

    char1=word.charAt(1);

    length_divide_2= Math.floor(word.length/2);
    char2=word.charAt(length_divide_2);

    length_minus=word.length-1;
    char3=word.charAt(length_minus);

    remove_char1=word.replace(char1,"_");
    remove_char2=remove_char1.replace(char2,"_");
    remove_char3=remove_char2.replace(char3,"_");

    question_word="<h4 id=word_display>Q."+remove_char3+"</h4>";
    input_box="<br> answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'> check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if(answer == word){
        if(answer_turn == "player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn- " +player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn- " +player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn- "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn- "+player1_name;
    }
document.getElementById("output").innerHTML="";
}