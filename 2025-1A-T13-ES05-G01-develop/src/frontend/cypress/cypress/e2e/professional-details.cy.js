describe('Testando a página Professional Details', () => {
  beforeEach(() => {
    // Abre a página antes de cada teste
    cy.visit('/professionals/details');
  });

  it('Deve carregar a página e exibir o título correto', () => {
    cy.contains('professional-details works!').should('be.visible');
  });

  it('Deve ter um botão de edição', () => {
    cy.get('[data-cy="edit-button"]').should('exist');
  });

  it('Deve abrir o modal ao clicar no botão de edição', () => {
    cy.get('[data-cy="edit-button"]').click();
    cy.get('[data-cy="edit-modal"]').should('be.visible');
  });
});
