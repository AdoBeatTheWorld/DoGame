@echo off
pushd "%~dp0"

set src=.\fish
set dst=.\resource

call ImageStudio

rem =========================================
rem game - normal atlas
rem =========================================
call ImagePack egret %src%\* -margin:1



popd
if "%1"=="" pause
