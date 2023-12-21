import axios from 'axios';

interface Input {
  cep: string;
}

interface Output {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export async function find({ cep }: Input) {
  console.log(cep);
  const { data } = await axios.get<Output>(
    `https://viacep.com.br/ws/${cep}/json/`,
  );

  console.log(DataTransferItem);

  return data;
}
