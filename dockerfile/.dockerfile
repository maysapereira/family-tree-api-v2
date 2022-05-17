FROM node:16.13.2

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/api-family-tree-v2

WORKDIR $HOME/api-family-tree-v2

RUN npm install --silent --progress=false

COPY . $HOME/api-family-tree-v2

CMD ["npm", "start"]