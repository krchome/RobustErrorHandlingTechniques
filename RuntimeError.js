function processPayment(payment) {
  return payment.amount * 2;
}

let total = processPayment(undefined);  // payment is undefined, 