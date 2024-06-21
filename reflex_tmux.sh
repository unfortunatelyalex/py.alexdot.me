#!/bin/bash

# navigate to the directory where the script is located (/www/wwwroot/py.alexdot.me) and run "tmux new -s reflex -d 'reflex run --env dev --frontend-port 7443 --backend-port 7444"

cd /www/wwwroot/py.alexdot.me

tmux new -s reflex -d 'reflex run --env dev --frontend-port 7443 --backend-port 7444'
