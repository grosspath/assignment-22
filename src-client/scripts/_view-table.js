import Backbone from 'backbone'
import {ItemModel, ItemCollection} from './_model-item.js'
import {NavView} from './view-nav.js'

export const TableView = Backbone.View.extend({
  el: '#app-container',

  events: {
    'click .remove-item': 'removeItem'
  },

  removeItem: function(evt){
    console.log(evt.target.dataset.id)
    let itemModelInstance = new ItemModel()
    itemModelInstance.set({_id: evt.target.dataset.id})

    let viewInstance = this
    let itemCollectionInstance = new ItemCollection()

    itemModelInstance.destroy().then(function(){
      return itemCollectionInstance.fetch()
      }).then(function(){
        viewInstance.render(itemCollectionInstance.models)
      })
    })
    },

    _buildItemHtmlRows: function(theItemModels){
      let htmlStr = theItemModels.map(function(singleItemModel){
        return `
          <tr>
            <td>${singleItemModel.get('item')}</td>
            <td>${singleItemModel.get('price')}</td>
            <td><i class='fa fa-remove fa-2x remove-item' data-id='${singleItemModel.get('_id')}'></i></td>
          </tr>
          `
      }).join('')

      return htmlStr
    },

    _buildHtmlTemplate: function(theItemModels){
      let navViewInstance = new NavView()

      return `
        ${navViewInstance._buildHtmlTemplate()}
        <h2 class='itemList'>Item List</h2>
        <table class='table' id='form-newitem'>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>For Sale</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
        </table>
        `
    },

    render: function(itemModels){
      this.el.innerHTML = this._buildHtmlTemplate(itemModels)
    }
  }
})
