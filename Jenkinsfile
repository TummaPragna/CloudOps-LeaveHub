pipeline {

    agent any

    environment {
        BACKEND_IMAGE = "tummapragna/leavehub-backend:latest"
        FRONTEND_IMAGE = "tummapragna/leavehub-frontend:latest"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/TummaPragna/CloudOps-LeaveHub.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend/AuthService') {
                    bat 'mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('backend/AuthService') {
                    bat 'docker build -t %BACKEND_IMAGE% .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('frontend') {
                    bat 'docker build -t %FRONTEND_IMAGE% .'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                bat 'docker push tummapragna/leavehub-backend:latest'
            }
        }

        stage('Push Frontend Image') {
            steps {
                bat 'docker push tummapragna/leavehub-frontend:latest'
            }
        }

    }

    post {

        success {
            echo 'CI/CD Pipeline Executed Successfully!'
        }

        failure {
            echo 'Pipeline Failed!'
        }

    }

}