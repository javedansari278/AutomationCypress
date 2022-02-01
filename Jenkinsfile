pipeline{

    agent any

    parameters {
        choice choices: ['all', 'LoginTest'], name: 'Options'
    }

    options {
        ansiColor('xterm')
        copyArtifactPermission 'Cypress_Pipeline_2'
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
              script {
                  step ([$class: 'CopyArtifact',
                    projectName: 'Cypress_Pipeline_2',
                    filter: "cypress/reports/index.html",
                    target: 'C:/Archeived_Reports/1.html']);
              }
          }
       }
    }
}