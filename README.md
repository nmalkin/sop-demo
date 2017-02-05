Same-origin policy demo
=======================
A simple web app for showing how the same-origin policy applies to cross-domain requests

Instructions
------------
Load any page on the app's domain. Enter the URL of any page you'd like to load in the iframe (click away from the textbox to automatically update). Clicking "Update!" below the frame will try to access the embedded page. If SOP prevents this, you'll see an alert.

Pages to try
------------

- http://example.com/store/item/83
- http://store.example.com/item/83
- http://example.com/user/56
- https://example.com/store/item/345
- http://example.com:2000/store
- http://example.org/store

Running the site for yourself
-----------------------------
### If you don't care about HTTPS

```sh
python3 -m http.server
# or
node server.js
```

### If you want HTTPS as part of your demo
First, update the included `docker-compose.yml` so that the (sub)domains match yours.

Next, you'll need to [create a Docker Machine](https://docs.docker.com/machine/get-started/) _in the cloud_.

```sh
docker-machine create ... your_machine_name
eval "$(docker-machine env your_machine_name)"
docker-compose up
```
