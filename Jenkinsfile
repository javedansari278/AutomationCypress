pipeline{

    agent any

    parameters {
        choice choices: ['all', 'LoginTest'], name: 'Modules'
        choice choices: ['UAT2', 'UAT3', 'UAT4', 'QA', 'QA2'], name: 'Environment'
    }

    options {
        ansiColor('xterm')
        copyArtifactPermission 'CypressTestPipeline'
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
                script{
                    if(%Modules%=='all'){
                        bat 'npx cypress run'
                    }
                    else{
                        bat 'npx cypress run --spec **/%Modules%/*.spec.js'
                    }
                }
                        
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
       
       stage('Copy Artifacts'){
          steps{
              script {
                  step ([$class: 'CopyArtifact',
                    projectName: 'Cypress_Pipeline_Latest',
                    selector:specific("$BUILD_NUMBER"),
                    filter: "**/index.html",
                    target: 'C:/Archeived_Reports/$BUILD_NUMBER/$BUILD_TIMESTAMP']);
              }
          }
       }
       
    }
}