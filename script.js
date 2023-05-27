var enteredText;

function getTextToEncrypt() {
    var getTextarea = document.getElementById('inputText');
    enteredText = getTextarea.value;
    enteredText = enteredText.toLowerCase();
}

function copyTextEncrypted() {
    var getText = document.getElementById('encryptedText').textContent;
    var tempInput = document.createElement('textarea');

    tempInput.value = getText;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    showMessageCopyAlert();
}


function encrypText() {
    getTextToEncrypt();
    if (enteredText === null || enteredText.trim() === "") {
        return;
    }

    enteredText = enteredText.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

    replaceImageToText(enteredText);
}

function decryptText() {
    getTextToEncrypt();
    if (enteredText === null || enteredText.trim() === "") {
        return;
    }

    enteredText = enteredText.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

    replaceImageToText(enteredText);
}

function replaceImageToText(text) {
    var image = document.getElementById('imageNoMessage');
    var getTextarea = document.getElementById('inputText');
    var textElement = document.getElementById('encryptedText');
    var button = document.getElementById('copyButton');

    if (image != null) {
        image.style.display = 'none';
    }

    textElement.textContent = text;
    textElement.style.display = 'block';

    button.style.display = 'block';

    getTextarea.value = "";
}

function showMessageCopyAlert() {
    var containerMessage = document.getElementById('copyMessageAlert');
    var message = document.getElementById('messageTextAlert');

    message.textContent = '¡TEXTO COPIADO!';

    containerMessage.style.display = 'block';
}

function closeMeesageCopyAlert() {
    var containerMessage = document.getElementById('copyMessageAlert');

    containerMessage.style.display = 'none';
}