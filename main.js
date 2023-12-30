window.onload=onl;
function onl() {
    btn1=document.getElementById("btn1");
    btn1.addEventListener("click",function(){
        document.getElementById("value").insertAdjacentText('beforeend', 1);
    });
    btn2=document.getElementById("btn2");
    btn2.addEventListener("click",function(){
        document.getElementById("value").insertAdjacentText('beforeend', 2);
    });
    btn3=document.getElementById("btn3");
    btn3.addEventListener("click",function(){
        document.getElementById("value").insertAdjacentText('beforeend', 3);
    });
    btn4=document.getElementById("btn4");
    btn4.addEventListener("click",function(){
        document.getElementById("value").insertAdjacentText('beforeend', 4);
    });
    btn5=document.getElementById("btn5");
    btn5.addEventListener("click",function(){
        document.getElementById("value").insertAdjacentText('beforeend', 5);
    });
    btn6=document.getElementById("btn6");
    btn6.addEventListener("click",function() {
        document.getElementById("value").insertAdjacentText('beforeend', '6');
    });
    btn7=document.getElementById("btn7");
    btn7.addEventListener("click",function(){
        document.getElementById("value").insertAdjacentText('beforeend', 7);
    });
    btn8=document.getElementById("btn8");
    btn8.addEventListener("click",function(){
        document.getElementById("value").insertAdjacentText('beforeend', 8);
    });
    btn9=document.getElementById("btn9");
    btn9.addEventListener("click",function() {
        document.getElementById("value").insertAdjacentText('beforeend', 9);
    });
    btn0=document.getElementById("btn0");
    btn0.addEventListener("click",function() {
        document.getElementById("value").insertAdjacentText('beforeend', 0);
    });
    btndel=document.getElementById("btndel");
    btndel.addEventListener("click",function() {
        document.getElementById("value").innerText=""
    });
    btnp=document.getElementById("btnp");
    btnp.addEventListener("click",function() {
        document.getElementById("value").insertAdjacentText('beforeend', '+');
    });
    btns=document.getElementById("btns");
    btns.addEventListener("click",function() {
        document.getElementById("value").insertAdjacentText('beforeend', '-');
    });
    btne=document.getElementById("btne");
    btne.addEventListener("click",execute);
}

function execute(){
    var expre=document.getElementById("value").innerText;
    document.getElementById("value").innerText=expre;
    if(expre.includes("+")){
        var myarr=expre.split("+");
        let len=myarr.length;
        let tot=0;
        for(let i=len-1;i>=0;i--){
            tot=tot+parseInt(myarr[i]);
        }
        document.getElementById("value").innerText=tot;
    }
    if(expre.includes("-")){
        var myarr1=expre.split("-");
        let len1=myarr1.length;
        let tot1=parseInt(myarr1[0]);
        for(let i=len1-1;i>0;i--){
            tot1=tot1-parseInt(myarr1[i]);
        }
        document.getElementById("value").innerText=tot1;
    }

}

