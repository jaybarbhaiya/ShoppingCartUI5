sap.ui.controller("shoppingcart.Category", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.Category
*/
//	onInit: function() {
//
//	},

	categoryListItemPress: function(evt) {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		var context = evt.getSource().getBindingContext('products');
		//console.log(context);
		var path = context.sPath; // /collection/0
		var start = path.lastIndexOf('/') + 1;
		var catIndex = path.substring(start,path.length); // returns just the index value
		//console.log(catIndex);
		router.navTo('category',{catIndex: catIndex}); // catIndex stores the index in the route
	}

});