# shift
url redirector

## How to install

1. clone the repository using command

$> git clone https://github.com/codechito/shift.git

2. navigate inside the project root and install the dependencies

$> cd shift
$> npm install

3. Run the website

$> node index.js

## How to test

1. On your local machine it is running at port 3000, you can change the port in the config
2. Inside the config a folder under default.json you can copy an "Old URL" and paste in your browser it should redirect properly

e.g. for 

```       
{
  "Old URL": "http://localhost:3000/hc/en-us",
  "New URL": "http://help.burstsms.com/support/home"
},
```

copy and paste "http://localhost:3000/hc/en-us" in the browser address bar will redirect to "http://help.burstsms.com/support/home"

for unlisted url it will do the following

e.g.

https://support.burstsms.com/hc/en-us/search?query=what+is+life
will become
http://help.burstsms.com/support/search?term=what+is+life



