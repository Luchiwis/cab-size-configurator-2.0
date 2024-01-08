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
    // removeError(message){
    //     // if message doesn't exist, don't remove it
    //     if (!this.errorBox.querySelector("#advise").innerHTML.includes(message)) { return }
    //     this.errorBox.querySelector("#advise").innerHTML = this.errorBox.querySelector("#advise").innerHTML.replace('<li>'+message+'</li>', '');
    //     if (this.errorBox.querySelector("#advise").innerHTML == '') { this.errorBox.classList.add('d-none'); }
    // }
}

errorBox = new ErrorBox();