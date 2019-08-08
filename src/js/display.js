// Display All Cards
const displayData = obj => {
  if (!obj) return displayError("No Data");
  // Main Card Element
  const cardContainer = document.querySelector(".card__container");
  cardContainer.innerHTML = "";
  // Each Task
  obj.forEach(task => {
    // Create a card
    let card = document.createElement("div");
    card.classList = "card";
    card.innerHTML = `<div class="card__head">
        <h1>Task Name: ${task.title.split(" ")[0]}</h1>
        <h2>User ID: ${task.userId}</h2>
      </div>
      <div class="card__body">
        <p>
          ${task.title}
        </p>
      </div>
      <div class="card__input">
        <button onclick="complete(${task.id})" class="${
      task.completed !== false ? "bg-green" : "bg-red"
    }">${task.completed !== false ? "Complete" : "Incomplete"}</button>
      </div>`;
    cardContainer.appendChild(card);
  });
};

// Show Availble Filters Based On User ID
const displayFilter = arr => {
  if (!arr.length) return;
  const new_arr = [...new Set(arr)];
  const filter = document.querySelector(".filter");
  new_arr.forEach(person => {
    filter.innerHTML += `<li onclick="filter(this)">${person}</li>`;
  });
  displayError();
};

// Show Error
const displayError = error => {
  const errorMessage = document.querySelector(".error__message");

  // If No Error Return Empty
  if (!error) return (errorMessage.innerHTML = "");

  errorMessage.innerHTML = `<div class="error__container">
          <h1>Error ${error}</h1>
        </div>`;
};
