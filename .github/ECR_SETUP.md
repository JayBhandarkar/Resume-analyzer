# AWS ECR Setup

## 1. Create ECR Repository
```bash
aws ecr create-repository \
  --repository-name resume-q \
  --region us-east-1
```

## 2. Get Repository URI
```bash
aws ecr describe-repositories \
  --repository-names resume-q \
  --region us-east-1
```

Output will show:
```json
{
  "repositoryUri": "123456789012.dkr.ecr.us-east-1.amazonaws.com/resume-q"
}
```

## 3. Set GitHub Secret
- `ECR_REPOSITORY` = `resume-q` (just the name, not full URI)

## 4. IAM Policy for GitHub Actions
Attach to IAM user used in GitHub Actions:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:CompleteLayerUpload"
      ],
      "Resource": "*"
    }
  ]
}
```
