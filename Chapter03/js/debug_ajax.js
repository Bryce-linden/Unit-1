
function debugAjax(){

	var mydata;
	
	fetch("data/MegaCities.geojson")
		.then(function(response){
			return response.json();
			
		})
		.then (function(response){
			var mydata = response;
			callback(response);
			//console.log(mydata)
		})
	callback(response)
};

function callback(response){
	  
	mydata = response;
	console.log(JSON.stringify(response));
	//callback()
	console.log(mydata);
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(mydata))
}

function debugCallback(response){
	//document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response))
	
}
//callback()
//debugCallback()
window.onload = debugAjax();

/*

Need to somehow incorporate the promise function. What is happening is the data is not showing up
because you need it to load first. I think it is trying to appear before it loads and that
is why it won't work
You need two callback funtions to make the json work. You will have two callback functions
.then(conversion) and then .then(callback)

function callback(response){
	console.log(JSON.stringify(response))
}

format: function
			fetch
			callback

		function callback(response){
			document.querySelector('#mydiv')
		}
*/