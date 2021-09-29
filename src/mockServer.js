
export default function askCall() {
  return new Promise((resolve, reject) => {
    resolve({
      "keywordBasedAnswer": {
        "buckets": [
          {
            "entityApiName": "Contact",
            "records": [
              {
                "attributes": {
                  "type": "Contact",
                  "url": "/services/data/v54.0/sobjects/Contact/003xx000004WqknAAC"
                },
                "Id": "003xx000004WqknAAC",
                "Name": "Avi Green",
                "Account": {
                  "attributes": {
                    "type": "Account",
                    "url": "/services/data/v54.0/sobjects/Account/001xx000003GkoLAAS"
                  },
                  "Name": "United Oil & Gas Corp.",
                  "Site": null
                },
                "Phone": "(212) 842-5500",
                "Email": "agreen@uog.com",
                "Owner": {
                  "attributes": {
                    "type": "User",
                    "url": "/services/data/v54.0/sobjects/User/005xx000001XJXxAAO"
                  },
                  "Alias": "UUser"
                }
              }
            ]
          }
        ],
        "entitiesPageInfo": {
          "entities": [
            "Account",
            "Contact",
            "User",
            "Opportunity",
            "ListView",
            "UserRole",
            "Group",
            "Lead",
            "EmailTemplate",
            "WebLink",
            "Profile",
            "BusinessHours",
            "ApexClass",
            "Pricebook2",
            "Product2",
            "WorkBadgeDefinition",
            "Case",
            "Solution",
            "SlaProcess",
            "Campaign",
            "myCustomObj10__c",
            "myCustomObj11__c",
            "myCustomObj12__c",
            "myCustomObj13__c",
            "myCustomObj14__c",
            "myCustomObj15__c",
            "myCustomObj16__c",
            "myCustomObj17__c",
            "myCustomObj18__c",
            "myCustomObj19__c",
            "myCustomObj20__c",
            "myCustomObj21__c",
            "myCustomObj22__c",
            "myCustomObj23__c",
            "myCustomObj24__c",
            "myCustomObj25__c",
            "myCustomObj26__c",
            "myCustomObj27__c",
            "myCustomObj28__c",
            "myCustomObj29__c",
            "myCustomObj2__c",
            "myCustomObj30__c",
            "myCustomObj31__c",
            "myCustomObj32__c",
            "myCustomObj33__c",
            "myCustomObj34__c",
            "myCustomObj35__c",
            "myCustomObj36__c",
            "myCustomObj37__c",
            "myCustomObj38__c",
            "myCustomObj39__c",
            "myCustomObj3__c",
            "myCustomObj40__c",
            "myCustomObj41__c",
            "myCustomObj42__c",
            "myCustomObj43__c",
            "myCustomObj44__c",
            "myCustomObj45__c",
            "myCustomObj46__c",
            "myCustomObj47__c",
            "myCustomObj48__c",
            "myCustomObj49__c",
            "myCustomObj4__c",
            "myCustomObj50__c",
            "myCustomObj51__c",
            "myCustomObj52__c",
            "myCustomObj53__c",
            "myCustomObj54__c",
            "myCustomObj55__c",
            "myCustomObj56__c",
            "myCustomObj57__c",
            "myCustomObj58__c",
            "myCustomObj59__c",
            "myCustomObj5__c",
            "myCustomObj60__c",
            "myCustomObj6__c",
            "myCustomObj7__c",
            "myCustomObj8__c",
            "myCustomObj9__c"
          ],
          "offset": 0,
          "pageSize": 0,
          "subListEntities": []
        },
        "query": "\"green\""
      },
      "recommendedResultAnswer": {
        "entityApiName": "Contact",
        "query": "\"green\"",
        "record": {
          "attributes": {
            "type": "Contact",
            "url": "/services/data/v54.0/sobjects/Contact/003xx000004WqknAAC"
          },
          "Id": "003xx000004WqknAAC",
          "Name": "Avi Green",
          "Account": {
            "attributes": {
              "type": "Account",
              "url": "/services/data/v54.0/sobjects/Account/001xx000003GkoLAAS"
            },
            "Name": "United Oil & Gas Corp.",
            "Site": null
          },
          "Phone": "(212) 842-5500",
          "Email": "agreen@uog.com",
          "Owner": {
            "attributes": {
              "type": "User",
              "url": "/services/data/v54.0/sobjects/User/005xx000001XJXxAAO"
            },
            "Alias": "UUser"
          }
        }
      },
      "searchEntityMetadata": {
        "Account": {
          "fields": [
            {
              "label": "Account ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Account Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Account Site",
              "name": "Site",
              "type": "string"
            },
            {
              "label": "Phone",
              "name": "Phone",
              "type": "phone"
            },
            {
              "label": "Account Owner",
              "name": "Owner.Alias",
              "type": "reference"
            }
          ],
          "label": "Account",
          "labelPlural": "Accounts",
          "theme": {
            "color": "7F8DE1",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/account_60.png"
          }
        },
        "Group": {
          "fields": [
            {
              "label": "Group ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Group",
          "labelPlural": "Group",
          "theme": {
            "color": "769ED9",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/orders_60.png"
          }
        },
        "SlaProcess": {
          "fields": [
            {
              "label": "Entitlement Process ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Entitlement Process Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Entitlement Process",
          "labelPlural": "Entitlement Processes",
          "theme": {
            "color": "7E8BE4",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/entitlement_process_60.png"
          }
        },
        "User": {
          "fields": [
            {
              "label": "User ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Title",
              "name": "Title",
              "type": "string"
            },
            {
              "label": "Phone",
              "name": "Phone",
              "type": "phone"
            },
            {
              "label": "Email",
              "name": "Email",
              "type": "email"
            },
            {
              "label": "Photo",
              "name": "SmallPhotoUrl",
              "type": "url"
            }
          ],
          "label": "User",
          "labelPlural": "People",
          "theme": {
            "color": "65CAE4",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/user_60.png"
          }
        },
        "Pricebook2": {
          "fields": [
            {
              "label": "Price Book ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Price Book Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Description",
              "name": "Description",
              "type": "string"
            },
            {
              "label": "Last Modified Date",
              "name": "LastModifiedDate",
              "type": "datetime"
            },
            {
              "label": "Active",
              "name": "IsActive",
              "type": "boolean"
            }
          ],
          "label": "Price Book",
          "labelPlural": "Price Books",
          "theme": {
            "color": "B781D3",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/pricebook_60.png"
          }
        },
        "Product2": {
          "fields": [
            {
              "label": "Product ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Product Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Product Code",
              "name": "ProductCode",
              "type": "string"
            },
            {
              "label": "Product Description",
              "name": "Description",
              "type": "textarea"
            },
            {
              "label": "Product Family",
              "name": "Family",
              "type": "picklist"
            }
          ],
          "label": "Product",
          "labelPlural": "Products",
          "theme": {
            "color": "B781D3",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/product_60.png"
          }
        },
        "BusinessHours": {
          "fields": [
            {
              "label": "Business Hours ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Business Hours Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Business Hours",
          "labelPlural": "Business Hours",
          "theme": {
            "color": "7DC37D",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/business_hours_60.png"
          }
        },
        "WebLink": {
          "fields": [
            {
              "label": "Custom Link ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Custom Button or Link",
          "labelPlural": "Custom Buttons or Links",
          "theme": {
            "color": "d75143",
            "iconUrl": null
          }
        },
        "Profile": {
          "fields": [
            {
              "label": "Profile ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Profile",
          "labelPlural": "Profile",
          "theme": {
            "color": "d75143",
            "iconUrl": null
          }
        },
        "Contact": {
          "fields": [
            {
              "label": "Contact ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Account Name",
              "name": "Account.Name",
              "type": "reference"
            },
            {
              "label": "Account Site",
              "name": "Account.Site",
              "type": "string"
            },
            {
              "label": "Phone",
              "name": "Phone",
              "type": "phone"
            },
            {
              "label": "Email",
              "name": "Email",
              "type": "email"
            },
            {
              "label": "Contact Owner",
              "name": "Owner.Alias",
              "type": "reference"
            }
          ],
          "label": "Contact",
          "labelPlural": "Contacts",
          "theme": {
            "color": "A094ED",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/contact_60.png"
          }
        },
        "Case": {
          "fields": [
            {
              "label": "Case ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Case Number",
              "name": "CaseNumber",
              "type": "string"
            },
            {
              "label": "Subject",
              "name": "Subject",
              "type": "string"
            },
            {
              "label": "Status",
              "name": "Status",
              "type": "picklist"
            },
            {
              "label": "Date/Time Opened",
              "name": "CreatedDate",
              "type": "datetime"
            }
          ],
          "label": "Case",
          "labelPlural": "Cases",
          "theme": {
            "color": "F2CF5B",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/case_60.png"
          }
        },
        "ListView": {
          "fields": [
            {
              "label": "List View ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "View Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "List View",
          "labelPlural": "List Views"
        },
        "Campaign": {
          "fields": [
            {
              "label": "Campaign ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Campaign Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Parent Campaign",
              "name": "Parent.Name",
              "type": "reference"
            },
            {
              "label": "Type",
              "name": "Type",
              "type": "picklist"
            },
            {
              "label": "Status",
              "name": "Status",
              "type": "picklist"
            },
            {
              "label": "Start Date",
              "name": "StartDate",
              "type": "date"
            },
            {
              "label": "End Date",
              "name": "EndDate",
              "type": "date"
            },
            {
              "label": "Responses in Campaign",
              "name": "NumberOfResponses",
              "type": "int"
            },
            {
              "label": "Campaign Owner",
              "name": "Owner.Alias",
              "type": "reference"
            }
          ],
          "label": "Campaign",
          "labelPlural": "Campaigns",
          "theme": {
            "color": "F49756",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/campaign_60.png"
          }
        },
        "UserRole": {
          "fields": [
            {
              "label": "Role ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Role",
          "labelPlural": "Role",
          "theme": {
            "color": "769ED9",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/hierarchy_60.png"
          }
        },
        "Opportunity": {
          "fields": [
            {
              "label": "Opportunity ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Opportunity Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Account Name",
              "name": "Account.Name",
              "type": "reference"
            },
            {
              "label": "Account Site",
              "name": "Account.Site",
              "type": "string"
            },
            {
              "label": "Stage",
              "name": "StageName",
              "type": "picklist"
            },
            {
              "label": "Close Date",
              "name": "CloseDate",
              "type": "date"
            },
            {
              "label": "Opportunity Owner",
              "name": "Owner.Alias",
              "type": "reference"
            }
          ],
          "label": "Opportunity",
          "labelPlural": "Opportunities",
          "theme": {
            "color": "FCB95B",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/opportunity_60.png"
          }
        },
        "ApexClass": {
          "fields": [
            {
              "label": "Class ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Apex Class",
          "labelPlural": "Apex Classes",
          "theme": {
            "color": "d75143",
            "iconUrl": null
          }
        },
        "Lead": {
          "fields": [
            {
              "label": "Lead ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Title",
              "name": "Title",
              "type": "string"
            },
            {
              "label": "Company",
              "name": "Company",
              "type": "string"
            },
            {
              "label": "Phone",
              "name": "Phone",
              "type": "phone"
            },
            {
              "label": "Mobile",
              "name": "MobilePhone",
              "type": "phone"
            },
            {
              "label": "Email",
              "name": "Email",
              "type": "email"
            },
            {
              "label": "Lead Status",
              "name": "Status",
              "type": "picklist"
            }
          ],
          "label": "Lead",
          "labelPlural": "Leads",
          "theme": {
            "color": "F88962",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/lead_60.png"
          }
        },
        "WorkBadgeDefinition": {
          "fields": [
            {
              "label": "Badge ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Badge Name",
              "name": "Name",
              "type": "string"
            },
            {
              "label": "Description",
              "name": "Description",
              "type": "textarea"
            },
            {
              "label": "Created By",
              "name": "CreatedBy.Alias",
              "type": "reference"
            }
          ],
          "label": "Badge",
          "labelPlural": "Badges",
          "theme": {
            "color": "CF5C60",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/thanks_60.png"
          }
        },
        "EmailTemplate": {
          "fields": [
            {
              "label": "Email Template ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Email Template Name",
              "name": "Name",
              "type": "string"
            }
          ],
          "label": "Email Template",
          "labelPlural": "Email Templates",
          "theme": {
            "color": "3C97DD",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/template_60.png"
          }
        },
        "Solution": {
          "fields": [
            {
              "label": "Solution ID",
              "name": "Id",
              "type": "id"
            },
            {
              "label": "Solution Title",
              "name": "SolutionName",
              "type": "string"
            },
            {
              "label": "Status",
              "name": "Status",
              "type": "picklist"
            },
            {
              "label": "Author",
              "name": "Owner.Alias",
              "type": "reference"
            },
            {
              "label": "Num Related Cases",
              "name": "TimesUsed",
              "type": "int"
            },
            {
              "label": "Last Modified Date",
              "name": "LastModifiedDate",
              "type": "datetime"
            }
          ],
          "label": "Solution",
          "labelPlural": "Solutions",
          "theme": {
            "color": "8FC972",
            "iconUrl": "https://butterpecan-aquarius-2-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/solution_60.png"
          }
        }
      }
    });
  });
}
