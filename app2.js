/*


function (modalName) {

  function addModal(btn){
  add Modal popup to the div;
  } > recursive
}

*/

var modal_div = document.getElementById("myModal");


function renderModal() {

  /*
  
  <div class="modal-content">
            <img class="popup" src="Rocks.png">
        </div>  
  */

  console.log("printed one element")

  modal_div.style.display = "block";

  var modal_content = document.createElement("div");
  var img_content = document.createElement("img");

  modal_div.appendChild(modal_content);
  modal_content.appendChild(img_content);

  modal_content.setAttribute("class","modal-content");
  img_content.setAttribute("class", "pop-up");
  img_content.setAttribute("src","Rocks.png");

  return console.log("printed one element, exiting");


}




