import  "./styles.css";
import loadHome from "./page-load.js";
import loadabout from "./about.js";
import loadcontact from "./contact.js";
import loadmenu from "./menu.js";
function clearcontent(){
    const pag = document.getElementById("content");
    pag.innerHTML = '';
};
function initpage(){
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const about = document.getElementById("about");
    const contact = document.getElementById("contact");

    home.addEventListener("click",()=>{clearcontent();loadHome();});
    menu.addEventListener("click",()=>{clearcontent();loadmenu();});
    about.addEventListener("click",()=>{clearcontent();loadabout();});
    contact.addEventListener("click",()=>{clearcontent();loadcontact();});
    loadHome();
}
initpage();