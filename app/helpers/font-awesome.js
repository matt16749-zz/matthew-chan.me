import Ember from 'ember';

let escape = Ember.Handlebars.Utils.escapeExpression;

export function fontAwesome([params]) {
  return `<i class='footer-fa fa ${escape(params)} fa-lg'></i>`.htmlSafe();
}

export default Ember.HTMLBars.makeBoundHelper(fontAwesome);
