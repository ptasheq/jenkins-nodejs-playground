pipeline {
	agent any

	tools {
		nodejs 'node_9'
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
						DEPLOY_TO = 'development'
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
