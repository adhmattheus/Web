var fs = require('fs');
var program = require("commander");
const express = require('express');
const cors = require('cors');

const port = process.env.PORT ?? 3333;
const app = express();

app.use(cors());
app.use(express.json());

let positions = [];

program
    .version('0.0.1')
    .option('-f, --file [option]', 'File to be parsed.')
    .parse(process.argv);

var nmeaGps = fs.createReadStream(program.file);

// readTextFile(nmeaGps, parse);

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (str) {
        return !this.indexOf(str);
    }
}

function parse(sentence) {
    var nmea = sentence.split(",");

    var status = (nmea[2] == "A" ? "Ok!" : "Warning");

    var latDeg = parseInt(nmea[3].substring(0, 2));
    var latMin = nmea[3].substring(2);
    var lat = latDeg + (latMin / 60);
    var latDirection = nmea[4];

    var lngDeg = parseInt(nmea[5].substring(0, 3));
    var lngMin = nmea[5].substring(3);
    var lng = lngDeg + (lngMin / 60);
    var lngDirection = nmea[6];

    console.log(status + " " + lat + "" + latDirection + " " + lng + "" + lngDirection);
    // console.log("http://www.google.com/maps/place/" + lat + ",-" + lng + "/@" + lat + ",-" + lng + ",17z");

    if (status === 'Ok!')
        positions.push({
            lat,
            lng
        });
}

function readTextFile(input, parse) {
    var remaining = '';

    input.on('data', function (data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        while (index > -1) {
            var line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            if (line.startsWith("$GPRMC")) {
                parse(line);
            }
            index = remaining.indexOf('\n');
        }
    });

    input.on('end', function () {
        if (remaining.length > 0 && remaining.startsWith("$GPRMC")) {
            parse(remaining);
        }
    });
}

app.get('/', (req, res) => {
    console.log(positions)
    res.json({
        positions
    });
})

app.listen(port, () => {
    readTextFile(nmeaGps, parse)
    console.log(`Server running on port ${port}`);
})