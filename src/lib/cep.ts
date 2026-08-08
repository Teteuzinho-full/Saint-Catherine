export type EnderecoViaCep = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
};

export async function buscarEnderecoPorCep(
  cep: string
): Promise<EnderecoViaCep | null> {
  const cepLimpo = cep.replace(/\D/g, "");
  if (cepLimpo.length !== 8) return null;

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.erro) return null;
    return data as EnderecoViaCep;
  } catch {
    return null;
  }
}
