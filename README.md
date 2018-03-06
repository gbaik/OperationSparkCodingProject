# Live Cryptocurrency Tracker
By: [Gideon Baik](https://github.com/gbaik) (gideonbaik@gmail.com)

## Built With
* HTML
* React
* Node
* Meteor
* <span>Socket.IO</span>

## Instructions
  1. Clone locally using `git clone https://github.com/gbaik/OperationSparkCodingProject.git`
  2. Navigate to terminal and switch directory `cd OperationSparkCodingProject`
  3. Install dependencies using `npm install`
  4. Start server using `meteor`
  5. Navigate to app in [browser](http://localhost:3000/)

## Requirements
**1. Make recurring API call to CoinMarketCap from server**
  - Using <span>socket.io</span>, an event is, roughly, emitted every 5 minutes to receive the most updated data from CoinMarketCap's API.

**2. Save resulting data to local Mongo database**
  - Every 5 minutes when the API is called from the sockets, it invokes the meteor method cryptocurrencyData.insert which inserts the data into the MongoDB.

**3. Send info from database to client using Meteor publication/subscription**
  - Normally I would make a seperate API route that the client can call that would query the database and return the data. Due to the time constraints, I decided to just insert the data into the database and return the CoinMarketCap's API data directly to the client. 

**4. Client should display current currency prices as a list**
  - The data received is iterated through and sent to another component that renders the items in a list.

**5. Client list prices should update reactively**
  - Every 5 minutes when the API is called from the sockets, the state is updated with the new data.

## Future Work
- Clean up styling
- Clean up what is stored into the database
- Create API that the client calls to receive data instead of receiving directly from CoinMarketCap's API
- Add more error handling on backend
- Write tests
- Add visualizations using D3
- Deploy
- Optimize


