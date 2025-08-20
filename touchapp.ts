const app = document.getElementById('app') as HTMLElement;

const header = document.createElement('header')
header.textContent = "My TypeScript App";
header.style.backgroundColor = "#4a90e2";
header.style.color = "white";
header.style.padding = "1rem";
header.style.textAlign = "center";

const welcome = document.createElement("h2");
welcome.textContent = "Welcome!";
welcome.style.fontFamily = "Segoe UI";
welcome.style.color = "#333";

const main = document.createElement("main");
main.style.padding = "1rem";
main.style.maxWidth = "600px";
main.style.margin = "0 auto";
main.style.padding = "1rem";
main.style.boxSizing = "border-box";

const button = document.createElement('button')
button.textContent = "Click Me";
button.style.padding = "0.5rem 1rem";
button.style.marginTop = "1rem";
button.style.border = "none";
button.style.backgroundColor = "#4a90e2";
button.style.color = "white";
button.style.cursor = "pointer";

button.onclick = () => {
  alert("Button clicked!");
};

main.appendChild(welcome);
main.appendChild(button);
app?.appendChild(header);
app?.appendChild(main);

const form = document.createElement('form');
form.style.marginTop = '1rem';

const input = document.createElement('input') as HTMLInputElement;
input.type = 'text';
input.placeholder = "Enter something...";
input.style.padding = '0.5rem';
input.style.width = '70%';
input.style.marginRight = '1rem';

const submit = document.createElement("button");
submit.type = "submit";
submit.textContent = "Submit";
submit.style.padding = "0.5rem 1rem";
submit.style.backgroundColor = "#4a90e2";
submit.style.color = "white";
submit.style.border = "none";
submit.style.cursor = "pointer";

//submitted data
const output = document.createElement("div");
output.style.marginTop = "1rem";
output.style.fontFamily = "Segoe UI, sans-serif";
output.style.color = "#555";

//form submission
const entries: string[] = JSON.parse(localStorage.getItem("entries") || "[]");
form.onsubmit = (e) => {
  e.preventDefault();
  const value = input.value.trim();

  if (!value) {
    alert('Please enter something')
    return;
  }
    if (entries.includes(value)) {
    alert("You've already entered that!");
    return;
  }

    const result = document.createElement("p");
    result.textContent = `You entered: ${value}`;
    output.appendChild(result);
    
    entries.push(value);
    localStorage.setItem('entries' , JSON.stringify(entries));

    input.value = ""; // Clear input
  }
  
//form assembly
form.appendChild(input);
form.appendChild(submit);
main.appendChild(form);
main.appendChild(output);


entries.forEach(entry => {
  const result = document.createElement("p");
  result.textContent = `You entered: ${entry}`;
  output.appendChild(result);
});

//clear output
const clearBTN = document.createElement('button');
clearBTN.textContent = 'Clear Entries';
clearBTN.style.marginTop = '1rem';
clearBTN.onclick = () => {
    output.innerHTML = '';
    localStorage.removeItem('entries');
};
main.appendChild(clearBTN);

//offline status
window.addEventListener('offline' , () => {
  alert('Offline: Changes may not be saved');
});
