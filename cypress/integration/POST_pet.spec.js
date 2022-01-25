it('POST por body descrito: Deve realizar a inclusão do pet de código 261291', () => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
    body: {
            id: 261291,
            category: {
                id: 261291,
                name: "Nina"
            },
            name: "Nina",
            photoUrls: [
                "string"
            ],
            tags: [
                {
                    "id": 261291,
                    "name": "Nina"
                }
            ],
            status: "available"
        }
    })
})


it('POST por arquivo JSON: Deve realizar a inclusão do pet de código 261291', () => { 
    cy.fixture('pet').then(json => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: json
    })
})
})

it('GET - Deve realizar uma consulta no pet de código 261291', () => {
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