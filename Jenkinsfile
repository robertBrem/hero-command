withEnv(["PIPE_FLOW_NUMBER=${currentBuild.number}"]) {
  stage "checkout, test, build and publish"
  node {
    git poll: true, url: "https://github.com/robertBrem/hero-command.git"
    sh "mvn clean install"

    step([$class: 'JUnitResultArchiver', testResults: '**/target/surefire-reports/TEST-*.xml'])
  }
}