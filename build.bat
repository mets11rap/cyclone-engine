xcopy assets ..\cyclone-engine-pages\assets\ /I /Y /J /EXCLUDE:assets\exclude.txt && jsdoc -c .\build\readme.json && jsdoc -c .\build\docs.json