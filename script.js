
let panier = JSON.parse(localStorage.getItem('panier')) || [];

function ajouterAuPanier(produit) {
  panier.push(produit);
  localStorage.setItem('panier', JSON.stringify(panier));
  alert('Produit ajouté au panier');
}

function afficherPanier() {
  const panierContainer = document.getElementById('panier');
  if (!panierContainer) return;
  panierContainer.innerHTML = '';
  panier.forEach((produit, index) => {
    const produitDiv = document.createElement('div');
    produitDiv.classList.add('panier-item');
    produitDiv.innerHTML = `
      <h3>${produit.nom}</h3>
      <p>Prix: ${produit.prix} FC</p>
      <button onclick="retirerDuPanier(${index})">Retirer</button>
    `;
    panierContainer.appendChild(produitDiv);
  });
}

function retirerDuPanier(index) {
  panier.splice(index, 1);
  localStorage.setItem('panier', JSON.stringify(panier));
  afficherPanier();
}

window.onload = afficherPanier;

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const offerForm = document.getElementById('offer-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nom = this.nom.value;
      const email = this.email.value;
      const message = this.message.value;

      if (nom && email && message) {
        alert('Message envoyé avec succès!');
        this.reset();
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    });
  }

  if (offerForm) {
    offerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nom = this.nom.value;
      const email = this.email.value;

      if (nom && email) {
        alert('Inscription réussie! Vous bénéficiez de 10% de réduction.');
        this.reset();
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    });
  }
});

const cart = [];

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    cartList.appendChild(li);
  });
}

function clearCart() {
  cart.length = 0;
  renderCart();
}

// Validation du formulaire de contact
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("form-message");

    if (!name || !email || !message) {
      msg.textContent = "Merci de remplir tous les champs.";
      msg.style.color = "red";
    } else {
      msg.textContent = "Message envoyé avec succès !";
      msg.style.color = "green";
      form.reset();
    }
  });
}

// Validation formulaire d’inscription (landing)
const subscribeForm = document.getElementById("subscribe-form");
if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("user-name").value.trim();
    const email = document.getElementById("user-email").value.trim();
    const msg = document.getElementById("subscribe-message");

    if (!name || !email) {
      msg.textContent = "Veuillez remplir tous les champs.";
      msg.style.color = "red";
    } else {
      msg.textContent = "Merci pour votre inscription ! 🎉";
      msg.style.color = "green";
      subscribeForm.reset();
    }
  });
}
