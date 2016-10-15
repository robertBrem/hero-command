#!/usr/bin/jjs -fv

var imageName = "docker.io/" + $ENV.USER_NAME + "/heros-command:" + $ENV.VERSION;
print(imageName);
var build = "docker build -t " + imageName + " .";
$EXEC(build);
print($OUT);
print($ERR);
var dockerLogin = "docker login --username=" + $ENV.USER_NAME + " --password=" + $ENV.PASSWORD;
$EXEC(dockerLogin);
print($OUT);
print($ERR);
var push = "docker push " + imageName;
$EXEC(push);
print($OUT);
print($ERR);