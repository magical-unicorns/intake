"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("errors");
exports.getCurrentUser = errors_1.catchErrors((req, res) => {
    res.respond({ currentUser: req.currentUser });
});
//# sourceMappingURL=users.js.map