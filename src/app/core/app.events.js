/**
 * @memberOf app
 * @namespace app.events
 *
 * @description
 * Event bus. Use this class to register events and trigger them from anywhere
 * All events must have name, but if there is no name give by the callback function name
 * we use the name anonymous for the callback function.
 *
 */
(function (window) {
  'use strict';

  /**
   * @global
   * @name AppEvents
   * @see app.events
   */
  function AppEvents() {
    this.eventCallbacks = {};
    this.queue = [];
  }

  /**
   *
   * @returns {{}|*}
   */
  AppEvents.prototype.list = function () {
    return this.eventCallbacks;
  };

  /**
   *
   * @param event
   * @param toState
   * @param toParams
   * @param fromState
   * @param fromParams
   */
  //AppEvents.prototype.onStateChangeSuccess = function (event, toState, toParams, fromState, fromParams) {
  //  for (var i = 0; i < this.queue.length; i++) {
  //    this.trigger(this.queue.event, this.queue.eventObject);
  //  }
  //  this.queue = [];
  //};

  /**
   * @name on
   * @param event
   * @param callback
   */
  AppEvents.prototype.on = function (event, callback) {
    var callbacks = this.eventCallbacks[event] || (this.eventCallbacks[event] = []);
    var name = AppUtil.getFunctionName(callback) || 'anonymous';
    var index = _(callbacks).findIndex({name: name});

    if (index === -1) {
      callbacks.push({
        name: name,
        func: callback
      });
    } else {
      callbacks[index].func = callback;
    }
  };

  /**
   * @name off
   * @param event
   * @param callback
   */
  AppEvents.prototype.off = function (event, callback) {
    var callbacks = this.eventCallbacks[event];
    if (_.isUndefined(callbacks)) {
      return;
    }

    var name = AppUtil.getFunctionName(callback) || 'anonymous';
    var index = _(callbacks).findIndex({name: name});
    if (index >= 0) {
      callbacks.splice(index, 1);
    }

    if (callbacks.length === 0) {
      delete this.eventCallbacks[event];
    }
  };

  /**
   * @name trigger
   * @param event
   * @param eventObject
   */
  AppEvents.prototype.trigger = function (event, eventObject) {
    var callbacks = this.eventCallbacks[event];
    if (angular.isDefined(callbacks)) {
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].func(eventObject);
      }
    }
  };

  /**
   *
   * @param event
   * @param eventObject
   */
  AppEvents.prototype.triggerAfterStateChange = function (event, eventObject) {
    this.queue.push({
      event:       event,
      eventObject: eventObject
    });
  };

  ///////////////////////////////////////////

  window.AppEvents = new AppEvents();

}(window));
