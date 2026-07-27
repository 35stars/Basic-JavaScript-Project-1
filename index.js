


const menuEl = document.getElementById('menu')
const counter = document.getElementById('counter')
const section = document.querySelector('section')
const inputName = document.getElementById('name')
const greetTextEl = document.getElementById('text')

greetTextEl.className = 'p'

menuEl.classList.add('show')

let count = 0

section.addEventListener('click',(e)=>{

	let target = e.target

	let name = inputName.value.trim()

	if(target.textContent == 'Toggle Menu'){

		if(menuEl.classList.contains('show')){

			menuEl.classList.remove('show')
		}
		else menuEl.classList.add('show')
	}
	else if(target.textContent == 'Show Alert'){

		alert('this is an alert message!')
	}
	else if(target.textContent == 'Increment'){

		counter.innerText = `${++count}`
	}
	else if(target.textContent == 'Reset'){
		count = 0
		counter.innerText = count

		inputName.value = ''

		document.querySelectorAll('.p').forEach(element =>{
			element.remove()
		})

	}
	else if(target.textContent == 'Decrement'){
		count--
		counter.innerText = count
	}
	else if(target.textContent == 'Add Paragraph'){


		let parEl = document.createElement('p')

		if(isValid(name)){

			parEl.className = 'p'
			parEl.textContent = `Congratulations on learning practical JavaScript!`

			section.appendChild(parEl)
			return
		}

		parEl.className = 'p'
		parEl.textContent = `Please enter your name correctly.`
		section.appendChild(parEl)
	}
	else if(target.textContent == 'Greet Me'){
		
		greetTextEl.textContent = isValid(name) ? `Hi ${name}!` : 'Invalid name!'

		document.getElementById('par-el').insertAdjacentElement("beforebegin",parEl)

	}

})


function isValid(name){

	return /^[a-zA-Z\s]+$/.test(name)
}
