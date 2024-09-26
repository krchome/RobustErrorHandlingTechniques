function sendErrorLog(error) {
    console.log('Error logged to monitoring system:', error.message);
  }
  
  function processPayment(payment) {
    try {
      if (!payment) {
        throw new Error('Payment details missing');
      }
      console.log('Processing payment:', payment);
    } catch (error) {
      sendErrorLog(error);
    }
  }
  
  processPayment(null);  // Simulate an error
  