let button = document.querySelectorAll("button");
const input = document.querySelector("input");

let string = "";                                           // this is empty string we'll store values here from taking inputs froom the user// \

let arr = Array.from(button);                             // to acess all the buttons we use aray//
arr.forEach(button=>{                                    // for each loop are special type of loops for 
    button.addEventListener("click",(e)=>{              // Here we are using the concept of Events Objects
        if (e.target.innerHTML== '='){
            string = eval(string);      // special type of inbuilt function 
            input.value = string;
        }

        else if(e.target.innerHTML=='AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML=='DEL'){
            string = string.substring(0,string.length-1); // substring property of strings
            input.value = string;

        }

        else{
            string +=e.target.innerHTML;
            input.value = string;  // whatever will be stored in the string would be passed to input // 

        }



      
    });
});

// for each loop doesnt work on buttons so we use array here                                                  



