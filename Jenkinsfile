pipeline {
    agent any 

    environment {
        PORT = '5000'
    }

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install'
            }
        }
        stage('Build & Validate') {
            steps {
                echo 'Validating system state...'
                sh 'node -v'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Triggering production deployment to Render via webhook...'
                sh "curl -X POST 'https://api.render.com/deploy/srv-d8mpv1cm0tmc73dded20?key=Av8n-u788JQ'"
            }
        }
    }
}