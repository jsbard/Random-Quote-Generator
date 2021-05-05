/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/


/***
 * Global variables
 */
const quoteDisplayTime = 15000;
let displayInterval;

/***
 * `getRandomQuote` function
 * return a random quote object from an array of quote objects
***/

const getRandomQuote = (quotes) => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
}

/***
 * `getRandomBackground` function
 * generates and displays a random background color on page when called
 */

const generateRandomBackground = () => {
    const randomRGBValue = () => {
        // Return a string with a properly formatted RGB value
        const number = () => {
            // Return a random number between 0 and 255
            return Math.floor(Math.random() * 256);
        }

        return `rgb(${number()}, ${number()}, ${number()})`;
    }
    // Display the random color
    document.body.style.backgroundColor = randomRGBValue();
}



/***
 * `printQuote` function
 * builds an html template using the data from a random quote
 * displays quote on page
 * returns the quote and html template for use in other functions if needed
***/

const printQuote = () => {
    const quote = getRandomQuote(quotes);

    // Build html template from quote object data
    let html = ``;
    html += `<p class="quote">${quote.quote}</p>`;
    html += `<p class="source">${quote.source}`;
    // Add if translation from foreign language is provided
    if (quote.translation) {
        html += `<p>Translation: ${quote.translation}</p>`;
    }
    // Add if citation is provided
    if (quote.citation){
        html += `<span class="citation">${quote.citation}</span>`;
    }
    // Add if year is provided
    if (quote.year) {
        html += `<span class="year">${quote.year}</span>`;
    }

    html += `</p>`;

    // Display quote on page
    document.getElementById('quote-box').innerHTML = html;
    // Display random background color with quote
    generateRandomBackground();
    // Returns the template and random quote if needed
    return html;
}

/***
 * `displayTimer` function
 * Change quote automatically after designated interval (ms)
 */
const displayTimer = (quoteDisplayTime) => {
    displayInterval = setInterval(() => printQuote(), quoteDisplayTime);
}

/***
 * Initially display quote on page load
 */
document.getElementById('quote-box').innerHTML = printQuote();
displayTimer(quoteDisplayTime);

/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click",() => {
    printQuote();
    // Reset the quote refresh timer if change quote button is pressed
    clearInterval(displayInterval);
    displayTimer(quoteDisplayTime);
}, false);