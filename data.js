const articles = require('./database'); 

const acceptedFilters = ["author", "title", "publisher"];

const getByProperty = (property = null, value) => {
    if(!property) return articles;
    if(!acceptedFilters.includes(property)) {
        return Error(`You are using an invalid filter. Please use one of the followings: ${acceptedFilters.join(',')}`);
    }
    return articles.filter(article => article[property].indexOf(value) !== -1);
}

module.exports = getByProperty;