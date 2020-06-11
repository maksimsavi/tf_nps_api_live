const APIkey = '';
const fetchOptions = { 'X-Api-Key': 'sVI3vB7wsPwAYW0WWSbEeut3oOfV8E2PX6Fr7EMt'};
//catches response and passes to fetch
function catchResponse() {
    console.log ('listening for input.');
    $("#locationInput").submit(function( event ) {
        event.preventDefault();
        
        let locationInput = $("input[type=text][name=location]").val()
            resultmax = $("input[type=number][name=maxlimit]").val()
            state = $("#state").val();
            console.log('fetching data...');
            fetchData (locationInput, resultmax, state);
        });
    
}
function fetchData (locationInput, resultmax, state) {
    
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=sVI3vB7wsPwAYW0WWSbEeut3oOfV8E2PX6Fr7EMt&limit=${resultmax}&stateCode=${state}`)
  .then(res => {
    if (!res.ok) {
        return res.json().then(json => {
            throw new Error(json.error.message);
        });
    }
    return res.json();
  })
  .then(json => {
    processData(json);
  })
  .catch(error => {
    alert(error)
  });
}
function processData(json) {
    console.log(json);
    let dataArray = [];
    json.data.forEach(element => 
        dataArray.push(`
        <li>
        <ul>
        <li><a href="${element.url}" target="_blank">${element.name}</a></li>
        <li>${element.description}</li>
        </ul>
        </li>
        `));
        
        postData(dataArray);
    }
function postData(dataArray){
    dataArray.forEach(element => 
        $( "#results>ul" ).append(element)    
        );
        $( "#results" ).removeClass( "hidden" )
}
function bootLogic() {
    catchResponse();
};
$(document).ready(function() {
    $('#state').select2();
});
$(bootLogic());