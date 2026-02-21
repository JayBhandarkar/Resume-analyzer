# How to Get GitHub Secrets Values

## 1. AWS_REGION
**Where:** AWS Console top-right corner
**Value:** Region code where you created resources
**Examples:**
- `us-east-1` (N. Virginia)
- `us-west-2` (Oregon)
- `ap-south-1` (Mumbai)
- `eu-west-1` (Ireland)

## 2. ECR_REPOSITORY
**Step 1:** Create ECR repository
```bash
aws ecr create-repository --repository-name resume-q --region us-east-1
```

**Step 2:** Get repository name
- AWS Console → ECR → Repositories
- Copy repository name (e.g., `resume-q`)
- **Value:** Just the name, NOT the full URI

## 3. EC2_HOST
**Step 1:** Launch EC2 instance
- AWS Console → EC2 → Launch Instance
- Choose Amazon Linux 2023 AMI
- Instance type: t2.micro (free tier)
- Create/select key pair (download .pem file)
- Security group: Allow ports 22, 80

**Step 2:** Get public IP
- AWS Console → EC2 → Instances
- Select your instance
- Copy "Public IPv4 address"
- **Value:** `54.123.45.67` (example)

## 4. EC2_SSH_KEY
**Step 1:** Locate your .pem file
- Downloaded when creating EC2 instance
- File name: `your-key-name.pem`

**Step 2:** Get content (Windows)
```cmd
type your-key-name.pem
```

**Step 2:** Get content (Mac/Linux)
```bash
cat your-key-name.pem
```

**Step 3:** Copy entire output including:
```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA...
(multiple lines)
...
-----END RSA PRIVATE KEY-----
```

**Value:** Entire content with BEGIN/END lines

## 5. GEMINI_API_KEY
**Step 1:** Visit Google AI Studio
- URL: https://makersuite.google.com/app/apikey

**Step 2:** Create API key
- Click "Create API key"
- Copy the key

**Value:** `AIzaSy...` (starts with AIzaSy)

---

## Add Secrets to GitHub

1. Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions`
2. Click "New repository secret"
3. Add each secret:
   - Name: `AWS_REGION`
   - Value: `us-east-1`
4. Repeat for all secrets

## Verify Secrets Added
- AWS_ACCESS_KEY_ID ✓
- AWS_SECRET_ACCESS_KEY ✓
- AWS_REGION
- ECR_REPOSITORY
- EC2_HOST
- EC2_SSH_KEY
- GEMINI_API_KEY
