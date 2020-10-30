describe("First tests", () => {
  it("true is true", () => {
    expect(true).to.equal(true);
  });

  it("Simple Get request", () => {
    cy.request("GET", "https://localhost:5001/<<rest-api-path>>").then(
      (response) => {
        expect(response.status).equal(200);
        expect(response.body).to.not.be.null;
      }
    );
  });
});
