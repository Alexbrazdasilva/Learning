import { 
  IEmployee,
  ISuperUser,
  IUser
} from './types'

function generateUser({firstName, lastName, age}: IUser):void {
  console.log(`The new user is ${firstName} ${lastName}. ${age} years.`)
}

function generateAdmin({firstName, lastName, age, isAdmin}:ISuperUser) {
  console.log(`The new user is ${firstName} ${lastName}. ${age} years and ${isAdmin ? 'is admin' : 'don\'t is admin'}.`)
}
function generateEmployee({firstName, lastName, age, ocuppation, yearOfEntry}:IEmployee) {
  console.log(`${firstName} ${lastName}, ${age} years, is a ${ocuppation} and entered the year of ${yearOfEntry}.`)
}
generateUser({firstName: 'Jhon', lastName: 'Due', age: 20})
generateAdmin({firstName: 'Jhon', lastName: 'Due', age: 20, isAdmin: false})
generateEmployee({firstName: 'Jhon', lastName: 'Due', age: 20, ocuppation: 'project manager', yearOfEntry: 2021})
