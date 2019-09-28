import LinkComponent from '@ember/routing/link-component';
import { computed } from '@ember/object';
import layout from '../templates/components/nav-link-to';

export default LinkComponent.extend({
  tagName: 'li',
  layout: layout,
  attributeBindings: ['data-toggle', 'data-target'],
  router: service(),
  
  hrefForA: computed('models', 'qualifiedRouteName', function computeLinkToComponentHref() {
    let qualifiedRouteName = this.get('qualifiedRouteName');
    let models = this.get('models');

    if (this.get('loading')) {
      return this.get('loadingHref');
    }

    let routing = this.get('_routing');
    let queryParams = this.get('queryParams.values');
    return this.router.urlFor(qualifiedRouteName, models, queryParams);
  })
});
