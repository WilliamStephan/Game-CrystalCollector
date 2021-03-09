# Crystal Collector Game

Homework for full stack development bootcamp UT-Austin (UT-VIRT-FSF-PT-11-2019-U-LOL)

After going very deep in the last homework assignment I opted for a different approach on the jQuery Crystals Collectors assignment. My goal was to recreate the exact functionality shown in the video example (flawed as it was).

The internal challenge was trying to put the maximum amount of program logic inside the two object classes. I ended with only 13 lines of (jQuery/javaScript) code outside the object methods.

I also added some base functionality to eliminate duplicate random values from the gem objects. Not in the spec, but seemed appropriate.

Application link: [CrystalCollector](https://williamstephan.github.io/unit-4-game/)

## Specifications

* There will be four crystals displayed as buttons on the page.

* The player will be shown a random number at the start of the game.

* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
  * Your game will hide this amount until the player clicks a crystal.
  * When they do click one, update the player's score counter.

* The player wins if their total score matches the random number from the beginning of the game.

* The player loses if their score goes above the random number.

* The game restarts whenever the player wins or loses.

* When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

[Video specification](https://youtu.be/yNI0l2FMeCk)
