## Purpose
The purpose of this session is to show how to build, deploy, and monitor an app that conencts to many Cores with an open source Stack (Apachec Cam/ArgoCD/Grafana).
This UI is interacting with both Mambu and CSI cores.
In the UI you will be able to send money back and forth to other attendees.

## API Docs
https://workshop.dev.custom.demos.tenant-1.portx.io/portx-openbanking-docs/

Note these are the full api specs and our demo supports `/accounts` and `/persons`

## Auth
For Auth we are using Keycloak. There are 2 roles configured for this demo
`admin` and `operator`. Internally we used `admin`, which is used for creating persons and accounts. Everyone will 
have access to `operator`, the credentials have been hardcoded in
the demo UI, and you can also find the credentials in the postman collection.

## Postman Collection for ORCA (Open Reusable Core API)
Note: Postman is required, download it [here](https://www.postman.com/downloads/) if needed.

### Installation
You can either: 
- clone the repo, and find it [postman/moov-lab-portx-oba-proc-api.postman_collection.json](postman%2Fmoov-lab-portx-oba-proc-api.postman_collection.json)

or
- go [githhub/fintech-devcon-demo-react-vite](https://github.com/modusintegration/fintech-devcon-demo-react-vite/blob/main/postman/moov-lab-portx-oba-proc-api.postman_collection.json)
and click the `Download raw file` on the right side of the screen.

Import the postman collection - once in postman go to file import and find the collection from above.

Once Imported you should see a collection like bellow, to configure auth you need to click on the collection `moov-lab-portx-oba-proc-api`, the `Authorization` tab:
![image (1).png](postman%2Fimage%20%281%29.png)

Scroll down the `Authorization` till you see `Configure New Token` then fill out `Token Name` then go to the bottom of the
page and click the button `Generate New Access Tocken` you then should see:
![image (2).png](postman%2Fimage%20%282%29.png)
Click the button `Proceed` you then should see:
![image (3).png](postman%2Fimage%20%283%29.png)
Click the button `Use Token`, now you should be able to make correctly configured calls in the `moov-lab-portx-oba-proc-api` collection


## Sample API built with Apache Camel - Core API for Mambu
Go here to explore our Mambu core api repo https://github.com/modusintegration/mambu-portx-cbs-connector

ORCA Swagger (Open API 3.0.1):
https://github.com/modusintegration/mambu-portx-cbs-connector/blob/moov-fintech-devcon/src/spec/swagger.yaml

camel-restdsl-openapi-plugin to generate Java DTOs based on swagger:
https://github.com/modusintegration/mambu-portx-cbs-connector/blob/moov-fintech-devcon/pom.xml#L23-L54

POST /persons route:
https://github.com/modusintegration/mambu-portx-cbs-connector/blob/moov-fintech-devcon/src/main/resources/camel/mambu.xml#L285

DataSonnet to transform create person request:
https://github.com/modusintegration/mambu-portx-cbs-connector/blob/moov-fintech-devcon/src/main/resources/mappings/CreatePersonRequest.ds


## Sample "Fintech App" UI that calls ORCA for connection to Cores
The code is in this repo in SSO branch


## Deployment configuration
- GitOps Repo (dev branch): https://github.com/modusintegration/demobank-gitops/tree/dev

### Run local with docker
(use main branch)
make build
make run
open browser and navigate to http://localhost:80

### Run App (hosting in PortX cluster)
https://fintech-devcon-demo-react-vite.dev.pre.demobank.tenants.portx.io/
User: FintechDevcon
Pwd: Austin2023

### Challenge - pitch your startup idea and get others to invest using the app!

