"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.issuePartial = (issue) => lodash_1.pick(issue, [
    'id',
    'title',
    'type',
    'status',
    'priority',
    'listPosition',
    'createdAt',
    'updatedAt',
    'userIds',
]);
//# sourceMappingURL=issues.js.map