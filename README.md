# qr-genrator
- step1 : clone the repo to local
- step2 : do `npm i` 
- step3 : do `npm start`


- Genrating the qr code : 

	curl --location 'http://localhost:3000/api/v1/generate-qr-code' \
	--header 'Content-Type: application/json' \
	--data '{
	    "data" : <string to genrate the qr code.>
	}'


- To fetch the genrated qr codes

	curl --location 'http://localhost:3000/api/v1/get-qr-code/:imageId'




