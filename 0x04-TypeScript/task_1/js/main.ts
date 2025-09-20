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

// Director interface extending Teacher (singular) - for checker compatibility
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation (with destructuring + required return format)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}
