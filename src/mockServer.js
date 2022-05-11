export function askCall(req) {
    const query = req.query;
    const entityName = req.sobject;
    const offset = req.offset
    const pageSize = req.pageSize;

    return new Promise((resolve, reject) => {

        const answer = JSON.parse(JSON.stringify(serverResponse));

        if (entityName) {
            answer.keywordBasedAnswer.entities = answer.keywordBasedAnswer.entities.filter(e => e.apiName === entityName);
        }
        if (offset && pageSize) {
            answer.keywordBasedAnswer.entities = answer.keywordBasedAnswer.entities.map(
                e => e.searchResults = e.searchResults.slice(offset, offset + pageSize)
            );
        }
        setTimeout(() => {  
          resolve(answer);  
        }, 500);
        
    });
}

export function entityScope(req) {
    const query = req.query;
    const offset = req.offset
    const pageSize = req.pageSize;

    return new Promise((resolve, reject) => {
        const answer = [
            "Account",
            "Contact",
            "Case",
            "Another",
            "Lead",
            "Opportunity"
        ];

        resolve(answer.slice(offset, offset + pageSize));
    });
}

const serverResponse = {
  "keywordBasedAnswer": {
    "entities": [
      {
        "apiName": "Opportunity",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Name",
            "label": "Opportunity Name",
            "type": "Text"
          },
          {
            "fieldApiName": "Account.Name",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "Account.Site",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "StageName",
            "label": "Stage",
            "type": "Picklist"
          },
          {
            "fieldApiName": "CloseDate",
            "label": "Close Date",
            "type": "Date"
          },
          {
            "fieldApiName": "Owner.Alias",
            "label": null,
            "type": null
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Opportunity",
        "labelPlural": "Opportunities",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "FCB95B",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/opportunity_60.png"
        }
      },
      {
        "apiName": "Lead",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Name",
            "label": "Name",
            "type": "Name"
          },
          {
            "fieldApiName": "Title",
            "label": "Title",
            "type": "Text"
          },
          {
            "fieldApiName": "Company",
            "label": "Company",
            "type": "Text"
          },
          {
            "fieldApiName": "Phone",
            "label": "Phone",
            "type": "Phone"
          },
          {
            "fieldApiName": "MobilePhone",
            "label": "Mobile",
            "type": "Phone"
          },
          {
            "fieldApiName": "Email",
            "label": "Email",
            "type": "Email"
          },
          {
            "fieldApiName": "Status",
            "label": "Lead Status",
            "type": "Picklist"
          },
          {
            "fieldApiName": "Owner.NameOrAlias",
            "label": null,
            "type": null
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Lead",
        "labelPlural": "Leads",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "F88962",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/lead_60.png"
        }
      },
      {
        "apiName": "Task",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Subject",
            "label": "Subject",
            "type": "Picklist"
          },
          {
            "fieldApiName": "Who.Name",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "What.Name",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "ActivityDate",
            "label": "Due Date",
            "type": "Date/Time"
          },
          {
            "fieldApiName": "Owner.NameOrAlias",
            "label": null,
            "type": null
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Task",
        "labelPlural": "Tasks",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "4BC076",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/task_60.png"
        }
      },
      {
        "apiName": "ContentDocument",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Title",
            "label": "Title",
            "type": "Text"
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "File",
        "labelPlural": "Files",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "BAAC93",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/file_60.png"
        }
      },
      {
        "apiName": "Account",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Name",
            "label": "Account Name",
            "type": "Name"
          },
          {
            "fieldApiName": "Site",
            "label": "Account Site",
            "type": "Text"
          },
          {
            "fieldApiName": "Phone",
            "label": "Phone",
            "type": "Phone"
          },
          {
            "fieldApiName": "Owner.Alias",
            "label": null,
            "type": null
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Account",
        "labelPlural": "Accounts",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "7F8DE1",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/account_60.png"
        }
      },
      {
        "apiName": "Contact",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Name",
            "label": "Name",
            "type": "Name"
          },
          {
            "fieldApiName": "Account.Name",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "Account.Site",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "Phone",
            "label": "Phone",
            "type": "Phone"
          },
          {
            "fieldApiName": "Email",
            "label": "Email",
            "type": "Email"
          },
          {
            "fieldApiName": "Owner.Alias",
            "label": null,
            "type": null
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Contact",
        "labelPlural": "Contacts",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "A094ED",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/contact_60.png"
        }
      },
      {
        "apiName": "Dashboard",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Title",
            "label": "Title",
            "type": "Text"
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Dashboard",
        "labelPlural": "Dashboards",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "EF6E64",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/dashboard_60.png"
        }
      },
      {
        "apiName": "Report",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Name",
            "label": "Report Name",
            "type": "Text"
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Report",
        "labelPlural": "Reports",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "2ECBBE",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/report_60.png"
        }
      },
      {
        "apiName": "CollaborationGroup",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Name",
            "label": "Name",
            "type": "Text"
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Group",
        "labelPlural": "Groups",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "83B6FF",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/groups_60.png"
        }
      },
      {
        "apiName": "Event",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "StartDateTime",
            "label": "Start",
            "type": "Date/Time"
          },
          {
            "fieldApiName": "EndDateTime",
            "label": "End",
            "type": "Date/Time"
          },
          {
            "fieldApiName": "Subject",
            "label": "Subject",
            "type": "Picklist"
          },
          {
            "fieldApiName": "Who.Name",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "What.Name",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "Owner.Alias",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "IsAllDayEvent",
            "label": "All-Day Event",
            "type": "Checkbox"
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Event",
        "labelPlural": "Events",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "EB7092",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/event_60.png"
        }
      },
      {
        "apiName": "User",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "Name",
            "label": "Name",
            "type": "Name"
          },
          {
            "fieldApiName": "Title",
            "label": "Title",
            "type": "Text"
          },
          {
            "fieldApiName": "Phone",
            "label": "Phone",
            "type": "Phone"
          },
          {
            "fieldApiName": "Email",
            "label": "Email",
            "type": "Email"
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "User",
        "labelPlural": "People",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [],
        "themeInfo": {
          "color": "65CAE4",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/user_60.png"
        }
      },
      {
        "apiName": "Case",
        "error": null,
        "fieldsToReturn": [
          {
            "fieldApiName": "CaseNumber",
            "label": "Case Number",
            "type": "Auto Number"
          },
          {
            "fieldApiName": "Subject",
            "label": "Subject",
            "type": "Text"
          },
          {
            "fieldApiName": "Status",
            "label": "Status",
            "type": "Picklist"
          },
          {
            "fieldApiName": "CreatedDate",
            "label": "Date/Time Opened",
            "type": "Date/Time"
          },
          {
            "fieldApiName": "Owner.NameOrAlias",
            "label": null,
            "type": null
          }
        ],
        "filter": {
          "operands": [],
          "operator": ""
        },
        "label": "Case",
        "labelPlural": "Cases",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "hasPreviousPage": false,
          "offset": 0,
          "pageSize": 24
        },
        "searchResults": [
          {
            "metadata": {
              "fields": {
                "Snippet": "Design <mark>issue</mark> with mechanical rotor"
              },
              "promotedSearch": false,
              "spellCorrected": false
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "500xx000000bnPlAAI"
                },
                "CaseNumber": {
                  "displayValue": null,
                  "value": "00001024"
                },
                "Subject": {
                  "displayValue": null,
                  "value": "Design issue with mechanical rotor"
                },
                "Status": {
                  "displayValue": "New",
                  "value": "New"
                },
                "CreatedDate": {
                  "displayValue": "5/6/2022, 1:36 AM",
                  "value": "2022-05-06T08:36:42.000+0000"
                },
                "OwnerId": {
                  "displayValue": null,
                  "value": "005xx000001X7kDAAS"
                },
                "Owner": {
                  "displayValue": "User User",
                  "value": {
                    "attributes": {
                      "type": "Name",
                      "url": "/services/data/v55.0/sobjects/User/005xx000001X7kDAAS"
                    },
                    "NameOrAlias": {
                      "displayValue": null,
                      "value": "UUser"
                    },
                    "Name": {
                      "displayValue": null,
                      "value": "User User"
                    }
                  }
                }
              }
            }
          }
        ],
        "themeInfo": {
          "color": "F2CF5B",
          "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/case_60.png"
        }
      }
    ],
    "recommendedResult": {
      "apiName": "Case",
      "error": null,
      "fieldsToReturn": [
        {
          "fieldApiName": "CaseNumber",
          "label": "Case Number",
          "type": "Auto Number"
        },
        {
          "fieldApiName": "Subject",
          "label": "Subject",
          "type": "Text"
        },
        {
          "fieldApiName": "Status",
          "label": "Status",
          "type": "Picklist"
        },
        {
          "fieldApiName": "CreatedDate",
          "label": "Date/Time Opened",
          "type": "Date/Time"
        },
        {
          "fieldApiName": "Owner.NameOrAlias",
          "label": null,
          "type": null
        }
      ],
      "filter": {
        "operands": [],
        "operator": ""
      },
      "label": "Case",
      "labelPlural": "Cases",
      "orderBy": [],
      "pageInfo": {
        "hasNextPage": false,
        "hasPreviousPage": false,
        "offset": 0,
        "pageSize": 1
      },
      "searchResults": [
        {
          "metadata": {
            "fields": {},
            "promotedSearch": false,
            "spellCorrected": false
          },
          "record": {
            "fields": {
              "CaseNumber": {
                "displayValue": null,
                "value": "00001024"
              },
              "Subject": {
                "displayValue": null,
                "value": "Design issue with mechanical rotor"
              },
              "Status": {
                "displayValue": "New",
                "value": "New"
              },
              "CreatedDate": {
                "displayValue": "5/6/2022, 1:36 AM",
                "value": "2022-05-06T08:36:42.000+0000"
              },
              "OwnerId": {
                "displayValue": null,
                "value": "005xx000001X7kDAAS"
              },
              "Id": {
                "displayValue": null,
                "value": "500xx000000bnPlAAI"
              },
              "Owner": {
                "displayValue": "User User",
                "value": {
                  "attributes": {
                    "type": "Name",
                    "url": "/services/data/v55.0/sobjects/User/005xx000001X7kDAAS"
                  },
                  "NameOrAlias": {
                    "displayValue": null,
                    "value": "UUser"
                  },
                  "Name": {
                    "displayValue": null,
                    "value": "User User"
                  }
                }
              }
            }
          }
        }
      ],
      "themeInfo": {
        "color": "F2CF5B",
        "iconUrl": "https://productivity-broth-8610-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/case_60.png"
      }
    }
  },
  "naturalLanguageAnswer": null,
  "qnaAnswer": null,
  "query": "issue",
  "queryId": "1i84mkc0agbd"
};