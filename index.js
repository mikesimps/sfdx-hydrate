const hydrateScratchfile = require('./commands/hydrateScratchfile.js');
const hydratePackagexml = require('./commands/hydratePackagexml.js');

(function () {
  'use strict';

  exports.topics = [{
    name: 'hydrate',
    description: 'Create configuration from an existing salesforce org'
  }];

  exports.commands = [
    hydrateScratchfile,
    hydratePackagexml
  ];
}());
