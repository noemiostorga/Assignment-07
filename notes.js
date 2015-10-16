//array.forEach(); - goes through each object literal
var arr = [
{
	"day" : "Sunday",
	"abbr" : "Sun",
	"index": 0,
},
{
	"day" : "Monday",
	"abbr" : "mon",
	"index": 1,
},
{
	"day" : "Tuesday",
	"abbr" : "Tues",
	"index": 2,
},
{
	"day" : "Wedbnesday",
	"abbr" : "wed",
	"index": 3,
},
{
	"day" : "Thursday",
	"abbr" : "Thurs",
	"index": 4,
},
{
	"day" : "Friday",
	"abbr" : "Fri",
	"index": 5,
},
{
	"day" : "Satday",
	"abbr" : "Sat",
	"index": 6,
}


];

/*gets objects called  dayObj*
-. tags value w/ key  */
arr.forEach(function(dayObj){
	console.log(dayObj.day);
});

//array.map(); goes inside object literal item
//grabs first three letter 
var newArr = arr.map(function(dayObj){
	var name = dayObj.day;
	return {
		"day":name, 
		"abbr": name.substr(0,3)
	}
});

//array.filter();
//returns specific items that you want kinda like segaration
var filteredArray = arr.filter(function(dayObj){
	if(dayObj.day.charAt(0) === 'T'){
		return true;
	}
	return false;
});

console.log(filteredArray)

//array.reduce(); replaces b with a if b is greater than a and checks if its a string and
//checks if a length is great than the day length of b
var myValue = arr.reduce(function(a, b) {
	if(typeof a === "string"){
		if(a.length > b.day.length ){
			return a; 
		}else {
			return b.day;
		}
	}
	if(a.day.length > b.day.length){
		return a;}
		else{
			return b;
		}
});





