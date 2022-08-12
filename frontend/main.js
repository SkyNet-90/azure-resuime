window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiURL = "https://getresumecountersm.azurewebsites.net/api/GetResumeCounter?code=idQ7hdzJ3emTSBeSp_IdglI7Zh0sw8srqFSSEf6azEnxAzFu_1DAzA=="
const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}