import { module, test } from 'qunit';
import { setupTest } from 'home/tests/helpers';

module('Unit | Controller | contact', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:contact');
    assert.ok(controller);
  });
});
