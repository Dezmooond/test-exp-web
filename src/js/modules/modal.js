export default class Modal{
	constructor(callModalBtn, modalWindow, modalBtn) {
		this.callModalBtn = document.querySelectorAll(callModalBtn)
		this.modalWindow = document.querySelector(modalWindow)
		this.modalBtn = document.querySelector(modalBtn)
	}

	revealModal() {
		this.callModalBtn.forEach(btn => {
			btn.addEventListener('click', (e) => {
				this.modalWindow.showModal()
			})
		})
	}

	hideModal() {
		this.modalBtn.addEventListener('click', () => {
			this.modalWindow.close()
		})
		this.modalWindow.addEventListener('click', (e) => {
			if (e.target === modal) this.modalWindow.close()
		})
	}
}