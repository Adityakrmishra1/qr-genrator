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

	![Screenshot from 2023-08-26 16-18-31](https://github.com/Adityakrmishra1/qr-genrator/assets/55797769/3ad63df1-4b41-473a-ba9c-6dddd5f83d27)





