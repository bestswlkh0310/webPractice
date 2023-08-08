import axios from 'axios';
import cheerio from 'cheerio';

export default class Crawling {
    searchGoogle = async (query) => {
        try {
            const response = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
            const html = response.data;

            const searchResults = this.extractSearchResults(html);
            return searchResults;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    extractSearchResults = (html) => {
        const $ = cheerio.load(html);

        const searchResults = [];
        $('h3').each((index, element) => {
            const title = $(element).text();
            const link = $(element).parent().attr('href');
            
            if (title && link) {
                searchResults.push({ title, link });
            }
        });

        return searchResults.slice(0, 10);
    }
}
