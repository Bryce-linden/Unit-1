console.log("testing1"); //testing the function by writing to the console. Initialize the functions before their definitions below
function initialize(){
    cities();
    
    addEvents();
};
function cities(){ //here begins the cities function
 
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];


    const table = document.createElement("table"); //create the table

    const headerRow = document.createElement("tr"); //create the header row

    var cityheader = document.createElement("th");
    cityheader.innerHTML = "City";
    headerRow.appendChild(cityheader); //this line brings in the cityheader string "City" into the table

    var popheader = document.createElement("th");
    popheader.innerHTML = "Population";
    headerRow.append(popheader);

    

    table.appendChild(headerRow); //this brings in the newly created header row into the table by appending it

    for(var i = 0; i < cityPop.length; i++){
            //assign longer html strings to a variable
            var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
            //add the row's html string to the table
            table.insertAdjacentHTML('beforeend',rowHtml);
        }
    
    //this block of code below is what makes the table appear on the page
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
    addColumns(cityPop); //This line of code is super important as it calls the function so it can be utilized below. Without this code, the function below will not recognize cityPop
}

function addColumns(cityPop){ //begin function addColumns
    
    document.querySelectorAll("tr").forEach(function(row, i){
//This block of code below fills in the city size column with values based on their population
    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
                row.insertAdjacentHTML('beforeend',citySize)

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
                row.insertAdjacentHTML("beforeend",citySize)

    		} else {
    			citySize = 'Large';
                row.insertAdjacentHTML("beforeend",citySize)
    		};

			row.insertAdjacentHTML = '<td' + citySize + '</td>';
    	};
    });
};
console.log("testing3") //test to make sure the code works

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){ //this creates the mouseover function
		
		var color = "rgb("; //this sets the color possibilities to any color value in the rgb range

		for (var i=0; i<3; i++){ //this block of code sets a random color when the mouseover function occurs by assigning a random number to the function

			var random = Math.round(Math.random() * 255); // * 255 because rbg values run from 0-255

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
            }
		};
    

		document.querySelector("table").style.color = color; //this assigns the mouseover function to the table so that the table changes color
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme) //this assigns the clickme function to the table
};

window.onload = initialize();
