#!/bin/bash

SERVER=$1
node -v
#npm audit fix

if [[ "$GIT_BRANCH" == "origin/master" ]]; then
    npm install --legacy-peer-deps
    npm run build
    rsync -av $JENKINS_HOME/workspace/PFCORE/build/* root@$SERVER:/var/www/pagefly/public
elif [[ "$GIT_BRANCH" == "origin/development" ]]; then
    npm install --legacy-peer-deps
    npm run build
    rsync -avz $JENKINS_HOME/workspace/PFCORE-Development/build/* root@$SERVER:/var/www/pagefly-new/public
elif [[ "$GIT_BRANCH" == "origin/beta" ]]; then
    npm install --legacy-peer-deps
    npm run build
    rsync -avz $JENKINS_HOME/workspace/PFCORE-Beta-Stag/build/* root@$SERVER:/var/www/pf-beta/public
elif [[ "$GIT_BRANCH" == "origin/staging" ]]; then
    npm install --legacy-peer-deps
    npm run build
    rsync -avz $JENKINS_HOME/workspace/PFCORE-Staging/build/* root@$SERVER:/var/www/pagefly-rc/public
fi

npm audit fix

rm -rf "$JENKINS_HOME/workspace/$JOB_NAME@tmp" 2> /dev/null
