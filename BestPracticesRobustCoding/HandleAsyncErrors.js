async function fetchUser() {
    // Simulate an async function that may fail
    throw new Error('User data not found');
  }
  
  async function getUserData() {
    try {
      const user = await fetchUser();
      console.log('User data:', user);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }
  
  getUserData();
  