
// Carousel des images 
const slider1 = document.getElementById('mon_slide'); 
        let mon_compteur = 0;

        const cercle = document.querySelectorAll('.mon_cercle');
        function activationCercle(numeroImageAffiche) {

            cercle.forEach((boutonRegarder,i) => {
                boutonRegarder.classList.toggle('mon_cercle_actif', i === numeroImageAffiche)

            })
        }
        
    //   Slider sous forme Défilement d'image sans appuyer sur le bouton
        // setInterval(() => {
        //      mon_compteur = (mon_compteur + 1)%3
        //      slider1.style.transform = "translate(-" + (mon_compteur * 100) + "vw)" 
        //      activationCercle(mon_compteur)

            
        // }, 3000);

        //  slider sous forme : Clicquage sur les boutons
        let boutton = document.querySelectorAll('.mon-boutton');
        boutton.forEach((mon_btn,index) =>{
            mon_btn.addEventListener('click',()=> {
               const slider_largeur = slider1.offsetWidth;
               slider1.style.transform = "translateX(-" + (slider_largeur * index) + 'px)'
               mon_compteur = index
               activationCercle(index)
            })
        })
        activationCercle(mon_compteur)
        

    //    Chargement de la page : Loader
        window.addEventListener("DOMContentLoaded", () =>{
            const loader = document.getElementById("chargement_page")
            
            setTimeout(() => {
                loader.style.opacity = "0"
                loader.style.visibility = "hidden"
                
            }, 3000);
        } )

        // Titre Animés

        function paragraphe(indexClique) {
            const mes_paragraphes = document.querySelectorAll('.contenu')
            const mes_titres = document.querySelectorAll('.titre') ;

            mes_paragraphes.forEach((paragraph, position)  => {
                const titre  = mes_titres[position]

                if(position == indexClique) {
                    paragraph.style.display = 'block';
                    titre.classList.add('bg-[#057e2b]')
                    titre.classList.remove('bg-gray-400')
                    
                } else {
                  paragraph.style.display = 'none';
                    titre.classList.add('bg-gray-400')
                    titre.classList.remove('bg-[#057e2b]')
                }
            })
        }
        window.addEventListener('DOMContentLoaded', () => {
            paragraphe(1)
        })

        // nav bar fixé lors du scroll

        const scrollNavbar = document.getElementById('scroll-navbar')
        window.addEventListener('scroll', () => {
            if(window.scrollY > window.innerHeight *0.1) {
                scrollNavbar.classList.remove('hidden');
               
            } else {
                 scrollNavbar.classList.add('hidden')
            }
        })

        //  Bouton qui va nous permettre de monter vers le haut 

        const topBouton = document.getElementById('boutonHaut')
        // Affichage du bouton(bouotn vers le haut) après avoir scrollé de 200px
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200) {
                topBouton.classList.remove('hidden'); // Va afficher le bouton

            } else {
                topBouton.classList.add('hidden') // Va cacher le bouton
            }
        })

        // Lorsqu'on clique sur le bouton , on remonte vers le haut avec un effet
        topBouton.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'})
        })

        // JAVASCRIPT DE L'ICÔNE MENU DU HAUT



// const menuButton = document.getElementById("menuButton");
// const menuContainer = document.getElementById("menuContainer");
// const closeButton = document.getElementById("closeButton");



// menuButton.addEventListener("click", () => {
//   menuContainer.classList.toggle("-translate-x-full");
    // menuButton.classList.toggle("hidden");
    


// });

// closeButton.addEventListener("click", () => {
//   menuContainer.classList.add("-translate-x-full");  //FERME LE  MENU

//   menuContainer.classList.remove("hidden");  //VA RÉAFFICHER LE BOUTON MENU
// });

const boutonMenu = document.getElementById('boutonMenu');
const containerMenu = document.getElementById("menuContainer")
const boutonClose = document.getElementById('boutonClose')

boutonMenu.addEventListener('click',() => {
    containerMenu.classList.toggle("translate-x-full");
})

boutonClose.addEventListener("click" , () => {
    containerMenu.classList.add("translate-x-full");
    boutonMenu.classList.remove('hidden')

})

// Compte à rebour de 0 à 3
 const valeurCompteur = document.getElementById("valeurCompteur")
 let maValeur = 0;

 const monInterval= setInterval(() => {
    if(maValeur <= 3){
        valeurCompteur.innerText = maValeur + "+"; 
        maValeur++;
    } else{
        clearInterval(monInterval)
    }
    
 }, 1000);


//  const customCursor = document.getElementById("customCursor");

//   document.addEventListener("mousemove", (e) => {
//     customCursor.style.top = e.clientY + "px";
//     customCursor.style.left = e.clientX + "px";
//   });

//   const hoverElements = document.querySelectorAll("a, button");

// hoverElements.forEach(el => {
//   el.addEventListener("mouseenter", () => {
//     customCursor.classList.add("hovered");
//   });
//   el.addEventListener("mouseleave", () => {
//     customCursor.classList.remove("hovered");
//   });
// });

// const hoverTargets = document.querySelectorAll("a, button");

// hoverTargets.forEach(el => {
//   el.addEventListener("mouseenter", () => {
//     customCursor.classList.add("hovered");
//   });
//   el.addEventListener("mouseleave", () => {
//     customCursor.classList.remove("hovered");
//   });
// });

const grandCurseur = document.getElementById("grandCurseur")

document.addEventListener("mousemove", (e) => {
    grandCurseur.style.top = e.clientY + "px"
    grandCurseur.style.left = e.clientX + "px"
});
const  elementHover = document.querySelectorAll("a, button");
elementHover.forEach(el => {
    el.addEventListener("mouseenter", () => {
        grandCurseur.classList.add("mon_hover")
    })
    el.addEventListener("mouseleave", () => {
        grandCurseur.classList.remove("mon_hover")
    })
});

const hoverTargue = document.querySelectorAll("a , button");

hoverTargue.forEach(el => {
    el.addEventListener("mouseenter", () => {
        grandCurseur.classList.add("mon_hover");
    });
    el.addEventListener("mouseleave", () => {
        grandCurseur.classList.remove("mon_hover")
    })
})