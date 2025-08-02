document.getElementById("shipBtn").addEventListener("click", function() {
    let firstObj = document.getElementById("firstObj").value;
    let secondObj = document.getElementById("secondObj").value;
    let result;

    if(firstObj.length === 0 || secondObj.length === 0) {
        result = "Invalid";
    } else {
        let firstObjLength = firstObj.length;
        let secondObjLength = secondObj.length;

        if(firstObjLength >= 9) {
            firstObj = firstObj.substring(0, firstObjLength - 5);
        } else if(firstObjLength === 8) {
            firstObj = firstObj.substring(0, firstObjLength - 4);
        } else if(firstObjLength === 5 || firstObjLength === 6 || firstObjLength === 7) {
            firstObj = firstObj.substring(0, firstObjLength - 2);
        } else if(firstObjLength === 4 || firstObjLength === 3) {
            firstObj = firstObj.substring(0, firstObjLength - 1);
        } else {
            firstObj = firstObj.substring(0, firstObjLength);
        }

        if(secondObjLength >= 9) {
            secondObj = secondObj.substring(5);
        } else if(secondObjLength === 8) {
            secondObj = secondObj.substring(4);
        } else if(secondObjLength === 5 || secondObjLength === 6 || secondObjLength === 7) {
            secondObj = secondObj.substring(2);
        } else if(secondObjLength === 4 || secondObjLength === 3) {
            secondObj = secondObj.substring(1);
        } else {
            secondObj = secondObj.substring(0);
        }

        result = firstObj + secondObj;
    }

    document.getElementById("result").innerText = "Result: " + result;
})

window.addEventListener('load', () => {
    showPage('home-page');
});