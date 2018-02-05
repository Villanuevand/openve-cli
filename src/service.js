'use strict';
const fetch = require('node-fetch');

const getCommunities = () => {
    return fetch('https://us-central1-villanuevand-labs.cloudfunctions.net/guaripete/openve')
        .then(response => response.json());
};

module.exports = {
    getCommunities
};
