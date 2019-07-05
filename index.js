const admin = require("firebase-admin");
const serviceAccount = require("./zoptionofficial-firebase-adminsdk-2w1h1-ff9de678f6.json");
//const cors = require('cors') ({orgin: true})
const PATH_ASSET_PRICE = '/assets';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://zoptionofficial.firebaseio.com"
  });

exports.setSpotPrice = async (info) => {
    let newInfo = admin.database().ref(PATH_ASSET_PRICE).push()
    newInfo.set({assetOne: {spot_price: 134},
                assetTwo: {spot_price: 145},
                assetThree: {spot_price: 155},
                assetFour: {spot_price: 175},
                assetFive: {spot_price:75}});


}

this.setSpotPrice();