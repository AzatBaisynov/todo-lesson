const titleInp = document.querySelector('#title')
const descArea = document.querySelector('#desc')
const addBtn = document.querySelector('#add')
const listDiv = document.querySelector('.list')

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

addBtn.addEventListener('click', (e) => {
	e.preventDefault()
	createAndAddTodo(titleInp.value, descArea.value)
})