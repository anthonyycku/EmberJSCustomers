import Controller from '@ember/controller';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class CustomersIndexController extends Controller {
  @tracked sortProperty = 'lastName';

  @sort('model', 'customersSortProps')
  sortedCustomers;


  get customersSortProps() {
    switch (this.sortProperty) {
      case "budget":
        return [this.sortProperty + ":desc"];
      case "lastName":
        return [this.sortProperty]
    }
  }

  @action
  updateSortProperty(event) {
    this.sortProperty = event.target.value
  }
}
