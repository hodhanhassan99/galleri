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
                echo 'Installing project dependencies and mail transport layer...'
                sh 'npm install nodemailer --save-dev'
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
                echo 'Running automated tests on the test branch...'
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
            echo 'Pipeline failed! Sending direct email notification to Gmail...'
            withCredentials([usernamePassword(credentialsId: 'gmail-smtp-auth', passwordVariable: 'GMAIL_PASS', usernameVariable: 'GMAIL_USER')]) {
                sh '''
                node -e "
                const nodemailer = require('nodemailer');
                let transport = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: '${GMAIL_USER}',
                    pass: '${GMAIL_PASS}'
                  }
                });
                let mailOptions = {
                  from: '${GMAIL_USER}',
                  to: 'hodhanhassan992@gmail.com',
                  subject: 'Alert: Failed Jenkins Job - ${BUILD_TAG}',
                  text: 'The pipeline failed. Check logs directly at: ${BUILD_URL}'
                };
                transport.sendMail(mailOptions, (error, info) => {
                  if (error) { console.log(error); process.exit(1); }
                });
                "
                '''
            }
        }
        success {
            echo 'Pipeline successful! Dispatching Slack notification...'
            withCredentials([string(credentialsId: 'slack-webhook-id', variable: 'SLACK_URL')]) {
                sh 'curl -X POST -H "Content-type: application/json" --data \'{"text":"Build #${BUILD_NUMBER} successful! Deployed to Render: ${BUILD_URL}"}\' ${SLACK_URL}'
            }
        }
    }
}