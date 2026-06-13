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
            echo 'Pipeline failed! Executing direct Node.js secure email dispatch handler...'
            sh '''
            node -e "
            const nodemailer = require('nodemailer');
            let transport = nodemailer.createTransport({
              host: 'sandbox.smtp.mailtrap.io',
              port: 2525,
              auth: {
                user: 'bc8a23b7476a04',
                pass: 'YOUR_ACTUAL_MAILTRAP_PASSWORD_HERE'
              }
            });
            let mailOptions = {
              from: 'jenkins-ci-cd@galleri.internal',
              to: 'hodhanhassan992@gmail.com',
              subject: '🚨 Alert: Failed Jenkins Job - ${BUILD_TAG}',
              text: 'Something went wrong with the pipeline execution. Check logs directly at: ${BUILD_URL}'
            };
            transport.sendMail(mailOptions, (error, info) => {
              if (error) { 
                console.log('Mailer Execution Error: ' + error);
                process.exit(1);
              }
              console.log('Success! Message routed safely to Mailtrap Inbox ID: ' + info.messageId);
            });
            "
            '''
        }
    }
}