FROM node:12.2.0
WORKDIR /app/autopocus
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.0.0-rc.4
# add app
COPY . /app/autopocus

# start app
CMD ng serve --prod --host 0.0.0.0