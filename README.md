# Thunderstone Quest Randomizer

## Data manipulations

The source of the card database is from _that other guy's project_. The following script was used to process it for this application's
purposes:

```
jq '[to_entries[] | .value | to_entries[] | {"Name": .key} + (.value | del(.Cost,.Types,.Keywords,.Races,.Summary,.Alert,.Light,.Battle,.Spoils,.Special,."After Battle",.Reward,.Entry)) | select(.Category)]' cards.json 
```
A bit of explanation:
 - First we get to the part we want and move the name from outside the object to inside
 - We omit all the values that this application does not need
 - We then remove the handful of items  that do not have a category specified. In the original source, these are all treasures.