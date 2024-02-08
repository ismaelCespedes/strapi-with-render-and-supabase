FROM public.ecr.aws/docker/library/node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN yarn install --ignore-engines

# Bundle app source
COPY . /app
RUN yarn build

# Run the web service on container startup.
CMD [ "yarn", "start" ]

EXPOSE 80

