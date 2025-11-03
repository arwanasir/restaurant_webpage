import premium from "./images/premium.jpeg";
import image1 from "./images/ddd.jpeg";
import image2 from "./images/download (1).jpeg";
import image3 from "./images/download.jpeg";
import image4 from "./images/last.jpeg";
import image5 from "./images/images (2).jpeg";
import image6 from "./images/immg.jpeg";
import image7 from "./images/stsfc.jpeg";
import image8 from "./images/bfls.jpeg";


export default function loadHome() {
const images1 = [image1,image2,image3];
const images2 = [image4,image5,image6];
const images3 = [image7,image8];

const content = document.querySelector("#content");
const image = document.createElement('img');
const container = document.createElement('div');
container.style.width = '1000px'
container.style.height = '400px'
container.style.display = 'grid'
container.style.gridTemplateColumns= 'repeat(3,1fr)';
container.style.margin = '0 auto';

const newds = document.createElement('div');
newds.style.width = '1000px';
newds.style.height = '60px';
newds.style.backgroundColor = 'orange';
newds.textContent = 'A Restaurant That Feels Like Home';
newds.style.fontSize = 'larger';
newds.style.fontWeight = 'bolder';
newds.style.textAlign = 'center';
newds.style.paddingTop = '20px';
newds.style.margin = '0 auto';
newds.style.backgroundColor = 'rgb(224, 165, 56)';
content.appendChild(newds);


image.src = premium;
image.style.maxWidth = '100%';
content.appendChild(image);

const newd = document.createElement('div');
newd.style.width = '1000px';
newd.style.height = '60px';
newd.style.backgroundColor = 'orange';
newd.textContent = 'All Kinds Of Foods Cooked With The Recipe Of Love For Our Lovely Customers';
newd.style.fontSize = 'larger';
newd.style.fontWeight = 'bolder';
newd.style.textAlign = 'center';
newd.style.paddingTop = '20px';
// newd.style.marginBottom = '20px';
newd.style.margin = '0 auto';
newd.style.backgroundColor = 'rgb(224, 165, 56)';
content.appendChild(newd);

images1.forEach((img)=>{
    const cont = document.createElement('div');
    const pics = document.createElement('img');
    pics.src = img;
    cont.appendChild(pics);
    cont.style.backgroundColor = 'rgb(244, 187, 80)';
    // cont.style.borderRadius = '8px';
    cont.style.padding = '10px 25px';
    container.appendChild(cont) ;
    content.appendChild(container);
})

images2.forEach((imgs)=>{
    const contain = document.createElement('div');
    const pic = document.createElement('img');
    pic.src = imgs;
    contain.appendChild(pic);
    contain.style.backgroundColor = 'rgb(244, 187, 80)';
    // contain.style.borderRadius = '8px';
    contain.style.padding = '10px 25px';
    container.appendChild(contain);
    content.appendChild(container);
});

const last = document.createElement("div");
last.style.width = '1000px';
last.style.height = '60px';
last.style.backgroundColor = 'orange';
last.textContent = 'With Smile On The Face , We Serve You Your Favorite Dishes';
last.style.fontSize = 'larger';
last.style.fontWeight = 'bolder';
last.style.textAlign = 'center';
last.style.paddingTop = '20px';
last.style.marginTop = '10px'
last.style.marginBottom = '20px';
last.style.margin = '0 auto';
last.style.backgroundColor = 'rgb(224, 165, 56)';
// container.appendChild(last);
content.appendChild(last);
const lastdiv = document.createElement('div');
lastdiv.style.display = 'grid';
lastdiv.style.gridTemplateColumns = 'repeat(2,1fr)';
lastdiv.style.width = '600px'
lastdiv.style.margin = '0 auto';
lastdiv.style.backgroundColor = 'rgb(244, 187, 80)'

images3.forEach((imga)=>{
    const cards = document.createElement('div');
    const wit = document.createElement('img');
    wit.src= imga;
    cards.appendChild(wit);
    cards.style.backgroundColor = 'rgb(244, 187, 80)';
    cards.style.display = 'flex';
    cards.style.flexDirection = 'row';
    cards.style.paddingLeft = '13px'
    lastdiv.appendChild(cards);
    content.appendChild(lastdiv);
});

const footer = document.createElement('footer');
const foot = document.createElement('div');
foot.innerHTML = '2025, All Right Reserved.';
foot.style.color = 'aliceblue';
foot.style.fontSize = 'larger';
foot.style.fontWeight = 'bolder';
foot.style.backgroundColor = 'chocolate';
foot.style.textAlign = 'center';
foot.style.paddingTop = '10px'
footer.style.width = '100%';
footer.style.height = '50px';
footer.style.marginTop = '20px';
footer.style.backgroundColor = 'chocolate';
footer.appendChild(foot);
content.appendChild(footer);

};



