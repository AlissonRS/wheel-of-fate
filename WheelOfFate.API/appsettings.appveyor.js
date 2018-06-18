var fs = require('fs');
patchSettings('appSettings.json');
function patchSettings(jsonPath) {
    // parse file
    var json = fs.readFileSync(jsonPath, 'utf8');
    var settings = JSON.parse(json.substring(json.indexOf('{')));
    // apply settings
    settings.ConnectionStrings.WheelOfFate = process.env.Appveyor_Deployment_ConnectionStrings;
    // save file
    fs.writeFileSync(jsonPath, JSON.stringify(settings, null, '\t'));
}