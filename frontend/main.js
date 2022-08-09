window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response  => {
        return responce.json()
    }).then(responce =>{
        console.log("Website called function API.");
        count = responce.count;
        document.getElementById("counter").innerTest = count;
    }).catch(function(error){
        console.log(error)
    });
    return count;
}