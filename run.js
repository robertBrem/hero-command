#!/usr/bin/jjs -fv

var stopHeroCommand = "docker stop heros";
$EXEC(stopHeroCommand);
print($OUT);
print($ERR);
var rmHeroCommand = "docker rm heros";
$EXEC(rmHeroCommand);
print($OUT);
print($ERR);
var startHeroCommand = "docker run -d -p 8282:8080 --name heros robertbrem/heros-command:" + $ENV.VERSION;
$EXEC(startHeroCommand);
print($OUT);
print($ERR);