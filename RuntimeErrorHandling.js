function processPayment(payment) {
    if (!payment || typeof payment.amount !== 'number') {
      console.error('Invalid payment object');
      return 0;  // or handle it in another appropriate way, like throwing an error
    }
    return payment.amount * 2;
  }
  
  let total = processPayment(undefined);  // payment is undefined, handled gracefully
  console.log(total);  // Output: 0
  