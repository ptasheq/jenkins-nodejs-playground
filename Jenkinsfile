pipeline {
	agent any

	tools {
		nodejs 'node_9'
	}

	stages {
		stage('Prepare') {
			steps {
				script {
					if (env.JOB_NAME == 'test-pipeline') {
						def server = '192.168.2.1'
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
				sh "echo ${server}"
				withEnv(['SECRET_SSH_KEY=' + server]) {
					sh 'node scripts/deploy.js'
                }
			}
		}
	}
}
