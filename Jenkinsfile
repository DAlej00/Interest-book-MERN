node {
  stage('Clean workspace') {
    deleteDir()
    sh 'ls -lah'
  }
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv('Sonar') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
