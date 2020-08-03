describe('Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should search when selecting only ingredients', () => {
    cy.addIngredient()
    cy.get('button[name=search]').click()

    cy.get('.ant-list-item').its('length').should('be.gt', 0)
  })

  it('Should search when selecting only course name', () => {
    cy.addCourseName()
    cy.get('button[name=search]').click()

    cy.get('.ant-list-item').its('length').should('be.gt', 0)
  })

  it('Should search when selecting course name and ingredients', () => {
    cy.addCourseName()
    cy.addIngredient()
    cy.get('button[name=search]').click()

    cy.get('.ant-list-item').its('length').should('be.gt', 0)
  })
})
