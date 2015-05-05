'use strict';

describe('Unit: htTournaments', function () {

  beforeEach(module('app'));

  it('should contain an htTournaments service',
    inject(function (htTournaments) {
      expect(htTournaments).not.to.equal(null);
    })
  );



});
