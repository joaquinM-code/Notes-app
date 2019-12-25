const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZWNhdG9tIiwiYSI6ImNrNGI1YzNnYTBhYmYzZW5pY2thaXFtMGYifQ.aTSj5OZYI1jenUD0HKK1hg&limit=1';

    request({url, json: true}, (error, response)=>{
        if(error){
            callback('Problem connecting to the location service!!', undefined);
        }else if(!response.body.features){
            callback('Unable to retrive location data', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name 
            })
        }
    })
}

module.exports= geocode