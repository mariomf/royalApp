pipeline {
    agent { label 'windows'}
    tools {
        maven 'M3'
    }
    stages {
        stage('checkout') {
            steps{
                git 'https://github.com/mariomf/royalApp.git'
                echo "Hello World!"
            }
        }
        stage('Build'){
            steps {
                bat 'mvn clean compile'
            }
        }
        stage('Package'){
            steps {
                bat 'mvn package'
            }

        }
    }
}