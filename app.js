

let myButton = document.querySelectorAll(".buttonClass");

for(let i =0 ; i<myButton.length ; i++)
{
    myButton[i].addEventListener("click",function(){
        
        myButton[i].parentElement.classList.toggle("active");
        if(myButton[i].parentElement.classList.contains("active"))
        {
            myButton[i].textContent="-";
        }
        else{
            myButton[i].textContent="+";
        }
        
    })
}