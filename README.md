# SMARTINSIGHT Assessment

To test the api endpoint, clone the repo to a local environment and do a npm install, then create a .env file and add a port number and openAI key
PORT=3000
OPENAI_API_KEY=your_key

Start the server using npm start, and test the endpoint using the port number eg
[localhost](http://localhost:3000/api/question) (POST request)
and send a message in the request body using a raw request body (application/json)

{
  "message":"Which country has the highest number of billionaires in the world?"
}


