'use strict';

const fs = require('fs');

module.exports = (path, callback) => {

  let filesData = [];

  fs.readFile(path[0], (err, data) => {
    if(err)
      return console.error(err);
    filesData.push(data.toString());

    fs.readFile(path[1], (err, data) => {
      if(err)
        return console.error(err);
      filesData.push(data.toString());

      fs.readFile(path[2], (err,data) => {
        if(err)
          return console.error(err);
        filesData.push(data.toString());
        callback(filesData);
      });
    });
  });
};
