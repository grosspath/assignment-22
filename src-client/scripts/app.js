import Backbone from 'backbone'
import {NavView} from './view-nav.js'
import {ItemModel, ItemCollection} from './_model-items.js'

const AppRouter = Backbone.Router.extend({
  initialize: function(){
  console.log('whaaat')
  Backbone.history.start()
},
  routes: {
  'item/:id' : 'singleItem',
  'new' : 'createNewListing',
  '' : 'showAllListings'
  },

  singleItem: function(){
    let singleItemView = new ItemView()
    singleItemView.render()
  },

  createNewListing: function(){
    let formViewInstance = new FormView()
    formViewInstance.render()

  },

  showAllListings: function(){
    let itemCollectionInstance = new itemCollection()
    itemCollectionInstance.fetch().then(function(){
      console.log(itemCollectionInstance)
      let itemViewInstance = new TableView()
      itemViewInstance.render(itemCollectionInstance.models)
    })
  }
})

let app = new AppRouter()
