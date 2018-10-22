pipeline {
	agent any

	tools {
		nodejs 'nodejs'
	}

	stages {
		stage('Install') {
			steps {
				sh 'npm install'
			}
		}

		stage('Build') {
			steps {
				sh 'node scripts/build.js'
			}
		}

		stage('Deploy') {
			stages {
				stage('Deploy production') {
					when {
						expression { env.JOB_NAME != 'test-pipeline' }
					}
					environment {
						DEPLOY_TO = 'production'
					}
					steps {
						sh 'echo $DEPLOY_TO'
					}
				}
				stage('Deploy development') {
					when {
						expression { env.JOB_NAME == 'test-pipeline' }
					}
					environment {
						DEPLOY_TO = '172.19.0.1'
						PORT = 30000
						USERNAME = 'vagrant'
					}
					steps {
						withCredentials([sshUserPrivateKey(credentialsId: "bo-development", keyFileVariable: 'SECRET_SSH_KEY')]) {
							sh 'node scripts/deploy.js'
						}
					}
				}
			}
		}
	}
}
