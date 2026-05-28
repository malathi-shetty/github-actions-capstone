# Production-Ready DevSecOps CI/CD Pipeline with GitHub Actions & Trivy

##  Project Overview

This repository demonstrates a production-style DevSecOps CI/CD pipeline for a containerized Node.js application using GitHub Actions, Docker, and Trivy.

The pipeline integrates automated testing, Docker image builds, vulnerability scanning, security gates, SARIF security reporting, artifact management, and deployment automation.

The pipeline follows a Shift-Left DevSecOps approach, where vulnerabilities are identified and blocked before deployment.

---

## Tech Stack
- **Backend:** Node.js & Express
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Security:** Trivy, SARIF

---

##  CI/CD Dashboard

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

##  CI/CD Pipeline Status

### 🔄 Workflows

<p align="left">

  <a href="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/pr-pipeline.yml">
    <img src="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/pr-pipeline.yml/badge.svg" alt="PR Pipeline">
  </a>

  <a href="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/main-pipeline.yml">
    <img src="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/main-pipeline.yml/badge.svg" alt="Main Pipeline">
  </a>

  <a href="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/health-check.yml">
    <img src="https://github.com/malathi-shetty/github-actions-capstone/actions/workflows/health-check.yml/badge.svg" alt="Health Check">
  </a>

</p>

---

### 🐳 Docker Metrics

<p align="left">

  <a href="https://hub.docker.com/repository/docker/shettymalathi113/github-actions-capstone">
    <img src="https://img.shields.io/docker/pulls/shettymalathi113/github-actions-capstone" alt="Docker Pulls">
  </a>

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

## CI/CD Pipeline Architecture

```mermaid
flowchart TD
    A[Developer Push] --> B[GitHub Actions Trigger]
    B --> C[Build & Test]
    C --> D[Docker Build]
    D --> E[Trivy Security Scan]

    E -->|FAIL HIGH/CRITICAL| X[Block Pipeline ❌]

    E -->|PASS| F[Docker Image Tagging]
    F --> G[Generate Reports]
    G --> H[Security Gate]

    H -->|PASS| I[Deploy]
```

---

## Main Pipeline

<img width="1517" height="1886" alt="image" src="https://github.com/user-attachments/assets/6bae1164-491d-455e-a54b-5bbd57bff27d" />


Main Pipeline: https://github.com/malathi-shetty/github-actions-capstone/actions/runs/26508117638


---

## PR Pipeline

<img width="697" height="700" alt="image" src="https://github.com/user-attachments/assets/0a715110-83b3-4f5c-9594-275ad3e75c8f" />

PR Pipeline: https://github.com/malathi-shetty/github-actions-capstone/actions/runs/26409652989

---

## Trivy Scan

####  Vulnerability Report (Trivy)


<img width="1516" height="2003" alt="image" src="https://github.com/user-attachments/assets/ab695701-e84c-4af6-9e9e-e8ad51f20971" />

<img width="282" height="365" alt="image" src="https://github.com/user-attachments/assets/64dbc04e-6c9d-42fd-b362-9dd290069812" />

<img width="1522" height="365" alt="image" src="https://github.com/user-attachments/assets/ab7a8221-6cb1-4667-beae-1f2518f05a76" />

<img width="1920" height="2062" alt="image" src="https://github.com/user-attachments/assets/6928d93a-9e50-4e4d-a85c-616f9b8fb7f3" />








 Trivy Scan: https://github.com/malathi-shetty/github-actions-capstone/actions/runs/26501954363

---

## GitHub Security Tab 

#### Trivy SARIF results are uploaded directly into GitHub Code Scanning Alerts for centralized vulnerability visibility.


<img width="1920" height="1812" alt="image" src="https://github.com/user-attachments/assets/a8de6afd-3170-40a7-a680-8d8d42e0cbbb" />


---

## Dependency Review

<img width="1056" height="668" alt="image" src="https://github.com/user-attachments/assets/c7cfa00c-0845-49b9-9c7c-884316f49e16" />

Dependency Review: https://github.com/malathi-shetty/github-actions-capstone/actions/runs/26462725296

---

## Docker Container Scheduled Health Check

<img width="322" height="287" alt="image" src="https://github.com/user-attachments/assets/e4e28586-7c00-4930-aef3-5f789fc6f321" />

Docker Container Scheduled Health Check: https://github.com/malathi-shetty/github-actions-capstone/actions/runs/26586977687

---

## pages build and deployment


<img width="1277" height="1365" alt="image" src="https://github.com/user-attachments/assets/7908465e-c30a-42c6-ad5c-c8416ad6319e" />


<img width="1920" height="2547" alt="image" src="https://github.com/user-attachments/assets/c70607f5-e5ba-44f0-afba-c2bce09e6fe8" />

Website: https://malathi-shetty.github.io/github-actions-capstone/

pages build and deployment: https://github.com/malathi-shetty/github-actions-capstone/actions/runs/26508117155

---

## Pin Commit SHA


<img width="1519" height="1046" alt="image" src="https://github.com/user-attachments/assets/ebee9ce8-1c4d-4c09-a1d5-0398c52bb50e" />


 Pin Commit SHA: https://github.com/malathi-shetty/github-actions-capstone/actions/runs/26507329633

 ---

 ## Key Features

- Reusable GitHub Actions workflows
- Automated Docker image build & push
- Trivy vulnerability scanning (JSON + SARIF)
- GitHub Code Scanning integration
- Security gate enforcement for HIGH/CRITICAL CVEs
- Automated artifact generation
- Dependency review checks
- Scheduled Docker health checks
- GitHub Pages deployment
- Shift-Left DevSecOps implementation

---

## Acknowledgements

This project was developed as part of the 90 Days of DevOps learning journey and further extended with additional production-style DevSecOps practices and CI/CD automation.

The implementation includes enhancements such as:
* Reusable GitHub Actions workflows
* Docker image build and version tagging
* Trivy vulnerability scanning
* DevSecOps security integration with Trivy
* SARIF-based GitHub Code Scanning integration
* Security gate enforcement for HIGH/CRITICAL vulnerabilities
* Structured artifact generation and reporting
* Automated reporting workflows
* Dependency review checks
* Scheduled Docker health checks
* Scheduled health monitoring
* GitHub Pages deployment automation

---

## Learning references:

* [90 Days of DevOps — TrainWithShubham](https://github.com/malathi-shetty/90DaysOfDevOps_TrainWithShubham/tree/master/2026)
* [Day 48 — GitHub Actions CI/CD](https://github.com/malathi-shetty/90DaysOfDevOps_TrainWithShubham/tree/master/2026/day-48)
* [Day 49 — DevSecOps with Trivy & Security Automation](https://github.com/malathi-shetty/90DaysOfDevOps_TrainWithShubham/tree/master/2026/day-49)
