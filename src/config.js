export default {
    fileSystem: {
        path: './db'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://admin:admin@cluster0.bev71ps.mongodb.net/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "coder32195c20-377d4",
        "private_key_id": "c33e7f97329a58be49d3c946cdcadca9e3bbbffe",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCnoqa1k5oZlcO9\n9XlvJr0FhiEzJnfw9h+pc0JzVKhpuL+s5dVVL+WQdxrAeHOZNkDDGqcWXXugmFNr\nH4zstr6zrgjQ/A/ixy8mA/wXBZbr9Y4Osq8Zy9+N7ejpXmVliiYwTXH/apHYuDCa\nmmnWLOgunlsTpA7m4p8khP2trSKXKEY5DzAuqYeaWI84stl78/UkD7uIOOxWyChM\n8HiP/dK8FWY+UIU61/rLALAzRAshmypo1rlmj33ch/YGStH3FGNG9n6s+4Pr7t8+\nq5OmUh3NJfjd0G26IYTWwGx6azTc/9gF7aIptkc04h8Ba/2R1MSaIB/e+XIHXKiC\npdVYylJVAgMBAAECggEAANSbPPBIqJZtjfucAh5CmHZdzmv3y8GdRzOLnj/XS/8j\n4MtXAgS0PrDj+Nc2bpBvJSzfxVOEiJiIEctgOHpUe1vX2asMWS//FVygLOu0QZ6z\nJ5n990tuub8xjSZtUYN8I3+sFjTMoAAEgauH1zpd0JcoNL/6mPymCeSm9AegMUcd\nV4VbEOZ7ptk8lslrJ5qfhHcmhQJAhmGd5loMG9xFVO7ARmkrN0YK9LqkHbbENGbv\nv77xXLfMAKF4t9tQHcLefodiks7fE9K5q1yGhiajfBAxULEX6r/+ItSRC/aEXQz6\neQGNrsQk5HswktoJVDItB98IbJ5sVU8ByoZ+TSYjaQKBgQDmOyruln/E/PGuIztB\nM38b6fNl9fdYRUNP3gbEGCFMXrZDb4cwCa5D/eRU7XugF0j909lj13bSwBusa/6O\nDlkIHUxMUtYjU5jUAu8ne6DVujv71DQE4UTJUswBEn/i9KWsf6aEYB4e1nuLUA/9\nghUtmld4bCT51v7Sk93L5AhYQwKBgQC6Zevrs3cUahnYWVI6VXjrnwKan2ycHLkU\nEctc375Vai6DDgrRhlRwfulDVrXn24jDK1yREvBzqvydDRyvIBDhfGbNRrmLClwl\nLPlfOdb29VhuMO/1HAftkiXMxoPecHhIQDJH+VVdKX//nobrkZpnuTAH2LtI+J6p\nl8YevaAthwKBgBxVEa50xNp4CkHUwhj+/lhwDOzyPPMW6vasKwb8tTRRv3pDAk7u\nEgz59Jxi8UC9PNVHucvomw3KaF1qmNPgfiJagKYv13xXcEo+5jFkrGFA3trZvWEQ\nW8eusb48CZLjanP07YgC0BIZcPCu9JjM5lBLWxJNtKsuQwOlALlzoXdDAoGAPrpk\nDbsknNsj/Xn5wSXYfrrRXoW+QD8uTcG7RXMKk6YbJwGHxIFHU2ByUbYRm4h22u9x\nxGSyRMrLHnM2Lv1EkQ2TbwuZD2CaJ+yds108qXlhnBud9UfMpzeivuojoK0K3Y21\nHiGbh7GaoMSRtR8X7kYVEt7uEB2TD5HDG79G82sCgYEAxblC4Pph/CPhgVuzu7vV\ndiSrX+p4hj14ox6C5YSwnH7yQyqEuwMoeGyYoXQEai4IRa21kJw7MmPEANREAcLQ\nBdeMAbSCRLnxAqzbTGvboj+7oXUCmhp6zjTA9B0Ygwk1sedyDsBBST6f98wHvaVz\nNDSQcLMuM9CHm3+lcnWWGh0=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-1fud0@coder32195c20-377d4.iam.gserviceaccount.com",
        "client_id": "101031066133769778520",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1fud0%40coder32195c20-377d4.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './db/ecommerce.sqlite'
        },
        useNullAsDefault: true
    },

}