let apiQuotes = [];

//Show new Quote
function newQuote(){
    
}

// Get Quotes From API
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();