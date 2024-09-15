describe("Home page", () => {
  it("Navigation", () => {
    cy.visit("/");

    cy.getDataTest("postFromSectionTitle0")
      .invoke("text")
      .then((postTitle) => {
        cy.getDataTest("postFromSectionTitle0").click();
        cy.getDataTest("postInfoTitle").should("have.text", postTitle);
        cy.go("back");
      });

    cy.getDataTest("errorReportsFooterButton").click();
    cy.getDataTest("closeErrorReportButton").click();

    cy.getDataTest("gradeCalculatorButton").click();
    cy.get("h1").should("contain.text", "Andrzej Pławecki").click();

    cy.getDataTest("searchBarIcon").click();
    cy.getDataTest("collapseButton").click();

    cy.getDataTest("showUserInfoButton").click();
    cy.getDataTest("loginButton").click();
    cy.go("back");
    cy.getDataTest("showUserInfoButton").click();
    cy.getDataTest("registerButton").click();
    cy.getDataTest("loginLink").click();
    cy.get("h1").click();

    cy.get("h2").contains("Andrzej Pławecki");
    cy.contains("wymiana informacji pomiędzy uczniami");
    cy.getDataTest("mainSliderPostTitle")
      .invoke("text")
      .then((initialTitle) => {
        cy.wait(5000);
        cy.getDataTest("mainSliderPostTitle")
          .invoke("text")
          .should((newTitle) => {
            expect(newTitle).to.not.equal(initialTitle);
          });
      });
    cy.getDataTest("mainSliderPostTitle")
      .invoke("text")
      .then((mainPostTitle) => {
        cy.getDataTest("mainSliderPostTitle").click();
        cy.getDataTest("postInfoTitle").should("have.text", mainPostTitle);
        cy.go("back");
      });
  });
});
