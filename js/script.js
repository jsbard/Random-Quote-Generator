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

const generateRandomBackground = () => {

    const randomRGBValue = () => {

        const number = () => {
            return Math.floor(Math.random() * 255);
        }

        return `rgb(${number()}, ${number()}, ${number()})`;
    }

    document.body.style.backgroundColor = randomRGBValue();
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

    document.getElementById('quote-box').innerHTML = html;
    generateRandomBackground();

    return html;
}


document.getElementById('quote-box').innerHTML = printQuote(getRandomQuote(quotes));
setInterval(() => printQuote(getRandomQuote(quotes)), 5000);

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click",() => printQuote(getRandomQuote(quotes)), false);