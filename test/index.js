require('../require-hook');

var expect = require('chai').expect;
var resolveFrom = require('../').resolveFrom;

it('should resolve adaptive files', function() {
    var flags = { mobile:true, ios:true };
    var resolvedStyle = resolveFrom(__filename, './files/style.css', { flags });
    var resolvedStyle2 = resolveFrom(resolvedStyle, './style.css', { flags });

    expect(resolvedStyle).to.equal(require.resolve('./files/style.mobile.ios.css'));
    expect(resolvedStyle2).to.equal(require.resolve('./files/style.css'));
});

it('should resolve adaptive directories');

it('should handle adaptive directories on the server', function() {
    var component = require('./component');
    console.log(component);
});