const apiResponseFromAPi = `{
    "dataSource": "StupidApi",
    "item": "CARDBORD BOX",
    "height": "30 cm",
    "width": "24 cm",
    "depth": "20 cm",
    "color": "Brown"
}`// Föreställ er att ett API anrop görs och 
// apiResponseFromApi är den JSON-sträng som man får tillbaka

function calculateVolume(apiResponse) {                         // Funktion som tar en JSON-sträng som in-parameter
    apiResponse = JSON.parse(apiResponse)                       // Denna rad omvandlar strängen apiResponse till ett JSON-objekt

    const height = Number((apiResponse.height).split(' ')[0])   // height = Splitta först strängen "30 cm" till en array => ['30','cm']
    const width = Number((apiResponse.width).split(' ')[0])     // och sedan väljs nollte element => [0]
    const depth = Number((apiResponse.depth).split(' ')[0])     // och sedan görs det om till ett nummer. Samma för width och depth.

    const volume = height * width * depth                       // Räknar ut volymen
    return volume                                               // Returnerar volymen.
}

const volume = calculateVolume(apiResponseFromAPi)              // vi kallar på funktionen calculateVolume med apiResponseFromApi som 
console.log(volume) // Output: 14400                            // in-parameter och vi får tillbaka volymen, som sedan skrivs ut.


// Kritik till koden:
// calculateVolume är en funktion som gör mycket mer än bara räkna ut volymen
// 
// "En funktion har en funktion" Alltså: Det är bättre med funktioner som gör enbart det den ska göra, inget annat.
// 
// På rad 12 parsas strängen apiResponseFromApi till ett JSON objekt
// På rad 14-16 parsas strängen med height/width/depth. Hur? Ex: ur strängen "30 cm" fås numret 30 fram
// På rad 18 utförs det som funktionen utger sig för att göra, alltså att räkna ut volymen
// 
// Logiken i raderna 12-16 bör göras i en annan funktion, se ./solutions/functions.js för lösningsförslag


