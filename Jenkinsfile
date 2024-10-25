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
      sh "${env.BRANCH_NAME}"
      sh "${scannerHome}/bin/sonar-scanner -Dsonar.branch.name=${env.BRANCH_NAME}"
    }
  }
}
