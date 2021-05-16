"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const errors_1 = require("errors");
exports.handleError = (error, _req, res, _next) => {
    console.error(error);
    const isErrorSafeForClient = error instanceof errors_1.CustomError;
    const clientError = isErrorSafeForClient
        ? lodash_1.pick(error, ['message', 'code', 'status', 'data'])
        : {
            message: 'Something went wrong, please contact our support.',
            code: 'INTERNAL_ERROR',
            status: 500,
            data: {},
        };
    res.status(clientError.status).send({ error: clientError });
};
//# sourceMappingURL=errors.js.map