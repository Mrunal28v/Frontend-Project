// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
// 	button.addEventListner('click', (e) =>{
// 		if(e.target.innerHTML == '=')
// 		{
// 			string = eval(string);
// 			input.value = string;
// 		}
// 		console.log(e.target)
// 		string += e.target.innerHTML;
// 		// input.value = string;
// 		document.querySelector('inputbox').value = string;
// 	})

// })

function clearDisplay() {
    document.getElementById('display').value = '';
}

function delet() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function result() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid calculation');
        display.value = '';
    }
}
