# EC2 Prerequisites Setup

## 1. Install Docker
```bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user
```

## 2. Install AWS CLI v2
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

## 3. Configure AWS CLI
```bash
aws configure
# Enter AWS Access Key ID
# Enter AWS Secret Access Key
# Enter region (e.g., us-east-1)
# Enter output format: json
```

## 4. Security Group Rules
- Port 80 (HTTP) - Open to 0.0.0.0/0
- Port 22 (SSH) - Open to your IP or GitHub Actions IPs
- Port 443 (HTTPS) - Optional for SSL

## 5. IAM Permissions Required
EC2 instance needs ECR pull permissions:
- AmazonEC2ContainerRegistryReadOnly

## 6. Verify Setup
```bash
docker --version
aws --version
docker ps
```

## 7. Logout and Login
```bash
exit
# SSH back in for docker group to take effect
```
