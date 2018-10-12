pipeline {
	agent any

	stages {
		stage('Install') {
			steps {
				nodejs(nodeJSInstallationName: 'Node 9.x') {
					sh 'npm install'
				}
			}
		}
	}
}
