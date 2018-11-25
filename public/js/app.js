(function() {

  const config = {
    apiKey: "AIzaSyAs6UaN7YVnTD2BvqksbA-9Gp_dfIXFEJA",
    authDomain: "irst-05.firebaseapp.com",
    databaseURL: "https://irst-05.firebaseio.com",
    projectId: "irst-05",
    storageBucket: "irst-05.appspot.com",
    messagingSenderId: "468088484266"
  };

  firebase.initializeApp(config);

  console.log(firebase);

  var database = firebase.database();

  var ref = database.ref('accidents');

  var nameArray = ["Jenn Cami","Ed Sheeran","Frank Sinatra","Austin Allen","Maddy Sin"];
  var policyNumArray = ["kfA352HaLd325","BM392lxxis52","52idSJk392ls","bn623XG592cr","86ILSuh850a"];
  var coverageTypeArray = ["Comprehensive","Collision","Comprehensive","Liability","Collision"];
  var timeOfAccidentArray = ["5:23:29","7:43:49","8:31:13","9:42:45","12:42:11"];
  var locationArray = ["London, ON", "Toronto, ON", "Brampton, ON", "Ottawa, ON", "Markham, ON"];
  var vehicleArray = ["Honda Accord", "BMW M5", "Mazda 3", "Toyota Corolla", "Mercedes Benz"];
  var partDamagedArray = ["Front Bumper", "Rear Bumper", "Rear Lights/Bumper", "Front Lights/Bumper"];
  var severityArray = ["Low", "Low-Mod" ,"Moderate", "Mod-Sev", "Severe"];

  var random1 = Math.floor(Math.random() * Math.floor(4));
  var random2 = Math.floor(Math.random() * Math.floor(4));
  var random3 = Math.floor(Math.random() * Math.floor(4));
  var random4 = Math.floor(Math.random() * Math.floor(4));
  var random5 = Math.floor(Math.random() * Math.floor(4));
  var random6 = Math.floor(Math.random() * Math.floor(4));
  var random7 = Math.floor(Math.random() * Math.floor(4));
  var random8 = Math.floor(Math.random() * Math.floor(4));


  var data = {
    name: nameArray[random1],
    policyNum: policyNumArray[random2],
    coverageType: coverageTypeArray[random3],
    timeOfAccident: timeOfAccidentArray[random4],
    location: locationArray[random5],
    vehicle: vehicleArray[random6],
    partDamaged: partDamagedArray[random7],
    severity: severityArray[random8],
    repairCost: "$250"
  }

  ref.push(data);

  ref.on('value', gotData, errData);

}());


function gotData(data){
  console.log(data.val());

  var accidents = data.val();
  var keys = Object.keys(accidents);

  for (var i = 0; i < keys.length; i++){
    var k = keys[i];
    var name = accidents[k].name;
    var policyNum = accidents[k].policyNum;
    var coverageType = accidents[k].coverageType;
    var timeOfAccident = accidents[k].timeOfAccident;
    var location = accidents[k].location;
    var vehicle = accidents[k].vehicle;
    var partDamaged = accidents[k].partDamaged;
    var severity = accidents[k].severity;
    var repairCost = accidents[k].repairCost;

    console.log(name, policyNum, coverageType, timeOfAccident,location,vehicle,partDamaged,severity,repairCost);

    var holder = document.getElementById("accidentsCollection");
    var newAccident = document.createElement("div");
    newAccident.classList.add("accident");
    var newName = document.createElement("h1");
    newName.classList.add("mainTitle");
    newName.innerHTML = name;
    var newPolicyNum = document.createElement("h2");
    newPolicyNum.classList.add("subTitle");
    newPolicyNum.innerHTML = "Policy # - " + policyNum;
    var newCoverage = document.createElement("h2");
    newCoverage.classList.add("subTitle");
    newCoverage.innerHTML = "Coverage Type - " + coverageType;
    var newTime = document.createElement("h2");
    newTime.classList.add("additional");
    newTime.innerHTML = "Time of Accident - " + timeOfAccident;
    var newLocation = document.createElement("h2");
    newLocation.classList.add("additional");
    newLocation.innerHTML = "Location of Accident - " + location;
    var newVehicle = document.createElement("h2");
    newVehicle.classList.add("additional");
    newVehicle.innerHTML = "Vehicle Involved - " + vehicle;
    var newDamage = document.createElement("h2");
    newDamage.classList.add("additional");
    newDamage.innerHTML = "Part Damaged - " + partDamaged;
    var newSeverity = document.createElement("h2");
    newSeverity.classList.add("additional");
    newSeverity.innerHTML = "Damage Severity - " + severity;
    var newRepair = document.createElement("h2");
    newRepair.classList.add("additional");
    newRepair.innerHTML = "Est. Cost of Repair - " + repairCost;
    var rule = document.createElement("hr");

    holder.appendChild(newAccident);
    newAccident.appendChild(newName);
    newAccident.appendChild(newPolicyNum);
    newAccident.appendChild(newCoverage);
    newAccident.appendChild(rule);
    newAccident.appendChild(newTime);
    newAccident.appendChild(newLocation);
    newAccident.appendChild(newVehicle);
    newAccident.appendChild(newDamage);
    newAccident.appendChild(newSeverity);
    newAccident.appendChild(newRepair);

  }

  var newRule = document.createElement("hr");
  newRule.id = "newRule";

  document.body.appendChild(newRule);

}

function errData(err){
  console.log("Error");
  console.log(err);
}