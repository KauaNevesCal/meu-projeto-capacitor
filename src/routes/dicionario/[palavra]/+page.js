import { dicionario } from '$lib/dicio/data.js';

export function load({ params }) {
  const termo = params.palavra;
  const definicao = dicionario[termo];

  return {
    termo,
    definicao
  };
}
