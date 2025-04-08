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
                // You can add test command like:
                // sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo '🚀 Deploying the app using Docker...'
                sh 'docker build -t jenkins-node-app .'
                sh 'docker run -d -p 3000:3000 jenkins-node-app'
            }
        }
    }
}
