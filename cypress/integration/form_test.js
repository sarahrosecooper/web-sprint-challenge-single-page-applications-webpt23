describe("testing for mvp", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
    it("meets mvp", () => {
      cy.get("[data-cy=name").type("Chad").should("have.value", "Chad");
      cy.get("[data-cy=sizes]").select("medium").should("have.value", "medium");
      cy.get("[data-cy=pepperoni]").check().should("be.checked");
      cy.get("[data-cy=mushroom]").check().should("be.checked");
      cy.get("[data-cy=bacon]").check().should("be.checked");
      cy.get("[data-cy=anchovie]").check().should("be.checked");
      cy.get("[data-cy=instructions]")
        .type("extra cheese please")
        .should("have.value", "extra cheese please");
      cy.get("[data-cy=submit]").click();
  
      cy.get("pre").should("exist");
    });
  });