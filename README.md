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
- Image: v1.0.74-091e8e1
- Version: v1.0.74
- Commit: 091e8e1

## 🔐 Security
- Trivy Scan: CRITICAL/HIGH enforced

## 📦 Flow
Build → Test → Docker → Scan → Tag → Deploy

🚀 System is production ready
<!-- CI-REPORT-END -->

---

## 🚀 CI/CD Pipeline Status

### 🔄 Workflows

<p>
<span>PR Pipeline</span>  <br>
  <a href="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/pr-pipeline.yml">
    <img src="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/pr-pipeline.yml/badge.svg" alt="PR Pipeline">
  </a>

  <br>
<span>Main Pipeline</span>  <br>
  <a href="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/main-pipeline.yml">
    <img src="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/main-pipeline.yml/badge.svg" alt="Main Pipeline">
  </a>

<span>Health Check</span>

  <a href="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/health-check.yml">
    <img src="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/health-check.yml/badge.svg" alt="Health Check">
  </a>

</p>

---

### 🐳 Docker Metrics

<p>
<span>Docker Pulls</span>
    <br>
  <a href="https://hub.docker.com/repository/docker/shettymalathi113/github-actions-capstone">
    <img src="https://img.shields.io/docker/pulls/shettymalathi113/github-actions-capstone" alt="Docker Pulls">
  </a>

<br>
<span>Docker Image Size</span>  <br>
  <a href="https://hub.docker.com/repository/docker/shettymalathi113/github-actions-capstone">
    <img src="https://img.shields.io/docker/image-size/shettymalathi113/github-actions-capstone/latest" alt="Docker Image Size">
  </a>

</p>

---



<!-- TRIVY-TABLE-START -->
## 🔐 Vulnerability Report (Trivy)

| Severity | Package | Vulnerability | Installed Version | Fixed Version |
|---|---|---|---|---|

<!-- TRIVY-TABLE-END -->

This section is automatically updated by CI/CD pipeline using Trivy scan results.

---



<!-- AI-START -->
## 🤖 AI Release Notes

- Build completed successfully
- Docker image built and pushed
- Trivy scan completed
- README auto updated

<!-- AI-END -->

## 🧱 CI/CD Architecture (Visual Flow)

```mermaid
flowchart TD
    A[Developer Push] --> B[GitHub Actions Trigger]
    B --> C[Build & Test]
    C --> D[Docker Build]
    D --> E[Trivy Security Scan]
    E -->|FAIL CRITICAL| X[Block Pipeline ❌]
    E -->|PASS| F[Push Docker Image]
    F --> G[Git Tag Release]
    G --> H[Deploy]
    H --> I[README Auto Update]
```
