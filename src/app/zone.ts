export class NgZone {
  constructor({enableLongStackTrace = false}) {
   //...
    forkInnerZoneWithAngularBehavior(self);
  }
}

function forkInnerZoneWithAngularBehavior(zone: NgZonePrivate) {
  zone._inner = zone._inner.fork({
    name: 'angular',
    //...
}

function onEnter(zone: NgZonePrivate) {
  zone._nesting++;
  if (zone.isStable) {
    zone.isStable = false;
    zone.onUnstable.emit(null);
  }
}

function onLeave(zone: NgZonePrivate) {
  zone._nesting--;
  checkStable(zone);
}

/**
 * Provides a noop implementation of `NgZone` which does nothing. This zone requires explicit calls
 * to framework to perform rendering.
 *
 * @internal
 */
export class NoopNgZone implements NgZone {
  readonly hasPendingMicrotasks: boolean = false;
  readonly hasPendingMacrotasks: boolean = false;
  readonly isStable: boolean = true;
  readonly onUnstable: EventEmitter<any> = new EventEmitter();
  readonly onMicrotaskEmpty: EventEmitter<any> = new EventEmitter();
  readonly onStable: EventEmitter<any> = new EventEmitter();
  readonly onError: EventEmitter<any> = new EventEmitter();

  run(fn: () => any): any { return fn(); }

  runGuarded(fn: () => any): any { return fn(); }

  runOutsideAngular(fn: () => any): any { return fn(); }

  runTask<T>(fn: () => any): any { return fn(); }
}
