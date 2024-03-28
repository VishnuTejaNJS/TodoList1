document.getElementById('btn').addEventListener('click',
function(){
     let input = document.getElementById('input').value;
     // Creating the todo list elements
     let elem=document.createElement('li');
     let btn1=document.createElement('button');
     let btn2=document.createElement('button');
     btn1.innerText="Done";
     btn2.innerText="Delete";
     let ul=document.querySelector('ul');
    //  Adding style to buttons
    btn1.style.border="none";
    btn1.style.borderRadius="8px";
    btn1.style.marginLeft="2%";
    btn1.style.padding="4px";
    btn1.style.fontSize="0.8rem";
    // btn2 styling
    btn2.style.border="none";
    btn2.style.borderRadius="8px";
    btn2.style.marginLeft="2%";
    btn2.style.padding="4px";
    btn2.style.fontSize="0.8rem";
    // Appending the elements with HTML elements
     ul.appendChild(elem);
     elem.innerText=input;
     elem.appendChild(btn1);
     elem.appendChild(btn2);
    //  Adding functionality to the buttons
    btn1.addEventListener('click',function(){
        elem.style.textDecoration="line-through";
    });
    btn2.addEventListener('click',function(){
        elem.remove();
    });
    document.getElementById('input').value="";
    })
    