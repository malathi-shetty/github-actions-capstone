
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

----

- name: Inject Trivy Table into README
  run: |
    if [ -f trivy.md ]; then
      awk '
      /<!-- TRIVY-TABLE-START -->/ {print; system("cat trivy.md"); skip=1; next}
      /<!-- TRIVY-TABLE-END -->/ {skip=0}
      !skip
      ' README.md > tmp && mv tmp README.md
    fi

## 🔐 Vulnerability Report (Trivy)

<!-- TRIVY-TABLE-START -->
_No scan data yet_
<!-- TRIVY-TABLE-END -->

---

## 🤖 AI Release Notes

> Automatically generated using OpenAI during CI/CD execution

- Pipeline Summary: AI-generated per build
- Commit: Dynamic per run
- Version: Auto incremented
- Security: Trivy validated
- Status: Production-ready deployment

<!-- AI-START -->
Automatically generated during CI/CD pipeline.

- Uses OpenAI GPT model
- Summarizes build, docker, security, deployment
- Updated on every release
<!-- AI-END -->



