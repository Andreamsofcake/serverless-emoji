'use strict';
'use strict';
console.log('Loading function');

module.exports.emojiGenerateHappy = (event, context, callback) => {
    var emojis= [':‑)',':-]',':-3',':->','8-)',':-}'];
    let emoji = emojis[Math.floor(Math.random()*emojis.length)];
    console.log(emoji);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: emoji,
        input: event,
      }),
    };
    callback(null, response);
};

module.exports.emojiGenerateSad = (event, context, callback) => {
    var emojis= [':‑(',':-[',':-8',':-<','8-(',':-{'];
    let emoji = emojis[Math.floor(Math.random()*emojis.length)];
    console.log(emoji);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: emoji,
        input: event,
      }),
    };
    callback(null, response);
};
// module.exports.hello = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };
// 
//   callback(null, response);
// 
//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
// };
