const bookSearchHandler = async (event) => {
    event.preventDefault();
    console.log('check1')
    const bookSearchValue = document.querySelector('#book-search-input').value.trim();

    if (bookSearchValue) {
        const response = await fetch(`/api/title/${bookSearchValue}`, { //ADD API ROUTE HERE
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
          console.log('check2')
        if (response.ok) {
            console.log(bookSearchValue)
        } else {
            alert('No Book Found');
        }
    }
};


document.querySelector('#book-search-button').addEventListener('click', bookSearchHandler);