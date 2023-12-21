class ErrorBox{
    constructor(){
        this.errorBox = document.querySelector('#restrictions');
    }

    showError(message){
        this.errorBox.querySelector("#advise").innerHTML += '<li>'+message+'</li>';
        this.errorBox.classList.remove('d-none');
    }
}

errorBox = new ErrorBox();