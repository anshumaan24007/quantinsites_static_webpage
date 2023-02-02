document.addEventListener("DOMContentLoaded",function onAccordianClick(){
                var acc = document.getElementsByClassName("accordion");
                var i;
                
                for (i = 0; i < acc.length; i++) {
                  acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display == "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block"
                    } 
                  });
                }
            },
            )
function toggleArticle(){
    if(document.getElementById('span').innerHTML=='Read more'){
        document.getElementById('container').getElementsByTagName('p')[0].style.display='block';
        document.getElementById('span').innerHTML='show less'
    }
    else
    {
        document.getElementById('container').getElementsByTagName('p')[0].style.display='-webkit-box';
        document.getElementById('span').innerHTML='Read more'
    }
}
function scrollDown(){
    document.getElementById('section2').scrollIntoView({ behavior: "smooth" });
}