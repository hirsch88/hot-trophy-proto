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
  function htTournamentsService(HtTournamentModel, EVENT_STATUS_OPEN, EVENT_STATUS_READY, EVENT_STATUS_ACTIVE) {

    var list = [];

    create('FIFA Tournament 2015', moment(), EVENT_STATUS_ACTIVE, [
      {id: 1, name: 'Rockets', icon: 'fa-rocket', date: moment().days(-10), captain: 'John Diggle'},
      {id: 2, name: 'Diamonds', icon: 'fa-diamond', date: moment().days(-26), captain: 'Barry Allan'},
      {id: 3, name: 'Empire', icon: 'fa-empire', date: moment().days(-13), captain: 'Oliver Queen'},
      {id: 4, name: 'Jets', icon: 'fa-fighter-jet', date: moment().days(-33), captain: 'Bruce Wayne'},
      {id: 5, name: 'Rebels', icon: ' fa-rebel', date: moment().days(-30), captain: 'Tony Stark'}
    ], 'This is a EA FIFA15 game tournament. One game duration is about 6 min');
    list[0].generateSchedule();

    list[0].schedule[0][0].scoreHome = 1;
    list[0].schedule[0][0].scoreAway = 4;

    list[0].schedule[0][1].scoreHome = 0;
    list[0].schedule[0][1].scoreAway = 2;

    list[0].schedule[1][0].scoreHome = 1;
    list[0].schedule[1][0].scoreAway = 1;


    create('Soccer Event', moment().days(10), EVENT_STATUS_READY, [
      {id: 1, name: 'Pinguins', icon: ' fa-linux', date: moment().days(-10), captain: 'Barry Allan'},
      {id: 2, name: 'Appels', icon: 'fa-apple', date: moment().days(-22), captain: 'Oliver Queen'},
      {id: 3, name: 'Birds', icon: 'fa-twitter', date: moment().days(-23), captain: 'Oliver Queen'},
      {id: 4, name: 'Stars', icon: 'fa-star', date: moment().days(-23), captain: 'Tony Stark'}
    ], 'The Seattle soccer club sportsday');
    list[1].generateSchedule();

    create('Medical Sports Day', moment().days(30), EVENT_STATUS_OPEN, [
      {id: 1, name: 'Heartbreakers', icon: 'fa-heartbeat', date: moment().days(-23), captain: 'Barry Allan'},
      {id: 2, name: 'Ambulance', icon: 'fa-ambulance', date: moment().days(-10), captain: 'Oliver Queen'},
      {id: 3, name: 'Nurses', icon: 'fa-medkit', date: moment().days(-12), captain: 'Pepper Stark'},
      {id: 4, name: 'Stars', icon: 'fa-star', date: moment().days(-12), captain: 'Tony Stark'}
    ], 'Our hospital has a sportsday now. We will play at the chelsea sport center');


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
        new HtTournamentModel(obj)
      );
    }

    function create(name, date, status, teams, description) {
      list.push(
        new HtTournamentModel(name, date, status, teams, description)
      );
    }


  }




}());
