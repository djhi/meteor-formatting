meteor-formatting
=================

Provides helpers for quick formatting of dates and numbers. Integration of moment (with languages) and numeral (with languages too).

# Dates Helpers

## duration
Ouput the result of `moment().duration`. 

**parameters**

 *	`duration`: the duration (example: `10`)
 *	`units`: units used for the duration (default is `hours`)

**usage**
``` handlebars
<span>{{duration 10 'days'}}</span>
```

## fromNow
Ouput the result of `moment.fromNow`. 

**parameters**

 *	`date`: the date (example: `01/01/2014`)

**usage**
``` handlebars
<span>{{fromNow myDate}}</span>
```

## formatDate
Ouput the result of `moment.format`. 

**parameters**

 *	`date`: the date (example: `01/01/2014`)
 *	`format`: format used (default is `DD/MM/YYYY`)

**usage**
``` handlebars
<span>{{formatDate myDate}}</span>
```

## mediumDate
Ouput the result of `moment.format('LL')`. 

**parameters**

 *	`date`: the date (example: `01/01/2014`)

**usage**
``` handlebars
<span>{{mediumDate myDate}}</span>
```

## month
Ouput the result of `moment.format('MMMM')` (Ouput the full month's name)

**parameters**

 *	`date`: the date (example: `01/01/2014`)

**usage**
``` handlebars
<span>{{month myDate}}</span>
```

## shortMonthAndYear
Ouput the result of `moment.format('MM YYYY')` (Ouput the short month's name and the year)

**parameters**

 *	`date`: the date (example: `01/01/2014`)

**usage**
``` handlebars
<span>{{shortMonthAndYear myDate}}</span>
```
# Numbers Helpers

## currency
Ouput the result of `numeral().format('$0.00')` or `numeral().format('0.00$')`. 

**parameters**

 *	`number`: the number to format (example: `10`)
 *	`symbolAtEnd`: wether to show the currency symbol at the end (default is `false`)

**usage**
``` handlebars
<span>{{currency 10}}</span>
```
``` handlebars
<span>{{currency 10 true}}</span>
```

## percentage
Ouput the result of `numeral().format('0%')`. 

**parameters**

 *	`number`: the number to format (example: `10`). If this number is greater than 1, it will be divided by 100 as numeral expect a number lesser than 1.

**usage**
``` handlebars
<span>{{percentage 10}}</span>
```