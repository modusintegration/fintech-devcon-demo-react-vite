# fintech-devcon-demo-react-vite

https://yxp2w8-5173.csb.app/

https://fintech-devcon-demo-react-vite.dev.pre.demobank.tenants.portx.io/

## Purpose
The purpose of this demo is to show how PortX deploys an SSO app with our Stack (Github/AWS/ArgoCD/Grafana).
This UI is interacting with both mambu and cis cores.
In the UI you will be able to send money back and forth.

## API Docs
https://workshop.dev.custom.demos.tenant-1.portx.io/portx-openbanking-docs/

Note these are the full api specs and our demo supports `/accounts` and `/persons`

## Auth
For Auth we are using PortX IAM which using Keycloak. There are 2 roles configured for this demo
`admin` and `operator`. Internally we used `admin`, which is used for creating persons and accounts. Everyone will 
have access to `operator`, the credentials have been hardcoded in
this demo UI, and you can also find the credentials in the postman collection.

## Postman Collection
Note: Postman is required, download it [here](https://www.postman.com/downloads/) if needed.

Here is a collection of calls you can make to our demo api,
You can either clone the repo, and find it [postman/moov-lab-portx-oba-proc-api.postman_collection.json](postman%2Fmoov-lab-portx-oba-proc-api.postman_collection.json)
or go [githhub/fintech-devcon-demo-react-vite](https://github.com/modusintegration/fintech-devcon-demo-react-vite/blob/main/postman/moov-lab-portx-oba-proc-api.postman_collection.json)
and click the `Download raw file` on the right side of the screen.


Import the postman collection, once in postman go to file import and find the collection from above.

![image (1).png](postman%2Fimage%20%281%29.png)
![image (2).png](postman%2Fimage%20%282%29.png)
![image (3).png](postman%2Fimage%20%283%29.png)

Note: You will need a CliendID and Secret to get an auth token, .

## Mambu Core API Repo
Feel free to explore our Mambu core api repo https://github.com/modusintegration/mambu-portx-cbs-connector

## Getting Started

### Code Sandbox instructions 
- how to get in and set up trial account, how to log in (with the name above), run it, what to test
Figure out how to generate QR code from url for the Google doc.  We need to print those out somehow.

### Run local with docker
make build
make run
open browser and navigate to http://localhost:80

For the Google sheet:
Name: {will come from Juan’s spreadsheet}
ORCA API Docs - https://demos.dev.custom.demos.tenant-1.portx.io/portx-openbanking-docs/
Postman - {Will point to Postman collection Juan gives you which should be stored in GDrive (made open to anyone with the link)}
Mambu Core API Repo - https://github.com/modusintegration/mambu-portx-cbs-connector
Payment App UI repo: https://codesandbox.io/p/sandbox/fintech-devcon-demo-react-vite-76jq59
Postman collection instructions - text, how to generate the token and use it for making API calls.  Any other instructions
Code Sandbox instructions - how to get in and set up trial account, how to log in (with the name above), run it, what to test
Figure out how to generate QR code from url for the Google doc.  We need to print those out somehow.
