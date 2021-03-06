Package.describe({
  name: 'ramsay:react-components-header',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'React Header component',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ramsaylanier/react-components-header',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
     'ramsay:react-components-dependencies@0.0.2'
  ], 'client');

  api.addFiles([
    'client/templates/header.html',
    'client/templates/header.jsx'
  ], 'client');

  api.export(['Header', 'Logo'], 'client');
});
