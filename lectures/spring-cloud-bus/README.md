# How execute project

1. Execute RabbitMQ  
```docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.13-management```
   
2. Execute this app
   
3. Access web console for RabbitMQ
```http://localhost:15672```  
   You can login using the credential for `guest`/`guest`  
   Access `Connections` tab in the console.
   You can see app connected to RabbitMQ.

3. Call to http get
```curl http://localhost:8080/hello```  
   You can get response for "Hello World!"
   
