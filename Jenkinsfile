pipeline {
    //agent { label 'windows'}
    //**********agent { docker 'maven:3.6.3-amazoncorretto-8' }
    agent { label 'master'}//************
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
            agent { docker 'maven:3.6.3-amazoncorretto-8' }//************
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
        stage('Deploy'){
            steps{
                input 'Do you approve the deployment?'
                echo 'Deploying...'
                sh 'cp target/*.jar /opt/ryapp/'//*************
                sh 'nohup java -jar /opt/ryapp/royalApp-0.0.1-SNAPSHOT.jar &'//*************

                //Command use to copy files with SSH connection
                //sh 'scp target/*.jar jenkins@172.31.18.72:/opt/ryapp/'
                //sh "ssh jenkins@172.31.18.72 'nohup java -jar /opt/ryapp/royalApp-0.0.1-SNAPSHOT.jar &'"
                
            }
        }
    }
}