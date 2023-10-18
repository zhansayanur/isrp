function getUserNumber(promptText) {
	let input;
	do {
	  input = prompt(promptText);
	} while (input === null || !isFinite(input));
	return parseFloat(input);
 }
 
 function getUserOperation() {
	let input;
	do {
	  input = prompt("Выберите операцию: сложение (+), вычитание (-), умножение (*) или деление (/)");
	} while (input === null || !/[-+*/]/.test(input));
	return input;
 }
 
 function main() {
	const num1 = getUserNumber("Введите первое число:");
	const num2 = getUserNumber("Введите второе число:");
	const operation = getUserOperation();
 
	let result;
 
	switch (operation) {
	  case "+":
		 result = num1 + num2;
		 break;
	  case "-":
		 result = num1 - num2;
		 break;
	  case "*":
		 result = num1 * num2;
		 break;
	  case "/":
		 if (num2 === 0) {
			alert("Ошибка: деление на ноль!");
			return;
		 }
		 result = num1 / num2;
		 break;
	  default:
		 alert("Ошибка: некорректная операция!");
		 return;
	}
 
	alert(`Результат: ${result}`);
 }
 
 main();
 