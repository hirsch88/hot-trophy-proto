/**
 * Tournaments
 * @namespace common
 */
(function () {
  'use strict';

  angular
    .module('common.service.htTournaments', [])
    .constant('EVENT_STATUS_OPEN', 0)
    .constant('EVENT_STATUS_READY', 1)
    .constant('EVENT_STATUS_ACTIVE', 2)
    .constant('EVENT_STATUS_ARCHIVE', 3)
    .factory('htTournaments', htTournamentsService);

  /**
   * @memberOf common
   * @namespace common.service.tournaments
   *
   * @description
   *
   * aktiv
   * bereit
   * arichiv
   * offen + anmelung
   *
   */
  function htTournamentsService(htTournamentModel, EVENT_STATUS_OPEN, EVENT_STATUS_READY, EVENT_STATUS_ACTIVE) {

    var list = [];

    create('FIFA Tournament 2015', moment(), EVENT_STATUS_ACTIVE, [
      {id: 1, name: 'Rockets', icon: 'fa-rocket'},
      {id: 2, name: 'Diamonds', icon: 'fa-diamond'},
      {id: 3, name: 'Empire', icon: 'fa-empire'},
      {id: 4, name: 'Jets', icon: 'fa-fighter-jet'},
      {id: 5, name: 'Rebels', icon: ' fa-rebel'}
    ]);
    list[0].generateSchedule();

    list[0].schedule[0][0].scoreHome = 0;
    list[0].schedule[0][0].scoreAway = 4;

    list[0].schedule[1][0].scoreHome = 1;
    list[0].schedule[1][0].scoreAway = 2;

    list[0].schedule[2][0].scoreHome = 1;
    list[0].schedule[2][0].scoreAway = 1;


    create('Soccer Event', moment().days(10), EVENT_STATUS_READY, [
      {id: 1, name: 'Pinguins', icon: ' fa-linux'},
      {id: 2, name: 'Appels', icon: 'fa-apple'},
      {id: 3, name: 'Birds', icon: 'fa-twitter'},
      {id: 4, name: 'Stars', icon: 'fa-star'}
    ]);
    list[1].generateSchedule();

    create('Medical Sports Day', moment().days(30), EVENT_STATUS_OPEN, [
      {id: 1, name: 'Heartbreakers', icon: 'fa-heartbeat'},
      {id: 2, name: 'Ambulance', icon: 'fa-ambulance'}
    ]);


    var service = {
      getAll: getAll,
      get:    read,
      create: create,
      add:    add
    };

    return service;

    ////////////////////////

    function getAll() {
      return list;
    }

    function read(id) {
      id = parseInt(id, 10);
      return _(list)
        .findWhere({id: id});
      //.value();
    }

    function add(obj) {
      list.push(
        new htTournamentModel(obj)
      );
    }

    function create(name, date, status, teams) {
      list.push(
        new htTournamentModel(name, date, status, teams)
      );
    }


  }

  const DUMMY = -1;

  function RoundRobin(n, ps) {
// returns an array of round representations (array of player pairs).
// http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm
    // n = num players
    var rs = [];                  // rs = round array
    if (!ps) {
      ps = [];
      for (var k = 1; k <= n; k += 1) {
        ps.push(k);
      }
    } else {
      ps = ps.slice();
    }

    if (n % 2 === 1) {
      ps.push(DUMMY); // so we can match algorithm for even numbers
      n += 1;
    }
    for (var j = 0; j < n - 1; j += 1) {
      rs[j] = []; // create inner match array for round j
      for (var i = 0; i < n / 2; i += 1) {
        if (ps[i] !== DUMMY && ps[n - 1 - i] !== DUMMY) {
          rs[j].push([ps[i], ps[n - 1 - i]]); // insert pair as a match
        }
      }
      ps.splice(1, 0, ps.pop()); // permutate for next round
    }
    return rs;
  }


}());
