const emailValidation = (email: string): boolean => {
  const regex = /\S+@\S+\.\S+/;
  console.log(regex.test(email));
  return regex.test(email);
};
const CpfValidation = (cpf: string): boolean => {
  let Soma: number;
  let Resto: number;
  Soma = 0;
  // cpf  = RetiraCaracteresInvalidos(cpf,11);
  if (cpf === "00000000000") {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    Soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(cpf.substring(9, 10), 10)) return false;
  Soma = 0;
  for (let i = 1; i <= 10; i += 1) {
    Soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(cpf.substring(10, 11), 10)) return false;
  return true;
};

export { CpfValidation, emailValidation };
