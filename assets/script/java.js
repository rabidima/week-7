// var response = prompt( 'Enter the time to convert in military format:', '');
// var milTime = new Date( 'Jan 1, 1970 ' + response);
// alert( (milTime.toLocaleString().split( '1970'))[1]);


// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCvaOEjMcrVNJ0X93G1PAipOGJK05Z-hW8",
    authDomain: "train-schedule-80c6d.firebaseapp.com",
    databaseURL: "https://train-schedule-80c6d.firebaseio.com",
    storageBucket: "train-schedule-80c6d.appspot.com",
  };

  firebase.initializeApp(config);

  var database = firebase.database();

//Firebase watcher + initial loader
  database.ref().on('value', function(snapshot){
  	$('#currentData').empty();
  	snapshot.forEach(function(childSnapshot){
  		var newTrain = {
  			trainName: childSnapshot.val().trainName,
  			destination: childSnapshot.val().destination,
  			frequency: childSnapshot.val().frequency,
  			nextArrival: "",
  			minutesAway: ""
  			}
  		updateData(newTrain);
  });
  	});

function updateData(obj){

	
// var tempDateArray = obj.startDate.split('-');

//   obj.monthsWorked = monthDiff(
//     new Date(tempDateArray[0], tempDateArray[1], tempDateArray[2]),
//     new Date(year, month, day)
//     );

//   obj.totalBilled = "$" + obj.monthsWorked * obj.monthlyRate;
		// obj.nextArrival = 




	  var r = $('<tr>');

	  for(key in obj){
	    var d = $('<td>');
	    d.html(obj[key]);
	    r.append(d);
	  }

	  $('#currentData').append(r);
	}

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var hours = dateObj.getUTCHours();

var setHours = moment().hour();
var setMinutes = moment().minutes();



console.log("hours",setHours,setMinutes);
console.log("Date",dateObj);

// 

$('#timeNow').html(moment().format());

console.log(Date());


function convert(input) {
    return moment(input, 'HHmm').format('hh:mm');
}

console.log(convert('1350'));


$('#submit').on('click',function(){

	trainName = $('#trainName').val().trim();
	destination = $('#destination').val().trim();
	frequency = $('#frequency').val().trim();
	firstTime = $('#firstTime').val().trim();

	console.log("First-time",firstTime);


	if (trainName == '' || destination == '' || frequency == '' || firstTime == ''){
		alert("Please fillout all fields");
		}else{
		// var nextArrival = moment().hour(firstTime;
		

		// if (moment('firstTime').isSameorBefore('timeNow'){
		// 	nextArrival = firstTime + frequency;
		// 	cosole.log("Next Arrival",);
		// }

		var minutesAway;


		var newTrain = {
		  			trainName: trainName,
		  			destination: destination,
		  			frequency: frequency,
		  			nextArrival: "",
		  			minutesAway: ""		
		  		}

		// Code for the push

		  	database.ref().push(newTrain);

		  	 $('#trainName').val('');
			$('#destination').val('');
			$('#frequency').val('');
			$('#firstTime').val('');

			return false;
}
		  		
		})



