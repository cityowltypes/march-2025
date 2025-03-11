import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ContactController extends Controller {
	@action
	doSomething() {
		document.querySelector('#something').classList.remove('d-none')
	}
}
