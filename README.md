# Live Cryptocurrency Tracker
By: [Gideon Baik](https://github.com/gbaik) (gideonbaik@gmail.com)

## Built With
* HTML
* CSS
* React
* Node
* Meteor

## Instructions
  1. Clone locally using `git clone https://github.com/gbaik/OperationSparkCodingProject.git`
  2. Navigate to terminal and switch directory `cd OperationSparkCodingProject`
  3. Install dependencies using `npm install`
  4. Start server using `meteor`
  5. Navigate to app in [browser](http://localhost:3000/)

## Requirements
**1. Make recurring API call to CoinMarketCap from server**
  - Using Meteor's publications and subscriptions methods, roughly, every 5 minutes the Display component's props which is contained using Meteor's withTracker receives the most updated data from CoinMarketCap's API.

**2. Save resulting data to local Mongo database**
  - Using Meteor's publications and subscriptions methods alongside setInterval, roughly, every 5 minutes the CoinMarketCap's API is inserted into the MongoDB.

**3. Send info from the database to client using Meteor publication/subscription**
  - Meteor's withTracker alongside publications and subscriptions methods keeps track of any updating data in the database and updates it live. 

**3. Client should display current currency prices as a list**
  - The data received is iterated through and sent to another component that renders the items in a list.

**4. Client list prices should update reactively**
  - Every 5 minutes when the CoinMarketCap's API is called from the Meteor's publications and subscriptions methods, the props are updated with the new data through the Display component being contained in Meteor's withTracker.

## Future Work
- Update API call to be independent of client
- Clean up what is stored into the database
- Add more error handling on backend
- Write tests
- Make it responsive
- Add visualizations using D3
- Deploy
- Optimize
- Add more color


