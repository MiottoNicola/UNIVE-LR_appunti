
function updateTime(){
    let now = new Date().toLocaleTimeString();
    let timeDiv = document.getElementsByClassName("time")[0];
    let timeList = document.getElementsByClassName("timelist")[0];

    if(timeDiv.childNodes.length > 1){
        let oldTime = timeDiv.childNodes[1];
        timeList.appendChild(oldTime);
        timeList.appendChild(document.createElement("br"));
    }
    // Add current time
    let currentTimeTextNode = document.createTextNode(now);
    timeDiv.appendChild(currentTimeTextNode);
}

// // Every second
setInterval(updateTime, 1000);

function maxHeightTree(rootNode){
    let currentMax = 0;

    function domTreeHeight(currentNode, height, maxHeight){
    }
    
    if (rootNode != undefined){
        let i = 0;
        while(i<rootNode.children.length){
            domTreeHeight(rootNode.children[i], 0, currentMax);
            i++;
        }
    }

    return currentMax;
}


