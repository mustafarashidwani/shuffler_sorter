shuffleCards = function(){
    var parent = getParentContainer();
    var fragment = document.createDocumentFragment();
    while (parent.children.length) {
        fragment.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(fragment);
}

sortCards = function(){
    var parent = getParentContainer();
    var sortElements = parent.children;
    sortElements = Array.prototype.slice.call(sortElements, 0);
    sortElements.sort(function(a, b) {
        var x = + a.id;
        var y = + b.id;
        return (x > y) ? 1 : -1;
    });
    var fragment = document.createDocumentFragment();
    Object.keys(sortElements).forEach(function(index){
        fragment.appendChild(sortElements[index]);
    });
    parent.appendChild(fragment);
}

getParentContainer = function(){
    var parent;
    if(document.documentElement.clientWidth > 375){
        parent = document.getElementsByClassName("grid")[0];
    }else{
        parent = document.getElementsByClassName("grid")[1];
    }
    return parent;
}