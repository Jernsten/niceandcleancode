const day = 'MÅNDAG' // Föreställ dig att 'MÅNDAG' är en sträng som du hämtar från en databas

function sayWhatDayItIsInSwedish() {    // Du skapar en funktion som använder sig av variabeln
    console.log('Idag är det ' + day)   // day för att skriva ut vilken dag det är idag.
}

sayWhatDayItIs() // Output >> 'Idag är det MÅNDAG'

// Men på svenska skriver vi måndag med små bokstäver, kanske du tänker, 
// och väljer att låta funktionen ändra dagens namn till lowercase.
// För att illustrera skillnaden, skapar jag en ny variabel och ny funktion som slutar på Improved

let dayImproved = 'MÅNDAG' // const blir let, för annars kan man inte tilldela nytt värde på rad 16

function sayWhatDayItIsInSwedishImproved() {
    dayImproved = dayImproved.toLowerCase()         // Du sparar om dayImproved fast som 'måndag' 
    console.log('Idag är det ' + day)               // istället för 'MÅNDAG'
}

sayWhatDayItIsInSwedishImproved() // >> 'Idag är det MÅNDAG'

// Detta är en dålig lösning... varför?
// För att en funktion har en funktion, men funktionen sayWhatDayItIsInSwedishImproved har två.
// Först skriver den över värdet i variabeln dayImproved från 'MÅNDAG' till 'måndag'
// Sedan gör den sitt egentliga jobb och berättar vilken dag det är.
// 
// Det är dåligt med funktioner som "läcker" eller "stinker", alltså, det är dåligt med
// funktioner som har sidoeffekter, sidebusiness.
// 
// En funktion ska inte ändra på variabler utanför sig själv.
// En bra funktion arbetar enbart med sina in-parametrar, det är även OK som i rad 4 att läsa av
// värdet i en variabel och använda sig av den, men det är förbjudet att som i rad 16 ändra på
// värdet i en variabel som är definierad utanför funktionens scope/kropp/{}
// 
// Om man skapar funktioner som har sidoeffekter, så riskerar man att skapa en rörig massa kod
// som inte är speciellt användbar.



