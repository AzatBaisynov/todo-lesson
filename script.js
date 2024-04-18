const titleInp = document.querySelector('#title')
const descArea = document.querySelector('#desc')
const addBtn = document.querySelector('#add')
const listDiv = document.querySelector('.list')

let taskList = JSON.parse(localStorage.getItem('todoList')) || []

const createAndAddTodo = (title, desc) => {
	if (title && desc) {
		const div = document.createElement('div')
		const h4 = document.createElement('h4')
		const p = document.createElement('p')
		const btn = document.createElement('button')

		div.className = 'todo'
		div.style.marginTop = "20px"

		h4.className = "todo__title"
		h4.innerText = title

		p.className = "todo__desc"
		p.innerText = desc

		btn.innerText = "x"
		btn.addEventListener('click', () => {
			listDiv.removeChild(div)
		})

		div.append(h4, p, btn)
		listDiv.append(div)

		titleInp.value = ''
		descArea.value = ''

	}
}

taskList.forEach(el => {
	createAndAddTodo(el.title, el.desc)
})
const addToArray = () => {
	const taskObj = {
		title: titleInp.value,
		desc: descArea.value
	}
	taskList = [...taskList, taskObj]

	localStorage.setItem('todoList', JSON.stringify(taskList))

	listDiv.innerHTML = ''
	taskList.forEach(el => {
		createAndAddTodo(el.title, el.desc)
	})
}

addBtn.addEventListener('click', (e) => {
	e.preventDefault()
	addToArray()
})