# qr-genrator
- step1 : clone the repo to local
- step2 : do `npm i` 
- step3 : do `npm start`


- Genrating the qr code : 

	curl --location 'http://localhost:3000/api/v1/generate-qr-code' \
	--header 'Content-Type: application/json' \
	--data '{
	    "data": <string to generate the QR code.>
	}'

	![Screenshot from 2023-08-26 16-19-37](https://github.com/Adityakrmishra1/qr-genrator/assets/55797769/86998c10-0e9e-4145-b372-8431b4231827)




- To fetch the generated QR codes

	curl --location 'http://localhost:3000/api/v1/get-qr-code/:imageId'

	![Screenshot from 2023-08-26 16-18-31](https://github.com/Adityakrmishra1/qr-genrator/assets/55797769/3ad63df1-4b41-473a-ba9c-6dddd5f83d27)





