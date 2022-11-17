#!/bin/bash
HOST=zaifo.com.ar
FOLDER="~/server/control/proxy/www/zaifo.com.ar"
ssh root@$HOST rm -rf $FOLDER/*
ssh root@$HOST mkdir $FOLDER/static
scp -r build/* root@$HOST:$FOLDER
