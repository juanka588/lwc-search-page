export function askCall(query, entityName, offset, pageSize) {
    return new Promise((resolve, reject) => {

        const answer = serverResponse;

        if (entityName) {
            answer.keywordBasedAnswer.entities = answer.keywordBasedAnswer.entities.filter(e => e.apiName === entityName);
        }
        if (offset && pageSize) {
            answer.keywordBasedAnswer.entities = answer.keywordBasedAnswer.entities.map(
                e => e.searchResults = e.searchResults.slice(offset, offset + pageSize)
            );
        }

        resolve(answer);
    });
}

export function entityScope(query, offset, pageSize) {
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
                "apiName": "Knowledge__kav",
                "error": null,
                "fieldsToReturn": [
                    {
                        "fieldApiName": "Title",
                        "label": "Title",
                        "type": "Text"
                    },
                    {
                        "fieldApiName": "PublishStatus",
                        "label": "Publication Status",
                        "type": "Picklist"
                    },
                    {
                        "fieldApiName": "Language",
                        "label": "Language",
                        "type": "Picklist"
                    },
                    {
                        "fieldApiName": "UrlName",
                        "label": "URL Name",
                        "type": "Text"
                    },
                    {
                        "fieldApiName": "Body__c",
                        "label": "Body",
                        "type": "Rich Text Area"
                    }
                ],
                "filter": {
                    "operands": [],
                    "operator": ""
                },
                "label": "Knowledge",
                "labelPlural": "Knowledge",
                "orderBy": [],
                "pageInfo": {
                    "hasNextPage": true,
                    "hasPreviousPage": true,
                    "offset": 10,
                    "pageSize": 43
                },
                "searchResults": [
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 985"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004ecAAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 985"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-985"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 984"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004ebAAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 984"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-984"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 983"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eaAAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 983"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-983"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 982"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eZAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 982"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-982"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 981"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eYAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 981"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-981"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 980"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eXAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 980"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-980"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 979"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eWAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 979"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-979"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 978"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eVAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 978"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-978"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 977"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eUAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 977"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-977"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 976"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eTAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 976"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-976"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 975"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eSAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 975"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-975"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 974"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eRAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 974"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-974"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 973"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eQAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 973"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-973"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 972"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004ePAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 972"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-972"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 971"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eOAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 971"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-971"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 970"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eNAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 970"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-970"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 969"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eMAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 969"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-969"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 968"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eLAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 968"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-968"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 967"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eKAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 967"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-967"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {
                                "Title": "<mark>VPN</mark> Test 966"
                            },
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eJAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 966"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-966"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eIAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 965"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-965"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eHAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 964"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-964"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eGAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 963"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-963"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eFAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 962"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-962"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eEAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 961"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-961"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eDAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 960"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-960"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eCAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 959"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-959"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eBAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 958"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-958"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004eAAAQ"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 957"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-957"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e9AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 956"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-956"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e8AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 955"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-955"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e7AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 954"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-954"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e6AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 953"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-953"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e5AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 952"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-952"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e4AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 951"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-951"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e3AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 950"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-950"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e2AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 949"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-949"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e1AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 948"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-948"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004e0AAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 947"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-947"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004dzAAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 946"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-946"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004dyAAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 945"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-945"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004dxAAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 944"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-944"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    },
                    {
                        "metadata": {
                            "fields": {},
                            "promotedSearch": false,
                            "spellCorrected": false
                        },
                        "record": {
                            "fields": {
                                "Id": {
                                    "displayValue": null,
                                    "value": "ka0xx00000004dwAAA"
                                },
                                "Title": {
                                    "displayValue": null,
                                    "value": "VPN Test 943"
                                },
                                "PublishStatus": {
                                    "displayValue": "Published",
                                    "value": "Online"
                                },
                                "Language": {
                                    "displayValue": "English",
                                    "value": "en_US"
                                },
                                "UrlName": {
                                    "displayValue": null,
                                    "value": "vpn-related-article-943"
                                },
                                "Body__c": {
                                    "displayValue": null,
                                    "value": "Must associate a topic later on"
                                }
                            }
                        }
                    }
                ],
                "themeInfo": {
                    "color": "F2CF5B",
                    "iconUrl": "https://stream-orion-348-dev-ed.develop.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/custom/custom55_60.png"
                }
            }
        ],
        "recommendedResult": null
    },
    "naturalLanguageAnswer": null,
    "qnaAnswer": null,
    "query": "VPN",
    "queryId": "-1p2jymqiiixdg"
};