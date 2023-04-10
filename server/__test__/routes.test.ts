describe("The router", () => {
  test("Result route", async () => {
    const url = "http://localhost:8000/result";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numSimulations: 100,
        isDoorSwitched: true,
      }),
    });
    expect(response.status).toBe(200);
  });
});
