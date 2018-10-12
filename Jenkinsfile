pipeline {
	agent any

	stages {
		stage('Install') {
			steps {
				nodejs(nodeJSInstallationName: 'node_9') {
					sh 'npm install'
				}
			}
		}
	}
}
