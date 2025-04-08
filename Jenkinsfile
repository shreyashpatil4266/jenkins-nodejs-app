pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo '📦 Building the application...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                // Add test command if needed: sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo '🚀 Deploying the app using Docker...'
                sh 'docker stop jenkins-node-app || true'
                sh 'docker rm jenkins-node-app || true'
                sh 'docker build -t jenkins-node-app .'
                sh 'docker run -d -p 3000:3000 --name jenkins-node-app jenkins-node-app'
            }
        }
    }
}
