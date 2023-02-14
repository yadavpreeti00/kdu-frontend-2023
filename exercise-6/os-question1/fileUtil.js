const fs = require('fs');

//fs.writeFileSync('system_details.json', getSystemDetails());


/**
 * Writes the given file from the filesystem.
 * Throws a error if the file write fails
 * @param {*} filePath The absolute or the relative file path of the file to be written.
 */
const writeFile = (fileName,jsonContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, jsonContent, (err) => {
        if (err) {
          //logger.error("An error occured while writing JSON Object to File.");
          reject((err, `Failed to save the file ${fileName}`));
        }
        //logger.info("JSON file has been saved.");
        resolve( `Successfully saved the file ${fileName}`);
      });
    });
  };

  module.exports = { writeFile };