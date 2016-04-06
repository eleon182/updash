jasmine.getEnv().defaultTimeoutInterval = 30000;

var up = require('../updash.js');

describe('init', function(){
    it('exists', function(){
        expect(up).toBeDefined();
    });
});

describe('isSubArray', function(){
    it('isSubArray exists', function(){
        expect(up.isSubArray).toBeDefined();
    });

    it('returns true', function(){
        expect(up.isSubArray()).toBe(false);
    });
});
