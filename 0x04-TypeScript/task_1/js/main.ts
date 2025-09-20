// Define Teacher interface
interface Teacher {
  readonly firstName: string;  // only set when initialized
  readonly lastName: string;   // only set when initialized
  fullTimeEmployee: boolean;   // must always be defined
  yearsOfExperience?: number;  // optional
  location: string;            // must always be defined
  [key: string]: any;          // allows extra attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra attribute allowed
};

console.log(teacher3);

