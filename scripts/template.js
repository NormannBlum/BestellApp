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
          <div class="dish-price">${myFood.price.toFixed(2).replace(".", ",")} €</div>
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
        <div class="basket-item-price">${(item.price * item.quantity).toFixed(2).replace(".", ",")} €</div>
        <img class="control-icon delete-icon" src="./assets/icons/delete-icon.svg" alt="Delete" onclick="deleteFromCart(${index})">
      </div>
    </div>
  `;
}