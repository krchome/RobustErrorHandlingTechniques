function getConfig() {
    // Simulating a function that might fail
    throw new Error('Unable to retrieve config');
  }
  
  function getConfigWithFallback() {
    let config;
    try {
      config = getConfig();
    } catch (error) {
      console.warn('Error occurred, using default config');
      config = { mode: 'default' };  // Fallback config
    }
    return config;
  }
  
  const config = getConfigWithFallback();
  console.log('Config:', config);
  