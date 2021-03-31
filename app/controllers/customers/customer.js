import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CustomersCustomerController extends Controller {
    @tracked validEmail = true;

    @action
    async saveCustomer(event) {
        event.preventDefault();

        if (this.validEmail) {
            await this.model.save();
            this.transitionToRoute('customers.index');
        } else {
            alert("Please enter a valid email in the format 123@abc.xyz")
        }
    }

    @action
    update(event) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        event.target.value.match(regex) ? this.validEmail = true : this.validEmail = false;
        console.log(event.target.value)
    }
}
