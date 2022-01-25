it('POST por arquivo JSON: Deve realizar a inclusão do pet de código 261291', () => {
    cy.fixture('pet').then(json => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: json
        }).then(res => {
            expect(res.status).to.be.equal(200)
        })
    })
})

it('Deve realizar a exclusão do pet de código 261291', () => {
    cy.wait(3000) //A API possui lentidão para processos, então é necessário forçar esse tempo
    cy.request({
        method: 'DELETE',
        url: 'https://petstore.swagger.io/v2/pet/261291',
    }).then(res => {
        expect(res.status).to.be.equal(200)
    })
})

it('Garantir que a exclusão foi feita realmente', () => {
    cy.wait(8000) //A API possui lentidão para processos, então é necessário forçar esse tempo
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/261291',
        failOnStatusCode: false,
    }).then(res => {
        expect(res.body.message).to.eq('Pet not found') //A API não é estável, então pode falhar nessa linha.
    })
})