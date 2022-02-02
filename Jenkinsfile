import groovy.transform.Field
@Field def timeStamp = Calendar.getInstance().getTime().format('YYYYMMdd-hhmmss',TimeZone.getTimeZone('CST'))

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
            catchError(buildResult: 'FAILURE', stageResult: 'FAILURE'){
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
        // stage('Copy Artifacts'){
        //     steps{
        //         unarchive mapping: ['cypress/reports/index.html': 'C:/Archeived_Reports/']
        //     }
        // }
       stage('Copy Artifacts'){
          steps{
              script {
                  step ([$class: 'CopyArtifact',
                    projectName: 'Cypress_Pipeline_2',
                    selector:specific("$BUILD_NUMBER"),
                    filter: "**/index.html",
                    target: 'C:/Archeived_Reports/$BUILD_NUMBER']/${timeStamp});
              }
          }
       }
    }
}