# Jenkins Node.js App 🚀

This project demonstrates how to set up a basic **Node.js application** and automate its build and deployment using **Jenkins CI/CD pipeline** and **Docker**.

---

## 📦 Tech Stack

- Node.js
- Docker
- Jenkins
- Git & GitHub

---

## 🔧 Step-by-Step Setup Guide

### 1. 📁 Project Structure

Your project should look like this:
my-node-app/
└── my-node-app1/
    ├── index.js
    ├── Dockerfile
    └── Jenkinsfile


---

### 2. 🐳 Docker Setup

Inside `my-node-app1/`, create a `Dockerfile` with instructions to:

- Use Node.js image
- Set working directory
- Copy files
- Install dependencies
- Expose port 3000
- Run `index.js`

---

### 3. ⚙️ Jenkinsfile for CI/CD

The `Jenkinsfile` defines the stages:

- **Clone Repo**
- **Build Docker Image**
- **Run Docker Container**

This helps automate the entire flow on every push.

---

### 4. 🐙 Git Initialization & GitHub Push

Run the following:

```bash
git init
git remote add origin https://github.com/shreyashpatil4266/jenkins-nodejs-app
git add .
git commit -m "Initial commit with Dockerfile and Jenkinsfile"
git branch -M main
git pull origin main --allow-unrelated-histories
git push -u origin main
