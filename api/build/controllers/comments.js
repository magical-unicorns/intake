"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("entities");
const errors_1 = require("errors");
const typeorm_1 = require("utils/typeorm");
exports.create = errors_1.catchErrors((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield typeorm_1.createEntity(entities_1.Comment, req.body);
    res.respond({ comment });
}));
exports.update = errors_1.catchErrors((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield typeorm_1.updateEntity(entities_1.Comment, req.params.commentId, req.body);
    res.respond({ comment });
}));
exports.remove = errors_1.catchErrors((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comment = yield typeorm_1.deleteEntity(entities_1.Comment, req.params.commentId);
    res.respond({ comment });
}));
//# sourceMappingURL=comments.js.map