///<reference types="cypress" />
///<reference types="cypress-xpath" />
describe('Test Contact us form via Automation test Store', () => {
  it('Should be able to submit a succesfull submission via contact us form', () => {
    cy.visit('https://www.automationteststore.com/');
    //cy.get('.info_links_footer > :nth-child(5) > a').click();
    cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get('#ContactUsFrm_first_name').type('Mariano De Simone');
    cy.get('#ContactUsFrm_email').type('desimone.mariano@gmail.com');
    cy.get('#ContactUsFrm_enquiry').type('Enquiry text');
    cy.get('.col-md-6 > .btn').click();
  });

  //it.only sirve para correr solo el text que quieras correr y no todos.
});
