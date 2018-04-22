const { getCommunities } = require('../src/service');

describe('call getCommunities service', () => {
    it('return the communities from the service', () => {
        return getCommunities()
            .then(communities => {
                expect(communities.hasOwnProperty('comunidades')).toBeTruthy();
                expect(Array.isArray(communities.comunidades)).toBeTruthy();
                expect(communities.comunidades).toHaveLength(2);
                communities.comunidades.forEach(community => {
                    expect(typeof community.name).toBe('string');
                    expect(typeof community.admins).toBe('string');
                    expect(typeof community.link).toBe('string');
                });
            });
    });
});
