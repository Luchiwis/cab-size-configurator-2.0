system = 'mm';

function inchesToMillimeters(inches) {
    return inches * 25.4;
}

function millimetersToInches(millimeters) {
    return millimeters / 25.4;
}

//switch all .converter-mm elements to .converter-in and vice versa
function switchUnits(type) {
    const converters = document.querySelectorAll(".converter");
    
    converters.forEach(converter => {
        if (converter.classList.contains("converter-mm") && type == "in") {
            converter.classList.remove("converter-mm");
            converter.classList.add("converter-in");
            actualValue = parseFloat(converter.innerHTML);
            converter.innerHTML =  millimetersToInches(actualValue).toFixed(2) + '"';
            system = 'in';
        }

        else if (converter.classList.contains("converter-in") && type == "mm") {
            converter.classList.remove("converter-in");
            converter.classList.add("converter-mm");
            actualValue = parseFloat(converter.innerHTML);
            converter.innerHTML = inchesToMillimeters(actualValue).toFixed(2) + " mm";
            system = 'mm';
        }
    }
    );
    updateRangeInfo();
}