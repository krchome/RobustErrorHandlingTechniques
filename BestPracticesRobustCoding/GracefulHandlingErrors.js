// Simulate a data fetching operation using fetch
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/post');
  
      // Check if the response is successful (status 200–299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();  // Parse JSON data
      return data;
    } catch (error) {
      // Gracefully handle the error and return a fallback or handle it accordingly
      console.error('Failed to fetch data:', error.message);
      throw error;  // Optionally, rethrow the error if it needs to be handled by another function
    
  }
}
  
  // Function that calls fetchData and handles errors gracefully
  async function handleDataFetch() {
    try {
      const data = await fetchData();  // Attempt to fetch data
      console.log('Data fetched successfully:', data);
    } catch (error) {
      // Gracefully handle any errors that occur during fetch
      console.error('Error occurred while fetching data:', error.message);
    }
  }

  
  // Call the function to demonstrate error handling
  handleDataFetch();
