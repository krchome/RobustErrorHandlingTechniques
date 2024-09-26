function validateAge(age) {
    if (age < 0) {
      throw new Error("Age cannot be negative.");
    }
    return age;
  }
  
  try {
    validateAge(-1);  // This will throw an error
  } catch (error) {
    console.error(error.message);  // "Age cannot be negative."
  }
  