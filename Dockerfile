# Use uma imagem base com Node.js
FROM node:14-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY . .

# Instale as dependências com npm
RUN npm install --force

# Exponha a porta 19000 para o Expo
EXPOSE 19000

# Exponha a porta 19001 para o Expo DevTools
EXPOSE 19001

# Exponha a porta 19002 para o Expo CLI server
EXPOSE 19002

# Exponha a porta 19006 para o Metro Bundler
EXPOSE 19006

# Inicie o aplicativo React Native com npx expo start
CMD ["npx", "expo", "start"]