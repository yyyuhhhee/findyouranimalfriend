const qbox = document.getElementById("qbox");
const angry = document.getElementById("angry");
const hidden = document.getElementById("hidden");
const bg = document.querySelector("body");


const span1 = document.getElementById("marquee1");
const span2 = document.getElementById("marquee2");
const span3 = document.getElementById("marquee3");
const span4 = document.getElementById("marquee4");
const span5 = document.getElementById("marquee5");
const span6 = document.getElementById("marquee6");
const track = document.getElementById("t1");
const content = document.getElementById("c1");
const back = document.querySelector("body");




function HandleClick() {
    angry.style.display = "inline-block";
    hidden.style.display = "grid";
    back.style.backgroundColor = "black";
    track.style.animationDuration = "100s";


    span1.innerText = " 🐓In intensive chicken farms all three of these are compromised by overcrowding in filthy conditions, barren environments, and rapid growth. Chickens also suffer injury and stress through rough handling during catching, transport and slaughter."
    span2.innerText = " 🐓In intensive chicken farms all three of these are compromised by overcrowding in filthy conditions, barren environments, and rapid growth. Chickens also suffer injury and stress through rough handling during catching, transport and slaughter."
    span3.innerText = " 🐓In intensive chicken farms all three of these are compromised by overcrowding in filthy conditions, barren environments, and rapid growth. Chickens also suffer injury and stress through rough handling during catching, transport and slaughter."
    span4.innerText = " 🐓In intensive chicken farms all three of these are compromised by overcrowding in filthy conditions, barren environments, and rapid growth. Chickens also suffer injury and stress through rough handling during catching, transport and slaughter."
    span5.innerText = " 🐓In intensive chicken farms all three of these are compromised by overcrowding in filthy conditions, barren environments, and rapid growth. Chickens also suffer injury and stress through rough handling during catching, transport and slaughter."
    span6.innerText = " 🐓In intensive chicken farms all three of these are compromised by overcrowding in filthy conditions, barren environments, and rapid growth. Chickens also suffer injury and stress through rough handling during catching, transport and slaughter."
  
    content.style.backgroundColor = "red";
}




qbox.addEventListener("click", HandleClick);




