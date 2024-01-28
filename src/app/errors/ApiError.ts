import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export const handleApiError = (error: AxiosError) => {
  if (error.response) {
    console.error('Erro de resposta:', error.response);

    if (error.response.status === 404) {
      toast.error('Já existe um membro com esse telefone!');
    } else {
      toast.error('Erro na API. Por favor, tente novamente mais tarde.');
    }
  } else if (error.request) {
    console.error('Erro de solicitação:', error.request);
    toast.error('Erro na solicitação, sem resposta do servidor.');
  } else {
    console.error('Erro ao processar a solicitação:', error.message);
    toast.error('Erro desconhecido. Por favor, tente novamente.');
  }
};
