(function() {
    var question = function(ques, option=[], ans) {
    this.ques = ques;
    this.option = option;
    this.ans = ans;
}

var count = 0;
var quest =[ new question('Who is einstein ?',['engineer', 'scientist', 'doctor', 'teacher'], 1), new question('Is javaScript cool ?',['yes', 'no'], 0), new question('Is cat human ?', ['yes', 'no'], 1)];

question.prototype.disp = function() {
    console.log(this.ques);
    for(var i = 0; i < this.option.length; i++ ) {
        console.log(i + ": " + this.option[i]);
    }
}

question.prototype.checkAns = function() {
    
    if (this.ans === parseInt(check)) {
        
        console.log('ans is correct');
        count++;
        //quest[rand].disp();
        
    } else {
        console.log('oops!! ans is wrong');
       // quest[rand];
        
    }
     
    return function() {
        console.log('your score is : ' + count);
        console.log('\n');
    }
}

var check;


    
    function nextQuestion() {
        var rand = Math.floor((Math.random() * quest.length));
        quest[rand].disp();
        check = (prompt('Enter Correct Option Either 0 or 1'));
        
        if (check != 'quit') {
            
            quest[rand].checkAns()();
            nextQuestion();
            
        }
    }
    nextQuestion();
    
})();










