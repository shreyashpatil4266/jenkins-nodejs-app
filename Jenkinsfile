pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out source code...'
                git 'https://github.com/shreyashpatil4266/jenkins-nodejs-app'
            }
        }

        stage('Build') {
            steps {
                echo '📦 Building the application...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
                // Add any test command here, if needed
                // sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying the app using Docker...'
                sh 'docker rm -f jenkins-node-container || true'
                sh 'docker builder prune -f'
                sh 'docker build -t jenkins-node-app .'
                sh 'docker run -d -p 3000:3000 --name jenkins-node-container jenkins-node-app'
            }
        }
    }
}
