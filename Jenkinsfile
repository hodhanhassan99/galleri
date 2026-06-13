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
        stage('Run Tests') {
            steps {
                echo 'Running automated tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Triggering production deployment to Render via webhook...'
                sh "curl -X POST 'https://api.render.com/deploy/srv-d8mpv1cm0tmc73dded20?key=Av8n-u788JQ'"
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed, Sending authenticated notification email via Extended Mailer...'
            emailext (
                to: 'hodhanhassan992@gmail.com',
                subject: "Failed Jenkins Job: ${currentBuild.fullDisplayName}",
                body: "Something went wrong with the build. Please check the console logs at ${env.BUILD_URL} to debug the issue.",
                replyTo: 'hodhanhassan992@gmail.com',
                mimeType: 'text/html'
            )
        }
    }
}