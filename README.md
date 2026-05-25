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

## 🚀 Release Summary (AI DevSecOps Report)

- Build: success
- Docker: success
- Image: shettymalathi113/github-actions-capstone:v1.0.50
- Tag: v1.0.50
- Commit: 15e0d82

---

## 🔐 Security Scan (Trivy)
- Status: CRITICAL/HIGH enforced
- Mode: Fail-on-critical enabled
- Report: uploaded as artifact

---

## 🐳 Docker Image
- Repo: github-actions-capstone
- Image: shettymalathi113/github-actions-capstone:v1.0.50
- Commit SHA: 15e0d82

---

## 📦 Pipeline Flow
GitHub Push → Build → Test → Docker → Trivy Scan → Tag → Deploy → README Update

---

## 🚀 System Status
Production Ready ✅
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
![Version](https://img.shields.io/github/v/tag/malathi-shetty/github-actions-capstone)

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
