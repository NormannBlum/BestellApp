//  "getFoodTemplate" generiert das HTML, das die Informationen zu einem bestimmten Gericht enthält.
//  Die Funktion nimmt "myFood" als Parameter, das die Informationen des Gerichts enthält und "indexFood",
//  um die Position des Gerichts im Array zu identifizieren.
//  Das zurückgegebene HTML wird verwendet, um die Gerichte dynamisch in die Seite einzufügen.
function getFoodTemplate(myFood, indexFood) {
  return `
      <div class="dish-container" onclick="addToCart(${indexFood})">
        <div class="dish-details">
          <h3>${myFood.name}</h3>
          <p class="dish-description">${myFood.description}</p>
          <div class="dish-price">${myFood.price
            .toFixed(2)
            .replace(".", ",")} €</div>
        </div>
        <img class="add-icon" src="./assets/icons/add-icon.svg" alt="Add Button">
      </div>
    `;
}

// "getBasketItemTemplate" generiert das HTML, für einen einzelnen Warenkorb Artikel.
// Im Template sind Artikelnamen, add/remove/delete buttons enthalten zum ändern der Menge oder zum löschen,
// sowie der Gesamtpreis des Artikels.
function getBasketItemTemplate(item, index) {
  return `
    <div class="basket-item">
      <div class="basket-item-name">${item.name}</div>
      <div class="basket-item-info">
        <div class="basket-item-controls">
          <img class="control-icon" src="./assets/icons/remove-icon.svg" alt="Remove" onclick="removeFromCart(${index})">
          <span>${item.quantity}x</span>
          <img class="control-icon" src="./assets/icons/add-icon.svg" alt="Add" onclick="addToCart(${index})">
        </div>
        <div class="basket-item-price">${(item.price * item.quantity)
          .toFixed(2)
          .replace(".", ",")} €</div>
        <img class="control-icon delete-icon" src="./assets/icons/delete-icon.svg" alt="Delete" onclick="deleteFromCart(${index})">
      </div>
    </div>
  `;
}

// "getbasketOverlay" erstellt das HTML für den mobilen Warenkorb.
// Sie gibt den gesamten HTML-Inhalt des mobilen Warenkorbs als String zurück,
// um die Ansicht dynamisch zu aktualisieren.
function getBasketOverlayTemplate() {
  let basketItemsHTML = "";
  let totalPrice = 0;

  for (let index = 0; index < basket.length; index++) {
    let item = basket[index];
    basketItemsHTML += `
      <div class="basket-item">
        <div class="basket-item-name">${item.name}</div>
        <div class="basket-item-info">
          <div class="basket-item-controls">
            <img onclick="removeFromCart(${index})" class="control-icon" src="./assets/icons/remove-icon.svg" alt="Remove">
            <span>${item.quantity}x</span>
            <img onclick="addToCart(${index})" class="control-icon" src="./assets/icons/add-icon.svg" alt="Add">
          </div>
          <div class="basket-item-price">${(item.price * item.quantity)
            .toFixed(2)
            .replace(".", ",")} €</div>
          <img onclick="deleteFromCart(${index})" class="delete-icon" src="./assets/icons/delete-icon.svg" alt="Delete">
        </div>
      </div>
    `;
    totalPrice += item.price * item.quantity;
  }

  return `
    ${basketItemsHTML}
    <div class="mobile-basket-total">
      Gesamt: ${totalPrice.toFixed(2).replace(".", ",")} €
    </div>
    <button onclick="confirmOrder()" class="order-button">Bestellung abschließen</button>
    <button onclick="toggleOverlay()" class="close-overlay-button">Zurück</button>
  `;
}
