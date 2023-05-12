var p = document.getElementsByTagName('p');
var boxs = document.getElementsByClassName('boxs');
var dragitem = null;
var h = document.getElementById('h');
for(var i of p) {
    i.addEventListener('dragstart',dragstart);
    i.addEventListener('dragend',dragend);
}

function dragstart() {
    dragitem = this;
    setTimeout(()=>this.style.display = "none",0);

}
function dragend() {
    setTimeout(()=>this.style.display = "block",0);
    dragitem = null;
    
}

for(var b of boxs) {
    b.addEventListener('dragover',dragover);
    b.addEventListener('dragenter',dragenter);
    b.addEventListener('dragleave',dragleave);
    b.addEventListener('drop',drop);
}

function dragover(e) {
    e.preventDefault();
    h.innerHTML = 'dragging...';
    h.style.color = 'red';
    this.style.boxShadow = '0 0 10px aqua';
}

function dragenter(e) {
    e.preventDefault();
}

function dragleave() {
    this.style.boxShadow = 'none';
}

function drop() {
    this.append(dragitem);
    h.innerHTML = 'droped';
    h.style.color = 'blue';
}