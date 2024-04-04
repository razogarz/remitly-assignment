"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function VerifyJson(json) {
    if (!json || !json.PolicyDocument || !json.PolicyDocument.Statement)
        return true;
    for (var _i = 0, _a = json.PolicyDocument.Statement; _i < _a.length; _i++) {
        var statement = _a[_i];
        if (statement.Resource === "*" || statement.Resource === '*')
            return false;
    }
    return true;
}
exports.default = VerifyJson;
