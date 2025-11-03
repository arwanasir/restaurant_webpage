export default function loadabout(){
const cont = document.querySelector("#content");
const nw = document.createElement("div");
nw.style.width = '990px';
nw.style.height = '400';
nw.style.padding = '10px';
nw.style.backgroundColor = 'rgb(239, 195, 92)';
const head = document.createElement("h2");
head.style.backgroundColor = 'rgb(239, 195, 92)';
head.textContent = "About Us";
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.style.backgroundColor = 'rgb(239, 195, 92)';
para2.style.backgroundColor = 'rgb(239, 195, 92)';
para1.innerHTML = "Welcome To Our  Restaurant, a cozy place where food meets passion. Founded in 2020, our restaurant brings authentic flavors and heartwarming dishes made with love.";
para2.innerHTML = "Our chefs carefully select fresh, local ingredients every day to make sure every bite feels like home."
const head1 = document.createElement("h3");
head1.style.backgroundColor = 'rgb(239, 195, 92)';
head1.textContent = "Our Missions";
const para3 = document.createElement("p");
para3.style.backgroundColor = 'rgb(239, 195, 92)';
para3.innerHTML = "To create a dining experience that connects people through great taste, comfort, and unforgettable moments."

const quote = document.createElement('blockquote');
quote.style.backgroundColor ='rgb(239, 195, 92)';
quote.textContent = '"Cooking is not just about flavor — it’s about feeling."';
const author = document.createElement('cite');
author.style.backgroundColor = 'rgb(239, 195, 92)'
author.textContent = '— Chef Meron, Head Chef at Aroma Delight';
quote.appendChild(author);
nw.append(head,para1,para2,head1,para3,quote);
cont.appendChild(nw);
}