export function getFirstNameAndLastName(fullName: string) {
  const first = fullName.split(' ')[0];
  const last = fullName.split(' ')[1];

  return `${first} ${last}`;
}
