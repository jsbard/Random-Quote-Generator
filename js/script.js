/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `getRandomQuote` function
***/

const getRandomQuote = (quotes) => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
}



/***
 * `printQuote` function
***/

const printQuote = randomQuote => {
    const quote = randomQuote;

    let html = ``;
    html += `<p class="quote">${quote.quote}</p>`;
    html += `<p class="source">${quote.source}`;

    if (quote.translation) {
        html += `<p>Translation: ${quote.translation}</p>`;
    }

    if (quote.citation){
        html += `<span class="citation">${quote.citation}</span>`;
    }

    if (quote.year) {
        html += `<span class="year">${quote.year}</span>`;
    }

    html += `</p>`;

    return html;
}

const randomQuote = printQuote(getRandomQuote(quotes));
document.getElementById('quote-box').innerHTML = randomQuote;


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);