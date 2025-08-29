// Sélection de tous les compteurs
const counters = document.querySelectorAll('.counter');

// Fonction pour démarrer l'animation du compteur
const startCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const duration = 2000; // Durée de l'animation en ms (2 secondes)
  const increment = target / (duration / 10); // Calcul de l'incrément
  let count = 0;

  const updateCounter = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  requestAnimationFrame(updateCounter);
};

// Création de l'observateur d'intersection
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Si l'élément est visible
    if (entry.isIntersecting) {
      // Démarrer le compteur pour l'élément visible
      startCounter(entry.target);
      // Cesser d'observer l'élément pour ne pas redémarrer le compteur
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); // Le seuil de 0.5 signifie que 50% de l'élément doit être visible

// Observer chaque compteur
counters.forEach(counter => {
  observer.observe(counter);
});