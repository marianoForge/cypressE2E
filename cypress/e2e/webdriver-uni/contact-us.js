///<reference types="Cypress" />
describe('Test Contact us foprm via Webdriver Uni', () => {
  it('Should be able to submit a succesfull submission via contact us form', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    //cy.get('#contact-us').click({ force: true }); //When elements are not visible.
    cy.get('[name="first_name"]').type('Mariano');
    cy.get('[name="last_name"]').type('De Simone');
    cy.get('[name="email"]').type('desimone.mariano@gmail.com');
    cy.get('textarea.feedback-input').type(
      'This is a comment for the comment textarea'
    );
    cy.get('[type="submit"]').click({ force: true });
  });

  //it.only sirve para correr solo el text que quieras correr y no todos.
  it('Should Not be able to submit a succesfull submission via contact us form as all fields are required', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Mariano');
    cy.get('[name="last_name"]').type('De Simone');
    cy.get('textarea.feedback-input').type(
      'This is a comment for the comment textarea'
    );
    cy.get('[type="submit"]').click({ force: true });
  });
});
