it('Deve realizar uma consulta no pet de código 261291', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/261291',
    }).then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body.id).to.eq(261291)
        expect(res.body.category.id).to.eq(261291)
        expect(res.body.category.name).to.eq('Nina')
        expect(res.body.name).to.eq('Nina')
        expect(res.body.photoUrls[0]).to.eq('string')    
        expect(res.body.tags[0].id).to.eq(261291)
        expect(res.body.tags[0].name).to.eq('Nina')
        expect(res.body.status).to.eq('available')
    })
})