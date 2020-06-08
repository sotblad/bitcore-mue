# Configure Apache2 for MUE Insight Explorer on monetaryunit.org

sites-enabled/000-default.conf
```sh
#<VirtualHost ...>
#    ProxyPreserveHost On
#    ProxyPass        "/" "http://localhost:8080/"
#    ProxyPassReverse "/" "http://localhost:8080/"
#    ServerName api.monetaryunit.org
#</VirtualHost>
```

sites-enabled/001.conf
```sh
<VirtualHost *:80>
    ProxyPreserveHost On
    ProxyPass        "/" "http://localhost:8080/"
    ProxyPassReverse "/" "http://localhost:8080/"
    ServerName api.monetaryunit.org
</VirtualHost>
```


sites-available/default-ssl.conf
```sh
<IfModule>
[...]
        <VirtualHost *:443>
                ServerName api.monetaryunit.org
                ProxyPreserveHost On
                ProxyPass        "/" "http://localhost:3000/"
                ProxyPassReverse "/" "http://localhost:3000/"
        </VirtualHost>

        <VirtualHost *:443>
                ServerName explorer.monetaryunit.org
                ProxyPreserveHost On
                ProxyPass        "/" "http://localhost:8080/"
                ProxyPassReverse "/" "http://localhost:8080/"
        </VirtualHost>

</IfModule>
```
