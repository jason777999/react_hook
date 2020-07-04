describe('ConditionalField', () => {
  it('should reflect correct form state and data collection', () => {
    cy.visit('http://localhost:3000/conditionalField');
    cy.get('#state').contains(
      '{"dirtyFields":[],"isSubmitted":false,"submitCount":0,"touched":[],"isDirty":false,"isSubmitting":false,"isValid":false}',
    );

    cy.get('select[name="selectNumber"]').select('1');
    cy.get('input[name="firstName"]').type('bill');
    cy.get('input[name="lastName"]').type('luo');
    cy.get('input[name="lastName"]').blur();
    cy.get('#state').contains(
      '{"dirtyFields":["selectNumber","firstName","lastName"],"isSubmitted":false,"submitCount":0,"touched":["selectNumber","firstName","lastName"],"isDirty":true,"isSubmitting":false,"isValid":true}',
    );
    cy.get('button#submit').click();
    cy.get('#state').contains(
      '{"dirtyFields":["selectNumber","firstName","lastName"],"isSubmitted":true,"submitCount":1,"touched":["selectNumber","firstName","lastName"],"isDirty":true,"isSubmitting":false,"isValid":true}',
    );
    cy.get('#result').contains(
      '{"selectNumber":"1","firstName":"bill","lastName":"luo"}',
    );

    cy.get('select[name="selectNumber"]').select('2');
    cy.get('#state').contains(
      '{"dirtyFields":["selectNumber"],"isSubmitted":true,"submitCount":1,"touched":["selectNumber"],"isDirty":false,"isSubmitting":false,"isValid":false}',
    );
    cy.get('input[name="min"]').type('10');
    cy.get('input[name="max"]').type('2');
    cy.get('input[name="max"]').blur();
    cy.get('#state').contains(
      '{"dirtyFields":["selectNumber","min","max"],"isSubmitted":true,"submitCount":1,"touched":["selectNumber","min","max"],"isDirty":true,"isSubmitting":false,"isValid":true}',
    );
    cy.get('button#submit').click();
    cy.get('#state').contains(
      '{"dirtyFields":["selectNumber","min","max"],"isSubmitted":true,"submitCount":2,"touched":["selectNumber","min","max"],"isDirty":true,"isSubmitting":false,"isValid":true}',
    );
    cy.get('#result').contains('{"selectNumber":"2","min":"10","max":"2"}');

    cy.get('select[name="selectNumber"]').select('3');
    cy.get('#state').contains(
      '{"dirtyFields":["selectNumber"],"isSubmitted":true,"submitCount":2,"touched":["selectNumber"],"isDirty":false,"isSubmitting":false,"isValid":true}',
    );
    cy.get('input[name="notRequired"]').type('test');
    cy.get('input[name="notRequired"]').blur();
    cy.get('#state').contains(
      '{"dirtyFields":["selectNumber","notRequired"],"isSubmitted":true,"submitCount":2,"touched":["selectNumber","notRequired"],"isDirty":true,"isSubmitting":false,"isValid":true}',
    );
    cy.get('button#submit').click();
    cy.get('#result').contains('{"selectNumber":"3","notRequired":"test"}');

    cy.get('#renderCount').contains('36');
  });
});
