export interface User {
  email: string;
  senha: string;
  nome: string;
  tipo: 'admin' | 'cliente';
}
 