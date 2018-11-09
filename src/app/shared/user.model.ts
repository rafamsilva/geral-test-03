export class User{
  constructor(
      public nome: string,
      public email: string,
      public telefone: number,
      public sobrenome: string,
      public senha: string,
      public admin: boolean,
      public funcionario: boolean,
      public favoritos: number[]
      ){}
}
