pipeline{

    agent any

    parameters {
        choice choices: ['all', 'LoginTest'], name: 'Options'
    }

    options {
        ansiColor('xterm')
    }

    stage('Build') {
        steps {
            echo 'Build Stage'
        }
    }

     stage('Test') {
        steps {
            bat 'npm install && npx cypress run %Options%'
        }
    }

    stage('Deploy') {
        steps{
            echo 'Deployment Done..'
        }
    }
}