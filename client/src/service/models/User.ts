export default class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  personalNumber: number;
  password: string;
  role: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    personalNumber: number,
    password: string,
    role: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.personalNumber = personalNumber;
    this.password = password;
    this.role = role;
  }
}
