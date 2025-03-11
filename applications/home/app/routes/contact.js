import Route from '@ember/routing/route';
import { service } from '@ember/service';
import RSVP from 'rsvp';

export default class ContactRoute extends Route {
  @service store;

  async model() {
    return RSVP.hash({
      contact: await this.store.findRecord('page', 39),
      about: await this.store.findRecord('page', 35),
    });
  }
}
