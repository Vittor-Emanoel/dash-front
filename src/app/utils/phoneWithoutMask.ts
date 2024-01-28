export function phoneNumberWithoutMask(phoneNumber: string): string {
  // Remove todos os caracteres não numéricos
  const numericPhone = phoneNumber.replace(/\D/g, '');

  // Verifica se há pelo menos 11 dígitos no número (incluindo o código de área)
  if (numericPhone.length >= 11) {
    // Formata como "119...."
    return `11${numericPhone.substr(-9, 9)}`;
  }

  // Se não tiver pelo menos 11 dígitos, retorna o número original
  return numericPhone;
}
