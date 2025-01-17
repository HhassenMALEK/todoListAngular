export interface User{
  id : string;
  name: string;
  password: string;
  type: string; 
  email: string;
}
export type Users = User[];