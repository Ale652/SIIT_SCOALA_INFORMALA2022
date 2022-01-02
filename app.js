const gameContainer = document.getElementById('gameContainer');
const player = document.getElementById('player');

// Get positions of container

// The HTMLElement.offsetTop read-only property returns the distance of the outer 
// border of the current element relative to the inner border of the top of the offsetParent node.
var topGameContainer = gameContainer.offsetTop; 
var leftGameContainer = gameContainer.offsetLeft;
var widthGameContainer = gameContainer.offsetWidth;
var heightGameContainer = gameContainer.offsetHeight;



document.addEventListener("keydown", function(e){
    // folositi position absolute
    if(e.code=="ArrowDown"){
        //move the element down 
        var top = player.offsetTop+10;
        if(top+player.offsetHeight<topGameContainer+heightGameContainer){ // do not permit to the <player> to pass the bottom margin of <container>
            top = top+"px";
            player.style.top = top;  
        }  
    }

    if(e.code=="ArrowLeft"){

        // move the element to left 
        var left = player.offsetLeft-10;
        if(left>leftGameContainer){// do not permit to the <player> to pass the left margin of <container>
            left = left+"px";
            player.style.left = left;
        }  
    }


    if(e.code=="ArrowUp"){
        // move the element up 
        var up = player.offsetTop-10; 
        if(up>topGameContainer){ // do not permit to the <player> to pass the top margin of <container>
            up = up+"px";
            player.style.top = up; 
        }        
    }


    if(e.code=="ArrowRight"){

        // move the element to right 
        var rithgt = player.offsetLeft+10;
        if(rithgt+player.offsetWidth<leftGameContainer+widthGameContainer){  // do not permit to the <player> to pass the right margin of <container>
            rithgt = rithgt+"px";
            player.style.left = rithgt;  
        } 
    }

    var top1 = player.offsetTop;
    var top2 = player.offsetLeft;
    console.log("Top : ",top1,"Left: ",top2);

    console.log("Top container : ",topGameContainer," Left container: ",leftGameContainer, " Width : ", widthGameContainer, " height: ", heightGameContainer);

  })

document.addEventListener('keydown', logKey);

function logKey(e) {
console.log(` ${e.code}`);
}