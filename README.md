# Installation (Issues and Solutions)
##Client
**~~~~~ 1. Installing Cordova project ~~~~~**

**Issue**:

```
[INSTALL_FAILED_CONFLICTING_PROVIDER]
```

**Solution**:

Add the following to **build.gradle**:

```
android {
   defaultConfig {
      applicationId "io.cordova.pushtester"
   }
```

##Server
**~~~~~ 2. NewtonsoftJson FileLoadException ~~~~~**

**Issue:**

![IMG](http://content.screencast.com/users/mintoctober/folders/Jing/media/7e3d9414-1c34-4093-9c6f-f74e5eef723b/2016-03-24_0115.png)

**Solution:**

In **Web.config** file change from ```oldVersion="0.0.0.0-6.0.0.0"``` to ```oldVersion="0.0.0.0-7.0.0.0"```

```
<dependentAssembly>
      <assemblyIdentity name="Newtonsoft.Json" publicKeyToken="30ad4fe6b2a6aeed" culture="neutral" />
      <bindingRedirect oldVersion="0.0.0.0-7.0.0.0" newVersion="8.0.0.0" />
</dependentAssembly>
```
