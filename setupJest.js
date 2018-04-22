global.fetch = require('jest-fetch-mock');
jest.setMock('node-fetch', fetch);

const communitiesSample = require('./test/sample');
fetch.mockResponse(JSON.stringify(communitiesSample), {status: 200});
