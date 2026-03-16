// worker.js
self.addEventListener('message', (event) => {
  const timestamp = event.data;

  self.postMessage({
    name: self.name,
    timestamp: timestamp,
    data: `timestamp=${timestamp}`
  }); // Send the result back to the main thread
});

