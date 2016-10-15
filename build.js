#!/usr/bin/jjs -fv

var imageName = "robertbrem/heros-command:1.0." + $ENV.VERSION;
var build = "docker build -t " + imageName + " .";
$EXEC(build);
print($OUT);
print($ERR);
var dockerLogin = "docker login --username=" + $ENV.USER_NAME + " --password=" + $ENV.PASSWORD + " --email=" + $ENV.EMAIL;
$EXEC(dockerLogin);
print($OUT);
print($ERR);
var push = "docker push " + imageName;
$EXEC(push);
print($OUT);
print($ERR);