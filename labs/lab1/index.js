const csv = require('csv-parser');
const fs = require('fs');

const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

if (fs.existsSync(canadaFile)) {
    fs.unlinkSync(canadaFile);
    console.log('Deleted canada.txt');
}

if (fs.existsSync(usaFile)) {
    fs.unlinkSync(usaFile);
    console.log('Deleted usa.txt');
}

const canadaStream = fs.createWriteStream(canadaFile);
const usaStream = fs.createWriteStream(usaFile);

const header = 'country,year,population\n';
canadaStream.write(header);
usaStream.write(header);

fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => {
        let countryName = data.country.toLowerCase();

        if (countryName === 'canada') {
            let row = data.country + ',' + data.year + ',' + data.population + '\n';
            canadaStream.write(row);
        } 
        
        if (countryName === 'united states') {
            let row = data.country + ',' + data.year + ',' + data.population + '\n';
            usaStream.write(row);
        }
    })
    .on('end', () => {
        console.log('Finished processing the CSV file.');
        canadaStream.end();
        usaStream.end();
    });