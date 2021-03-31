import Controller from '@ember/controller';
import { action } from '@ember/object';
import { sort } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class CustomersIndexController extends Controller {
  @tracked sortProperty = 'lastName';
  @tracked sortID = "lastNameAsc";

  @sort('model', 'customersSortProps')
  sortedCustomers;

  get customersSortProps() {
    switch (this.sortProperty) {
      case "budget":
        return this.sortID === "budgetAsc" ? ["budget"] : ["budget:desc"];
      case "lastName":
        return this.sortID === "lastNameAsc" ? ["lastName"] : ["lastName:desc"];
    }
  }

  @action
  updateSortProperty(event) {
    this.sortProperty = event.target.value
    this.sortID = event.target[event.target.selectedIndex].id
  }
}
