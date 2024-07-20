import { AlertMessage } from "./BoasVindas";

const mockAlert = jest.fn();
window.alert = mockAlert;

describe("AlertMessage", () => {
  it("Deve aparecer um alert com uma mensagem de boas vindas", () => {
    AlertMessage();
    expect(mockAlert).toHaveBeenCalledWith("Boas-Vindas");
  });

  it("Deve aparecer um alert", () => {
    AlertMessage();
    expect(mockAlert).toHaveBeenCalled();
  })
});
