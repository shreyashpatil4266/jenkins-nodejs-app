pipeline {
    agent any

    environment {
        IMAGE_NAME = "jenkins-node-app"
        CONTAINER_NAME = "jenkins-node-app"
        PORT = "3000"
    }

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
                // You can add test commands like:
                // sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo '🧹 Stopping and removing old container (if any)...'
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
                
                echo '🧼 Removing old image (if any)...'
                sh '''
                    docker rmi $IMAGE_NAME || true
                '''

                echo '🚀 Building and running the new Docker container...'
                sh '''
                    docker build --no-cache -t $IMAGE_NAME .
                    docker run -d -p $PORT:$PORT --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }
}
