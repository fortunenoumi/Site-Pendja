//je recupère la div du slider
const div_slider = document.querySelector('.slider');
//je recupere la offsetwidth de la div slider
const tailleSlider = div_slider.offsetWidth;
console.log(`La largeur du slider est de ${tailleSlider} pixels.`);
//j'identifie la largeur totale de la div_slider
const totaltailleSlider = div_slider.scrollWidth;
const totaltailleSlider2 = totaltailleSlider - 2;
console.log(`La largeur totale du slider est de ${totaltailleSlider} pixels.`);
//je recupère la div referenceWidth
const referenceWidth = document.querySelector('.referenceWidth');
//je stocke la largeur de la div referenceWidth
const tailleWidth = referenceWidth.offsetWidth ;
const tailleWidthPlusGap = tailleWidth + 18; // j'ajoute 10 pixels pour le gap entre les slides
//j'affiche en console la largeur de la div referenceWidth
console.log(`La largeur totale est de ${tailleWidth} pixels.`);

console.log(`scrollleft est a ${div_slider.scrollLeft}.`);

//je recupere les dots
const dots = document.querySelectorAll('.dots');
const liste = Array.from(dots);
let index = 0;

function updateDots() {
    if (index < liste.length - 1) {
        index++;
        console.log(`index est à ${index}.`);
        liste[index].classList.remove('bg-[#c2bdbd]');
        liste[index].classList.add('bg-[#5eb28c]');
        liste[index].classList.add('w-[50px]');
        liste[index].classList.remove('w-[40px]');
        liste[index - 1].classList.remove('bg-[#5eb28c]');
        liste[index - 1].classList.remove('w-[50px]');
        liste[index - 1].classList.add('w-[40px]');
        liste[index - 1].classList.add('bg-[#c2bdbd]');
    } else {
        index = 0; // je remets l'index à 0 si on est à la fin
        console.log(`index est à ${index}.`);
        liste[index].classList.add('bg-[#5eb28c]');
        liste[index].classList.add('w-[50px]');
        liste[index].classList.remove('w-[40px]');
        liste[index].classList.remove('bg-[#c2bdbd]');
        liste[liste.length - 1].classList.remove('bg-[#5eb28c]');
        liste[liste.length - 1].classList.add('bg-[#c2bdbd]');
        liste[liste.length - 1].classList.remove('w-[50px]');
        liste[liste.length - 1].classList.add('w-[40px]');
    }
}
// Fonction pour mettre à jour les dots
// function updateDots() {
//     dots.forEach((dot, i) => {
//         dot.classList.toggle('bg-[#c2bdbd]', i === index);
//         dot.classList.toggle('bg-[#000]', i !== index);
//     });
// }
//explication de la fonction ci dessus
// La fonction updateDots parcourt chaque dot et applique la classe
//  bg-[#c2bdbd] à celui qui correspond à l'index actuel,
// et la classe bg-[#000] à tous les autres. Cela permet de mettre en évidence
// le dot correspondant à la position actuelle du slider.


function startSlider() {
    if (div_slider.scrollLeft >= (tailleSlider * 2)) {
        console.log(`on s'est arreté a ${div_slider.scrollLeft}.`);
        div_slider.scrollLeft = 0; // je remets le scroll à 0 si on est à la fin
        console.log("On est à la fin du slider, on remet le scroll à 0.");
    } else {
        div_slider.scrollBy({
            left: tailleWidthPlusGap, // je fais défiler le slider vers la droite
            behavior: 'smooth' // pour un défilement fluide
        });
        console.log(`scrollleft est a ${div_slider.scrollLeft}.`);
    }
    updateDots(); // j'actualise les dots
}
//j'initialise le slider
setInterval(() => {
    startSlider();
    
}, 3000);


