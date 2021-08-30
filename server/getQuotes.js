const quotes = require('./data/Before Quotes.json');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        const limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;

        const out = new Array(limit);
        let quote;

        for (let i = 0; i < limit; i++) {
            do {
                quote = quotes[Math.floor(Math.random() * quotes.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }
        
        return out;
    }
};