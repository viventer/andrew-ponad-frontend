describe("Error Reports", () => {
  it("CRUD operations", () => {
    const key = Math.floor(Math.random() * 1000001);
    cy.visit("/");
    cy.getDataTest("errorReportsFooterButton").click();

    cy.getDataTest("titleInput").type("title 1 " + key);
    cy.getDataTest("descriptionInput")
      .find(".ql-editor")
      .type("Description of the first error report.");

    cy.getDataTest("imageInput").selectFile("cypress/fixtures/img1.webp", {
      action: "drag-drop",
      force: true,
    });
    cy.getDataTest("addImgButton").click();
    cy.getDataTest("imageInput")
      .eq(1)
      .selectFile("cypress/fixtures/img2.webp", {
        action: "drag-drop",
        force: true,
      });
    cy.getDataTest("addImgButton").click();
    cy.getDataTest("imageInput")
      .eq(2)
      .selectFile("cypress/fixtures/img3.webp", {
        action: "drag-drop",
        force: true,
      });

    cy.getDataTest("sendRaportButton").click();

    cy.contains("Zgłoszenie zostało wysłane.");
    cy.getDataTest("successModalButton").click();

    cy.getDataTest("errorReportsFooterButton").click();
    cy.getDataTest("titleInput").type("title 2 " + key);
    cy.getDataTest("descriptionInput")
      .find(".ql-editor")
      .type("descriptioniuhrtgetguhertguhiouetgiuhe");
    cy.getDataTest("sendRaportButton").click();

    cy.contains("Zgłoszenie zostało wysłane.");
    cy.getDataTest("successModalButton").click();

    cy.getDataTest("errorReportsFooterButton").click();
    cy.getDataTest("titleInput").type("title 3 " + key);
    cy.getDataTest("descriptionInput")
      .find(".ql-editor")
      .type(
        "ygreuoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooewgyurrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
      );

    cy.getDataTest("descriptionLengthSpan").should(
      "have.css",
      "color",
      "rgb(241, 123, 137)"
    );
    cy.getDataTest("sendRaportButton").should("be.disabled");

    cy.getDataTest("imageInput").selectFile("cypress/fixtures/tooBigImg1.png", {
      action: "drag-drop",
      force: true,
    });

    cy.contains("Plik został odrzucony.");

    cy.getDataTest("imageInput").selectFile("cypress/fixtures/img1.webp", {
      action: "drag-drop",
      force: true,
    });

    cy.getDataTest("descriptionInput")
      .find(".ql-editor")
      .clear()
      .type("description");

    cy.getDataTest("sendRaportButton").should("be.disabled");

    cy.getDataTest("descriptionInput")
      .find(".ql-editor")
      .clear()
      .type("description iuherg " + key);

    cy.getDataTest("sendRaportButton").click();

    cy.contains("Zgłoszenie zostało wysłane.");
    cy.getDataTest("successModalButton").click();

    cy.getDataTest("showUserInfoButton").click();
    cy.getDataTest("loginButton").click();

    cy.get("#username").type("admin");
    cy.get("input[type='password']").type("ZAQ!2wsx");
    cy.getDataTest("loginFormButton").click();

    cy.location("pathname").should("eq", "/");
    cy.getDataTest("showUserInfoButton").click();
    cy.getDataTest("adminPanelButton").click();
    cy.getDataTest("reportsTabSelection").click();

    cy.contains("p", "title 1 " + key).click();
    cy.getDataTest("reportDescription").should(
      "have.text",
      "Description of the first error report."
    );
    cy.getDataTest("showScreenshotsButton").click();
    cy.getDataTest("imgSection").find("img").should("have.length", 3);
    cy.getDataTest("reportAuthor").should("contain.text", "anonim");
  });
});
