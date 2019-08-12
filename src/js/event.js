// Click Event for Task Complete
// This function changes the value on the fetched Object and re-renders the display
const complete = id => {
  const ids = data.map(json => json.id);
  const task = data[ids.indexOf(id)];
  task.completed === false ? (task.completed = true) : (task.completed = false);

  // Are we filtering ?
  displayData(filteredData.length > 0 ? filteredData : data);
};

// Click Event for Filter
const filter = e => {
  // Reset Filter data
  filteredData = [];

  // Is filter Active? than turn off else turn on
  e.classList.value !== "active"
    ? (e.classList = "active")
    : (e.classList = "");
  const active = document.querySelectorAll(".active");

  // If nothing is active re-render default display
  if (active.length === 0) return displayData(data);

  for (let i = 0; i < active.length; i++) {
    const value = data.filter(task => task.userId == active[i].innerHTML);
    value.forEach(task => filteredData.push(task));
  }

  return displayData(filteredData);
};
