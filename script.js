

var id // variable globale , car j'aurais besoins de la variable id dans f() et g()
// f() --> fonction qui affiche les citations lorsqu'on charge la page ou lorsqu'on appuie sur le boutton more
function f() {
    id = Math.floor(Math.random() * 27); //stocker un nombre aleatoire de 0 a 27 dans la variable 'id'
    //recupere les elements dans lesquels on va stocker la citation + l'auteur
    auteur = document.getElementById('auteur');
    quotes = document.getElementById('TheQuote');
    p = document.getElementById('ps');
    quotes.innerHTML = "~~"+quote[id].quote+"~~";
    auteur.innerHTML = ""+quote[id].a + " once said ...";
    p.innerHTML = "ps:hover me if you wanna know what " + quote[id].a + " said";
    //recuperer l'element ou mettre l'image et remplir son contenue avec l'image qui correspend l'auteur
    TheImage = document.getElementsByTagName('img')[0];
    TheImage.src = quote[id].a + ".jpg";
};

//------------------------------------------------------------------------------------------------------------
// tabeau pour garder trace des citations qui sont deja en favoris
var i = 0;
const table = [];
//QuoteFav()---> fonction qui sera executer lorsqu'on appuie sur le boutton 'save' pour sauvegarder des citations
function QuoteFav() {
    // on recupere le div avec la classe 'save' et on le met dans la variable saveIt
    let saveIt = document.getElementsByClassName('save')[0];
    // on verifie si on va sauvegarder pour la premiere fois , alors on supprime le contenue par defaut de l'element
    if (saveIt.innerHTML == "No favorite quotes yet. Could we BE any more empty?") {
        saveIt.innerHTML = "";
    };
    // on parcours le tableau pour verifier si la citation n'existe pas deja dans la liste , si elle existe alors on sort
    for (let j of table){
        if (j == id) {
            alert("That quote's already on your list");
            return;
        }
    };
    // sinon
    alert("Woopah! Another 'Friends' quote added to your favorites\nclick on the star if you want to see it ");
    // on l'ajoute au tableau
    table[i] = id;
    i++;
    // on cree un element 'p'
    let x = document.createElement("p");
    // on met dans son contenue la citation + auteur
    x.innerHTML = "~~" + quote[id].quote + "~~ " + quote[id].a;
    // on rajoute l'element enfant (x) a l'element parent (saveIt) dans le DOM
    saveIt.appendChild(x);
};


//------------------------------------------------------------------------------------------------------------
// showFav()---> fonction qui affiche la liste des favoris lorsqu'on clique sur le boutton btnFav
function showFav() {
    // on recupere d'abord le div ayant la classe 'save'
    divSave = document.getElementsByClassName('save')[0];
    // si le div est visible ( display=='block') alors on le rend invisible ( display=='none') et vice versa
    if(divSave.style.display === 'none'){
        divSave.style.display = 'block';
    } else {
        divSave.style.display = 'none';
    }
}


//------------------------------------------------------------------------------------------------------------
//stopHover()--->fonction pour lorsqu'on appuie sur le boutton 'more' la carte redvient comme avant le hover
// c-a-d le back cache et le front visible
// et la seule maniere de faire cela est de arreter le 'hover' sur l'element qui est '.flip-card'
//donc cette fonction a pour but de désactiver temporairement l'effet de survol (hover)
function stopHover() {
    //sélectionner le premier élément de la page qui possède la classe CSS .flip-card et le stocke dans la variable //////flipCard.
    var flipCard = document.querySelector('.flip-card');
    //pn ajoute la classe CSS '.stop-hover' à l'élément sélectionné 'flipCard', qui desactivera l'effet de survol sur l'élément.
    flipCard.classList.add('stop-hover');
    //la fonction setTimeout  supprimera  la classe CSS '.stop-hover' de l'élément 'flipCard' apres 1000 millisecondes (1 seconde).rétablissant ainsi l'effet de survol.
    setTimeout(function() {
        flipCard.classList.remove('stop-hover');
    }, 1000);
}



//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//Les données stockées sous forme de tableau

let quote = [
    {
        a: "Pheobe",
        quote: "MY EYES! MY EYES!!",
    },
    {
        a: "Ross",
        quote: "Unagi",
    },
    {
        a: "Janice",
        quote: "OH...MY...GOD...CHANDLER BING",
    },
    {
        a: "Ross",
        quote: "I AM FINE",
    },
    {
        a: "Ross",
        quote: "Don't worry about me falling asleep I still have your LETTER",
    },
    {
        a: "Ross",
        quote: "No more falafels for you",
    },
    {
        a: "Monica",
        quote: "I KNOWWW",
    },
    {
        a: "Monica",
        quote:"Welcome to the real word ! It sucks . You're gonna love it",
    },
    {
        a: "Chandler",
        quote:"I AM HOPLESS AND AWKWARD AND DESPERATE FOR LOVE",
    },
    {
        a: "Pheobe",
        quote:"Yeah I am very wise I know",
    },
    {
        a: "Pheobe",
        quote:"If you wanna recieve emails about my upcoming shows , then please give me money so I can buy a computer",
    },
    {
        a: "Pheobe",
        quote:"So exhausting waiting for death ",
    },
    {
        a: "Pheobe",
        quote:"That is brand new information !",
    },
    {
        a: "Pheobe",
        quote:"They don't know that we know they know we know",
    },
    {
        a: "Pheobe",
        quote:"Oh I wish I could but I don't want to",
    },
    {
        a: "Rachel",
        quote:"You fell asleeeeeeeeep",
    },
    {
        a: "Rachel",
        quote:"Hey ! just so you know , it's not that common , it doesn't happen to every guy and it is a big deal",
    },
    {
        a: "Rachel",
        quote:"Wh- I can do whatever I want , I made her!",
    },
    {
        a: "Rachel",
        quote:"Ross please that is a hospital ,that actualy means something here",
    },
    {
        a: "Ross",
        quote:"We were on a break !",
    },
    {
        a: "Joey",
        quote:"JOEY DOESNT SHARE FOOD",
    },
    {
        a: "Chandler",
        quote:"What a small word , and yet I have never run into beyonce",
    },
    {
        a: "Rachel",
        quote:"Well maybe I don't need your money , wait wait I said maybe",
    },
    {
        a: "Chandler",
        quote:"Hi Iam chandler I make jokes when I am uncomfortable",
    },
    {
        a: "Joey",
        quote:"How you doin'",
    },
    {
        a: "Pheobe",
        quote:"Smelly Cat, Smelly Cat,What are they feeding you? Smelly Cat, Smelly Cat,It's not your fault",
    },
    {
        a: "Joey",
        quote:"I changed my password to incorrect , so now every time I forget it , it says 'your password is incorrect' ; ) ",
    },
];


