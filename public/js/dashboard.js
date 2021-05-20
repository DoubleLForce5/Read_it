const bookSearchHandler = async (event) => {
    event.preventDefault();

    const bookSearchValue = document.querySelector('#book-search-form').value.trim();

    if (bookSearchValue) {
        const response = await fetch('/api/title/:title', { //ADD API ROUTE HERE
            method: 'GET',
            body: JSON.stringify({ bookSearchValue }),
            headers: { 'Content-Type': 'application/json' },
          });
          console.log('check1')
          if (response.ok) {
            console.log(bookSearchValue)
          } else {
            alert('No Book Found');
          }
        }
      };


document.querySelector('#book-search-button').addEventListener('submit', bookSearchHandler);