export default function loadcontact(){
const pages  = document.querySelector("#content");
const newd = document.createElement("div");
newd.style.width = '900px';
newd.style.height = '500px';
newd.style.padding = '10px';
newd.style.backgroundColor = 'rgb(239, 195, 92)';
const head = document.createElement("h2");
head.textContent = "Contact Us";
head.style.backgroundColor = 'rgb(239, 195, 92)';
const head2 = document.createElement("h3");
head2.textContent = "We’d love to hear from you!";
head2.style.backgroundColor = 'rgb(239, 195, 92)';
const para = document.createElement("p");
para.style.backgroundColor = 'rgb(239, 195, 92)';
para.innerHTML = 'Whether you want to book a table, ask about our menu, or share feedback — our team is always ready to help.'

const head3 = document.createElement("h2");
head3.style.backgroundColor = 'rgb(239, 195, 92)';
head3.textContent = "Address:";
const para1 = document.createElement("p");
para1.style.backgroundColor = 'rgb(239, 195, 92)';
para1.innerHTML ='Aroma Delight Restaurant B1 Street, New York, USA';

const para2 = document.createElement("h3");
para2.style.backgroundColor = 'rgb(239, 195, 92)';
para2.innerHTML = 'Phone: +251 912 345 678';

const para3 = document.createElement("h3");
para3.style.backgroundColor = 'rgb(239, 195, 92)';
para3.innerHTML = 'Email: info@aromadelight.com';

const head4 = document.createElement("h3");
head4.style.backgroundColor = 'rgb(239, 195, 92)';
head4.textContent ='Opening Hours:';
const para4 = document.createElement("p");
para4.style.backgroundColor = 'rgb(239, 195, 92)';
para4.innerHTML ='Monday – Friday: 9:00 AM – 10:00 PM';

const para5 = document.createElement("p");
para5.style.backgroundColor = 'rgb(239, 195, 92)';
para5.innerHTML ='Saturday – Sunday: 11:00 AM – Midnight';
const para6 = document.createElement("h3");
para6.style.backgroundColor = 'rgb(239, 195, 92)';
para6.textContent = 'Follow Us:';
const para7 = document.createElement("p");
para7.style.backgroundColor = 'rgb(239, 195, 92)';
para7.innerHTML ='Instagram | Facebook | TikTok — @AromaDelight';
newd.append(head,head2,para,head3,para1,para2,para3,head4,para4,para5,para6,para7);
pages.appendChild(newd);
}