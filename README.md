# _Better Doctor Api_

#### _A page for using the BetterDoctor API for JavaScript week 2 @ Epicodus, Feb. 16, 2018_

#### By _**Zach Evans**_

## Description

_This is an HTML page that uses JavaScript to find doctors in a user's area (Portland for now) that could treat a user's illness / symptoms. The user enters a symptom or illness, a list of doctors appears, and then the user can enter one of the doctors' names to find more details about them._

## Future Work

_Show a doctor's location on a map using something like Google Maps API._
_Sort results (rating, proximity, etc)._

### Specs
| Behavior | Input | Output |
| :-------------     | :------------- | :-------------
| **Entering a symptom/condition returns a list of doctor names** | Rash | [John, Jane] |
| **Entering a name returns details** | John | ["John", "Doe", true, "website", "phone#", "address"] |


## Setup/Installation Requirements

* _This project can be accessed [here](https://github.com/ZEvans1/better-doctor.git)_
* _Clone the repository to your machine_
* _Run the following commands:_
* _npm install_
* _bower install_
* _gulp build_
* _Create a .env file in the top level of this directory_
* _Request an API key from BetterDoctor and put it in the .env file as shown below:_
      exports.apiKey = "your API key from BetterDoctor goes here";
* _Open in a web browser (was made with Chrome)_

## Known Bugs

_No known issues._

## Support and contact details

_Contact email: zte.zachary@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_
* _npm_
* _gulp_
* _jasmine_
* _karma_
* _BetterDoctor API__


### License

*Not needed*

#  Initial Planning

### Configuration/dependencies
  * Dependencies needed in package.json file:
  * gulp
  * browserify
  * bower-files
  * vinyl-source-stream
  * gulp-concat
  * gulp-uglify
  * gulp-util
  * del
  * browser-sync
  * jasmine
  * jasmine-core
  * karma
  * karma-browserify
  * karma-chrome-launcher
  * karma-cli
  * karma-jasmine
  * karma-jasmine-html-reporter
  * karma-jquery
  * watchify

### Integration
  * only one html page needed -> forms for user input and a section to display results

### UX/UI
  * Develop custom css

### Polish
  * Update README
