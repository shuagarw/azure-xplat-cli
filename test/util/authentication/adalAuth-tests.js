/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var should = require('should');

var adalAuth = require('../../../lib/util/authentication/adalAuth');

describe('tenant from username', function () {
  it('should return everything after @ if present', function () {
    adalAuth.tenantIdForUser('user@sometenant.testorg.example').should.equal('sometenant.testorg.example');
  });
  
  it('should append onmicrosoft.com if no domain present', function () {
    adalAuth.tenantIdForUser('user@sometenant').should.equal('sometenant.onmicrosoft.com');
  });
  
  it('should throw if no domain is present', function () {
    (function () {
      return adalAuth.tenantIdForUser('user');
    }).should.throw();
  });
});

describe('login as service principal', function () {
  var config = {
    resourceId: 'https://res123',
    authorityUrl: 'https://authority123'
  };
  
  it('should invoke callback on error', function (done) {
    //arrange 
    var accessToken = '123';
    var tokenMatched = false;
    adalAuth.tokenCache.find = function (query, callback) {
      callback(null, [{ 'accessToken' : accessToken}]);
    }
    adalAuth.tokenCache.remove = function (entries, callback) {
      tokenMatched = (entries.length === 1 && entries[0].accessToken === accessToken);
      callback(null);
    }
    //action
    var token = new adalAuth.ServicePrincipalAccessToken(config, 'apid123');
    token.authenticateRequest(function (err) {
      //assert
      var errorFired = (!!err);
      errorFired.should.be.true;
      tokenMatched.should.be.true;
      done();
    });
  });
  
  it('should not add empty refresh token to credentails cache', function (done) {
    //arrange 
    var addInvoked = false;
    var hasRefreshToken = false;
    adalAuth.tokenCache.add = function (entries, callback) {
      addInvoked = true;
      hasRefreshToken == !!(entries[0].refreshToken);
      callback(null);
    }
    //action
    adalAuth.acquireServicePrincipalToken(config, 'https://myapp1', 'Secret', function(){
      addInvoked.should.be.true;
      hasRefreshToken.should.be.false;
      done();
    });
  });
});

describe('logoutUser', function () {
  it('remove cached tokens', function (done) {
    //arrange 
    var timesTokenFindGetsInvoked = 0;
    var timesTokenRemoveGetsInvoked = 0;
    var entriesToRemove;
    var tokenCache = {
      find: function (query, callback) { 
        timesTokenFindGetsInvoked++;
        callback(null, [{foo: timesTokenFindGetsInvoked}]);
      },
      remove: function (entries, callback) {
        timesTokenRemoveGetsInvoked++;
        entriesToRemove = entries;
        callback();
      }
    };
    //action
    adalAuth.logoutUser('dummyUser', tokenCache, function (err) {
      //verify
      timesTokenFindGetsInvoked.should.equal(3);
      timesTokenRemoveGetsInvoked.should.equal(1);
      entriesToRemove.length.should.equal(3);
      done();
    });
  });
});
