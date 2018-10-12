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
			when {
                expression { JOB_NAME == 'test-pipeline' }
                environment name: 'DEPLOY_TO', value: 'production'
            }
            steps {
                sh 'echo $DEPLOY_TO'
            }
            when {
                expression { JOB_NAME != 'test-pipeline' }
                environment name: 'DEPLOY_TO', value: 'development'
            }
            steps {
                sh 'echo $DEPLOY_TO'
            }
		}
	}
}
