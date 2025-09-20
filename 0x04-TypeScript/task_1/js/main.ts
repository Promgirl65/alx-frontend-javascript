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

// Director interface extending Teacher 
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage: Directors
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Directors example:", director1);

// Example usage: Director
const director2: Director = {
  firstName: "Mary",
  lastName: "Smith",
  location: "Paris",
  fullTimeEmployee: false,
  numberOfReports: 5,
};

console.log("Director example:", director2);

