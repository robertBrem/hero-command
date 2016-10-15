#!/usr/bin/jjs -fv

var imageName = "robertbrem/heros-command:" + $ENV.VERSION;
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