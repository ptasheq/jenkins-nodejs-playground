pipeline {
	agent any

	tools {
		nodejs 'node_9'
	}

	stages {
		stage('Prepare') {
			steps {
				sh "echo $JOB_NAME"

				script {
					if (JOB_NAME == 'test-pipeline') {
						def server = '192.168.2.1'
					}
					else {
						def server = '1.2.168.192'
					}
				}
			}
		}
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
			steps {
				withEnv(['SECRET_SSH_KEY=' + server]) {
					sh 'echo $SECRET_SSH_KEY'
					sh 'node scripts/deploy.js'
                }
			}
		}
	}
}
