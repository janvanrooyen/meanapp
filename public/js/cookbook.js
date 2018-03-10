var appName = 'cookbook';
var appCookbook = angular.module(appName, []); 

appCookbook.controller('CookBookListCtrl', ['$scope', 'listGallery', function ($scope, listGallery) {
	$scope.openPhotoSwipe = function(x) {
    	var list = 'CookBookList';
    	var page = x;
	    var pswpElement = document.querySelectorAll('.pswp')[0];
	    var items = listGallery.getImage(list);
	    var options = {
	        history: false,
	        focus: false,
	        showAnimationDuration: 0,
	        hideAnimationDuration: 0,
	        index: page
	    };
    	var list = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    	list.init();
	};

	$scope.list= [
		{
			category: 'Entree'
		},
		{
			category: 'Salad'
		},
		{
			category: 'Pasta'
		},
		{
			category: 'Soup'
		},
		{
			category: 'Sides'
		},
		
		{
			category: 'Quiche Pie'
		},
		{
			category: 'Sauce'
		},
		
		{
			category: 'Dessert'
		}
	];

	$scope.item = [
		{
	    	name: 'Bobotee',
	    	page: 31,
	    	description: 'Mrs Slade Bobotee' ,
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Good Indian Curry',
	    	page: 33,
	    	description: 'Good Indian Curry',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Pork Chops with Gingerbread Plum Sauce',
	    	page: 33,
	    	description: 'Pork Chops with Gingerbread Plum Sauce',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Mutton Curry and Potatoes',
	    	page: 33,
	    	description: 'Mutton Curry and Potatoes',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Beef Stroganoff',
	    	page: 33,
	    	description: 'Beef Stroganoff',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Scalloped Potatoes',
	    	page: 2,
	    	description: 'Scalloped Potatoes',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Volume Conversions',
	    	page: 3,
	    	description: 'Volume Conversions Table'
	  	},
	  	{
	    	name: 'Green Pepper Jelly',
	    	page: 4,
	    	description: 'Green Pepper Jelly',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Pesto Sauce',
	    	page: 4,
	    	description: 'Pesto Sauce', 
	    	category: 'Pasta'
	  	},
	  	{
	    	name: 'Mustard Seed and Cheese Straws',
	    	page: 4,
	    	description: 'Mustard Seed and Cheese Straws', 
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Onion Pastry Wheels with Anchovy',
	    	page: 4,
	    	description: 'Onion Pastry Wheels with Anchovy',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Slamon and Tuna Pate',
	    	page: 5,
	    	description: 'Salmon and Tuna Pate', 
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Carrot Cardamon and Orange Soup',
	    	page: 6,
	    	description: 'Carrot Caradmon and Orange Soup',
	    	cateogry: 'Soup'
	  	},
	  	{
	    	name: 'Helenes Vegetable Soup',
	    	page: 6,
	    	description: 'Helenes Vegetable Soup',
	    	category: 'Soup'
	  	},
	  	{
	    	name: 'Tomato Mushroom Soup',
	    	page: 7,
	    	description: 'Tomato Mushroom Soup',
	    	category: 'Soup'
	  	},
	  	{
	    	name: "Jacques' Red Sauce",
	    	page: 7,
	    	description: "Jacques' Red Sauce",
	    	category: 'Soup'
	  	},
	  	{
	    	name: 'Cream of Cucumber Soup',
	    	page: 7,
	    	description: 'Cream of Cucumber Soup',
	    	category: 'Soup'
	  	},
	  	{
	    	name: 'Butternut and Orange Soup',
	    	page: 7,
	    	description: 'Butternut and Orange Soup',
	  		category: 'Soup'
	  	},	
	  	{
	    	name: 'Italian Seafood Stew / Soup',
	    	page: 8,
	    	description: 'Italian Seafood Stew / Soup',
	  		category: 'Soup'
	  	},
	  	{
	    	name: 'Goals Cheese Tarts',
	    	page: 8,
	    	description: 'Goals Cheese Tarts',
	  		category: 'Sides'
	  	},	  	  		  	
	  	{
	    	name: 'Butternut Citrus Soup',
	    	page: 8,
	    	description: 'Butternut Citrus Soup',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Quiche Crust',
	    	page: 9,
	    	description: 'Quiche Crust',
	    	category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Shortcrust Pastry',
	    	page: 9,
	    	description: 'Shortcrust Pastry',
	    	category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Pie Crusts',
	    	page: 10,
	    	description: 'Pie Crusts', 
	    	category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Graham Cracker Crust',
	    	page: 10,
	    	description: 'Graham Cracker Crust',
	    	category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Basic Custard',
	    	page: 11,
	    	description: 'Basic Custard',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Ham Quiche',
	    	page: 11,
	    	description: 'Ham Quiche',
	    	category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Smoked Salmon Quiche',
	    	page: 11,
	    	description: 'Smoked Salmon Quiche',
	    	category: 'Quiche Pie'
	  	},
	   	{
	    	name: 'Mushroom and Bacon Quiche',
	    	page: 11,
	    	description: 'Mushroom and Bacon Quiche',
	  		category: 'Quiche Pie'
	  	},
	   	{
	    	name: 'Quiche Lorraine',
	    	page: 11,
	    	description: 'Quiche Lorraine',
	    	category: 'Quiche Pie'
	  	},
	   	{
	    	name: 'Tomato and Anchovy Quiche',
	    	page: 11,
	    	description: 'Tomato and Anchovy Quiche',
	  		category: 'Quiche Pie'
	  	},	
	   	{
	    	name: 'Onion and Swiss Cheese Quiche',
	    	page: 12,
	    	description: 'Onion and Swiss Cheese Quiche',
    		category: 'Quiche Pie'
	  	},
	   	{
	    	name: 'Asparagus Tart',
	    	page: 12,
	    	description: 'Asparagus Tart',
	    	category: 'Quiche Pie'
	  	},	
	   	{
	    	name: 'Broccoli and Swiss Chesse Quiche',
	    	page: 13,
	    	description: 'Broccoli and Swiss Cheese Quiche',
	    	category: 'Quiche Pie'
	  	},								  			
	   	{
	    	name: 'Asparagus Quiche',
	    	page: 13,
	    	description: 'Asparagus Quiche',
	    	category: 'Quiche Pie'
	  	},								  
	  	{
	    	name: 'Spinach and Feta Quiche',
	    	page: 13,
	    	description: 'Spinach and Feta Quiche',
	    	category: 'Quiche Pie'
	  	},	
	  	{
	    	name: "Jacques' Tomato Tart",
	    	page: 14,
	    	description: "Jacques' Tomato Tart",
	  		category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Tasty Tuna Bake / Pie',
	    	page: 14,
	    	description: 'Tasty Tuna Bake / Pie',
	    	category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Teriyaki Sauce',
	    	page: 15,
	    	description: 'Teriyaki Sauce',
	    	category: 'Sauce'
	  	},	
	   	{
	    	name: 'Rosemary Lemon Chicken',
	    	page: 15,
	    	description: 'Rosemary Lemon Chicken',
	    	category: 'Entree'
	  	},	
	   	{
	    	name: 'Oriental Cashew Chicken Salad',
	    	page: 15,
	    	description: 'Oriental Cashew Chicken Salad',
	    	category: 'Salad'
	  	},	
	  	{
	    	name: 'Best Ever Chicken Pie',
	    	page: 15,
	    	description: 'Best Ever Chicken Pie',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Chicken Kiev',
	    	page: 16,
	    	description: 'Chicken Kiev',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Curried Chicken with Fruit',
	    	page: 17,
	    	description: 'Curried Chicken with Fruit',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Chutney Chicken',
	    	page: 17,
	    	description: 'Chutney Chicken',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Honey Chicken',
	    	page: 17,
	    	description: 'Heuning Hoender',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Chicken Oros',
	    	page: 17,
	    	description: 'Chicken Oros',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Hawaiian Chicken',
	    	page: 17,
	    	description: 'Hawaiian Chicken',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Orange and Ginger Chicken',
	    	page: 17,
	    	description: 'Orange and Ginger Chicken',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Honey Baked Chicken Wings with Thyme',
	    	page: 18,
	    	description: 'Honey Baked Chicken Wings with Thyme',
	    	category: 'Entree'
	  	},		
	  	{
	    	name: 'Honey Mustard Chicken',
	    	page: 18,
	    	description: 'Honey Mustard Chicken',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Curried Chicken',
	    	page: 19,
	    	description: 'Curried Chicken',
	    	category: 'Entree'
	  	},	
	  	{
	    	name: 'Cold Curried Chicken',
	    	page: 19,
	    	description: 'Cold Curried Chicken',
	    	category: 'Entree'
	  	},		
	  	{
	    	name: 'Chicken Gravy for Pastries',
	    	page: 19,
	    	description: 'Chicken Gravy for Pastries',
	    	category: 'Sauce'
	  	},	
	  	{
	    	name: 'Coq au Vin',
	    	page: 20,
	    	description: 'Coq au Vin',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Very Lemony Chicken',
	    	page: 20,
	    	description: 'Very Lemon Chicken',
	    	category: 'Entree'
	  	},	  		  	
	  	{
	    	name: 'Aioli Sauce for Chicken',
	    	page: 20,
	    	description: 'Aioli Sauce for Chicken',
	    	category: 'Sauce'
	  	},
	  	{
	    	name: 'Chicken Pieces in Tarragon and Mustard',
	    	page: 21,
	    	description: 'Chicken Pieces in Tarragon and Mustard',
	    	category: 'Entree'
	  	},	  		
	  	{
	    	name: 'Lemon Herb Chicken',
	    	page: 21,
	    	description: 'Lemon Herb Chicken',
	    	category: 'Entree'
	  	},	  	
	  	{
	    	name: 'Roast Chicken',
	    	page: 21,
	    	description: 'Roast Chicken',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Chicken Stuffing',
	    	page: 21,
	    	description: 'Chicken Stuffing',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Spicy Chicken Pinapple',
	    	page: 22,
	    	description: 'Spicy Chicken Pinapple',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Chicken Peri Peri',
	    	page: 22,
	    	description: 'Chicken Peri Peri',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Chicken with Broccoli and Peaches',
	    	page: 22,
	    	description: 'Chicken with Broccoli and Peaches',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Celery Seed Coleslaw Dressing',
	    	page: 23,
	    	description: 'Celery Seed Coleslaw Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Ceasar Dressing',
	    	page: 23,
	    	description: 'Ceasar Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Yogurt Salad Dressing',
	    	page: 23,
	    	description: 'Yogurt Salad Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Vinaigrette Salad Dressing',
	    	page: 23,
	    	description: 'Vinaigrette Salad Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Vinaigrette Balsamic',
	    	page: 23,
	    	description: 'Vinaigrette Balsamic',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Bleu Cheese Salad Dressing',
	    	page: 23,
	    	description: 'Bleu Cheese Salad Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: "Helene's Potato Salad Vinaigrette",
	    	page: 24,	
	    	description: "Helene's Potato Salad Vinaigrette",
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Potato Olive and Herb Salad',
	    	page: 24,	
	    	description: 'Potato Olive and Herb Salad',
	    	category: 'Salad'
	  	},	
	  	{
	    	name: 'German Potato Salad with Bacon',
	    	page: 24,	
	    	description: 'German Potato Salad with Bacon',
	    	category: 'Salad'
	  	},	  	
	  	{
	    	name: 'Red Skin Potato Salad',
	    	page: 24,	
	    	description: 'Red Skin Potato Salad',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Cole Slaw (Vinaigrette Style)',
	    	page: 25,	
	    	description: 'Cole Slaw (Vinaigrette Style)',
	    	category: 'Salad'
	  	},	  	  	
	  	{
	    	name: 'Make Ahead Coleslaw',
	    	page: 25,	
	    	description: 'Make Ahead Coleslaw',
	    	category: 'Salad'
	  	},	  
	 	{
	    	name: 'Seafood Salad',
	    	page: 25,	
	    	description: 'Seafood Salad',
	    	category: 'Salad'
	  	},	  
	  	{
	    	name: 'Pea Salad with Bacon',
	    	page: 25,	
	    	description: 'Pea Salad with Bacon',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Shrimp and Linguine Salad',
	    	page: 26,	
	    	description: 'Shrimp and Linguine Salad',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Orzo Salad with Feta and Sun-Dried Tomatoes',
	    	page: 26,	
	    	description: 'Orzo Salad with Feta and Sun-Dried Tomatoes',
	    	category: 'Salad'
	  	},	  	  	
	  	{
	    	name: 'Cold Pasta Salad',
	    	page: 26,	
	    	description: 'Cold Pasta Salad',
	    	category: 'Salad'
	  	},	    
	  	{
	    	name: 'Pasta Primavera',
	    	page: 26,	
	    	description: 'Pasta Primavera',
	    	category: 'Pasta'
	  	},	 
	  	{
	    	name: 'Oriental Cashew Salad',
	    	page: 27,	
	    	description: 'Oriental Cashew Salad',
	    	category: 'Salad'
	  	},	  
	  	{
	    	name: 'Chicken Salad',
	    	page: 27,	
	    	description: 'Chicken Salad',
	    	category: 'Salad'
	  	},	 
	  	{
	    	name: 'Tuna Salad',
	    	page: 27,	
	    	description: 'Tuna Salad',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Green Salad with French Dressing',
	    	page: 27,	
	    	description: 'Green Salad with French Dressing',
	    	category: 'Salad'
	  	},	 	 
	  	{
	    	name: "Jenny's Vegetables in Olive Oil",
	    	page: 27,	
	    	description: "Jenny's Vegetables in Olive Oil",
	    	category: 'Sides'
	  	},	 
	  	{
	    	name: 'Mushroom Salad',
	    	page: 27,	
	    	description: 'Mushroom Salad',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Turkish Salad',
	    	page: 28,	
	    	description: 'Turkish Salad',
	    	category: 'Salad'
	  	},	 
	  	{
	    	name: 'Creamy Italian Dressing',
	    	page: 28,	
	    	description: 'Creamy Italian Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Old Fashioned Creamy Egg Dressing',
	    	page: 28,	
	    	description: 'Old Fashioned Creamy Egg Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Pear and Walnut Salad',
	    	page: 28,	
	    	description: 'Pear and Walnut Salad',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Winter Salad',
	    	page: 28,	
	    	description: 'Winter Salad',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Tabbouleh',
	    	page: 28,	
	    	description: 'Tabbouleh',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Herb Salad with Honey Dressing',
	    	page: 28,	
	    	description: 'Herb Salad with Honey Dressing',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'American Ham in Coca Cola',
	    	page: 29,	
	    	description: 'American Ham in Coca Cola',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Gammon',
	    	page: 29,	
	    	description: 'Gammon',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Tong met Rosyne Sous',
	    	page: 29,	
	    	description: 'Tong met Rosyne Sous',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Leg of Lamb',
	    	page: 30,	
	    	description: 'Leg of Lamb',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Classic Roast Beef',
	    	page: 30,	
	    	description: 'Classic Roast Beef',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Yorkshire Pudding',
	    	page: 32,	
	    	description: 'Yorkshire Pudding',
	    	category: 'Side'
	  	},
	  	{
	    	name: 'Meat Balls in Curried Fruit Sauce',
	    	page: 34,	
	    	description: 'Meat Balls in Curried Fruit Sauce',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Outydse boerewors',
	    	page: 34,	
	    	description: 'Outydse boerewors',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Fruity Curry Sauce',
	    	page: 34,	
	    	description: 'Fruity Curry Sauce',
	    	category: 'Sauce'
	  	},
	  	{
	    	name: 'Burgundy Beef',
	    	page: 34,	
	    	description: 'Burgundy Beef',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Chinese Beef Ring',
	    	page: 34,	
	    	description: 'Chinese Beef Ring',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Chinese Sweet and Sour Sauce',
	    	page: 34,	
	    	description: 'Chinese Sweet and Sour Sauce',
	    	category: 'Sauce'
	  	},
	  	{
	    	name: 'Gravy for Roast Meat',
	    	page: 35,	
	    	description: 'Gravy for Roast Meat',
	    	category: 'Sauce'
	  	},
	  	{
	    	name: 'Steak with Herb Bearnaise',
	    	page: 35,	
	    	description: 'Steak with Herb Bearnaise',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Perfect Roast Potatoes',
	    	page: 36,	
	    	description: 'Perfect Roast Potatoes',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Potato and Apple Pudding',
	    	page: 36,	
	    	description: 'Potato and Apple Pudding',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Grated Potato and Egg Pudding',
	    	page: 36,	
	    	description: 'Grated Potato and Egg Pudding',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Scalloped Potatoes',
	    	page: 36,	
	    	description: 'Scalloped Potatoes',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Vegetarian Spaghetti Sauce',
	    	page: 36,	
	    	description: 'Vegetarian Spaghetti Sauce',
	    	category: 'Pasta'
	  	},
	  	{
	    	name: 'Zucchini Lasagna',
	    	page: 37,	
	    	description: 'Zucchini Lasagna',
	    	category: 'Pasta'
	  	},
	  	{
	    	name: 'Zucchini Boats',
	    	page: 37,	
	    	description: 'Zucchini Boats',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Garlic Mashed Potatoes',
	    	page: 37,	
	    	description: 'Zucchini Lasagna',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Hollandaise Sauce for Broccoli',
	    	page: 37,	
	    	description: 'Hollandaise Sauce for Broccoli',
	    	category: 'Sauce'
	  	},
	  	{
	    	name: 'Beetroot and Tops with Sweet-Sour Dressing',
	    	page: 37,	
	    	description: 'Beetroot and Tops with Sweet-Sour Dressing',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Braised Red Cabbage',
	    	page: 37,	
	    	description: 'Braised Red Cabbage',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Ratatouille',
	    	page: 38,		
	    	description: 'Ratatoulle',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Terrine of Provencal Vegetables',
	    	page: 38,		
	    	description: 'Terrine of Provencal Vegetables',
	    	category: 'Sides'
	  	},
	  	{
	    	name: 'Wild Rice and Hazelnut Salad',
	    	page: 38,		
	    	description: 'Wild Rice and Hazelnut Salad',
	    	category: 'Salad'
	  	},
	  	{
	    	name: 'Basil Cream Sauce',
	    	page: 38,		
	    	description: 'Basil Cream Sauce',
	    	category: 'Sauce'
	  	},
	  	{
	    	name: 'Sour Cream Sauce for baked potato',
	    	page: 38,		
	    	description: 'Sour Cream Sauce for baked potato',
	    	category: 'Sauce'
	  	},
	  	{
	    	name: 'Creamed Spinach',
	    	page: 38,		
	    	description: 'Creamed Spinach',
	    	category: 'Side'
	  	},
	  	{
	    	name: 'Honey Glazed Carrots',
	    	page: 38,		
	    	description: 'Honey Glazed Carrots',
	    	category: 'Side'
	  	},
	  	{
	    	name: "Marina's Fish",
	    	page: 39,		
	    	description: "Marina's Fish",
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Ingelegte Kerrievis',
	    	page: 39,		
	    	description: 'Ingelegte Kerrievis',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Grilled Kingclip with Chilli Herb Topping',
	    	page: 39,		
	    	description: 'Grilled Kingclip with Chilli Herb Topping',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Baked Fish with Lemon and Garlic',
	    	page: 40,		
	    	description: 'Baked Fish with Lemon and Garlic',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Spicy Baked Fish',
	    	page: 40,		
	    	description: 'Spicy Baked Fish',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Fish Pie',
	    	page: 40,		
	    	description: 'Fish Pie',
	    	category: 'Quiche Pie'
	  	},
	  	{
	    	name: 'Asparagus and Smoked Oyster Fish Bake',
	    	page: 40,		
	    	description: 'Asparagus and Smoked Oyster Fish Bake',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Curried Fish',
	    	page: 41,		
	    	description: 'Curried Fish',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Kabeljou Cooked in Butter with Garlic Mash',
	    	page: 41,		
	    	description: 'Kabeljou Cooked in Butter with Garlic Mash',
	    	category: 'Entree'
	  	},
	  	{
	    	name: "Jenny's Tuna Pie",
	    	page: 41,		
	    	description: "Jenny's Tuna Pie",
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Crumbed Prawns',
	    	page: 41,		
	    	description: 'Crumbed Prawns',
	    	category: 'Entree'
	  	},
	  	{
	    	name: 'Milk Tart',
	    	page: 42,		
	    	description: 'Milk Tart',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Lemon Meringue',
	    	page: 42,		
	    	description: 'Lemon Meringue',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Tofee Pudding',
	    	page: 43,		
	    	description: 'Toffee Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Bread Pudding',
	    	page: 43,		
	    	description: 'Bread Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Lemon Meringue',
	    	page: 43,		
	    	description: 'Lemon Meringue',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Apple Ansie Baie Lekker',
	    	page: 43,		
	    	description: 'Apple Ansie Baie Lekker',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Louis Leipold Pampeerkert',
	    	page: 44,		
	    	description: 'Louis Leipold Pampeerkert',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Traditional Pumpkin Pie',
	    	page: 44,		
	    	description: 'Traditional Pumpkin Pie',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Malva Pudding',
	    	page: 44,		
	    	description: 'Malva Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Milk Tart',
	    	page: 45,		
	    	description: 'Milk Tart',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Bannana Tart',
	    	page: 45,		
	    	description: 'Bannana Tart',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Pampoen Koerries',
	    	page: 45,		
	    	description: 'Pampoen Koerries',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Tapioca Cream',
	    	page: 45,		
	    	description: 'Tapioca Cream',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Sago Puddings',
	    	page: 45,		
	    	description: 'Sago Puddings',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Miss Cartars Chess Pie',
	    	page: 46,		
	    	description: 'Pears in Red Wine',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Pears in Red Wine',
	    	page: 46,		
	    	description: 'Pears in Red Wine',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Vinegar Pudding',
	    	page: 46,		
	    	description: 'Vinegar Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Marie Biscuit Surprise',
	    	page: 47,		
	    	description: 'From Doctor Chris Hugo in Vermillion',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Baked Jam Roll',
	    	page: 47,		
	    	description: 'Baked Jam Roll',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Quick Syrup Pudding',
	    	page: 47,		
	    	description: 'Quick Syrup Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Ginger Pudding',
	    	page: 48,		
	    	description: 'Ginger Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Pudding Delicious',
	    	page: 48,		
	    	description: 'Pudding Delicious',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Inexpensive Chocolate Mouse',
	    	page: 48,		
	    	description: 'Inexpensive Chocolate Mouse',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Chocolate Mouse',
	    	page: 48,		
	    	description: 'Chocolate Mouse',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Chocolate Truffles',
	    	page: 48,		
	    	description: 'Chocolate Truffles',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Chocolate Tart',
	    	page: 48,		
	    	description: 'Chocolate Tart',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Scrumptuous White Chocolate Cheese Cake',
	    	page: 48,		
	    	description: 'Scrumptuous White Chocolate Cheese Cake',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Chocolate Creme Brulee',
	    	page: 48,		
	    	description: 'Chocolate Creme Brulee',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Flamed Peaches',
	    	page: 49,		
	    	description: 'Flamed Peaches',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Chocolate and Banana Bread Pudding',
	    	page: 49,		
	    	description: 'Chocolate and Banana Bread Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Meringue Topped Rice Pudding',
	    	page: 49,		
	    	description: 'Meringue Topped Rice Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Short Pastry',
	    	page: 49,		
	    	description: 'Short Pastry',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Roly Poly',
	    	page: 49,		
	    	description: 'Roly Poly',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Presidents Pudding',
	    	page: 49,		
	    	description: 'Presidents Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Queen of Pudding',
	    	page: 49,		
	    	description: 'Queen of Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Lime and Ginger Marmelade Pudding',
	    	page: 50,		
	    	description: 'Lime and Ginger Marmelade Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Tapioca Brulee with Coconut, Mango and Granadilla',
	    	page: 50,		
	    	description: 'Tapioca Brulee with Coconut, Mango and Granadilla',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Rum Custard',
	    	page: 50,		
	    	description: 'Rum Custard',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Kings Pudding with Kumquats',
	    	page: 51,		
	    	description: 'Kings Pudding with Kumquats',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Charlottka',
	    	page: 51,		
	    	description: 'Charlottka',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Rum Pudding',
	    	page: 51,		
	    	description: 'Rumm Pudding (Serve with Custard)',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Peach Pie',
	    	page: 51,		
	    	description: 'Peach Pie',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Dadel Gemmer Poeding',
	    	page: 52,		
	    	description: 'Dadel Gemmer Poeding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Warm Gemmer Poeding',
	    	page: 52,		
	    	description: 'Warm Gemmer Poeding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Creme Caramel',
	    	page: 52,		
	    	description: 'Creme Caramel',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Caramel Pudding with Caramel Sauce',
	    	page: 53,		
	    	description: 'Caramel Pudding with Caramel Sauce',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Pumpkin Pie',
	    	page: 53,		
	    	description: 'Pumpkin Pie',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Figgy Sponge Pudding',
	    	page: 53,		
	    	description: 'Figgy Sponge Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Cape Brandy Pudding',
	    	page: 53,		
	    	description: 'Cape Brandy Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Roly Poly',
	    	page: 54,		
	    	description: 'Roly Poly',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Baked Lemon Pudding',
	    	page: 54,		
	    	description: 'Baked Lemon Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Sjokolade Pudding',
	    	page: 54,		
	    	description: 'Sjokolade Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Strawberry Tart',
	    	page: 55,		
	    	description: 'Strawberry Tart',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Fresh Apple Muffins',
	    	page: 55,		
	    	description: 'Fresh Apple Muffins',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Lemoen en Pekan Lamingtons',
	    	page: 55,		
	    	description: 'Lemone en Pekan Lamingtons',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Melksnysels',
	    	page: 56,		
	    	description: 'Melsnysels',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Maklike Malvapoeding',
	    	page: 56,		
	    	description: 'Maklike Malvapoeding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Dadel Gemmerpoeding',
	    	page: 56,		
	    	description: 'Dadel Gemmerpoeding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Breat and Butter Pudding',
	    	page: 57,		
	    	description: 'Bread and Butter Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Piesangvla Poeding',
	    	page: 58,		
	    	description: 'Piesangvla',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Karamel Lemoenroompoeding',
	    	page: 58,		
	    	description: 'Bread and Butter Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Klapperkoek Met Lemmetjie Versiersuiker',
	    	page: 59,		
	    	description: 'Bread and Butter Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Oumas Aneseed Buttermilk Rusks',
	    	page: 59,		
	    	description: 'Bread and Butter Pudding',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Cinnamon Buns',
	    	page: 60,		
	    	description: 'Cinnamon Buns',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Patatlaag Koek',
	    	page: 60,		
	    	description: 'Patatlaag Koek',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Beet Koek',
	    	page: 61,		
	    	description: 'Beet Koek',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Annes Carrot Load',
	    	page: 62,		
	    	description: 'Annes Carrot Load',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Wolftrap Carrot Cake',
	    	page: 62,		
	    	description: 'Wolftrap Carrot Cake',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Banana Bread',
	    	page: 63,		
	    	description: 'Banana Bread',
	    	category: 'Dessertt'
	  	},
	  	{
	    	name: 'Nancy Wares Cake',
	    	page: 63,		
	    	description: 'Nancy Wares Cake',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Angel Pie Meringue with Lemon Cream Filling',
	    	page: 64,		
	    	description: 'Angel Pie Meringue with Lemon Cream Filling',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Jelly Tart',
	    	page: 64,		
	    	description: 'Jelly Tart',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Col. Sanders Pecan Pie',
	    	page: 65,		
	    	description: 'Col. Sanders Pecan Pie',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Pineapple Cheese Pie',
	    	page: 65,		
	    	description: 'Pineapple Cheese Pie',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Basic Crust 1',
	    	page: 65,		
	    	description: 'Basic Crust 1',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Quick and Easy Lemon Cheese Cake',
	    	page: 65,		
	    	description: 'Quick and Easy Lemon Cheese Cake',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Lemon Cheese Cake (Pauline Ingle)',
	    	page: 66,		
	    	description: 'Lemon Cheese Cakse (Pauline Ingle)',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Pummpkin Pie',
	    	page: 66,		
	    	description: 'Pumpkin Pie',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Almond Fruit Tart',
	    	page: 66,		
	    	description: 'Almond Fruit Tart',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Pynappel Ysaks Tert',
	    	page: 67,		
	    	description: 'Pynappel Ysaks Tert',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Malvapoeding',
	    	page: 67,		
	    	description: 'Malvapoeding',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Apricot and Custard Filo Slices',
	    	page: 67,		
	    	description: 'Apricot and Custard Filo Slices',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Polenta Almond and Lemon Cake',
	    	page: 69,		
	    	description: 'Polenta Almond and Lemon Cake',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Corn Bread',
	    	page: 69,		
	    	description: 'Corn Bread',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Sweat Caraway Biscuits',
	    	page: 69,		
	    	description: 'Sweat Caraway Biscuits',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Scones',
	    	page: 70,		
	    	description: 'Scones',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Cheese Scones',
	    	page: 70,		
	    	description: 'Cheese Scones',
	    	category: 'Dessertt'
	  	},
		{
	    	name: '30 Day Muffins',
	    	page: 71,		
	    	description: '30 Day Muffins',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Date Cake with Date Filling',
	    	page: 71,		
	    	description: 'Date Cake with Date Filling',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Piesang Poffers',
	    	page: 72,		
	    	description: 'Piesang Poffers',
	    	category: 'Dessertt'
	  	},
		{
	    	name: 'Klapper Sjokolade Koekies',
	    	page: 72,		
	    	description: 'Klapper Sjokolade Koekies',
	    	category: 'Dessertt'
	  	},
	  	];



}]);

appCookbook.factory('listGallery', function(){

	var CookBookList = [
		{
			src: 'img/cookbook/Page-1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-2.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-3.jpg',
			w:1500,
			h:1500
		},
		{
			src: 'img/cookbook/Page-4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-5.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-6.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-7.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-8.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-9.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-10.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-11.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-12.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-13.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-14.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-15.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/cookbook/Page-16.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-17.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-18.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-19.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-20.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-21.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-22.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-23.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-24.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-25.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-26.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-27.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-28.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-29.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-30.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-31.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-32.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-33.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-34.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-35.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-36.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-37.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-38.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-39.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-40.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-41.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-42.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-43.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-44.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-45.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-46.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-47.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-48.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-49.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-50.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-51.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-52.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-53.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-54.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-55.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-56.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-57.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-58.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-59.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-60.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-61.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-62.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-63.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-64.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-65.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-66.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-67.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-68.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-69.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-70.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-71.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-72.jpg',
			w:2100,
			h:1500	
		},
		{
			src: 'img/cookbook/Page-73.jpg',
			w:2100,
			h:1500	
		},

	];

	var service = {};
  	service.getImage = function(x){	
    	switch (x){
			case 'CookBookList': var gallery = CookBookList; return gallery;
				break;
		}	
 
  	}
  	return service;
});