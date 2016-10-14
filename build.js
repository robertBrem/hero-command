#!/usr/bin/jjs -fv

var imageName = "registry:5000/robertbrem/heros-command";
var build = "docker build -t " + imageName + " .";
$EXEC(build);
print($OUT);
print($ERR);
var push = "docker push " + imageName;