# Start app command
```
npm start
```

# Test-assignment

.env values
MONGO_DB_URL=<connection string>
MONGO_DB_NAME=<data base name>
  
  POST
  ```
   http://localhost:3000/api/data  
  
  ```
  Request:
  ```
  {
    "startDate": "2014-01-26",
    "endDate": "2018-02-02",
    "minCount": 2000,
    "maxCount": 4000
}
  ```
  Response:
  ```
  {
    "code": 0,
    "msg": "success",
    "records": [
        {
            "key": "QLBWiXWS",
            "createdAt": "2016-12-30T04:37:04.145Z",
            "totalCount": 3976
        },
        {
            "key": "QLBWiXWS",
            "createdAt": "2016-12-30T04:37:04.145Z",
            "totalCount": 3976
        }
    ]
  }
  ```
