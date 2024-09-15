describe("Error Reports", () => {
  it("CRUD operations", () => {
    cy.visit("/");
    cy.getDataTest("errorReportsFooterButton").click();

    cy.getDataTest("titleInput").type("Some title");
    cy.getDataTest("descriptionInput")
      .find(".ql-editor")
      .type("Some descriptioniuhrtgetguhertguhiouetgiuhe");

    cy.getDataTest("imageInput").selectFile("cypress/fixtures/img1.webp", {
      action: "drag-drop",
      force: true,
    });
  });
});
