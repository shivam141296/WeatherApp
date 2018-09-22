const request = require('request');

getWeather = (lat, lng, callback) => {
  request({
      url:`https://api.darksky.net/forecast/6b8897c588f8f27c705ce232347ee222/${lat},${lng}`,
      json: true
    },(error, response, body) => {
      if(!error && response.statusCode === 200){
        callback(undefined,{
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
      else{
        callback('Unable to fetch Weather.');
      }
    });

};

module.exports.getWeather = getWeather;
