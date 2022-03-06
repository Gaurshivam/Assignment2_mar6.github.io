//  image 1

var counter = 0;
function like(){
    counter += 1;    // counter = counter + 1 ;
    render()
}
function render() {
    var disp = document.querySelector('.op_text');
    disp.innerText = counter;
}

var counter1 = 0;
function dislike(){
    counter1 += 1;     // counter = counter - 1 ;
    render1()
}
function render1(){
    var disp = document.querySelector('.op_text1');
    disp.innerText = counter1;
}
//button 2

var counter2 = 0;
function like1(){
    counter2 += 1;    // counter = counter + 1 ;
    render2()
}
function render2() {
    var disp1 = document.querySelector('.op_text3');
    disp1.innerText = counter2;
}

var counter3 = 0;
function dislike1(){
    counter3 += 1;     // counter = counter - 1 ;
    render3()
}
function render3(){
    var disp1 = document.querySelector('.op_text4');
    disp1.innerText = counter3;
}

//button 3


var counter4 = 0;
function like2(){
    counter4 += 1;    // counter = counter + 1 ;
    render4()
}
function render4() {
    var disp1 = document.querySelector('.op_text5');
    disp1.innerText = counter4;
}

var counter5 = 0;
function dislike2(){
    counter5 += 1;     // counter = counter - 1 ;
    render5()
}
function render5(){
    var disp1 = document.querySelector('.op_text6');
    disp1.innerText = counter5;
}

//button 4

var counter6 = 0;
function like3(){
    counter6 += 1;    // counter = counter + 1 ;
    render6()
}
function render6() {
    var disp1 = document.querySelector('.op_text7');
    disp1.innerText = counter6;
}

var counter7 = 0;
function dislike3(){
    counter7 += 1;     // counter = counter - 1 ;
    render7()
}
function render7(){
    var disp1 = document.querySelector('.op_text8');
    disp1.innerText = counter7;
}