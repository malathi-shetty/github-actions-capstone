# 🚀 DevSecOps CI/CD Pipeline

## 📌 Project Overview
Node.js app with full CI/CD + security pipeline.

---

## 🛠️ Tech Stack
- Node.js
- Docker
- GitHub Actions
- Trivy

---

## 📊 CI/CD Dashboard

<!-- CI-REPORT-START -->
## 🚀 Release Summary

- Build: success
- Docker: Success
- Image: v1.0.67-b118f74
- Version: v1.0.67
- Commit: b118f74

## 🔐 Security
- Trivy Scan: CRITICAL/HIGH enforced

## 📦 Flow
Build → Test → Docker → Scan → Tag → Deploy

🚀 System is production ready
<!-- CI-REPORT-END -->

---

## 🚀 CI/CD Pipeline Status

### 🔄 Workflows
![PR](https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/pr-pipeline.yml/badge.svg)
![Main](https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/main-pipeline.yml/badge.svg)
![Docker](https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/reusable-docker.yml/badge.svg)
![Health](https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/health-check.yml/badge.svg)

---

### 🐳 Docker Metrics
![Pulls](https://img.shields.io/docker/pulls/shettymalathi113/github-actions-capstone)
![Size](https://img.shields.io/docker/image-size/shettymalathi113/github-actions-capstone/latest)


---



## 🧱 CI/CD Architecture (Visual Flow)

```bash
Developer Push
      ↓
GitHub Actions Trigger
      ↓
Build & Test
      ↓
Docker Build
      ↓
Trivy Security Scan (BLOCK CRITICAL)
      ↓
Push to Docker Hub
      ↓
Git Tag Release
      ↓
Deploy
      ↓
README Auto Update

------

- name: Generate AI Release Notes
  run: |
    SHORT_SHA=$(echo $GITHUB_SHA | cut -c1-7)
    TIME=$(date -u)

    echo "## 🚀 AI DevSecOps Release Notes" > release.md
    echo "" >> release.md
    echo "### 🧠 Summary" >> release.md
    echo "- Pipeline executed successfully" >> release.md
    echo "- Security scanning completed via Trivy" >> release.md
    echo "- Docker image built and deployed" >> release.md
    echo "" >> release.md

    echo "### 📦 Build Info" >> release.md
    echo "- Image: ${{ needs.docker.outputs.image_url }}" >> release.md
    echo "- Commit: $SHORT_SHA" >> release.md
    echo "- Version: v1.0.${GITHUB_RUN_NUMBER}" >> release.md
    echo "- Timestamp (UTC): $TIME" >> release.md
    echo "- Deployment Time (UTC): $(date -u)" >> release.md

    - name: Generate AI Release Notes (OpenAI)
  env:
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
  run: |
    SHORT_SHA=$(echo $GITHUB_SHA | cut -c1-7)

    RESPONSE=$(curl -s https://api.openai.com/v1/chat/completions \
      -H "Authorization: Bearer $OPENAI_API_KEY" \
      -H "Content-Type: application/json" \
      -d '{
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "system",
            "content": "You are a DevSecOps release notes generator."
          },
          {
            "role": "user",
            "content": "Generate professional release notes for a CI/CD pipeline. Include build, docker, security scan, commit '"$SHORT_SHA"' and version v1.0.'"${GITHUB_RUN_NUMBER}"'. Keep it concise and professional."
          }
        ]
      }')

    echo "$RESPONSE" > ai_response.json

    echo "## 🤖 AI Release Notes" > release.md
    echo "" >> release.md
    echo "$RESPONSE" >> release.md
