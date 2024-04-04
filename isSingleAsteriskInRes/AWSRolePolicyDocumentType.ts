class AWSIAMRolePolicyDocument {
    constructor(
        public PolicyName: string,
        public PolicyDocument: {
            Version: string,
            Statement: {
                Sid: string,
                Effect: string,
                Action: string | string[],
                Resource: string
            }[]
        }
    ) {}
}

export { AWSIAMRolePolicyDocument };