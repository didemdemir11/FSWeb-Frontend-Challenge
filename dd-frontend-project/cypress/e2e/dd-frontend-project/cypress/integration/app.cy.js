describe("sayfaya açılıyor mu?", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("sayfa istenilen şekilde açılıyor", () => {
    cy.contains("I am a Frontend Developer...").should("be.visible");
  });
  it("dil değiştirme butonu çalışıyor", () => {
    cy.contains("I am a Frontend Developer...").should("be.visible");
    cy.get("button").contains("TÜRKÇE'YE GEÇ").click();
    cy.contains("Ben bir Frontend Geliştiriciyim...").should("be.visible");
    cy.get("button").contains("SWITCH TO ENGLISH").click();
    cy.contains("I am a Frontend Developer...").should("be.visible");
  });
  it("DarkMode butonu çalışıyor", () => {
    cy.get("[data-cy=dark-mode-toggle]").click();
    cy.get("html").should("have.class", "dark");
    cy.get("[data-cy=dark-mode-toggle]").click();
    cy.get("html").should("not.have.class", "dark");
  });
});
