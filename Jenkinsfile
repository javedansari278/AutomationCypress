pipeline{

    agent any

    parameters {
        //choice choices: ['all', 'Login'], name: 'Modules'
        choice choices: ['UAT2', 'UAT3', 'UAT4', 'QA', 'QA2'], name: 'Environment'
        checkboxParameter(name: 'Modules', format: 'JSON',
            pipelineSubmitContent: '{"CheckboxParameter": [{"key": "LandingPage","value": "**/LandingPage/*.spec.js"},{"key": "Login","value": "**/Login/*.spec.js"},{"key": "Shop","value": "**/ShopPage/*.spec.js"}]}', description: '')
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
            catchError(stageResult: 'FAILURE'){
                bat 'npx cypress run --spec %Modules%'
                        
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
                    projectName: 'CypressTestPipeline',
                    selector:specific("$BUILD_NUMBER"),
                    filter: "**/index.html",
                    target: 'C:/Archeived_Reports/$BUILD_NUMBER/$BUILD_TIMESTAMP']);
              }
          }
       }
       
    }
}