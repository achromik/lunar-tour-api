const AWS = require('aws-sdk');

const listings = require('./listings.json');

AWS.config.update({ region: process.env.AWS_REGION || 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

console.log('ListingInit', listings);

const listingsDB = process.env.LISTINGS_DB || 'dev-lunar-listings';

listings.map((item) => {
  listingParams = {
    TableName: listingsDB,
    Item: item,
  };

  docClient.put(listingParams, (err, data) => {
    if (err) {
      console.error(
        'Unable to add listing',
        item.listingName,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log(`PutItem succeeded: ${item.listingName}`);
    }
  });
});
