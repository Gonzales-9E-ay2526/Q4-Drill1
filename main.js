function processKilo() {
    let KWH = Number(document.getElementById("kilowat").value);
    let Result = document.getElementById("Ans");

    if (KWH >= 0 && KWH <= 100) {
        window.alert("Lifeline Consumer: Discounted electricity rates");
        
    } 
    
    else if (KWH >= 101 && KWH <= 200) {
        window.alert("Low Consumption: Normal residential rate");
    } 
    
    else if (KWH >= 201 && KWH <= 300) {
        window.alert("Average Consumption: Typical electricity usage");
    } 
    
    else if (KWH >= 301 && KWH <= 500) {
        window.alert("High Consumption: Higher electricity usage");
    } 
    
    else if (KWH > 500) {
        window.alert("Very High Consumption: Heavy electricity users");
    } 
    
    else {
        Result.textContent = "Please input a non-negative number";
    }
}