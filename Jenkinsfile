pipeline {
    //agent { label 'windows'}
    agent { docker 'maven:3.6.3-amazoncorretto-8' }
    /* tools {
        maven 'M3'
    } */
    stages {
        stage('checkout') {
            steps{
                git 'https://github.com/mariomf/royalApp.git'
                //echo "Hello World!"
            }
        }
        stage('Build'){
            steps {
                //bat 'mvn clean compile'//for windows
                sh 'mvn clean package'
                archiveArtifacts artifacts: 'target/*.jar', fingerprint:true
            }
        }
        /* stage('Test'){
            steps{
                sh 'mvn test'
                junit '**/    /*target/surefire-reports/TEST-*.xml'
            }
        } */
        /* stage('Package'){
            steps {
                bat 'mvn package'
            }

        } */
    }
}