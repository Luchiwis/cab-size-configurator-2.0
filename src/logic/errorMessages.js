class ErrorBox{
    constructor(){
        this.errorBox = document.querySelector('#restrictions');
    }

    showError(message){
        // if message already exists, don't add it again
        if (this.errorBox.querySelector("#advise").innerHTML.includes(message)) { return }
        this.errorBox.querySelector("#advise").innerHTML += '<li>'+message+'</li>';
        this.errorBox.classList.remove('d-none');
    }
}

errorBox = new ErrorBox();