function _load() {

  //1es szabaly: mindig tervezd meg a lepeseket!

  //2es szabaly: figyelj a cleancode szabalyokra(tagolas,kommenteles)!

  //3as szabaly: fontos ne kapkodj - irasjelek, kis es nagybetuk, zarojelek pontos hasznalata!

  /* html
    1. hivatkozasok megadasa (css-link,js-script,font style-link+url)
    2. tabolas 
      <div class=attention>
        <h1>Minden elem fontos</h1>
      </div>

      <div class=attention>
        <h2>Minden elem fontos</h2>
      </div>

    3. minden tervezett elem letrehozasa es utana lepjunk tovabb a kulcsinyre-css es a cselekvesekre-js. Azaz teljes elorelathato struktura elkeszitese.
  

  scss/css
    1. mindig kezd azzal 
    *,
    *::before,
    *::after{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
      
    2. tagolas, mert akkor kesobb is tudod melyik elemhez milyen tulajdonsag tartozik

    3. kivulrol befele haladva (a szerkezetben) add meg az elemek tulajdonsagait      
  
  
  js
    1. Mindig azzal kezdj
      function _load() {
        //console.log(mukodik);
      }
        
      window.addEventListener("load", _load);
        
    2. figyelj arra, ha nem mukodik az automatikus kiegeszites, akkor elirtad vagy kommentelsz
      
    3. console.log(); hasznalata a lekerendo atalakitas utan egybol
  */
  let rootE = document.getElementById("root");



  let notes = [];
// JS 1.
  notes.push( 
    {
                tag: "div",
                content: ` <h1>Stone book</h1>JS 1.<br>  Úgy kezdjük a javascript-ünket, 
                           hogy létrehozzuk a load esemény hatására 
                           meghivandó függvényt,ami a load esemeny bekövetkezésekor
                           automatikusan meghivódik.`,
                class: "elso"
               }
  );
  notes.push( 
    {
                tag: "code",
                content: ` function _load() {
    //console.log(mukodik);
  }
 window.addEventListener("load", _load); `,
                class: "javascript"
              }
  );
// JS 2.
  notes.push( 
    {
                tag: "div",
                content: `JS 2.<br>A fügvényt <b>sum</b> a meghívása előtt kell létrehozni. `,
                class: "html"
               }
  );

  notes.push( 
    {
                tag: "code",
                content: `

let prevMonth = 5000 ;  // getPreviousMonthBalance();
let curMonth  = 3000 ;  // getCurrentMonthBalance();

  function sum(a,b){
    return a + b;
  } 
  console.log( sum(prevMonth,curMonth) ); // => 8000`, 
                class: ""
              }
  );
  
// JS 3.
  notes.push( 
    {
                tag: "div",
                content: `JS 3.<br>Tab-olás megfelelő használata, átláthatóság 60% kód megértése!`,
                class:"tab"
              }
  );
  notes.push( 
    {
                tag: "code",
                content: `
  function highAndLow2(numbers){

      workNumbers = numbers.split(' ');
      let minN = workNumbers[0];
      let maxN = workNumbers[0];
    
    for (x of workNumbers) {           
        minN =   parseInt(x) < parseInt(minN) ?  x : minN;            
        maxN =   parseInt(x) > parseInt(maxN) ?  x : maxN;
    }

  return maxN + " " + minN ;
  }
               `, 
                class: ""
              }
  );
//CSS 1.
  notes.push(
    {
              tag:"div",
              content:`CSS 1. <br>browser CSS reset-el kezdeni a CSS file-t.`,
              class:"comment"
  }

  );
  notes.push( 
    {
                tag: "code",
                content: ` 
*,
*::before
*::after
{
    margin: 0;padding: 0;box-sizing: border-box;
}
`
      }
  );

// css 2.
  notes.push(
    {
              tag:"div",
              content:`CSS 2. <br> CSS tulajdonságnak precedencia szabálya van.
              <ol>
                  <li> Inline a legerősebb</li>
                  <li> ID </li>
                  <li> classname </li>
                  <li> tagName </li>
              </ol>`,
              class:"comment"
  }

  );
  notes.push( 
    {
                tag: "code",
                content: ` 
<div id="root" class="root" style="background-color:red;"> </div>
element.style {
  background-color:red;
}
#root {
    background-color: green;
}

.root {
    background-color: blue;
}
div {
    background-color: yellow;
}

`
      }
  );

// css 3.
  notes.push(
    {
              tag:"div",
              content:`CSS 3. <br> CSS nem mödik
              <ol>
                  <li> a HTML-be beene van a link href ? betöltődik a CSS file ? </li>
                  <li> WatchSaas - elinditva ? ujragenerálódik a CSS-file ?</li>
                  <li> classname-re betöltötte a CSS-t ? (F12 element style)</li>
              </ol> `,
              class:"comment"
  }

  );
  notes.push( 
    {
                tag: "code",
                content: ` 

`
      }
  );

  // html 1.
  notes.push(
    {
              tag:"div",
              content:`HTML 1. <br> tab-olás `,
              class:"comment"
  }

  );
  notes.push( 
    {
                tag: "code",
                content: ` 
<nav id="nav">
    <ul>
        <li><a href="#welcome">Welcome</a></li>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="./book.htmlcontact">Book a table</a></li>
    </ul>
</nav>
`
      }
  );
  // html 2.
  notes.push(
    {
              tag:"div",
              content:`HTML 2. <br>a HTML fileba nem irunk style CSS-t,
               nem irunk inline CSS-t, nem irunk javascriptet. CLEAN CODE.
              <br> <br>`,
              class:"comment"
  }

  );

  // html 3.
  notes.push(
    {
              tag:"div",
              content:`HTML 3.<br> html,body-t (még)nem "piszkáljuk" ha lehet. `,
              class:"comment"
  }

  );
 


  /* https://stackoverflow.com/questions/39654013/highlight-js-code-not-working/39654792
  The reason your HTML code is not treated as code by highlight.js is because the browser parsed the HTML tags. 
  The solution is to replace < with &lt; and > with &gt; to escape angle brackets 
  */
  console.log(notes);
  for (note of notes) {

    if (note.tag === "div")
          root.insertAdjacentHTML("beforeend", ` <${note.tag} class="${note.class}">${note.content}</${note.tag}> `);
                                         //        <div       class="html"         >  content             </div>
     else{
       //highlight.js-el megjelenitett kód
          root.insertAdjacentHTML("beforeend", ` <pre><${note.tag} class="${note.class}">${note.content.replaceAll("<","&lt;").replaceAll(">","&gt;")}</${note.tag}></pre> `);
         //                                            console.log( ` ${note.content.replaceAll("<","&lt;").replaceAll(">","&gt;")} `);
     }
  };


  hljs.initHighlightingOnLoad();
    document.querySelectorAll('pre code').forEach((block) => {
     // debugger
      hljs.highlightBlock(block);
    });
  
}

window.addEventListener("load", _load );









