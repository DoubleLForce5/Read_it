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