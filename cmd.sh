#!/bin/zsh
set ex -e;
cd ~/project;
source dict_server/venv/bin/activate;
python3 -m http.server 8080 -b 127.0.0.1 -d entry/