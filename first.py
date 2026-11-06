pipeline {
    agent any

    stages {
        stage('Checkout Source Code') {
            steps {
                echo 'Pulling code from Git repository...'
                checkout scm
            }
        }

        stage('Build & Execute Script') {
            steps {
                echo 'Running first.py...'
                bat 'python first.py'
            }
        }

        stage('Code Stability Check') {
            steps {
                echo 'Verifying pipeline execution...'
                bat 'echo "Python script executed successfully!"'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: CI Pipeline completed successfully!'
        }
        failure {
            echo 'FAILURE: Pipeline failed. Check build logs.'
        }
    }
}
