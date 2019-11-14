const name = "Claudia" + Math.round(Math.random() * 100);
describe("ITA Student Information", function() {
  it("Makes the whole tour", function() {
    cy.visit("/");

    //Check that there is no one named Claudia in the student list yet
    cy.contains("Acessar perfil de um(a) aluno(a)").click();
    cy.get(".getStudentNameInput").type(name);
    cy.contains("Ver perfil").click();
    cy.url().should("include", "/student-details");

    //Check that there is automatic redirection to the main page
    cy.wait(1500);
    cy.url().should("eq", "http://localhost:3000/");

    //Add new student, named Claudia
    cy.contains("Adicionar").click();
    cy.get('input[placeholder="Nome do(a) aluno(a)"]').type(name);
    cy.get('input[placeholder="Curso do(a) aluno(a)"]').type(
      "Engenharia de Computação"
    );
    cy.get('input[placeholder="Ano de graduação"]').type(`2026{enter}`);
    cy.contains("Aluno(a) adicionado(a) com sucesso").should("be.visible");
    cy.wait(500);
    cy.contains("Adicionar").click();

    //Check if new student page is on
    cy.contains("Acessar perfil de um(a) aluno(a)").click();
    cy.get(".getStudentNameInput").type(name);
    cy.contains("Ver perfil").click();
    cy.url().should("include", "/student-details");
    cy.contains(name).should("be.visible");
    cy.contains("não possui notas registradas").should("be.visible");
    cy.wait(1000);
    cy.contains("Voltar").click();

    //Add two grades
    cy.contains("Enviar").click();
    cy.get('input[placeholder="Nome do(a) aluno(a)"]').type(name);
    cy.get('input[placeholder="Nova nota (valor numérico)"]').type(
      `9.0{enter}`
    );
    cy.wait(1000);
    cy.contains("Nota adicionada com sucesso").should("be.visible");
    cy.get('input[placeholder="Nome do(a) aluno(a)"]').type(name);
    cy.get('input[placeholder="Nova nota (valor numérico)"]').type(
      `8.0{enter}`
    );
    cy.contains("Nota adicionada com sucesso").should("be.visible");
    cy.wait(1000);
    //Check if the student average is correct
    cy.contains("Acessar perfil de um(a) aluno(a)").click();
    cy.get(".getStudentNameInput").type(name);
    cy.contains("Ver perfil").click();
    cy.url().should("include", "/student-details");
    cy.contains("Claudia").should("be.visible");
    cy.contains("Média atual: 8.5").should("be.visible");
    cy.wait(500);
  });
});
