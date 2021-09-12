export interface IUser {
  firstName: String;
  lastName: String | Array<String>;
  age: number;
}
export interface ISuperUser extends IUser {
  isAdmin: true | Boolean;
}
export interface IEmployee extends IUser {
  ocuppation: TEmployee;
  yearOfEntry: number;
}

type TEmployee = 
  'developer'
  | 'intern'
  | 'systems analyst'
  | 'project manager'
  | 'personnel manager'
  | 'database analyst'
  | 'Assistant'
  | String;

