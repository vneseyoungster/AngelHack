const triggerAPI = require('./triggerAPI'); // Adjust the path as necessary

const userMessage = "Hello"; // Replace with actual user message

triggerAPI(userMessage)
  .then(messages => {
    console.log('Retrieved messages:', messages);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
