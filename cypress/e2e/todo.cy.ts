describe("todo", () => {
  it("should add a sample todo", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-cy="add-todo"]').click();
    // fill inputs
    cy.get('[data-cy="task-name"]').type("Wash the dishes");
    cy.get('[data-cy="task-description"]').type("Empty the dish washer.");
    cy.get('[data-cy="task-category"]').select("house");
    cy.get('[data-cy="save"]').click();
  });

  it("should edit the sample todo", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-cy="todo-wrapper"]')
      .contains("Wash the dishes")
      .parents('[data-cy="todo-wrapper"]')
      .find('[data-cy="todo-edit"]')
      .click();
    // fill inputs
    cy.get('[data-cy="task-name"]').type("Wash the dishes");
    cy.get('[data-cy="task-description"]').type(
      "Empty the dish washer and fill it up with the dirty dishes."
    );
    cy.get('[data-cy="task-category"]').select("house");
    cy.get('[data-cy="save"]').click();
  });

  it("should check off the todo", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-cy="todo-wrapper"]')
      .contains("Wash the dishes")
      .parents('[data-cy="todo-wrapper"]')
      .find('[data-cy="todo-complete"]')
      .click();
    cy.get('[data-cy="apply"]').click();
  });

  it("should reset the todo", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-cy="todo-wrapper"]')
      .contains("Wash the dishes")
      .parents('[data-cy="todo-wrapper"]')
      .find('[data-cy="todo-reset"]')
      .click();
    cy.get('[data-cy="apply"]').click();
  });

  it("should filter the todos by label", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-cy="filter-type-dropdown"]').click();
    cy.get('[data-cy="filter-type"]').contains("Label").click();
    cy.get('[data-cy="filter-input"]').type("Wash").wait(1000);
    cy.get('[data-cy="todo-wrapper"]').contains("Wash").should("be.visible");
  });

  it("should filter the todos by category", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-cy="filter-type-dropdown"]').click();
    cy.get('[data-cy="filter-type"]').contains("Category").click();
    cy.get('[data-cy="filter-input"]').type("house").wait(1000);
    cy.get('[data-cy="todo-wrapper"]').contains("Wash").should("be.visible");
  });

  it("should remove the sample todo", () => {
    cy.visit("http://localhost:4200");
    cy.get('[data-cy="todo-wrapper"]')
      .contains("Wash the dishes")
      .parents('[data-cy="todo-wrapper"]')
      .find('[data-cy="todo-remove"]')
      .click();
    cy.get('[data-cy="apply"]').click();
  });
});
