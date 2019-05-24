# Thunderstone Quest Randomizer

## Data manipulations

The source of the card database is from _that other guy's project_. The following script was used to process it for this application's
purposes:

```
jq '[to_entries[] | .value | to_entries[] | {"Name": .key} + (.value | del(.Cost,.Types,.Keywords,.Races,.Summary,.Alert,.Light,.Battle,.Spoils,.Special,."After Battle",.Reward,.Entry))]' cards.json 
```