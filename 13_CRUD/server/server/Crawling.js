import axios from 'axios';
import cheerio from 'cheerio';

export async function searchGoogle (query) {
    console.log("ing...")
    try {
        const response = await axios.get(`https:/www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`);
        const html = response.data;

        const searchResults = extractSearchResults(html);
        return searchResults;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const extractSearchResults = (html) => {
    const $ = cheerio.load(html);

    const searchResults = [];
    $('img').each((index, element) => {
        const result = element.attribs.src
        if (result.slice(0, 15) === "https://encrypt") {
            searchResults.push(result);
        }
    });

    if (searchResults.length >= 100) {
        return searchResults.slice(0, 100);
    } else {
        return searchResults.slice(0, searchResults.length - 1)
    }
}