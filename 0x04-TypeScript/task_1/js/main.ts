// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage: Teacher
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra attribute allowed
};

console.log("Teacher example:", teacher3);

// Example usage: Directors
const director1: Directors = {
  firstName: "Mary",
  lastName: "Smith",
  location: "New York",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Director example:", director1);

