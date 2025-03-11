import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AboutRoute extends Route {
  @service store;

  async model() {
    return await this.store.findRecord('page', 35);
  }
}
