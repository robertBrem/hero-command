#!/usr/bin/jjs -fv

var imageName = "registry.disruptor.ninja:5000/" + $ENV.USER_NAME + "/heros-command:" + $ENV.VERSION;
print(imageName);
var build = "docker build -t " + imageName + " .";
$EXEC(build);
print($OUT);
print($ERR);
var dockerLogin = "docker login --username=rob --password=1234 registry.disruptor.ninja:5000";
$EXEC(dockerLogin);
print($OUT);
print($ERR);
var push = "docker push " + imageName;
$EXEC(push);
print($OUT);
print($ERR);