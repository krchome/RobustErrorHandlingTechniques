function riskyOperation() {
    throw new Error('Something went wrong!');
  }
  
  function executeOperation() {
    try {
      riskyOperation();
    } catch (error) {
      console.error('Error occurred:', error.message);
      // Rethrow if necessary
       throw error;  // Uncomment if you want to propagate the error up
    }
    
  }
  try {
    executeOperation();
  } catch (error) {
    console.error('Error rethrown and caught again:', error.message);
  }// Uncomment if you want to propagate the error up
  //executeOperation();
  