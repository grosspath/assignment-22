import Backbone from 'backbone'

export const NavView = Backbone.View.extend({
  el: '#app-container',
  events: {
    'click .nav-option' : 'handleNavClick'
  },

  handleNavClick: function(evt){
    console.log(evt.target.dataset)
    if (evt.target.dataset.route === 'home'){
      return window.location.hash = ''
    }
    window.location.hash = evt.target.dataset.route
  },

  _buildHtmlTemplate: function(){
    return `
    <nav class='my-navbar'>
      <h4 class='nav-option' data-route='home'>Home</h4>
      <h4 class='nav-option' data-route='new'>Create</h4>
      <h4 class='nav-option' data-route='item'>Item</h4>
    </nav>
    `
  },

  render: function(){
    this.el.innerHTML = _buildHtmlTemplate()
  }
})
