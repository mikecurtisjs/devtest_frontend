let data = [];
let filteredData = [];

(function() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => {
      data = json;
      displayData(data);
      displayFilter(data.map(task => task.userId));
    })
    .catch(err => displayError(err));
})();
