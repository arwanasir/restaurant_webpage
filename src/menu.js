import bgi from "./images/bge.jpeg";
export default function loadmenu(){
const page  = document.querySelector("#content");
const newdv = document.createElement("div");
newdv.style.width = '1000px';
newdv.style.height = '600px';
newdv.style.display = 'flex';
// newdv.style.flexDirection = "column";
newdv.style.alignItems = "center";
newdv.style.backgroundImage = `url(${bgi})`;
newdv.style.backgroundRepeat = 'no-repeat';
newdv.style.backgroundPosition = 'center';
newdv.style.margin = "0 auto";
// newdv.style.backgroundBlendMode = 'screen';
newdv.style.backgroundSize = 'cover';
const items = ['Lasagna','Butter Chicken','Sushi','Spaghetti'];
const items1 = ['Torta','baklava','Apple Pie'];
const items2 = ['mojito','matcha','macchiato','coffee','Iced coffee'];


const container = document.createElement("div");
container.style.alignItems = 'center';
container.style.margin= '0 auto';
container.style.height= '160px';
container.style.width= '200px';
container.style.padding= '60px';
container.style.backgroundColor= 'rgb(239, 195, 92)';
// container.style.width = '600px';
// container.style.height = '300px';
const head2 =document.createElement("h2");
head2.style.backgroundColor = 'rgb(239, 195, 92)';
head2.textContent = "Main Dishes"
const ul = document.createElement("ul");
ul.style.backgroundColor= 'rgb(239, 195, 92)';
items.forEach(it=>{
    const li =document.createElement("li");
    li.textContent = it;
    li.style.backgroundColor= 'rgb(239, 195, 92)';
    ul.appendChild(li);
})
container.appendChild(head2);
container.appendChild(ul);


const container1 = document.createElement("div");
container1.style.alignItems = 'center';
container1.style.margin= '0 auto';
container1.style.height= '160px';
container1.style.width= '200px';
container1.style.padding= '60px';
container1.style.backgroundColor= 'rgb(239, 195, 92)';
// container1.style.width = '600px';
// container1.style.height = '300px';
const head3 = document.createElement("h2");
head3.style.backgroundColor= 'rgb(239, 195, 92)';
head3.textContent = "Desserts"
const ul1 = document.createElement("ul");
ul1.style.backgroundColor= 'rgb(239, 195, 92)';
items1.forEach(mn=>{
    const li1 = document.createElement("li");
    li1.textContent = mn;
    li1.style.backgroundColor= 'rgb(239, 195, 92)';
    ul1.appendChild(li1);

})
container1.appendChild(head3);
container1.appendChild(ul1);

const container2 = document.createElement("div");
container2.style.alignItems = 'center';
container2.style.margin= '0 auto';
container2.style.height= '160px';
container2.style.width= '200px';
container2.style.padding= '60px';
container2.style.backgroundColor= 'rgb(239, 195, 92)';
// container2.style.width = '600px';
// container2.style.height = '300px';
const head4 = document.createElement("h2");
head4.style.backgroundColor= 'rgb(239, 195, 92)';
head4.textContent = "Drinks";
const ul2 = document.createElement("ul");
ul2.style.backgroundColor= 'rgb(239, 195, 92)';
items2.forEach(dr=>{
    const li2 = document.createElement("li");
    li2.textContent = dr;
    li2.style.backgroundColor= 'rgb(239, 195, 92)'
    ul2.appendChild(li2);

})
container2.appendChild(head4)
container2.appendChild(ul2);
newdv.append(container,container1,container2);
page.appendChild(newdv);
}







