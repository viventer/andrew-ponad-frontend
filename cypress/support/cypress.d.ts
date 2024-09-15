// cypress/support/index.d.ts

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getDataTest(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
