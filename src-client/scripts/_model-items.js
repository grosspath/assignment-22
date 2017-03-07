import Backbone from 'backbone'
import $ from 'jquery'

export const ItemModel = Backbone.Model.extend({
  urlRoot: '/api/items',
  idAttribute: '_id'
})

export const ItemCollection = Backbone.Collection.extend({
  model: ItemModel,
  url: '/api/items'
})
