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
        /* stage('Test'){
            steps{
                sh 'mvn test'
                junit '**/    /*target/surefire-reports/TEST-*.xml'
            }
        } */
        stage('Package'){
            steps {
                bat 'mvn package'
            }

        }
    }
}