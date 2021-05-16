"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication = __importStar(require("controllers/authentication"));
const comments = __importStar(require("controllers/comments"));
const issues = __importStar(require("controllers/issues"));
const projects = __importStar(require("controllers/projects"));
const test = __importStar(require("controllers/test"));
const users = __importStar(require("controllers/users"));
exports.attachPublicRoutes = (app) => {
    if (process.env.NODE_ENV === 'test') {
        app.delete('/test/reset-database', test.resetDatabase);
        app.post('/test/create-account', test.createAccount);
    }
    app.post('/authentication/guest', authentication.createGuestAccount);
};
exports.attachPrivateRoutes = (app) => {
    app.post('/comments', comments.create);
    app.put('/comments/:commentId', comments.update);
    app.delete('/comments/:commentId', comments.remove);
    app.get('/issues', issues.getProjectIssues);
    app.get('/issues/:issueId', issues.getIssueWithUsersAndComments);
    app.post('/issues', issues.create);
    app.put('/issues/:issueId', issues.update);
    app.delete('/issues/:issueId', issues.remove);
    app.get('/project', projects.getProjectWithUsersAndIssues);
    app.put('/project', projects.update);
    app.get('/currentUser', users.getCurrentUser);
};
//# sourceMappingURL=routes.js.map