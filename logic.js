//take information of all buttons...
var squares = document.querySelectorAll('button');
var temp;

document.getElementById('result').innerText="Start game";
var isresultcalled=false;


// Console.log(squares);

// binding events to all buttons....

for(var i=0; i<squares.length; i++)
{
    squares[i].addEventListener('click',change);
    console.log(squares[i]);
}

// Function for changing the markers...


var count=0;
function change()
{
    if(this.textContent==='')
    {
        count++;
    }
    else if(this.textContent==='x')
    {
        this.textContent='x';
    }
    else
    {
        this.textContent='o';
    }
    if(this.textContent==='' && count%2==0)
    {
        this.textContent='o';
    }
    if(this.textContent==='' && count%2==1)
    {
        this.textContent='x';
    }
    temp=this.textContent;
    row();
    column();
    diagonal();
    if(count==9)
{
    draw();
}

}


//Function Binding for clear all buttons....

var restart = document.querySelector("#restart");


//ClearBoard Function Definition...

function clearBoard()
{
    for(var i=0; i<squares.length; i++)
    {
        squares[i].textContent="";
        
    } 
}

// restart.addEventListener('click',clearBoard);

//Winning Function Logic....
function row(){
    console.log("in row fun..");
    // var temp=this.textContent;
    //console.log(temp);
    if(b1.textContent==temp && b2.textContent==temp && b3.textContent==temp)
    {
        Result(temp);
    }
    if(b4.textContent==temp && b5.textContent==temp && b6.textContent==temp){
        Result(temp);
    }
    if(b7.textContent==temp && b8.textContent==temp && b9.textContent==temp){
        Result(temp);
    }


}
function column(){
    if(b1.textContent==temp && b4.textContent==temp && b7.textContent==temp)
    {
        Result(temp);
    }
    if(b2.textContent==temp && b5.textContent==temp && b8.textContent==temp){
        Result(temp);
    }
    if(b3.textContent==temp && b6.textContent==temp && b9.textContent==temp){
        Result(temp);
    }
}
function diagonal(){
    if(b1.textContent==temp && b5.textContent==temp && b9.textContent==temp)
    {
        Result(temp);
    }
    if(b3.textContent==temp && b5.textContent==temp && b7.textContent==temp){
        Result(temp);
    }
    
}

function Result()
{   
    var message="Winner"+ " "+temp;
    document.getElementById('result').innerText=message;
    isreultcalled=true;
    disable();
}

function disable()
{
    for(var i=0; i<squares.length; i++)
    {
    squares[i].disabled=true;
    }
}
function draw(){

if(isresultcalled==false)
{
    document.getElementById('result').innerText="match draw";
}

}

