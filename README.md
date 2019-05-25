# Thunderstone Quest Randomizer

This web app is a randomizer for Thunderstone Quest. You can use it to generate sets of 
cards for a random adventure.

[Use it online now!](https://doctor-g.github.io/tsqr/)

## Technology

This project was built using [Polymer 3.0](https://polymer-library.polymer-project.org/)
and making extensive use of [LitElement](https://lit-element.polymer-project.org/).
As a Polymer project, you can use [polymer-cli](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli) to serve, test, and build it.

## Acknowledgements and Data manipulations

[Thunderstone Quest](https://www.alderac.com/thunderstone/) is published by [Alderac Entertainment
Group](https://www.alderac.com).

The original card database is from [Cakoluchiam's Thunderstone Quest Randomizer](https://github.com/Cakoluchiam/tsquest), which project provided inspiration for this one.
The following script was used to process it for this application's
purposes:

```
jq '[to_entries[] | .value | to_entries[] | {"Name": .key} + (.value | del(.Cost,.Types,.Keywords,.Races,.Summary,.Alert,.Light,.Battle,.Spoils,.Special,."After Battle",.Reward,.Entry)) | select(.Category)]' cards.json 
```
A bit of explanation:
 - First we get to the part we want and move the name from outside the object to inside
 - We omit all the values that this application does not need
 - We then remove the handful of items  that do not have a category specified. In the original source, these are all treasures.

 ## License

 This software is licensed under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html).