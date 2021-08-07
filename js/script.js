let screen = document.querySelector("#display");
let buttons = document.getElementsByClassName("btn");

let screenValue = "";

for(items of buttons){
    items.addEventListener("click",(btn)=>{
        btnText = btn.target.textContent;
        console.log("Click Button",btnText);
        if(btnText == "x"){

            btnText = '*';
            screenValue += btnText;
            screen.textContent = screenValue;

        }else if(btnText == "="){

            let input= screen.textContent;

            if(input[0]=="+" || input[0]=="-" || input[0]=="/" || input[0]=="*"){
                alert("Enter Valid Experation");
                screen.textContent="";


            }else if(input[(input.length)-1] =="+" || input[(input.length)-1] =="-" ||
            input[(input.length)-1] =="*" || input[(input.length)-1] =="/"){
                alert("Enter Valid Experation");
                screen.textContent="";
            }else{
                let result = eval(input);

                if(String(result).length > 13){
                    result=result.toFixed(4);
                }

                screenValue = result;
                screen.textContent =screenValue;

            }

        }else if(btnText == "RESET"){

            screenValue="";
            screen.textContent = screenValue;

        }else if(btnText == "C"){
            if(screen.textContent.length >0){

                let len = screen.textContent.length;
                let input =screen.textContent;
                screenValue = input.slice(0,len-1);
                screen.textContent = screenValue;
            }
        }else{

            screenValue += btnText;
            screen.textContent = screenValue;
        }
    });
}

//To Change Theme
let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");

circle1.addEventListener("click",themeOne);
circle2.addEventListener("click",themeSecond);
circle3.addEventListener("click",themeThird);

let theme1 = document.querySelector(".theme1");
let theme2 = document.querySelector(".theme2");
let theme3 = document.querySelector(".theme3");


function themeOne(){
    //Toggle Button One
    theme1.classList.remove("hide");
    theme2.classList.add("hide");
    theme3.classList.add("hide");

    //Background Colorrs 
    document.querySelector(".container").style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector(".buttonPart").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.querySelector(".toggle").style.backgroundColor = "hsl(223, 31%, 20%)";
    document.querySelector(".screen").style.backgroundColor = "hsl(224, 36%, 15%)";


    document.querySelector(".equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.querySelector(".equal").style.color = "white";
    document.querySelector(".equal").style.boxShadow = "0px 5px 0px 0px hsl(6, 70%, 34%)";

    document.querySelector(".b1").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.querySelector(".b1").style.boxShadow = "0px 5px 0px 0px hsl(224, 28%, 35%)";
    document.querySelector(".b2").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.querySelector(".b2").style.boxShadow = "0px 5px 0px 0px hsl(224, 28%, 35%)";


}

function themeSecond(){
    //Toggle Button Second
    theme1.classList.add("hide");
    theme2.classList.remove("hide");
    theme3.classList.add("hide");
    
    document.querySelector(".container").style.backgroundColor = "#5F7470";
    document.querySelector(".buttonPart").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.querySelector(".toggle").style.backgroundColor = "hsl(0, 5%, 81%)";
    document.querySelector(".screen").style.backgroundColor = "#B8BDB5";

    document.querySelector(".equal").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.querySelector(".equal").style.color = "white";
    document.querySelector(".equal").style.boxShadow = "0px 5px 0px 0px hsl(25, 99%, 27%)";

    document.querySelector(".b1").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.querySelector(".b1").style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
    document.querySelector(".b2").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.querySelector(".b2").style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
    
}

function themeThird(){
    //Toggle Button Third
    theme1.classList.add("hide");
    theme2.classList.add("hide");
    theme3.classList.remove("hide");
    
    document.querySelector(".container").style.backgroundColor = "#6E71C4";
    document.querySelector(".buttonPart").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".toggle").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".screen").style.backgroundColor = "hsl(268, 71%, 12%)";

    
    document.querySelector(".equal").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.querySelector(".equal").style.color = "black";
    document.querySelector(".equal").style.boxShadow = "0px 5px 0px 0px hsl(177, 92%, 70%)";

    document.querySelector(".b1").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.querySelector(".b1").style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)";
    document.querySelector(".b2").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.querySelector(".b2").style.boxShadow = "0px 5px 0px 0px hsl(285, 91%, 52%)";
}



