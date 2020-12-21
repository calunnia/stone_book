function pageLoad (){
 /* 
1. tabolás,css-html - javascript
2. zároljelek,
3. pontos vesszőt nem elfelejteni
4. gyakori commit

 */


/*
html 
1.a head tisztazasa> minden pontosan legyen be link-elve
2. div tabolas  atlathatosag / parent -child viszony/ 


css
1.w3school --try it !! 
2.figyelni hogy class es ID , scss nested,
  ha nem mukodik eloszor megnezni hogy be-toltotte a CSS-eket az elemere es utanna hogy mit nem irtunk-e jol...




javascript
1.A feladat megertese , megertese,megertese. megtervezese ,logikus felepitese, consol log hasznalata...
2. debugg ---step by step fuggveny mukodesenek pontos megertese , mikor melyik reszt tolti be / viszi veghez milyen lessz a valtozo erteke.
3. valtozok helyenek declaralasa / 

*/
rootE = document.getElementById(`root`);

let notes= [];

notes.push({
    tag:"div",
    content: `
    mindig ugy kezdjuk a javascript, hogy a load fuggvenyt/ letrehozzuk a load esemeny hatasara meghivando fuggvenyt.majd a load esemeny hatasara meghivjuk.
    `
});

notes.push({
    tag:"div",
    content: `
   `
});





console.log("notes");

}

window.addEventListener(`load`, pageLoad);