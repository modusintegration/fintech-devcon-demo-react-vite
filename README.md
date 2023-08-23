# fintech-devcon-demo-react-vite

## Purpose
The purpose of this session is to show how to build, deploy, and monitor an app that conencts to many Cores with an open source Stack (Apachec Cam/ArgoCD/Grafana).
This UI is interacting with both Mambu and CSI cores.
In the UI you will be able to send money back and forth.

## API Docs
https://workshop.dev.custom.demos.tenant-1.portx.io/portx-openbanking-docs/

Note these are the full api specs and our demo supports `/accounts` and `/persons`

## Auth
For Auth we are using PortX IAM which using Keycloak. There are 2 roles configured for this demo
`admin` and `operator`. Internally we used `admin`, which is used for creating persons and accounts. Everyone will 
have access to `operator`, the credentials have been hardcoded in
this demo UI, and you can also find the credentials in the postman collection.

## Postman Collection for ORCA (Open Reusable Core API)
This is a collection of calls you can make to our demo api.

Note: Postman is required, download it [here](https://www.postman.com/downloads/) if needed.

You can either: 
- clone the repo, and find it [postman/moov-lab-portx-oba-proc-api.postman_collection.json](postman%2Fmoov-lab-portx-oba-proc-api.postman_collection.json)
or
- go [githhub/fintech-devcon-demo-react-vite](https://github.com/modusintegration/fintech-devcon-demo-react-vite/blob/main/postman/moov-lab-portx-oba-proc-api.postman_collection.json)
and click the `Download raw file` on the right side of the screen.


Import the postman collection - once in postman go to file import and find the collection from above.

![Screenshot 2023-08-22 at 9.59.50 AM.png](..%2F..%2F..%2FDesktop%2FScreenshot%202023-08-22%20at%209.59.50%20AM.png)

Note: The CliendID and Secret you need to get an auth token are already configured in the collection variables.

## Sample API built with Apachec Camel - Core API for Mambu
Go here to explore our Mambu core api repo https://github.com/modusintegration/mambu-portx-cbs-connector

## Sample "Fintech App" UI that calls ORCA for connection to Cores
The code is in this repo.

### Run local with docker
make build
make run
open browser and navigate to http://localhost:80

### Run from internet
https://rjflh9-5173.csb.app/

### Chalenge - pitch your startup idea and get others to invest using the app!

## Deployment configuration
- GitOps Repo (dev branch): https://github.com/modusintegration/demobank-gitops/tree/dev
