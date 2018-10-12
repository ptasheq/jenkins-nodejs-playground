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

		stage('Print hash') {
			steps {
				sh 'echo $(git rev-parse HEAD)'
			}
		}
	}
}
