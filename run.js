#!/usr/bin/jjs -fv

var cmd = "docker run -d -p 8282:8080 --name heros robertbrem/heros-command "
$EXEC(cmd);
print($OUT);
print($ERR);