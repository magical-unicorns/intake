"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRespondToResponse = (_req, res, next) => {
    res.respond = (data) => {
        res.status(200).send(data);
    };
    next();
};
//# sourceMappingURL=response.js.map