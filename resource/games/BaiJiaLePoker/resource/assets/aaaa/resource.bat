@echo off
pushd "%~dp0"

set src=.
set dst=../

call ImageStudio


call ImagePack egret %src%\* -margin:1
move /Y %src%\*.json %dst%\
move /Y %src%\*.png %dst%\

popd
if "%1"=="" pause
