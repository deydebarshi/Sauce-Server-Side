import Config from './config';

const api_url = Config.main_link;
const auth_key = Config.auth_key;
const auth_value = Config.auth_value;

const axios = require('axios');

/*
------Getting all the Offer days from API------
*/
const GetOfferDays = async () => {
  let Items = await axios.get(`${api_url}/offerdays`, {
    headers: {
      THESAUCEAPI: `${auth_value}`,
    },
  });

  let ListData = await Items.data;

  return ListData;
};
module.exports.GetOfferDays = GetOfferDays;






/*
------Getting api Link for Establishment------
*/
const ApiUrl = async () => {
  let api_link = api_url + '/establishment/?';

  let latitude = localStorage.getItem('latitude');

  let longitude = localStorage.getItem('longitude');

  if (latitude != null) {
    api_link = api_link + 'lat=' + latitude;
  }

  if (longitude != null) {
    api_link = api_link + '&long=' + longitude;
  }

  let day_filters = localStorage.getItem('day_filter');

  if (day_filters != null) {
    let day_filters_arr = JSON.parse(day_filters);

    let day_filter_val = day_filters_arr.join(',');

    if (day_filter_val.length > 0 || day_filter_val.length != 0) {
      api_link = api_link + '&day=' + day_filter_val;
    }
  }

  let type_filters = localStorage.getItem('type_filter');

  if (type_filters != null) {
    type_filters = JSON.parse(type_filters);
    api_link = api_link + '&sortby=' + type_filters;
  }

  let time_filters = localStorage.getItem('time_filter');

  if (time_filters != null) {
    let time_filters_arr = JSON.parse(time_filters);

    let time_filter_val = time_filters_arr.join(',');

    if (time_filter_val.length > 0 || time_filter_val.length != 0) {
      api_link = api_link + '&time=' + time_filter_val;
    }
  }

  let offer_filters = localStorage.getItem('offer_filter');

  if (offer_filters != null) {
    let offer_filters_arr = JSON.parse(offer_filters);

    let offer_filters_val = offer_filters_arr.join(',');

    if (offer_filters_val.length > 0 || offer_filters_val.length != 0) {
      api_link = api_link + '&type=' + offer_filters_val;
    }
    
  }


  let cuisin_filters = localStorage.getItem('cuisin_filter');

  if (cuisin_filters != null) {
    let cuisin_filters_arr = JSON.parse(cuisin_filters);

    let cuisin_filters_val = cuisin_filters_arr.join(',');

    if (cuisin_filters_val.length > 0 || cuisin_filters_val.length != 0) {
      api_link = api_link + '&name=' + cuisin_filters_val;
    }
    
  }

  return api_link;
};



/*
------Getting all Establisment List------
*/
const GetEstablishment = async () => {
  let api_link = await ApiUrl();

  console.log(api_link)

  let ListData;

  try {
    let Items = await axios.get(`${api_link}`, {
      headers: {
        THESAUCEAPI: `${auth_value}`,
      },
    });
    setTimeout(() => null, 0);
    ListData = await Items.data;
   
    return ListData;
  } catch (e) {
    alert('Some thing went wrong');
  }
};
module.exports.GetEstablishment = GetEstablishment;






/*
------Getting More Establishment------
*/
const GetMoreEstablishment = async api_link => {
  let ListData;

  try {
    let Items = await axios.get(`${api_link}`, {
      headers: {
        THESAUCEAPI: `${auth_value}`,
      },
    });

    setTimeout(() => null, 0);
    ListData = await Items.data;

    return ListData;
  } catch (e) {
    alert('Some thing went wrong');
  }
};
module.exports.GetMoreEstablishment = GetMoreEstablishment;






/*
------Getting Single Establishment Details------
*/
const GetSingleEstablishment = async id => {
  let api_link = api_url + '/establishment/' + id + '/?';

  let latitude = localStorage.getItem('latitude');
  let longitude = localStorage.getItem('longitude');

  if (latitude != null) {
    api_link = api_link + 'lat=' + latitude;
  }

  if (longitude != null) {
    api_link = api_link + '&long=' + longitude;
  }

  try {
    let Items = await axios.get(`${api_link}`, {
      headers: {
        THESAUCEAPI: `${auth_value}`,
      },
    });

    let ListData = await Items.data;

    return ListData;
  } catch (e) {
    alert('Some thing went wrong');
  }
};
module.exports.GetSingleEstablishment = GetSingleEstablishment;





/*
------Getting Establishment Map View------
*/
const GetEstablishmentMap = async (lat, long) => {
  let api_link =
    'https://api.thesauce.app/maplist/?lat=' + lat + '&long=' + long;

  let day_filters = localStorage.getItem('day_filter');
  if (day_filters != null) {
    let day_filters_arr = JSON.parse(day_filters);

    let day_filter_val = day_filters_arr.join(',');

    if (day_filter_val.length > 0 || day_filter_val.length != 0) {
      api_link = api_link + '&day=' + day_filter_val;
    }
  }

  let type_filters = localStorage.getItem('type_filter');
  if (type_filters != null) {
    type_filters = JSON.parse(type_filters);
    api_link = api_link + '&sortby=' + type_filters;
  }

  let time_filters = localStorage.getItem('time_filter');
  if (time_filters != null) {
    let time_filters_arr = JSON.parse(time_filters);

    let time_filter_val = time_filters_arr.join(',');

    if (time_filter_val.length > 0 || time_filter_val.length != 0) {
      api_link = api_link + '&time=' + time_filter_val;
    }
  }

  

  let offer_filters = localStorage.getItem('offer_filter');
  if (offer_filters != null) {
    let offer_filters_arr = JSON.parse(offer_filters);

    let offer_filters_val = offer_filters_arr.join(',');

    if (offer_filters_val.length > 0 || offer_filters_val.length != 0) {
      api_link = api_link + '&type=' + offer_filters_val;
    }
    
  }


  let cuisin_filters = localStorage.getItem('cuisin_filter');
  if (cuisin_filters != null) {
    let cuisin_filters_arr = JSON.parse(cuisin_filters);

    let cuisin_filters_val = cuisin_filters_arr.join(',');

    if (cuisin_filters_val.length > 0 || cuisin_filters_val.length != 0) {
      api_link = api_link + '&name=' + cuisin_filters_val;
    }
    
  }


  console.log(api_link)

  try {
    let Items = await axios.get(`${api_link}`, {
      headers: {
        THESAUCEAPI: `${auth_value}`
      },
    });

    let ListData = await Items.data;

    if (ListData.error == undefined) {
      return ListData;
    }
  } catch (e) {
    alert('Some thing went wrong');
  }
};
module.exports.GetEstablishmentMap = GetEstablishmentMap;




/*
------Getting Autocomplete from Google Map API------
*/
// const autoCompleteAddress = async text => {
//   let generateRandomNumber = Date.now();

//   let api_link =
//     'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
//     encodeURIComponent(text) +
//     '&key=AIzaSyCf4y8NJ92lQZMTiAgsx2c5Upt0i52Ft88&sessiontoken=' +
//     generateRandomNumber;

//   try {
//     let Items = await axios.get(`${api_link}`);

//     let ListData = await Items.data;

//     return ListData;
//   } catch (e) {
//     alert('Some thing went wrong');
//   }
// };
// module.exports.autoCompleteAddress = autoCompleteAddress;




/*
------Getting Geocode from Google Map API------
*/
// const geocodeFromAddress = async text => {
//   let api_link =
//     'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' +
//     encodeURIComponent(text) +
//     '&key=AIzaSyCf4y8NJ92lQZMTiAgsx2c5Upt0i52Ft88';

//   try {
//     let Items = await axios.get(`${api_link}`);

//     let ListData = await Items.data;

//     return ListData;
//   } catch (e) {
//     alert('Some thing went wrong');
//   }
// };
// module.exports.geocodeFromAddress = geocodeFromAddress;





/*
------Getting Cuisin list ------
*/
const getCuisinList = async () => {
  try {
    let Items = await axios.get('https://api.thesauce.app/cuisines.json/', {
      headers: {
        THESAUCEAPI: `${auth_value}`
      },
    });

    let ListData = await Items.data;

    return ListData;
  } catch(e){
    alert(e);
  }
};
module.exports.getCuisinList = getCuisinList;
