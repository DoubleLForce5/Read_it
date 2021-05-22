
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
        if (response.ok) {              
          var titleResponse = await response.json()

          console.log(titleResponse)

          var cardContainer = document.querySelector('#collapseTwo');

          var newCard = document.createElement('div');
          cardContainer.appendChild(newCard);
          newCard.textContent = titleResponse.title + ' ' + titleResponse.year

          
        } else {
            alert('No Book Found');
        }
    }
  };

const delBookHandler = async (event) => {
  event.preventDefault();


  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);


    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

const addBookHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#book-title').value.trim();
  if (title) {
    const response = await fetch(`api/books/`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Could not create book')
    }
  }
}


const deletebtn = document.querySelector('#delete-button')

if (deletebtn){
  deletebtn.addEventListener('click', delBookHandler);
}

document.querySelector('#book-search-button').addEventListener('click', bookSearchHandler);

document.querySelector('#create-button').addEventListener('click', addBookHandler);
