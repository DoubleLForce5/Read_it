
// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 15];
// var barColors = ["red", "green","blue","orange","brown"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {...}
// });


const bookSearchHandler = async (event) => {
    event.preventDefault();
    
    const bookSearchValue = document.querySelector('#book-search-input').value.trim();

    if (bookSearchValue) {
        const response = await fetch(`/api/title/${bookSearchValue}`, { //ADD API ROUTE HERE
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {} else {
            alert('No Book Found');
        }
    }
};


document.querySelector('#book-search-button').addEventListener('click', bookSearchHandler);
