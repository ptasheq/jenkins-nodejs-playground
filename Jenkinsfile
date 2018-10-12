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
	}
}
