function forkInnerZoneWithAngularBehavior(zone: NgZonePrivate) {
  zone._inner = zone._inner.fork({
    name: 'angular',
    
    onInvokeTask: (delegate: ZoneDelegate, current: Zone, target: Zone, task: Task, applyThis: any) {},

    onInvoke: (delegate: ZoneDelegate, current: Zone, target: Zone, callback: Function, {},

    onHasTask:
        (delegate: ZoneDelegate, current: Zone, target: Zone, hasTaskState: HasTaskState) => {
        },

  });
}
