import {AWSIAMRolePolicyDocument } from "./AWSRolePolicyDocumentType";
function VerifyJson(json: AWSIAMRolePolicyDocument): boolean {
    if(!json || !json.PolicyDocument || !json.PolicyDocument.Statement)
        return true;

    for (const statement of json.PolicyDocument.Statement) {
        if (statement.Resource === "*" || statement.Resource === '*')
            return false;
    }
    return true;
}

export default VerifyJson;