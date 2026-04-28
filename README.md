# 🚀 Expense Tracker – DevOps End-to-End Project

## 📌 Overview

This project is a **Node.js Expense & Income Tracker application** implemented with a complete **DevOps workflow** including CI, automated testing, and containerization.

It demonstrates how to build, test, and run an application using modern DevOps practices.

---

## 🧩 Features

* Add income and expense transactions
* View all transactions
* REST API-based backend
* Lightweight and simple architecture

---

## 🏗️ Architecture

```
Developer → GitHub → Jenkins CI → Docker → Local Deployment
```

---

## ⚙️ Tech Stack

* **Backend:** Node.js, Express
* **Version Control:** Git, GitHub
* **CI/CD:** Jenkins
* **Testing:** Jest
* **Containerization:** Docker

---

# 🛠️ Installation & Setup

## 1️⃣ Install Prerequisites

### Install Node.js

* Download from: https://nodejs.org
* Verify:

```bash
node -v
npm -v
```

### Install Git

* Download from: https://git-scm.com

```bash
git --version
```

### Install Docker

* Download from: https://www.docker.com

```bash
docker --version
```

### Install Jenkins (Windows)

* Download from: https://www.jenkins.io/download/
* Requires Java (JDK 17)

Verify Jenkins:

```
http://localhost:8080
```

---

## 2️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker
```

---

# ▶️ Running the Application

## 🔹 Run Locally

```bash
npm install
npm start
```

Open:
👉 http://localhost:3000

---

## 🔹 Run Tests

```bash
npm test
```

---

# 🔄 Jenkins CI Pipeline

Pipeline automates:

* Checkout code from GitHub
* Install dependencies (`npm install`)
* Run tests (`npm test`)
* Validate build

### Sample Jenkinsfile

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/<your-username>/expense-tracker.git',
                    credentialsId: 'github-https'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
}
```

---

# 🐳 Docker Setup

docker file
access from https://github.com/saitejadst/expense-tracker/blob/main/Docker

## Build Image

```bash
docker build -t expense-tracker:v1 .
```

## Run Container

```bash
docker run -d -p 3000:3000 --name expense-app expense-tracker:v1
```

## Access Application

👉 http://localhost:3000

---

# 📂 Project Structure

```
expense-tracker/
│
├── index.js
├── package.json
├── Jenkinsfile
├── Dockerfile
└── __tests__/
    └── dummy.test.js
```

---

# 📊 Current Status

✅ Application development completed
✅ GitHub repository configured
✅ Jenkins CI pipeline implemented
✅ Automated testing with Jest
✅ Docker containerization completed
✅ Application running locally and in container

---

# 🎯 Future Enhancements

* Deploy to Kubernetes (Minikube)
* Enable public access (NodePort / ngrok)
* Add monitoring (Prometheus & Grafana)
* Implement auto-scaling and alerts

---

# ⭐ Key Highlights

* End-to-end DevOps workflow
* Automated CI pipeline
* Containerized application
* Reproducible setup
* Clean and scalable architecture

---

# 🔗 Access

* Local: http://localhost:3000





<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/75f1c9a4-e46a-4e78-8096-f6040d346eca" />



