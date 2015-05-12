/**
 * Tournaments
 * @namespace common
 */
(function () {
  'use strict';

  angular
    .module('common.model.htTournaments', [])
    .constant('EVENT_STATUS_OPEN', 0)
    .constant('EVENT_STATUS_READY', 1)
    .constant('EVENT_STATUS_ACTIVE', 2)
    .constant('EVENT_STATUS_ARCHIVE', 3)
    .factory('HtTournamentModel', HtTournamentModel);


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
  function HtTournamentModel(EVENT_STATUS_OPEN, EVENT_STATUS_READY, EVENT_STATUS_ACTIVE, $rootScope) {

    $rootScope.eventIdCounter = 0;

    /**
     *
     * @param name
     * @param date
     * @param status
     * @param teams
     * @constructor
     */
    function Event(name, date, status, teams, description) {
      this.id = ++$rootScope.eventIdCounter;
      this.schedule = [];

      if (_.isObject(name)) {
        this.name = name.name || '';
        this.description = name.description || '';
        this.date = moment(name.date) || moment();
        this.status = name.status || 0;
        this.teams = name.teams;
      } else {
        this.name = name || '';
        this.description = description || '';
        this.date = moment(date) || moment();
        this.status = status || 0;
        this.teams = teams;
      }

    }

    Event.prototype.getTeams = function () {
      return this.teams;
    };

    Event.prototype.removeTeam = function (teamToRemove) {
      this.teams = _(this.teams).remove(function (team) {
        return team.name !== teamToRemove.name;
      }).value();
      return this.teams;
    };

    Event.prototype.setTeam = function (newTeam) {
      if (!_.isArray(this.teams)) {
        this.teams = [];
      }
      this.teams.push(newTeam);
      return this.teams;
    };


    Event.prototype.setReady = function () {
      this.status = EVENT_STATUS_READY;
    };

    /**
     *
     */
    Event.prototype.generateSchedule = function () {
      this.schedule = roundRobin(this.teams.length, this.teams);

      this.schedule = _(this.schedule)
        .map(function (round) {
          try {
            round[0].scoreHome = null;
            round[0].scoreAway = null;
          } catch (e) {

          }
          try {
            round[1].scoreHome = null;
            round[1].scoreAway = null;
          } catch (e) {

          }
          return round;
        })
        .value();

    };

    /**
     *
     * @returns {Array}
     */
    Event.prototype.getTable = function () {
      var table = [];
      var self = this;
      var rank = 1;
      var previousRow;

      _.forEach(self.teams, function (team) {
        table.push({
          team: team,
          rank: 1,
          ply:  0,
          pts:  0,
          win:  0,
          draw: 0,
          lose: 0,
          gp:   0,
          gn:   0
        });
      });

      table = _(table)
        .map(function (row) {

          // played
          row.ply = _.countBy(self.schedule, function (round) {
              return (round[0][0].id === row.team.id || round[0][1].id === row.team.id )
                && round[0].scoreHome !== null ||
                (round[1][0].id === row.team.id || round[1][1].id === row.team.id ) && round[1].scoreHome !== null;
            }).true || 0;

          // goals
          _(self.schedule)
            .filter(function (round) {
              console.log(round);
              var firstGame = (round[0][0].id === row.team.id || round[0][1].id === row.team.id )
                && round[0].scoreHome !== null;
              var secondGame = (round[1][0].id === row.team.id || round[1][1].id === row.team.id )
                && round[1].scoreHome !== null;
              return firstGame || secondGame;
            })
            .map(function (round) {

              var teams = [];
              teams.push(round[0][0].id);
              teams.push(round[0][1].id);
              teams.push(round[1][0].id);
              teams.push(round[1][1].id);

              var index = _.indexOf(teams, row.team.id);

              var roundIndex = 0;
              var sideIndex = 0;
              switch (index) {
                // 1st Round
                case 0: // Home
                  roundIndex = 0;
                  sideIndex = 0;
                  break;

                case 1: // Away
                  roundIndex = 0;
                  sideIndex = 1;
                  break;

                // 2nd Round
                case 2: // Home
                  roundIndex = 1;
                  sideIndex = 0;
                  break;

                case 3:// Away
                  roundIndex = 1;
                  sideIndex = 1;
                  break;
              }

              //function reverseSide(sideIndex) {
              //  return (sideIndex === 0) ? 1 : 0;
              //}

              function reverseScore(sideIndex) {
                return (sideIndex === 0) ? 'scoreAway' : 'scoreHome';
              }

              function getScore(sideIndex) {
                return (sideIndex === 1) ? 'scoreAway' : 'scoreHome';
              }


              if (index >= 0) {

                // Goals
                row.gp += round[roundIndex][getScore(sideIndex)];
                row.gn += round[roundIndex][reverseScore(sideIndex)];

                // Loses
                row.lose += ( round[roundIndex][getScore(sideIndex)] < round[roundIndex][reverseScore(sideIndex)] )
                  ? 1 : 0;

                // Draws
                row.draw += ( round[roundIndex][getScore(sideIndex)] === round[roundIndex][reverseScore(sideIndex)] )
                  ? 1 : 0;

                // Wins
                row.win += ( round[roundIndex][getScore(sideIndex)] > round[roundIndex][reverseScore(sideIndex)] )
                  ? 1 : 0;

                // Points
                if (round[roundIndex][getScore(sideIndex)] > round[roundIndex][reverseScore(sideIndex)]) {
                  row.pts += 3;
                } else if (round[roundIndex][getScore(sideIndex)] === round[roundIndex][reverseScore(sideIndex)]) {
                  row.pts += 1;
                }

              }

            })
            .value();

          return row;
        })
        .sortByOrder(['pts', 'gp', 'gn'], [false, false, true])
        .map(function (row) {
          row.rank = rank;

          if (previousRow && previousRow.pts > row.pts) {
            row.rank++;
          }

          previousRow = row;
          rank = row.rank;
          return row;
        })
        .value();

      //console.log(table);

      return table;
    };

    ////////////////////////////////////////////////

    return Event;

  }

  ////////////////////////////////////////////////

  var DUMMY = -1;

  /**
   * Rund Robin
   * @param n
   * @param ps
   * @returns {Array}
   * @constructor
   */
  function roundRobin(n, ps) {
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
