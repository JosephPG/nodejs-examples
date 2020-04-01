FROM node

ENV WEBAPP_DIR=/project

RUN mkdir $WEBAPP_DIR && npm install -g nodemon
WORKDIR $WEBAPP_DIR
