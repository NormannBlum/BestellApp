// Das Array "basket" speichert alle Gerichte, die in den Warenkorb gelegt wwurden.
// Jedes Element enthält den Namen, Preis und die Menge des jeweiligen Gerichts,
// um den Warenkorb später zu rendern und zu aktualisieren.
let basket = [];

// Initialisiert die Seite, indem die Gerichte gerendert werden.
// Die Funktion "init" baut den Hauptinhalt der Seite auf, indem sie "renderFood" aufruft.
function init() {
  renderFood();
}

//  "renderFood" durchläuft das Array "myDishes" und erstellt das HTML für jedes Gericht.
//  Das generierte HTML für jedes Gericht wird dem "content" Container hinzugefügt,
//  wodurch die Seite mit den neuesten Informationen zu den Gerichten aktualisiert wird.
function renderFood() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let i = 0; i < myDishes.length; i++) {
    contentRef.innerHTML += getFoodTemplate(myDishes[i], i);
  }
}

// Überprüft zuerst, ob das Gericht im Warenkorb ist. "if" --> Wenn das Gericht im Korb ist, wird die Menge erhöht.
// Ansonsten wird das Gericht in den Warenkorb hinzugefügt --> "basket.push".
function addToCart(indexFood) {
  let selectedDish = myDishes[indexFood];

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === selectedDish.name) {
      basket[i].quantity++;
      renderOverlayBasket();
      renderBasket();
      return;
    }
  }

  basket.push({
    name: selectedDish.name,
    price: selectedDish.price,
    quantity: 1,
  });
  renderOverlayBasket();
  renderBasket();
}

// "removeFromCard" reduziert die Menge eines Gerichts im Warenkorb oder entfernt es, falls die Menge 1 ist.
// "if/else" Falls die Menge größer als 1 ist, wird sie um eins verringert.
// Durch "renderBasket" wird der Warenkorb aktualisiert, um die Änderungen anzuzeigen.
function removeFromCart(index) {
  if (basket[index].quantity > 1) {
    basket[index].quantity--;
  } else {
    basket.splice(index, 1);
  }
  renderOverlayBasket();
  renderBasket();
}

// "deleteFromCart" entfernt ein Gericht komplett aus dem Warenkorb anhand des Indexes.
// Durch "renderBasket" wird nach dem Entfernen der Warenkorb aktualisiert, um die Änderungen anzuzeigen.
function deleteFromCart(index) {
  basket.splice(index, 1);
  renderOverlayBasket();
  renderBasket();
}

// "renderBasket" aktualisiert die Anzeige des Warenkorbs basierend auf den aktuellen Artikeln im "basket" Array.
// Die Funktion zeigt jedes Gericht an, aktualisiert die Menge,
// den Gesamtpreis und steuert die Sichtbarkeit des Bestell-Buttons.
function renderBasket() {
  let orderButton = document.getElementById("order-button");
  if (basket.length > 0) {
    orderButton.style.display = "block";
  } else {
    orderButton.style.display = "none";
  }
  let basketItemsRef = document.getElementById("basket-items");
  basketItemsRef.innerHTML = "";
  let totalPrice = 0;

  for (let i = 0; i < basket.length; i++) {
    let item = basket[i];
    totalPrice += item.price * item.quantity;
    basketItemsRef.innerHTML += getBasketItemTemplate(item, i);
  }

  document.getElementById("total-price").innerHTML = `Gesamt: ${totalPrice
    .toFixed(2)
    .replace(".", ",")} €`;
}

// Leitet den Hungrigen zur Bestellbestätigungsseite weiter
function confirmOrder() {
  window.location.href = "confirmation.html";
}

// "renderOverlayBasket" rendert den mobilen Warenkorb und zeigt alle Artikel darin an.
// Der HTML-Inhalt des mobilen Warenkorbs wird mithilfe einer Template-Funktion aktualisiert.
function renderOverlayBasket() {
  let basketRef = document.getElementById("mobileBasket");
  basketRef.innerHTML = getBasketOverlayTemplate();
}

// "toggleOverlay" zeigt oder versteckt den mobilen Warenkorb, indem die Sichtbarkeit des Overlays umgeschaltet wird.
// Wenn das Overlay sichtbar wird, wird der Inhalt des Warenkorbs gerendert.
function toggleOverlay() {
  let popupBasket = document.getElementById("mobileBasket");
  popupBasket.classList.toggle("show_mobile_basket");
  if (popupBasket.classList.contains("show_mobile_basket")) {
    renderOverlayBasket();
  }
}
