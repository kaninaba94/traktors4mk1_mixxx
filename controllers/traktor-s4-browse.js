// ~/.mixxx/controllers/s4browse.js
// Traktor S4 MK1 – browse encoder for Mixxx 2.4
// The knob sends 0x42 (+2) and 0x3E (-2) in binary-offset form.
var S4 = {};

/* --- Mixxx looks for these two; keep them even if empty --- */
S4.init = function () {};          // prevents “has no init method” warning
S4.shutdown = function () {};      // (optional but tidy)
//S4.browse = function (_channel, _control, value, _status, _group) {
//    // Binary-offset: 0x40 = 0
//    var delta = value - 0x40;       // +2, −2, or 0
//    if (delta === 0) {
//        return;                     // no movement
//    }
//    // Convert ±2 → ±1
//    engine.setValue("[Library]", "MoveVertical", delta / 2);
//};

/* --- main handler --- */
S4.browse = function (ch, ctrl, value) {
    console.log('ch:', ch, 'ctrl:', ctrl, 'value:', value);
    if (value == 63) return;
    const delta = value - 0x40;          // +2 / -2 / 0
    engine.setValue("[Library]", "MoveVertical", delta == 0 ? 1 : -1);
};
