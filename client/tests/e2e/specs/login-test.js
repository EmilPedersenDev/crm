describe("Login flow", () => {
  it("Logs in a user", () => {
    cy.visit("/");
    cy.get("#email").type("andersson@malmo.com");
    cy.get("#password").type('hG3?--"dsF7&');
    cy.get("#login-btn").click();

    cy.request({
      method: "POST",
      url: "http://localhost:4000/auth/login",
      body: {
        email: "andersson@malmo.com",
        password: 'hG3?--"dsF7&',
      },
    }).then((res) => {
      window.localStorage.setItem("jwt", res.body.token);
      console.log(localStorage.getItem("jwt"));
      expect(localStorage.getItem("jwt")).to.exist;
      cy.url().should("be.equal", "http://localhost:8080/#/");
    });
  });
});
