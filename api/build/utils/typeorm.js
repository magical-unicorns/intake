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
const validation_1 = require("utils/validation");
const entities = { Comment: entities_1.Comment, Issue: entities_1.Issue, Project: entities_1.Project, User: entities_1.User };
exports.findEntityOrThrow = (Constructor, id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const instance = yield Constructor.findOne(id, options);
    if (!instance) {
        throw new errors_1.EntityNotFoundError(Constructor.name);
    }
    return instance;
});
exports.validateAndSaveEntity = (instance) => __awaiter(void 0, void 0, void 0, function* () {
    const Constructor = entities[instance.constructor.name];
    if ('validations' in Constructor) {
        const errorFields = validation_1.generateErrors(instance, Constructor.validations);
        if (Object.keys(errorFields).length > 0) {
            throw new errors_1.BadUserInputError({ fields: errorFields });
        }
    }
    return instance.save();
});
exports.createEntity = (Constructor, input) => __awaiter(void 0, void 0, void 0, function* () {
    const instance = Constructor.create(input);
    return exports.validateAndSaveEntity(instance);
});
exports.updateEntity = (Constructor, id, input) => __awaiter(void 0, void 0, void 0, function* () {
    const instance = yield exports.findEntityOrThrow(Constructor, id);
    Object.assign(instance, input);
    return exports.validateAndSaveEntity(instance);
});
exports.deleteEntity = (Constructor, id) => __awaiter(void 0, void 0, void 0, function* () {
    const instance = yield exports.findEntityOrThrow(Constructor, id);
    yield instance.remove();
    return instance;
});
//# sourceMappingURL=typeorm.js.map