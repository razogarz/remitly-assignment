"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IsSingleAsteriskInRes_1 = require("./isSingleAsteriskInRes/IsSingleAsteriskInRes");
var testObjects = {
    "PolicyName": "root",
    "PolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "IamListAccess",
                "Effect": "Allow",
                "Action": [
                    "iam:ListRoles",
                    "iam:ListUsers"
                ],
                "Resource": "*"
            }
        ]
    }
};
console.log((0, IsSingleAsteriskInRes_1.default)(testObjects));
