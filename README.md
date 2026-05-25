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
- Image: 
- Version: v1.0.44
- Commit: a5f8f70

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
![Version](https://img.shields.io/github/v/tag/shettymalathi113/github-actions-capstone)

---

## 🧩 CI/CD Architecture

```bash
GitHub Push
   ↓
Build & Test
   ↓
Trivy Scan (BLOCK CRITICAL)
   ↓
Docker Build
   ↓
Tag Release (ONLY if scan passes)
   ↓
Push to Docker Hub
   ↓
Git Tag Release
   ↓
Deploy
   ↓
Save Artifact
   ↓
AI Release Notes → README update (replace section)
```

---
## 🚀 Release Summary

- Build: success
- Docker: Pushed successfully
- Image: 
- Version: v1.0.37
- Commit: 6ac95a9

## 🔐 Security
- Trivy Scan: Enabled (CRITICAL/HIGH enforced)

## 📦 Pipeline Flow
Build → Test → Docker → Security Scan → Tag → Deploy

🚀 System is production ready
