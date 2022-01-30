pipeline{

    agent any

    parameters {
        choice choices: ['all', 'LoginTest'], name: 'Options'
    }

    options {
        ansiColor('xterm')
    }

    stages{
        stage('Build') {
            steps {
                echo 'Build Stage'
            }
        }

        stage('Test') {
        steps {
            bat 'npm install && npm run %Options%'
            // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }

        stage('Publish Report') {
            steps {
                bat 'publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])'
            }
        }
        stage('Deploy') {
            steps{
                echo 'Deployment Done..'
            }
        }
    }
}