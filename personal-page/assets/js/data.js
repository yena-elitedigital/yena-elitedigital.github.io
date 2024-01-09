const coffeeData = [
  {
    "name": "affogato",
    "ice": [
      {
        "size": "single",
        "amount": 120,
        "shots": 1,
        "calories": 171,
        "caffeine": -1
      },
      {
        "size": "double",
        "amount": 150,
        "shots": 2,
        "calories": 236,
        "caffeine": -1
      }
    ],
    "ingredients": ["Ice Cream", "Espresso"],
    "details": "affogato.md",
    "allergens": [],
    "description": `Reference: https://en.wikipedia.org/wiki/Affogato
    
      An affogato, more traditionally known as "affogato al caffè" (Italian for "drowned in coffee"), is an Italian coffee-based dessert. It usually takes the form of a scoop of plain milk-flavored or vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso. Some variations also include a shot of amaretto, Bicerin, Kahlúa, or other liqueur.
    `,
    "recipe": `Reference: https://athome.starbucks.com/recipe/affogato

      1. Add ice cream to a bowl or cup. Pour espresso or coffee over ice cream.
      2. Drizzle with Grand Marnier® or Cointreau® (optional).
      3. Top with chocolate shavings. You can use a standard grater.
      4. Sprinkle sea salt on top and serve immediately.
    `,
    "options": ["Vanilla Gelato", "Flavour Shots", "Whipped Cream", "Chocolate Powder"]
  },
  {
    "name": "americano",
    "ice": [
      {
        "size": "small",
        "amount": 354,
        "shots": 2,
        "calories": 10,
        "caffeine": 150
      },
      {
        "size": "medium",
        "amount": 473,
        "shots": 3,
        "calories": 15,
        "caffeine": 225
      },
      {
        "size": "large",
        "amount": 709,
        "shots": 4,
        "calories": 15,
        "caffeine": 300
      }
    ],
    "hot": [
      {
        "size": "small",
        "amount": 354,
        "shots": 2,
        "calories": 10,
        "caffeine": 150
      },
      {
        "size": "medium",
        "amount": 473,
        "shots": 3,
        "calories": 15,
        "caffeine": 225
      },
      {
        "size": "large",
        "amount": 591,
        "shots": 4,
        "calories": 15,
        "caffeine": 300
      }
    ],
    "details": "americano.md",
    "ingredients": ["Water", "Espresso"],
    "allergens": [],
    "description": `Reference: https://en.wikipedia.org/wiki/Caff%C3%A8_americano
    
      Caffè americano, also known as Americano or American, is a type of coffee drink prepared by diluting an espresso shot with hot water at a 1:3 to 1:4 ratio, resulting in a drink that retains the complex flavors of espresso, but in a lighter way. Its strength varies with the number of shots of espresso and the amount of water added. The name is also spelled with varying capitalization and use of diacritics: e.g., "café americano".

      In Italy, caffè americano may mean either espresso with hot water or long-filtered coffee, but the latter is more precisely called caffè all'americana ("café in the American style").
    `,
    "recipe": `Reference: https://athome.starbucks.com/recipe/caffe-americano

      1. Bring water to a boil and pour into your mug.
      2. Prepare 2 shots of espresso.
      3. Slowly pour your 2 shots of espresso into the water.
    `,
    "options": ["Milk Foam", "Whipped Cream", "Sweetner"]
  },
  {
    "name": "americano con crema",
    "ice": [
      {
        "size": "single",
        "amount": -1,
        "shots": 1,
        "calories": -1,
        "caffeine": -1
      }
    ],
    "ingredients": ["Water", "Milk", "Orange Syrup", "Espresso"],
    "details": "americano-con-crema.md",
    "allergens": ["Milk"],
    "description": `Reference: https://stories.starbucks.com/stories/2016/recipe-americano-con-crema/
    
      It's an Americano with cold, blended foam, made with milk, vanilla, and cinnamon.
    `,
    "recipe": `Reference: https://athome.starbucks.com/recipe/americano-con-crema

      1. Make the orange syrup first. In a medium saucepan over medium-high heat, add water, sugar and orange peel. Stir occasionally for 5 minutes or until sugar has dissolved. Remove from heat and let cool. Strain into a container.
      2. Next, make the Americano con Crema. Froth the milk in a blender on high for 2 minutes, then let it sit for 1–2 minutes.
      3. Prepare 2 shots of espresso and pour into a mug.
      4. Add the orange syrup, espresso and 1/4 cup of hot water to a mug and stir.
      5. Top the beverage with a few spoonfuls of milk froth and sprinkle with sugar if desired.
    `,
    "options": []
  },
  {
    "name": "bicerin",
    "ice": [
      {
        "size": "medium",
        "amount": -1,
        "shots": 2,
        "calories": -1,
        "caffeine": -1
      }
    ],
    "ingredients": ["Whipped Cream", "Chocolate", "Syrup", "Milk", "Espresso"],
    "details": "bicerin.md",
    "allergens": ["Milk"],
    "description": `Reference: https://en.wikipedia.org/wiki/Bicerin
    
      Bicerin is a traditional hot drink native to Turin, Italy, made of espresso, drinking chocolate, and milk served layered in a small glass.
    `,
    "recipe": `Reference: https://imbibemagazine.com/recipe/bicerin/

      1. Pour the melted chocolate into the bottom of a small (6 oz.) stemmed glass.
      2. Pour the half-and-half and simple syrup into a steaming tin and use the steam wand on your espresso maker to heat and froth. (Alternately, heat the liquid in a microwave or small saucepan until steaming, then froth with a milk frother.)
      3. Slowly pour the frothy milk on top of the chocolate—it will sit on top of the chocolate, without blending.
      4. Pull a shot of espresso (a double is best, but a single will also work), or prepare espresso on a stovetop maker.
      5. Slowly pour the espresso into the middle of the whipped cream so that it layers itself below the cream, which will rise to the top.
    `,
    "options": []
  },
  {
    "name": "cappuccino",
    "hot": [
      {
        "size": "small",
        "amount": 354,
        "shots": 1,
        "calories": 100,
        "caffeine": 75
      },
      {
        "size": "medium",
        "amount": 473,
        "shots": 2,
        "calories": 140,
        "caffeine": 150
      },
      {
        "size": "large",
        "amount": 591,
        "shots": 2,
        "calories": 200,
        "caffeine": 150
      }
    ],
    "ingredients": ["Steamed Milk", "Espresso"],
    "details": "cappucino.md",
    "allergens": ["Milk"],
    "description": `Reference: https://en.wikipedia.org/wiki/Cappuccino
    
      A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam).

      Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon (in the United States) or cocoa powder (in Europe and Australasia). It is typically smaller in volume than a caffè latte, with a thicker layer of microfoam.
    `,
    "recipe": `Reference: https://athome.starbucks.com/recipe/classic-cappuccino

      1. Prepare espresso shot and pour into mug once brewed.
      2. In a separate container, froth milk.
      3. Gently pour your frothed milk into your mug until it’s almost full.
      4. Add any remaining foam to the top of your beverage and enjoy! 
    `,
    "options": ["Milk Foam"]
  },
  {
    "name": "espresso",
    "hot": [
      {
        "size": "single/solo",
        "amount": 30,
        "shots": 1,
        "calories": 5,
        "caffeine": 75
      },
      {
        "size": "double/doppio",
        "amount": 60,
        "shots": 2,
        "calories": 10,
        "caffeine": 150
      },
      {
        "size": "triple",
        "amount": 90,
        "shots": 3,
        "calories": 15,
        "caffeine": 225
      },
      {
        "size": "quad",
        "amount": 120,
        "shots": 4,
        "calories": 20,
        "caffeine": 300
      }
    ],
    "details": "espresso.md",
    "ingredients": ["Water", "Espresso"],
    "allergens": [],
    "description": `Reference: https://en.wikipedia.org/wiki/Espresso
    
      Espresso is one of the most popular coffee-brewing methods, of Italian origin. The French also made a significant contribution to the invention of the first coffee makers, predecessors of today's espresso machines, and generally to the café culture.

      Espresso can be made with a wide variety of coffee beans and roast degrees, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.

      Espresso is the most common way of making coffee in southern Europe, especially in Italy, France, Spain and Portugal, but it is also popular in the rest of the world.
    `,
    "recipe": "",
    "options": []
  },
  {
    "name": "red-eye",
    "hot": [
      {
        "size": "medium",
        "amount": -1,
        "shots": 1,
        "calories": -1,
        "caffeine": -1
      }
    ],
    "details": "red-eye.md",
    "ingredients": ["Brewed Coffee", "Espresso"],
    "allergens": [],
    "description": `Reference: https://en.wikipedia.org/wiki/List_of_coffee_drinks#Slow-brewed_and_espresso
    
      Regular coffee (slow brewed as with a filter or cafetière) is sometimes combined with espresso to increase either the intensity of the flavour or the caffeine content. This may be called a variety of names, most commonly red eye, or shot in the dark.

      Coffeehouse chains may have their own names, such as turbo at Dunkin' Donuts and depth charge – a federally registered trademark of Caribou Coffee. At Starbucks, a double shot of espresso in the coffee may be termed a "black eye", and a triple shot a "dead eye". "Caffè Tobio" is a version with an equal amount of coffee to espresso.
    `,
    "recipe": `Reference: https://www.masterclass.com/articles/red-eye-coffee-recipe

      1. Prepare one cup of brewed coffee.
      2. Pour the shot of espresso into your mug of brewed coffee.
    `,
    "options": []
  }
];
