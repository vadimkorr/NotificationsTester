#Run Server 

##Create an inbound rule
1. Open Windows Firewall from Control Panel

2. Open Advanced

3. Open Inbound rules

4. Create rule...

5. Choose Port (Next)

6. Type Port: 61601 (Next)

7. Choose Allow connection (Next)

8. Choose all profiles (Domen, Public, Private) (Next)

9. Type Name: PushTester (Next)

10. Done

##Start Server 
1. Create Chrome shortcut

2. Open properties

3. Add the key: `--disable-web-security`

   ![IMG](http://content.screencast.com/users/mintoctober/folders/Jing/media/c2c7aa17-e929-4107-9a70-db7d24a8d7e7/2016-03-24_2015.png)

4. Open Visual Studio as Administrator

5. Open `PushNotifications.sln`

6. Run project

7. Open `applicationhost.config` file from `C:\Users\Vadim\Documents\IISExpress\config\`

8. Find the following lines:

   ```
     <site name="PushNotifications(4)" id="45">
       <application path="/" applicationPool="Clr4IntegratedAppPool">
         <virtualDirectory path="/" physicalPath="E:\PushTester\Server\PushNotifications" />
       </application>
       <bindings>
         <binding protocol="http" bindingInformation="*:61601:localhost" />
       </bindings>
     </site>
   ```

9. Type `*` sign instead of `localhost`: 

   ```
   <binding protocol="http" bindingInformation="*:61601:*" />
   ```
  
10. Restart project in Visual Studio

>P.S.
To be sure that all work fine type a url: 
```
http://localhost:61601/api/push/test/World
```
![IMG](http://content.screencast.com/users/mintoctober/folders/Jing/media/9a11258f-c648-422d-8434-0f7267c97b3f/2016-03-24_2029.png)
