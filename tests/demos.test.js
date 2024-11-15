describe("Pruebas en <DemoComponent/>", () => {
  test("esta prueba no debe fallar", () => {
    // 1. INICIALIZACION
    const message1 = "Hola mundo";

    // 2. ESTIMULO
    const message2 = message1.trim();

    //3. OBSERVAR EL COMPORTAMIENTO ... ESPERADO
    expect(message1).toBe(message2);
  });
});
