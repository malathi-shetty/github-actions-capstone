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
- Version: v1.0.58
- Commit: 026f928

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

```text
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
