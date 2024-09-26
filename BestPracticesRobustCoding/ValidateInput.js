function validateUsername(username) {
    if (!username || username.length === 0) {
      throw new Error('Username is required');
    }
    return username;
  }
  
  try {
    const username = " "; // Simulating user input
    validateUsername(username);
  } catch (error) {
    console.error('Validation error:', error.message);
  }
  