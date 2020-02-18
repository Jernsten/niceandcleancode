const apiResponseFromMockAPi = `{
    "dataSource": "StupidApi",
    "item": "CARDBORD BOX",
    "height": "30 cm",
    "width": "24 cm",
    "depth": "20 cm",
    "color": "Brown"
}`
function calculateVolume(apiResponse) {
    const { height, width, depth } = parseVolumeParameters(apiResponse)
    return height * width * depth
}

function parseVolumeParameters(apiResponse) {
    apiResponse = JSON.parse(apiResponse)

    const height = parseNumberFrom(apiResponse.height)
    const width = parseNumberFrom(apiResponse.width)
    const depth = parseNumberFrom(apiResponse.depth)

    return { height, width, depth }
}

function parseNumberFrom(response) {
    return Number((response).split(' ')[0])
}

const volume = calculateVolume(apiResponseFromMockAPi)
console.log(volume)

// Varför är detta bättre?
// calculateVolume gör nu enbart en sak: att räkna ut volymen
// parseVolumeParameters 