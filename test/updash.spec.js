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

describe('sizeOfArray', function(){
    it('sizeOfArray exists', function(){
        expect(up.sizeOfArray).toBeDefined();
    });

    it('returns 3', function(){
        var ar = [1,2,3];
        expect(up.sizeOfArray(ar)).toBe(3);
    });
});

describe('cutFromArray', function(){
    it('cutFromArray exists', function(){
        expect(up.cutFromArray).toBeDefined();
    });

    it('returns [1,2]', function(){
        var ar = [1,2,3];
        expect(up.cutFromArray(ar, 2)).toEqual([1,2]);
    });
});

describe('checkIfExists', function(){
    it('checkIfExists exists', function(){
        expect(up.checkIfExists).toBeDefined();
    });

    it('returns 3', function(){
        var obj = {
            steve: 1
        };
        expect(up.checkIfExists(obj, 'steve')).toEqual(true);
    });
});
