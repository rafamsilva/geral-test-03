export class User{
  constructor(
      public nome: string,
      public email: string,
      public telefone: number,
      public sobrenome: string,
      public password: string,
      public admin: boolean
      ){}
}
