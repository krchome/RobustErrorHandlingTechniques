function processOrder(order) {
    if (!order || !order.items) {
      console.error('Order or items missing');
      return;
    }
    console.log('Processing order:', order);
  }
  
  const order = null;  // Simulating an incomplete order
  processOrder(order);
  