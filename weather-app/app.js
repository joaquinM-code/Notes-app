const request = require('request');

// const url = 'https://api.darksky.net/forecast/777ce1bf03ae3e561251ee4dbfe90f3f/41.2101,-2.0138?units=si';

// request({ url:url, json:true}, (error, response)=>{
//     if(error){
//         console.log('Problem connecting to the weather service!!')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }else{
//         const currentlyData = response.body.currently
//         console.log(response.body.daily.data[0].summary+' '+currentlyData.temperature+'C. There is a '+currentlyData.precipProbability+'% chance of rain.')
//     }
// });


const urlGeo='https://api.mapbox.com/geocoding/v5/mapbox.places/sant%20boi%20llobregat.json?access_token=pk.eyJ1IjoiZWNhdG9tIiwiYSI6ImNrNGI1YzNnYTBhYmYzZW5pY2thaXFtMGYifQ.aTSj5OZYI1jenUD0HKK1hg&limit=1'

request({url:urlGeo,json:true},(error, response)=>{
    if(error){
        console.log('Problem connecting to the location service!!')
    }else if(!response.body.features){
        console.log('Unable to retrive location data')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
    
})



