export function getPeriodOfDay(): string {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return 'bom dia';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'boa tarde';
  } else {
    return 'boa noite';
  }
}
