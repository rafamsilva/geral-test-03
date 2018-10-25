export class House{
  constructor(
      public id: string,
      public tipo: string,
      public valor: string,
      public disp: string,
      public area: string,
      public quartos: string,
      public vagas: string,
      public suites: string,
      public desc: string,
      public bairro: string,
      public imgs: Array<object>
      ){}
}

