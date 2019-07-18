function put(id) {
    var text =
    {
        "resourceType": "Patient",
		"id":"",
        "text": {
            "status": "generated"
        },
        "identifier": [
            {
                "use": "usual",
                "type": {
                    "coding": [
                      {
                          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                          "code": "MR"
                      }
                    ]
                },
                "assigner": {
                    "display": "Health Care for Christ"
                }
            },
			{
                "use": "official",
                "type": {
                    "coding": [
                      {
                          "system": "https://www.ris.gov.tw/app/en/3051"
                      }
                    ]
                },
                "assigner": {
                    "display": "Department Of Household Registration"
                },
				"system":"https://www.ris.gov.tw/app/en/3051",
				"value":"AX9001234"
            },
			{
                "use": "official",
                "type": {
                    "coding": [
                      {
                          "system": "https://www.mohw.gov.tw/mp-2.html"
                      }
                    ]
                },
                "assigner": {
                    "display": "Ministry Of Health Taiwan"
                },
				"system":"https://www.mohw.gov.tw/mp-2.html",
				"value":"1234"
            }
        ],
        "active": "true",
        "name": [
            {
                "family": "emo",
                "given": [
                    "emo"
                ]
            },
			{
				"text":"js約翰"
			}
        ],
        "telecom": [
            {
                "system": "phone",
                "value": "999",
                "use": "work"
            },
			{
                "system": "email",
                "value": "demo@gmail.com",
                "use": "work"
            }
        ],
        "gender": "male",
        "birthDate": "1974-12-25",
        "deceasedBoolean": "false",
        "address": [
            {
                "use": "home",
                "text": "demo",
                "line": [
                    "demo"
                ],
                "city": "demo",
                "postalCode": "99999"
            }
        ],
        "managingOrganization": {
			"reference": "Organization/1945183"
        }
    }
    alert("help");
	text.id = id+"a";
    var myJSON = JSON.stringify(text);
	alert(myJSON);
    //var url = "http://hapi.fhir.org/baseDstu3/Patient?_id="+id;
    //var url = "http://hapi.fhir.org/baseDstu3/Patient?organization=1945183&&given:exact=demo&&family=demo";
	var url = "http://hapi.fhir.org/baseDstu3/Patient/"+id+"a";
	//PUT http://hapi.fhir.org/baseDstu3/Patient/232435?_format=json&_pretty=true
    HTTPPutData(url, myJSON);
}

function HTTPPutData(urlStr, dataStr) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("PUT", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");

    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4){
            ret = rawFile.responseText;
            alert(ret);
        }
    }
    rawFile.send(dataStr);
}
