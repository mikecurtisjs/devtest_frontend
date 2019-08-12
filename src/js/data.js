// Main State
const data = [];

// Filter Data
let filteredData = [];

(function() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => {
      data.push(...json);
      displayData(data);
      displayFilter(data.map(task => task.userId));
    })
    .catch(err => displayError(err));
})();
