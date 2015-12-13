function drawTower(towerNum, blocks){
  var tower = document.getElementById("tower"+towerNum);
  tower.innerHTML = "";
  for(var i = 0; i < blocks.length; i++){
    var block = document.createElement("div");
    block.classList.add("block");
    block.setAttribute("id", "block"+blocks[i]);
    tower.appendChild(block);
  }
}
function updateCounter(num){
    var counter = document.getElementById("counter");
    counter.innerHTML = num;
}
updateCounter(0);
drawTower(1,[1,2,4]);
drawTower(2,[3,5]);
drawTower(3,[]);