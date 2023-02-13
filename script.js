const inputTextArea = document.querySelector(".inputtextarea");
const runCodeBtn = document.querySelector(".removeclones");
const outputTextArea = document.querySelector(".outputtextarea");


function removeClones(input){
    return [...new Set (input.split(" "))]
}






runCodeBtn.addEventListener("click", () => {
    const input = inputTextArea.value;
    const result = removeClones(input);
    outputTextArea.textContent = result.join(" ");
})
