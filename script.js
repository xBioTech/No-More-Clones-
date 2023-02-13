const inputTextArea = document.querySelector(".inputtextarea");
const runCodeBtn = document.querySelector(".removeclones");
const outputTextArea = document.querySelector(".outputtextarea");
const copyBtn = document.querySelector(".copy");
const printBtn = document.querySelector(".print");

function removeClones(input){
    return [...new Set (input.split("\n"))]
}


runCodeBtn.addEventListener("click", () => {
    const input = inputTextArea.value;
    const result = removeClones(input);
    outputTextArea.textContent = result.join(" ");
})

function copyToClipboard(){
    outputTextArea.select();
    navigator.clipboard.writeText(outputTextArea.value);
    alert("Copied to Clipboard");
}

copyBtn.addEventListener("click", copyToClipboard);

function printOutput(){
    window.print();
}

printBtn.addEventListener("click", printOutput);
