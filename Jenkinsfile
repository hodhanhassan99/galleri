pipeline {
    agent any 

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
        stage('Deploy Plan') {
            steps {
                echo 'Ready for Render deployment.'
            }
        }
    }
}