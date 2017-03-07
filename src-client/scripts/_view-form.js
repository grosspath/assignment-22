import Backbone from 'backbone'
import $ from 'jquery'

export const FormView = Backbone.View.extend({
  el: '#app-container',

  events : {
    'submit #form-newitem' : 'handleFormSubmit'
  },

  handleFormSubmit: function(evt){
    evt.preventDefault()
    console.log('form submitted');
    let formEl = evt.target

    let dataToBeSaved = {
      item: formEl.item.value,
      price: formEl.price.value,
      forSale: formEl.forSale.checked,
      description: formEl.description.value,
      imgLink: formEl.imgLink.value
    }

    let newImageModel = new ImageModel()
    newImgModl.set(dataToBeSaved)

    let viewInstance = this
    newImgModl.save().then(function(){
      window.location.hash = ''
    })
  },

  _buildHtmlTemplate: function(){
    let navViewInstance = new NavView()
    return`
      ${navViewInstance._buildHtmlTemplate()}
      <h2 class='item-info'>New Item</h2>
      <form class='' id='form-newitem'>
        <div class='field_item'>
          <label>Item Name</label>
          <input type='text' name='item-new' placeholder='New Item'/>
          <p class='flash-msg'></p>
        </div>
        <hr/>
        <div class='field_price'>
          <label>Price</label>
          <input type='text' name='cost' placeholder='Price'/>
          <p class='flash-msg'></p>
        </div>
        <hr/>
        <div class='field_forSale'>
          <label>Is Item for Sale</label>
          <input type='checkbox' name='isForSale' placeholder='For Sale'/>
          <p class='flash-msg'></p>
        </div>
        <hr/>
        <div class='field_description'>
          <label>Item Description</label>
          <input type='text' name='description' placeholder='Description'/>
          <p class='flash-msg'></p>
        </div>
        <hr/>
        <div class='field_imgLink'>
          <label>Item Image</label>
          <input type='text' name='image' placeholder='Image Link'/>
          <p class='flash-msg'></p>
        </div>
        <hr/>

        <div>
          <button class='btn btn-success' type='submit'>Submit</button>
          <button class='btn btn-default'>Reset</button>
        </div>
      </form>
    `
  },

  render: function(){
    this.el.innerHTML = this._buildHtmlTemplate()
  }
})
