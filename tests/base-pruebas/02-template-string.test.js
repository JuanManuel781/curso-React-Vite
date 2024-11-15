import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("pruebas en 02-template-string", () => {
  test('getSaludo debe de retornar  "Hola Juan" ', () => {
    const name = "Juan";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
