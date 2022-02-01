pipeline{

    agent any

    parameters {
        choice choices: ['all', 'LoginTest'], name: 'Options'
    }

    options {
        ansiColor('xterm')
        
    }

    stages{
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Execute Test') {
        steps {
            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                bat 'npm run %Options%'
            }
        }
    }

        stage('Publish Report') {
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            }
        }
        stage('Archive Artifacts') {
            steps{
                archiveArtifacts artifacts: 'cypress/reports/index.html', followSymlinks: false
            }
        }
        stage('Move Reports'){
            steps{
                cp -r 'C:/Users/pc/.jenkins/jobs/Cypress_Pipeline_2/builds/12/archive/cypress/reports/index.html' 'C:/Reports'
            }
        }
    }
}