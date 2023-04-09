export function formatValue(valor: number): string {
  return valor
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "");
}
