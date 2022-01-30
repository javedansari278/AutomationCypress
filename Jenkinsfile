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
            bat 'npm install && npm run ${Options}'
        }
    }

        stage('Deploy') {
            steps{
                echo 'Deployment Done..'
            }
        }
    }
}