try {
    let user = JSON.parse('{"name": "John", "age": 30');  // Missing closing bracket
    console.log(user);
  } catch (error) {
    console.error("An error occurred while parsing JSON:", error.message);
  }
  