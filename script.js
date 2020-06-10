const APIkey = '';
const fetchOptions = { 'X-Api-Key': 'sVI3vB7wsPwAYW0WWSbEeut3oOfV8E2PX6Fr7EMt'};
//catches response and passes to fetch
function catchResponse() {
    $("#locationInput").submit(function( event ) {
        event.preventDefault();
        let locationInput = $("input[type=text][name=location]").val()
            resultmax = $("input[type=number][name=maxlimit]").val()
            state = $("#state").val();
            fetchData (locationInput, resultmax, state);
        });
    console.log ('catch response ran');
}
function fetchData (locationInput, resultmax, state) {
    
    fetch('https://developer.nps.gov/api/v1/parks?limit=10&stateCode=', {   
        headers: {
          'X-Api-Key': 'sVI3vB7wsPwAYW0WWSbEeut3oOfV8E2PX6Fr7EMt'
        }})
  .then(res => {
    if (!res.ok) {
        return res.json().then(json => {
            throw new Error(json.error.message);
        });
    }
    return res.json();
  })
  .then(json => {
    console.log(json);
  })
  .catch(error => {
    alert(error)
  });
}
function processData() {
    let arraytest = ['park 1','park 2','park 3']

}
function postData(){
    
}
function bootLogic() {
    catchResponse();
};
$(document).ready(function() {
    $('#state').select2();
});
$(bootLogic());