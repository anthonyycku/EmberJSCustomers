import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SearchComponent extends Component {
    @tracked current = "";

    get model() {
        return this.args.model ? this.args.model : A();
    }
    @action
    update(event) {
        this.current = event.target.value;
    }

    @action
    search(event) {
        event.preventDefault();
        console.log(this.args.model)
    }
}
