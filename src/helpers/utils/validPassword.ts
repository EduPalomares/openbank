export function validPassword(str: string): boolean {
  const reg = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/i);
  return reg.test(str);
}
