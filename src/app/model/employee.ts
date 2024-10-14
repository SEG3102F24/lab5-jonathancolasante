export class Employee {
  constructor(
    public name: string,
    public dateOfBirth: Date,
    public city: string,
    public salary: number,
    public gender: string,
    public email: string,
    public id?: string
  ) {}

  toPlainObject() {
    return {
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      city: this.city,
      salary: this.salary,
      gender: this.gender,
      email: this.email,
      id: this.id
    };
  }
}
