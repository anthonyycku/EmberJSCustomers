import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CustomersCustomerController extends Controller {
    @tracked validEmail = false;

    @action
    async saveCustomer(event) {
        event.preventDefault();

        if (this.validate(this.model.emailAddress)) {
            await this.model.save();
            this.transitionToRoute('customers.index');
        } else {
            console.log("need valid email")
        }
    }

    validate = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        email.match(regex) ? this.validEmail = true : this.validEmail = false;
        return email.match(regex);
    }
}
