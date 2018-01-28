'use strict';
const fetch = require('node-fetch');

const getCommunities = () => {
    return fetch('http://localhost:8000/openve')
        .then(response => response.json());
};

module.exports = {
    getCommunities
};
