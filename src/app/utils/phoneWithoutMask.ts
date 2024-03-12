export function phoneNumberWithoutMask(phoneNumber: string): string {
  const numericPhone = phoneNumber.replace(/\D/g, '');

  return numericPhone;
}
