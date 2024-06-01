const arr = [
    'https://plus.unsplash.com/premium_photo-1708110921152-850148b86156?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1715787803917-d25f112866fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1715893743617-056b988f1e73?q=80&w=741&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1716034351843-98080eafa00c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'
];

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const image = document.getElementById("image");

let i = 0;

function slider() {
    if (i === arr.length - 1) {
        i = 0; 
    } else {
        i++;
    }
    image.src = arr[i];
}

next.onclick = function() {
    slider();
};

prev.onclick = function() {
    if (i === 0) {
        i = arr.length - 1;
    } else {
        i--;
    }
    image.src = arr[i];
};
setInterval(slider, 2000);
