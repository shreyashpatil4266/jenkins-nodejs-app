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
                echo '🚀 Stopping any running container...'
                sh 'docker stop jenkins-node-app || true'
                sh 'docker rm jenkins-node-app || true'

                echo '🐳 Building fresh Docker image...'
                sh 'docker build --no-cache -t jenkins-node-app .'

                echo '🚀 Running new container...'
                sh 'docker run -d -p 3000:3000 --name jenkins-node-app jenkins-node-app'
            }
        }
    }
}
