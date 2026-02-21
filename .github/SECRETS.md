# GitHub Secrets Required

Add these secrets in: GitHub Repository → Settings → Secrets and variables → Actions

## AWS Credentials
- `AWS_ACCESS_KEY_ID` - Your AWS IAM access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS IAM secret key
- `AWS_REGION` - AWS region (e.g., us-east-1)
- `ECR_REPOSITORY` - ECR repository name (e.g., resume-q)

## EC2 Credentials
- `EC2_HOST` - EC2 public IP or domain (e.g., 54.123.45.67)
- `EC2_SSH_KEY` - Private SSH key content (entire .pem file)

## Application Secrets
- `GEMINI_API_KEY` - Google Gemini API key
