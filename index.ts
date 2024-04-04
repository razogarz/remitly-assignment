import validAWSRolePolicy from "./isSingleAsteriskInRes/IsSingleAsteriskInRes";

const testObjects = {
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

console.log(validAWSRolePolicy(testObjects));
