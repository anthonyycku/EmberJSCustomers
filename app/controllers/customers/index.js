import Controller from '@ember/controller';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class CustomersIndexController extends Controller {
  @tracked sortProperty = 'lastNameAsc';

  @sort('model', 'customersSortProps')
  sortedCustomers;


  get customersSortProps() {
    switch (this.sortProperty) {
      case "budgetAsc":
        return ["budget"];
      case "budgetDesc":
        return ["budget:desc"];
      case "lastNameAsc":
        return ["lastName"];
      case "lastNameDesc":
        return ["lastName:desc"];
    }
  }

  @action
  updateSortProperty(event) {
    this.sortProperty = event.target.value
  }
}
