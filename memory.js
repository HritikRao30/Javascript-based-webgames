let cards = [];
let cardids = [];
let cardswon = [];
let t = 0;
const scr = document.querySelector("#result");
const strt = document.querySelector("#strt");
const rst = document.querySelector("#rst");
const itemsgrid = [
    {
        item:'burger',
        img:"images/cheeseburger.png"
    },
    {
        item:'fries',
        img:"images/fries.png" 
    },
    {
        item:'hotdog',
        img:"images/hotdog.png"    
    },
    {
        item:'ice-cream',
        img:"images/ice-cream.png"
    },
    {
        item:'milkshake',
        img:"images/milkshake.png"
    },
    {
        item:'pizza',
        img:"images/pizza.png"
    },
    {
        item:'burger',
        img:"images/cheeseburger.png"
    },
    {
        item:'fries',
        img:"images/fries.png" 
    },
    {
        item:'hotdog',
        img:"images/hotdog.png"    
    },
    {
        item:'ice-cream',
        img:"images/ice-cream.png"
    },
    {
        item:'milkshake',
        img:"images/milkshake.png"
    },
    {
        item:'pizza',
        img:"images/pizza.png"
    }
]
itemsgrid.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
function createBrd() {
    for (let i = 0; i < itemsgrid.length; i++){
        let newimg = document.createElement("img");
        //newimg.setAttribute("src", itemsgrid[i].img);
        newimg.setAttribute("src", 'images/blank.png');
        newimg.setAttribute("data-id", i);
        newimg.addEventListener('click', flip);
        grid.appendChild(newimg);
    }
}
function start() {
    let images = document.querySelectorAll("img");
    for (let i = 0; i < itemsgrid.length; i++){
        images[i].setAttribute("src", itemsgrid[i].img);
    }
    setTimeout(() => {
        for (let i = 0; i < images.length; i++){
            images[i].setAttribute("src", 'images/blank.png');
        }
    }, 5000);
}
createBrd();
function check() {
    //console.log("Running check!!");
    const images = document.querySelectorAll("img");
    if (cardids[0] == cardids[1]) {
        alert("You chose 2 same cards");
    }
    else if (cards[0] === cards[1]) {
        alert("You found a match");
        images[cardids[0]].setAttribute("src", "images/white.png");
        images[cardids[1]].setAttribute("src", "images/white.png");
        images[cardids[0]].removeEventListener('click',flip);
        images[cardids[1]].removeEventListener('click', flip);
        cardswon.push(cards);
        t += 2;
        scr.innerText = t;
    }
    else {
        alert("Sorry try again!!");
        images[cardids[0]].setAttribute("src", "images/blank.png");
        images[cardids[1]].setAttribute("src", "images/blank.png");      
    }
    if (t == 12) {
        alert("You won!!");
        console.log(cardswon);
    }
    cards = [];
    cardids = [];
}
function reset() {
    itemsgrid.sort(() => 0.5 - Math.random());
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++){
        images[i].setAttribute("src", 'images/blank.png');
        images[i].addEventListener('click', flip);
        images[i].setAttribute("data-id", i);
    }
    scr.innerText = "0";
}
function flip() {
    const cardid = this.getAttribute("data-id");
    const curr = itemsgrid[cardid];
    //console.log(curr.item);
    cards.push(curr.item);
    cardids.push(cardid);
    this.setAttribute("src", curr.img);
    if (cards.length == 2) {
        setTimeout(check, 500);
    }
}
strt.addEventListener('click', start);
rst.addEventListener('click', reset);