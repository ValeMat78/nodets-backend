# nodets-backend
Template per la creazione di progetti nodeJS con TypeScript


$ npm add -D serverless-plugin-typescript serverless-offline

$ serverless plugin install --name serverless-plugin-typescript
$ serverless plugin install --name serverless-offline

$ npm add -D serverless aws-lambda @types/serverless @types/aws-lambda

$ npm i mysql2

 GET - https://kgfek5e9a0.execute-api.us-east-1.amazonaws.com/getAllPatients
  GET - https://kgfek5e9a0.execute-api.us-east-1.amazonaws.com/getPatient
  POST - https://kgfek5e9a0.execute-api.us-east-1.amazonaws.com/createPatient
  PUT - https://kgfek5e9a0.execute-api.us-east-1.amazonaws.com/updatePatient/{id}
  DELETE - https://kgfek5e9a0.execute-api.us-east-1.amazonaws.com/deletePatient/{id}
  GET - https://kgfek5e9a0.execute-api.us-east-1.amazonaws.com/debugEvent/{id}
functions:
  getAllPatients: serverless-2024-prova-dev-getAllPatients (876 kB)                                                                                                       
  getPatient: serverless-2024-prova-dev-getPatient (876 kB)
  createPatient: serverless-2024-prova-dev-createPatient (876 kB)
  updatePatient: serverless-2024-prova-dev-updatePatient (876 kB)
  deletePatient: serverless-2024-prova-dev-deletePatient (876 kB)
  debugEvent: serverless-2024-prova-dev-debugEvent (876 kB)