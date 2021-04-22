@ECHO OFF
CD/D %~dp0
IF NOT [%1]==[] CALL :0 %1 & EXIT /B
FOR /R %%A IN ("*.svg") DO CALL :0 "%%A"
EXIT /B
:0
scour -i "%~nx1" -o "_%~nx1" --set-precision=16 --create-groups --no-renderer-workaround --strip-xml-prolog --remove-descriptive-elements --enable-comment-stripping --indent=none --no-line-breaks --strip-xml-space --enable-id-stripping
::scour -i "%%A" -o "_%%A" --set-precision=16 --create-groups --no-renderer-workaround --strip-xml-prolog --remove-descriptive-elements --enable-comment-stripping --indent=none --strip-xml-space --enable-id-stripping
DEL "%~nx1" /Q
REN "_%~nx1" "%~nx1"