// mengambil element html
const numbers = document.querySelectorAll(".number");
console.log(numbers);

// dapatkan masing2 angka dari constant "numbers"
numbers.forEach((number)=>{
	console.log(number);
});

// menampilkan angka saat menekan tombol
numbers.forEach((number)=>{
	number.addEventListener("click", (event)=>{
		console.log(event.target.value);
	});
});

// definisikan function untuk memperbarui layar tampilan
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number)=>{
	calculatorScreen.value = number;
};

// definisikan variabel utk melakukan kalkulasi
let prevNumber='';
let calculationOperator='';
let currentNumber='0';

// memberikan number yg diklik ke variabel currentNumber
const inputNumber = (number)=>{
	if(currentNumber === '0'){
		currentNumber = number;
	} else{
		currentNumber += number;
	};
};

numbers.forEach((number)=>{
	number.addEventListener("click", (event)=>{
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

// menambah klik event ke operator tombol-tombol
const operators = document.querySelectorAll(".operator");

// definisikan function inputOperator
const inputOperator = (operator)=>{
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	};
	calculationOperator = operator;
	currentNumber = '0';
};

// jalankan function inputOperator saat Operator di klik
operators.forEach((operator)=>{
	operator.addEventListener("click", (event)=>{
		inputOperator(event.target.value);
	});
});

// mengaktifkan fungsi kalkulasi ke aplikasi kalkulatornya
// tambahkan click event ke tombol sama-dengan (=)
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{
	calculate();
	updateScreen(currentNumber);
});

// definisikan function calculation
// dan simpan hasil kalkulasi ke currentNumber
const calculate = ()=>{
	let result = '';
	switch(calculationOperator){
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			return;			
	};
	currentNumber = result;
	calculationOperator = '';
};

// definisikan dan jalankan function clearAll
const clearAll = ()=>{
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
};

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', ()=>{
	clearAll()
	updateScreen(currentNumber);
});

// membuat aplikasi dapat mengkalkulasi angka desimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event)=>{
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

// mencegah penginputan titik desimal berulang kali
inputDecimal = (dot)=>{
	if(currentNumber.includes('.')){
		return;
	};
	currentNumber += dot;
};

// mengkalkulasi angka menggunakan fungsi percentage
const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event)=>{
	inputPercentage(event.target.value);
	updateScreen(currentNumber);
});

inputPercentage = (percent)=>{
	if(currentNumber.includes('%')){
		return;
	};
	currentNumber /= percent;
};
