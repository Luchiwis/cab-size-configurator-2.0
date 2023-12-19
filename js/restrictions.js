function doorRestrictions(){
    //get url params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const restrictions = document.getElementById('restrictions');
    const doorAdvise = document.getElementById('door-advise');

    //if type is C or D, disable slide2, slide3 and landing
    if (['C','D'].includes(type)){
        document.getElementById('slide2').disabled = true;
        document.getElementById('slide3').disabled = true;
        document.getElementById('landing').disabled = true;

        doorAdvise.innerHTML = '2 and 3 speed sliding doors are not available for types C and D, consult an engineer for this properties.'
        restrictions.classList.remove('d-none');
    }
}









if (window.location.pathname == '/door.html') {
    doorRestrictions();
}
else if (window.location.pathname == '/innercab.html') {
    alert('innercab')
}
else if (window.location.pathname == '/model.html') {
    alert('model')
}