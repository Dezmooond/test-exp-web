import '../style.scss'
import Modal from './modules/modal'
import Slider from './modules/slider'

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	const modal = new Modal('.call-modal', '.modal', '.modal-btn')
	modal.revealModal()
	modal.hideModal()
	
	const slider = new Slider('.menu-card-wrapper');
})