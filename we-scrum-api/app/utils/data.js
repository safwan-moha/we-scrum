const resp = {
    "expand": "schema,names",
    "startAt": 0,
    "maxResults": 50,
    "total": 86,
    "issues": [
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "267225",
        "self": "https://jira.leapset.com/rest/api/2/issue/267225",
        "key": "POS-22114",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19238",
              "id": "19238",
              "name": "UA Reports GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_13101": null,
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_10112": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10115",
            "value": "IR-16",
            "id": "10115"
          },
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_16605": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": "2019-06-08T11:00:42.443+0000",
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_14942": null,
          "customfield_16604": null,
          "customfield_14943": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "GA-MustHave",
            "catalysts"
          ],
          "customfield_10103": null,
          "customfield_12401": null,
          "customfield_14941": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [
            {
              "id": "120370",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120370",
              "type": {
                "id": "10400",
                "name": "Depends",
                "inward": "depends by",
                "outward": "depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10400"
              },
              "outwardIssue": {
                "id": "270833",
                "key": "POS-22053",
                "self": "https://jira.leapset.com/rest/api/2/issue/270833",
                "fields": {
                  "summary": "[Payment Setting] User Interface creation for the Payment Setup interface. ",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            },
            {
              "id": "120372",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120372",
              "type": {
                "id": "10400",
                "name": "Depends",
                "inward": "depends by",
                "outward": "depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10400"
              },
              "outwardIssue": {
                "id": "270839",
                "key": "POS-22056",
                "self": "https://jira.leapset.com/rest/api/2/issue/270839",
                "fields": {
                  "summary": "[Payment Setting] Integrate BFF to the Payment Setting User interface ",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            },
            {
              "id": "120371",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120371",
              "type": {
                "id": "10400",
                "name": "Depends",
                "inward": "depends by",
                "outward": "depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10400"
              },
              "outwardIssue": {
                "id": "270838",
                "key": "POS-22055",
                "self": "https://jira.leapset.com/rest/api/2/issue/270838",
                "fields": {
                  "summary": "[Payment Setting] Integrate Sales force endpoint to retrieve merchant settings to the BFF ",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/6",
                    "description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/closed.png",
                    "name": "Closed",
                    "id": "6",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            },
            {
              "id": "120882",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120882",
              "type": {
                "id": "10003",
                "name": "Relates",
                "inward": "relates to",
                "outward": "relates to",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10003"
              },
              "outwardIssue": {
                "id": "272216",
                "key": "PG-5723",
                "self": "https://jira.leapset.com/rest/api/2/issue/272216",
                "fields": {
                  "summary": "As a QE, I need to design tests and write test cases on QMetry for UA payments admin - payments onboarding setup change",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/6",
                    "description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/closed.png",
                    "name": "Closed",
                    "id": "6",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/10000",
                    "iconUrl": "https://jira.leapset.com/images/icons/priorities/blocker.svg",
                    "name": "P0",
                    "id": "10000"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            },
            {
              "id": "120884",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120884",
              "type": {
                "id": "10003",
                "name": "Relates",
                "inward": "relates to",
                "outward": "relates to",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10003"
              },
              "outwardIssue": {
                "id": "273178",
                "key": "PG-5771",
                "self": "https://jira.leapset.com/rest/api/2/issue/273178",
                "fields": {
                  "summary": "[PLACEHOLDER] As a QE, I need to execute the payments onboarding test cases for universal admin",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/6",
                    "description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/closed.png",
                    "name": "Closed",
                    "id": "6",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/10000",
                    "iconUrl": "https://jira.leapset.com/images/icons/priorities/blocker.svg",
                    "name": "P0",
                    "id": "10000"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            },
            {
              "id": "120883",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120883",
              "type": {
                "id": "10003",
                "name": "Relates",
                "inward": "relates to",
                "outward": "relates to",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10003"
              },
              "outwardIssue": {
                "id": "273023",
                "key": "PG-5756",
                "self": "https://jira.leapset.com/rest/api/2/issue/273023",
                "fields": {
                  "summary": "As a QE, I need to address the review comments for UA phase 2 - Payments On-boarding / Payments settings change",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/6",
                    "description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/closed.png",
                    "name": "Closed",
                    "id": "6",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/10005",
                    "iconUrl": "https://jira.leapset.com/images/icons/priorities/critical.svg",
                    "name": "P1",
                    "id": "10005"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            }
          ],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=ashand",
            "name": "ashand",
            "key": "ashand",
            "emailAddress": "Ashan.Dhananjaya@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=ashand&avatarId=14207",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=ashand&avatarId=14207",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=ashand&avatarId=14207",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=ashand&avatarId=14207"
            },
            "displayName": "Ashan Dhananjaya",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10006",
            "description": "",
            "iconUrl": "https://jira.leapset.com/images/icons/subtask.gif",
            "name": "Done",
            "id": "10006",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_14930": null,
          "customfield_17404": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_16707": null,
          "customfield_10600": "2|i02e3a:r",
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16706": null,
          "customfield_16705": null,
          "customfield_14923": null,
          "customfield_16704": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=msomasunthara",
            "name": "msomasunthara",
            "key": "msomasunthara",
            "emailAddress": "mirunaaliny.somasuntharaiyer@sysco.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=msomasunthara&avatarId=11414",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=msomasunthara&avatarId=11414",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=msomasunthara&avatarId=11414",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=msomasunthara&avatarId=11414"
            },
            "displayName": "Mirunaaliny S Iyer",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "subtasks": [],
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=msomasunthara",
            "name": "msomasunthara",
            "key": "msomasunthara",
            "emailAddress": "mirunaaliny.somasuntharaiyer@sysco.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=msomasunthara&avatarId=11414",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=msomasunthara&avatarId=11414",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=msomasunthara&avatarId=11414",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=msomasunthara&avatarId=11414"
            },
            "displayName": "Mirunaaliny S Iyer",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/POS-22114/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
            "id": "7",
            "description": "gh.issue.story.desc",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
            "name": "Story",
            "subtask": false,
            "avatarId": 10615
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/13101",
            "id": "13101",
            "key": "POS",
            "name": "POS",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=13101&avatarId=13415",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=13101&avatarId=13415",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=13101&avatarId=13415",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=13101&avatarId=13415"
            }
          },
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_17104": null,
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_10310": null,
          "customfield_14910": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_12601": null,
          "customfield_14507": null,
          "customfield_16926": null,
          "customfield_10700": null,
          "customfield_14504": null,
          "customfield_16925": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "customfield_16929": null,
          "resolutiondate": "2019-05-27T12:11:18.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/POS-22114/watchers",
            "watchCount": 3,
            "isWatching": false
          },
          "created": "2019-04-18T08:04:22.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_12600": null,
          "customfield_13405": null,
          "customfield_13404": null,
          "customfield_16915": null,
          "customfield_13407": null,
          "customfield_16914": null,
          "customfield_13406": null,
          "customfield_16913": null,
          "customfield_13408": null,
          "customfield_16919": null,
          "updated": "2019-06-04T10:44:29.000+0000",
          "timeoriginalestimate": null,
          "description": " Acceptance Criteria:\r\n # When \"Vantiv CP Migration Ready\" field is checked on the Salesforce account, clicking on the 'Setup Payment' button will navigate the user to CAKE Payment On-boarding process with both POS & OLO in the Welcome page\r\n ** !https://syscolabs-jira.atlassian.net/wiki/download/thumbnails/88773905/screencapture-leapset-invisionapp-share-T7PCVEMRH3F-2019-02-14-10_52_28.png?version=1&modificationDate=1550121776237&cacheVersion=1&api=v2&width=500|width=923,height=520!\r\n ** !https://syscolabs-jira.atlassian.net/wiki/download/thumbnails/88773905/image%20(18).png?version=1&modificationDate=1549947344966&cacheVersion=1&api=v2&width=500|width=500!\r\n # If the \"Vantiv CP Migration Ready\" field is unchecked, clicking on the 'Setup Payment' button will navigate the user to Payment On-boarding for OLO in the Welcome page\r\n\r\n * \r\n ** !https://syscolabs-jira.atlassian.net/wiki/download/thumbnails/88773905/image%20(19).png?version=1&modificationDate=1549947669924&cacheVersion=1&api=v2&width=500|width=500!\r\n\r\n # When operator has successfully on-boarded to CAKE Payments for POS card payments (Vantiv Express), the operator will see additionally the \"Payment Settings\" button\r\n ** !https://syscolabs-jira.atlassian.net/wiki/download/thumbnails/88773905/screencapture-leapset-invisionapp-share-T7PCVEMRH3F-2019-02-12-10_26_06.png?version=2&modificationDate=1549948024346&cacheVersion=1&api=v2&width=500|width=674,height=384!\r\n # If an operator is on-boarded and approved for both POS & OLO, then 'Setup Payment' button will be hidden\r\n # If the status is not Approved then the user will see the below screen with the status\r\n ** !https://syscolabs-jira.atlassian.net/wiki/download/thumbnails/88773905/image%20(22).png?version=1&modificationDate=1550146377738&cacheVersion=1&api=v2&width=500|width=500!\r\n # When operator has successfully on-boarded to CAKE Payments for OLO, the operator will still see the \"Setup Payment\" icon for POS on-boarding\r\n # Clicking on the \"Payment Settings\" icon will take the operator to the \"CAKE Payments Settings\" page which will allow the operator to see the accelerated funding status and enable accelerated funding if required\r\n ** !https://syscolabs-jira.atlassian.net/wiki/download/thumbnails/88773905/image%20(21).png?version=1&modificationDate=1549948555188&cacheVersion=1&api=v2&width=500|width=500!\r\n # Clicking on the 'Learn More' link under the 'Setup Payment' button will open [https://university.cake.net/s/article/What-is-CAKE-Payments]\r\n\r\n \r\n\r\nRefer [CAKE Payments Onboarding Guide|http://syscolabs-jira.atlassian.net/wiki/spaces/POAI/pages/66642615/CAKE+Payments+Onboarding+Guide] and [CAKE Payments Icon Behaviour in Restaurant Admin|http://syscolabs-jira.atlassian.net/wiki/spaces/POAI/pages/66642614/CAKE+Payments+Icon+Behaviour+in+Restaurant+Admin] for more info",
          "customfield_13000": null,
          "customfield_13002": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_13403": null,
          "customfield_16910": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "As a User, I should see CAKE Payment in the User Account section, so that I can do my Payments Onboarding",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "275191",
        "self": "https://jira.leapset.com/rest/api/2/issue/275191",
        "key": "PLAT-15592",
        "fields": {
          "customfield_13100": "0.0",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_16605": null,
          "lastViewed": "2019-06-08T11:01:03.200+0000",
          "customfield_13210": null,
          "customfield_16604": null,
          "labels": [],
          "customfield_13207": null,
          "customfield_13206": null,
          "customfield_13209": null,
          "customfield_13208": null,
          "aggregatetimeoriginalestimate": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "components": [],
          "customfield_17004": null,
          "customfield_13203": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_10600": "2|i033dz:",
          "customfield_16706": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "customfield_11007": null,
          "customfield_11009": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15592/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/1",
            "id": "1",
            "description": "A problem which impairs or prevents the functions of the product.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10603&avatarType=issuetype",
            "name": "Bug",
            "subtask": false,
            "avatarId": 10603
          },
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "customfield_11003": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-07T10:35:29.000+0000",
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15592/watchers",
            "watchCount": 2,
            "isWatching": false
          },
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_11900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11701",
            "value": "New",
            "id": "11701"
          },
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_11901": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11714",
            "value": "Minor",
            "id": "11714"
          },
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T10:35:58.000+0000",
          "timeoriginalestimate": null,
          "description": "Login to UA reports\r\nNavigate to sales and refund / voids and delete report\r\n\r\nActual result:\r\nthe summary values should be aligned properly\r\n\r\nExpected result: \r\nThe summary values (with $ ) are not algined\r\n\r\n*Refer attachment",
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_10801": null,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "The summary values are not aligned in sales and refund/ voids and delete reports",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "environment": null,
          "duedate": null,
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19256",
              "id": "19256",
              "description": "UA Reports GA - Patch ",
              "name": "7.92.0.1 ",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10100",
            "value": "IR-3",
            "id": "10100"
          },
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11706",
            "value": "Coding",
            "id": "11706"
          },
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_15110": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/10006",
            "iconUrl": "https://jira.leapset.com/images/icons/priorities/major.svg",
            "name": "P2",
            "id": "10006"
          },
          "customfield_10100": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_14815": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10211",
            "description": "Dev Complete",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Dev Complete",
            "id": "10211",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17400": "",
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_14911": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "timespent": null,
          "aggregatetimespent": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_12601": null,
          "customfield_10309": null,
          "workratio": -1,
          "created": "2019-06-07T10:13:28.000+0000",
          "customfield_10300": null,
          "customfield_13000": null,
          "customfield_11601": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274878",
        "self": "https://jira.leapset.com/rest/api/2/issue/274878",
        "key": "PLAT-15561",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- Should setup the env and data. \r\n- Verify reports are displayed with the data input",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 0,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i031kn:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 66600,
            "total": 66600,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 66600,
            "total": 66600,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15561/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 66600,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 66600,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-07T10:43:01.000+0000",
          "customfield_10309": null,
          "workratio": 9223372036854775807,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15561/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-06-06T04:28:41.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T10:45:23.000+0000",
          "timeoriginalestimate": 0,
          "description": "Please create a merchant in production as follows.\r\n\r\n1. Merchant Name: cake demo merchant\r\n2. Employees : \r\n* Cade White (Sr. RS)\r\n* Ron Young (Sr.RS)\r\n* Russell Jones\r\n* Richie Beanan\r\n* David Wicoff\r\n* Dishon Isaac\r\n* Jessica Shipman\r\n* Kristen Goff\r\n* Phillip Moniz\r\n* Yesuah Bell\r\n\r\n3. Menu: Take an average menu from production merchant and clone\r\n4. Onboard merchant to multi-POS 2 registers\r\n5. Setup below daypart configurations for this merchant\r\n* Breakfast: 8-11 AM\r\n* Lunch: 11-4 PM\r\n* Dinner: 4-8 PM\r\n\r\n6. Create Revenue centers\r\n7. Start identifying basic scenarios to cover all possible below flows.\r\n* Order items with multiple Sales categories/subcategories\r\n* Order items with multiple Product categories/subcategories\r\n* Order items with Custom Items\r\n* Order items with Modifiers\r\n* Orders with all payment types\r\n* Orders with split payments\r\n* Orders with all order types including COT\r\n* Orders with multiple registers\r\n* Orders with multiple Zones\r\n* Orders with multiple employees and with correct Clock In/Out\r\n* Orders from multiple revenue centers\r\n* Order Items with different tax items / Tax Groups (including to go tax / Tax exempt)\r\n* Orders with discounts (Item / Order)\r\n* Orders with Voided\r\n* Orders with Item/order Deletes\r\n* Couple of Cash in Cashouts\r\n* Orders with Approve by values\r\n* Merchant should belong to a wallet cluster (at least 2 merchants)\r\n* Cluster should have multiple wallet cards\r\n* Orders with all wallet transactions (Add value/redeem/cash. Redeem/etc…)\r\n* Orders with tips\r\n* Reopen orders\r\n* Order with Partial/full refunds\r\n* Order voids\r\n* OlO Orders\r\n* Employees with exempt / Non exempt\r\n\r\n8. Perform all above scenarios\r\n",
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 5,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Setup production demo environment - cake demo merchant for US sales team",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274835",
        "self": "https://jira.leapset.com/rest/api/2/issue/274835",
        "key": "PLAT-15560",
        "fields": {
          "customfield_13100": "0.0",
          "resolution": null,
          "customfield_16605": null,
          "lastViewed": null,
          "customfield_13210": null,
          "customfield_16604": null,
          "labels": [
            "Platform2",
            "UAReports"
          ],
          "customfield_13207": null,
          "customfield_13206": null,
          "customfield_13209": null,
          "customfield_13208": null,
          "aggregatetimeoriginalestimate": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=umeshj",
            "name": "umeshj",
            "key": "umeshj",
            "emailAddress": "Umesh.Jayasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=umeshj&avatarId=13601",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=umeshj&avatarId=13601",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=umeshj&avatarId=13601",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=umeshj&avatarId=13601"
            },
            "displayName": "Umesh Jayasinghe",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "components": [],
          "customfield_17004": null,
          "customfield_13203": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_10600": "2|i031b3:",
          "customfield_16706": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "customfield_11007": null,
          "customfield_11009": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15560/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/1",
            "id": "1",
            "description": "A problem which impairs or prevents the functions of the product.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10603&avatarType=issuetype",
            "name": "Bug",
            "subtask": false,
            "avatarId": 10603
          },
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "customfield_11003": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15560/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_11900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11701",
            "value": "New",
            "id": "11701"
          },
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_11901": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11715",
            "value": "Medium",
            "id": "11715"
          },
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-06T07:07:54.000+0000",
          "timeoriginalestimate": null,
          "description": "filter the discount and comps report (discount type: %discount)\r\n\r\nDownload the Pdf \r\n\r\nActual result : \r\n\r\nThe filters are not applied in the pdf document\r\n\r\nExpected result : \r\n\r\nThe pdf should contain the applied filters \r\n\r\n \r\n\r\nNote: this applies for both the  pdf download and email ",
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_10801": null,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Filters are not applied in the discount and comp Pdf ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "environment": null,
          "duedate": null,
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11706",
            "value": "Coding",
            "id": "11706"
          },
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_15110": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/10005",
            "iconUrl": "https://jira.leapset.com/images/icons/priorities/critical.svg",
            "name": "P1",
            "id": "10005"
          },
          "customfield_10100": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_14815": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "timeestimate": null,
          "versions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_14816": null,
          "customfield_14938": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17400": "",
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_14911": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "timespent": null,
          "aggregatetimespent": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_12601": null,
          "customfield_10309": null,
          "workratio": -1,
          "created": "2019-06-05T12:18:53.000+0000",
          "customfield_10300": null,
          "customfield_13000": null,
          "customfield_11601": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274588",
        "self": "https://jira.leapset.com/rest/api/2/issue/274588",
        "key": "PLAT-15544",
        "fields": {
          "parent": {
            "id": "274444",
            "key": "PLAT-15512",
            "self": "https://jira.leapset.com/rest/api/2/issue/274444",
            "fields": {
              "summary": "Receipt download frontend improvements",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/5",
                "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                "name": "Resolved",
                "id": "5",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 1800,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02zuf:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 1800,
            "total": 1800,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 1800,
            "total": 1800,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15544/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 1800,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 1800,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-07T10:32:56.000+0000",
          "customfield_10309": null,
          "workratio": 100,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15544/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-06-04T07:01:22.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T10:32:56.000+0000",
          "timeoriginalestimate": 1800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Test case design and review",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274587",
        "self": "https://jira.leapset.com/rest/api/2/issue/274587",
        "key": "PLAT-15543",
        "fields": {
          "parent": {
            "id": "274444",
            "key": "PLAT-15512",
            "self": "https://jira.leapset.com/rest/api/2/issue/274444",
            "fields": {
              "summary": "Receipt download frontend improvements",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/5",
                "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                "name": "Resolved",
                "id": "5",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 14400,
          "timeestimate": 14400,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=safwanm",
            "name": "safwanm",
            "key": "safwanm",
            "emailAddress": "Safwan.Mohammed@trycake.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=safwanm&avatarId=13703",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=safwanm&avatarId=13703",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=safwanm&avatarId=13703",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=safwanm&avatarId=13703"
            },
            "displayName": "Safwan Mohammed",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02zu7:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 14400,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 14400,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 14400,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15543/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15543/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-06-04T07:00:57.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T07:04:07.000+0000",
          "timeoriginalestimate": 14400,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274586",
        "self": "https://jira.leapset.com/rest/api/2/issue/274586",
        "key": "PLAT-15542",
        "fields": {
          "parent": {
            "id": "274444",
            "key": "PLAT-15512",
            "self": "https://jira.leapset.com/rest/api/2/issue/274444",
            "fields": {
              "summary": "Receipt download frontend improvements",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/5",
                "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                "name": "Resolved",
                "id": "5",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 3600,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02ztz:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 3600,
            "total": 3600,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 3600,
            "total": 3600,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15542/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 3600,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 3600,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-07T10:33:24.000+0000",
          "customfield_10309": null,
          "workratio": 100,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15542/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-06-04T07:00:39.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T10:33:24.000+0000",
          "timeoriginalestimate": 3600,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274444",
        "self": "https://jira.leapset.com/rest/api/2/issue/274444",
        "key": "PLAT-15512",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "All the mentioned improvements should be addressed\r\n* Receipt overlay should get hidden as Download button is pressed",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Feature development (Should meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks \r\nDev testing \r\nPeer / Lead review \r\nQA feature testing \r\nFeature review with the product owner and other stakeholders \r\nP0 and P1 bugs must not be there ",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": "2019-06-07T05:33:51.720+0000",
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 19800,
          "timeestimate": null,
          "versions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19123",
              "id": "19123",
              "description": "UA Reports Post beta ",
              "name": "UA Reports - Transactions GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=safwanm",
            "name": "safwanm",
            "key": "safwanm",
            "emailAddress": "Safwan.Mohammed@trycake.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=safwanm&avatarId=13703",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=safwanm&avatarId=13703",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=safwanm&avatarId=13703",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=safwanm&avatarId=13703"
            },
            "displayName": "Safwan Mohammed",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i025fn:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 14400,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=safwanm",
            "name": "safwanm",
            "key": "safwanm",
            "emailAddress": "Safwan.Mohammed@trycake.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=safwanm&avatarId=13703",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=safwanm&avatarId=13703",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=safwanm&avatarId=13703",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=safwanm&avatarId=13703"
            },
            "displayName": "Safwan Mohammed",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [
            {
              "id": "274586",
              "key": "PLAT-15542",
              "self": "https://jira.leapset.com/rest/api/2/issue/274586",
              "fields": {
                "summary": "Feature testing",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/5",
                  "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                  "name": "Resolved",
                  "id": "5",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "274587",
              "key": "PLAT-15543",
              "self": "https://jira.leapset.com/rest/api/2/issue/274587",
              "fields": {
                "summary": "Feature Implementation",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "274588",
              "key": "PLAT-15544",
              "self": "https://jira.leapset.com/rest/api/2/issue/274588",
              "fields": {
                "summary": "Test case design and review",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/5",
                  "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                  "name": "Resolved",
                  "id": "5",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            }
          ],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=safwanm",
            "name": "safwanm",
            "key": "safwanm",
            "emailAddress": "Safwan.Mohammed@trycake.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=safwanm&avatarId=13703",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=safwanm&avatarId=13703",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=safwanm&avatarId=13703",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=safwanm&avatarId=13703"
            },
            "displayName": "Safwan Mohammed",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 5400,
            "total": 19800,
            "percent": 27
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15512/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 5400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-06T11:21:40.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15512/watchers",
            "watchCount": 1,
            "isWatching": true
          },
          "created": "2019-06-03T10:18:53.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T10:33:38.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 3,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Receipt download frontend improvements",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274094",
        "self": "https://jira.leapset.com/rest/api/2/issue/274094",
        "key": "PLAT-15493",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19256",
              "id": "19256",
              "description": "UA Reports GA - Patch ",
              "name": "7.92.0.1 ",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- Should be redirected to correct reports url \r\n- Should be backward compatible for pos versions ",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Feature development (Should  meet acceptance criteria, No Sonar violations ) \r\nDev testing\r\nPeer / Lead review\r\nPrepare any required Documentation\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10106",
            "value": "IR-1",
            "id": "10106"
          },
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14214",
              "value": "Titans",
              "id": "14214"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 0,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=umeshj",
            "name": "umeshj",
            "key": "umeshj",
            "emailAddress": "Umesh.Jayasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=umeshj&avatarId=13601",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=umeshj&avatarId=13601",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=umeshj&avatarId=13601",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=umeshj&avatarId=13601"
            },
            "displayName": "Umesh Jayasinghe",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10211",
            "description": "Dev Complete",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Dev Complete",
            "id": "10211",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02wy7:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 28800,
            "total": 28800,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 28800,
            "total": 28800,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15493/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 28800,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 28800,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-04T07:44:01.000+0000",
          "customfield_10309": null,
          "workratio": 9223372036854775807,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15493/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-30T07:25:54.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-05T08:45:16.000+0000",
          "timeoriginalestimate": 0,
          "description": "Check for beta status in POS for merchants who are using reports and redirect them to dashboard reports or reportsng\r\nNote:- this is currently handled by reportsng and will be redirected if the beta is enabled, this solution will reduce the unnecessary redirection",
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 3,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Merchant Portal Redirection to Dashboard based on Beta Check ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274069",
        "self": "https://jira.leapset.com/rest/api/2/issue/274069",
        "key": "PLAT-15491",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 43200,
          "timeestimate": 27000,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02wsv:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 27000,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 16200,
            "total": 43200,
            "percent": 37
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 16200,
            "total": 43200,
            "percent": 37
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15491/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 16200,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 16200,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 37,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15491/watchers",
            "watchCount": 2,
            "isWatching": false
          },
          "created": "2019-05-30T04:41:20.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T04:12:31.000+0000",
          "timeoriginalestimate": 43200,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 5,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Production Support ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274068",
        "self": "https://jira.leapset.com/rest/api/2/issue/274068",
        "key": "PLAT-15490",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02wsn:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 5400,
            "total": 5400,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 5400,
            "total": 5400,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15490/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 5400,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 5400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15490/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-30T04:41:08.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T04:12:39.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Unplanned Tasks",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "274067",
        "self": "https://jira.leapset.com/rest/api/2/issue/274067",
        "key": "PLAT-15489",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- Should complete all the scheduled POS trainings ",
          "resolution": null,
          "customfield_11201": "Prepare any required Documentation",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": "2019-05-31T04:22:57.162+0000",
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 28800,
          "timeestimate": 14400,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02wsf:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 14400,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 14400,
            "total": 28800,
            "percent": 50
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 14400,
            "total": 28800,
            "percent": 50
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15489/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 14400,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 14400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 50,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15489/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-30T04:39:23.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-03T02:47:51.000+0000",
          "timeoriginalestimate": 28800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 3,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "POS Training",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-12000",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273953",
        "self": "https://jira.leapset.com/rest/api/2/issue/273953",
        "key": "PLAT-15484",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- Should attend any meetings related to PCI",
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w3b:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15484/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15484/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:30:07.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-31T05:42:16.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 2,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "PCI - Placeholder ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-12000",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273951",
        "self": "https://jira.leapset.com/rest/api/2/issue/273951",
        "key": "PLAT-15483",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Should complete the retrospective for Sprint 9 ",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Prepare any required documentation",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w2v:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15483/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-04T06:27:42.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15483/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:27:23.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T06:27:42.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 5,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Review and Retro (sprint 9)",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-12000",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273949",
        "self": "https://jira.leapset.com/rest/api/2/issue/273949",
        "key": "PLAT-15481",
        "fields": {
          "parent": {
            "id": "273316",
            "key": "PLAT-15471",
            "self": "https://jira.leapset.com/rest/api/2/issue/273316",
            "fields": {
              "summary": "Send a Failure notification emails for async doc generation ",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/1",
                "description": "The issue is awaiting pickup by the engineer to start work on it.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                "name": "Open",
                "id": "1",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                  "id": 2,
                  "key": "new",
                  "colorName": "blue-gray",
                  "name": "To Do"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 10800,
          "timeestimate": 10800,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w2f:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 10800,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 10800,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 10800,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15481/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15481/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:24:06.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T05:22:22.000+0000",
          "timeoriginalestimate": 10800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Test case design and review",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273947",
        "self": "https://jira.leapset.com/rest/api/2/issue/273947",
        "key": "PLAT-15480",
        "fields": {
          "parent": {
            "id": "273316",
            "key": "PLAT-15471",
            "self": "https://jira.leapset.com/rest/api/2/issue/273316",
            "fields": {
              "summary": "Send a Failure notification emails for async doc generation ",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/1",
                "description": "The issue is awaiting pickup by the engineer to start work on it.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                "name": "Open",
                "id": "1",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                  "id": 2,
                  "key": "new",
                  "colorName": "blue-gray",
                  "name": "To Do"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 28800,
          "timeestimate": 28800,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w1z:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 28800,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 28800,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 28800,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15480/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15480/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:20:14.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T06:49:56.000+0000",
          "timeoriginalestimate": 28800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273946",
        "self": "https://jira.leapset.com/rest/api/2/issue/273946",
        "key": "PLAT-15479",
        "fields": {
          "parent": {
            "id": "273316",
            "key": "PLAT-15471",
            "self": "https://jira.leapset.com/rest/api/2/issue/273316",
            "fields": {
              "summary": "Send a Failure notification emails for async doc generation ",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/1",
                "description": "The issue is awaiting pickup by the engineer to start work on it.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                "name": "Open",
                "id": "1",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                  "id": 2,
                  "key": "new",
                  "colorName": "blue-gray",
                  "name": "To Do"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 57600,
          "timeestimate": 57600,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w1r:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 57600,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 57600,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 57600,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15479/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15479/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:19:38.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-29T06:20:41.000+0000",
          "timeoriginalestimate": 57600,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273944",
        "self": "https://jira.leapset.com/rest/api/2/issue/273944",
        "key": "PLAT-15478",
        "fields": {
          "parent": {
            "id": "273120",
            "key": "PLAT-15446",
            "self": "https://jira.leapset.com/rest/api/2/issue/273120",
            "fields": {
              "summary": "Persist the selected filter across the tabs in transaction report (Beta feedback)",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/1",
                "description": "The issue is awaiting pickup by the engineer to start work on it.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                "name": "Open",
                "id": "1",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                  "id": 2,
                  "key": "new",
                  "colorName": "blue-gray",
                  "name": "To Do"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 7200,
          "timeestimate": 7200,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w1b:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 7200,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 7200,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 7200,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15478/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15478/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:14:05.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-06T06:05:22.000+0000",
          "timeoriginalestimate": 7200,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Test case design and review",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273943",
        "self": "https://jira.leapset.com/rest/api/2/issue/273943",
        "key": "PLAT-15477",
        "fields": {
          "parent": {
            "id": "273120",
            "key": "PLAT-15446",
            "self": "https://jira.leapset.com/rest/api/2/issue/273120",
            "fields": {
              "summary": "Persist the selected filter across the tabs in transaction report (Beta feedback)",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/1",
                "description": "The issue is awaiting pickup by the engineer to start work on it.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                "name": "Open",
                "id": "1",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                  "id": 2,
                  "key": "new",
                  "colorName": "blue-gray",
                  "name": "To Do"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 43200,
          "timeestimate": 43200,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w13:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 43200,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 43200,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 43200,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15477/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15477/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:13:57.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T06:55:03.000+0000",
          "timeoriginalestimate": 43200,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273942",
        "self": "https://jira.leapset.com/rest/api/2/issue/273942",
        "key": "PLAT-15476",
        "fields": {
          "parent": {
            "id": "273120",
            "key": "PLAT-15446",
            "self": "https://jira.leapset.com/rest/api/2/issue/273120",
            "fields": {
              "summary": "Persist the selected filter across the tabs in transaction report (Beta feedback)",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/1",
                "description": "The issue is awaiting pickup by the engineer to start work on it.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                "name": "Open",
                "id": "1",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                  "id": 2,
                  "key": "new",
                  "colorName": "blue-gray",
                  "name": "To Do"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 57600,
          "timeestimate": 43200,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w0v:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 43200,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 14400,
            "total": 57600,
            "percent": 25
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 14400,
            "total": 57600,
            "percent": 25
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15476/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 14400,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 14400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 25,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15476/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:13:47.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-31T05:40:01.000+0000",
          "timeoriginalestimate": 57600,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273939",
        "self": "https://jira.leapset.com/rest/api/2/issue/273939",
        "key": "PLAT-15475",
        "fields": {
          "parent": {
            "id": "273113",
            "key": "PLAT-15442",
            "self": "https://jira.leapset.com/rest/api/2/issue/273113",
            "fields": {
              "summary": "Display Order Types for item deletes/voids",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 28800,
          "timeestimate": 28800,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w0f:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 28800,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 28800,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 28800,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15475/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15475/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:02:20.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T06:54:21.000+0000",
          "timeoriginalestimate": 28800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273938",
        "self": "https://jira.leapset.com/rest/api/2/issue/273938",
        "key": "PLAT-15474",
        "fields": {
          "parent": {
            "id": "273113",
            "key": "PLAT-15442",
            "self": "https://jira.leapset.com/rest/api/2/issue/273113",
            "fields": {
              "summary": "Display Order Types for item deletes/voids",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 10618
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 43200,
          "timeestimate": 43200,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02w07:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 43200,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 43200,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 43200,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15474/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15474/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T06:02:11.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T11:44:14.000+0000",
          "timeoriginalestimate": 43200,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273316",
        "self": "https://jira.leapset.com/rest/api/2/issue/273316",
        "key": "PLAT-15471",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Should handle email documents \r\nShould handle 120 email request documents ",
          "resolution": null,
          "customfield_11201": "Feature development (Should  meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks\r\nDev testing\r\nPeer / Lead review\r\nTest case design\r\nTest case writing and automation\r\nQA feature testing\r\nPrepare any required Documentation\r\nFeature review with the product owner and other stakeholders\r\nP0 and P1 bugs must not be there",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 97200,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02s67:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 97200,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "subtasks": [
            {
              "id": "273946",
              "key": "PLAT-15479",
              "self": "https://jira.leapset.com/rest/api/2/issue/273946",
              "fields": {
                "summary": "Feature Implementation",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "273947",
              "key": "PLAT-15480",
              "self": "https://jira.leapset.com/rest/api/2/issue/273947",
              "fields": {
                "summary": "Feature testing",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "273949",
              "key": "PLAT-15481",
              "self": "https://jira.leapset.com/rest/api/2/issue/273949",
              "fields": {
                "summary": "Test case design and review",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            }
          ],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 97200,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15471/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15471/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-29T04:20:19.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-31T05:09:02.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 8,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Send a Failure notification emails for async doc generation ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-13024",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273120",
        "self": "https://jira.leapset.com/rest/api/2/issue/273120",
        "key": "PLAT-15446",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Common filters should be persisted when changing the tabs",
          "resolution": null,
          "customfield_11201": "Feature development (Should  meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks\r\nDev testing\r\nPeer / Lead review\r\nTest case design\r\nTest case writing and automation\r\nQA feature testing\r\nPrepare any required Documentation\r\nFeature review with product owner and other stakeholders\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": "2019-06-08T10:52:13.906+0000",
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 108000,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=safwanm",
            "name": "safwanm",
            "key": "safwanm",
            "emailAddress": "Safwan.Mohammed@trycake.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=safwanm&avatarId=13703",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=safwanm&avatarId=13703",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=safwanm&avatarId=13703",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=safwanm&avatarId=13703"
            },
            "displayName": "Safwan Mohammed",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02wyb:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 93600,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [
            {
              "id": "273942",
              "key": "PLAT-15476",
              "self": "https://jira.leapset.com/rest/api/2/issue/273942",
              "fields": {
                "summary": "Feature Implementation",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/3",
                  "description": "This issue is being actively worked on at the moment by the assignee.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                  "name": "In Progress",
                  "id": "3",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                    "id": 4,
                    "key": "indeterminate",
                    "colorName": "yellow",
                    "name": "In Progress"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "273943",
              "key": "PLAT-15477",
              "self": "https://jira.leapset.com/rest/api/2/issue/273943",
              "fields": {
                "summary": "Feature testing",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "273944",
              "key": "PLAT-15478",
              "self": "https://jira.leapset.com/rest/api/2/issue/273944",
              "fields": {
                "summary": "Test case design and review",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/3",
                  "description": "This issue is being actively worked on at the moment by the assignee.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                  "name": "In Progress",
                  "id": "3",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                    "id": 4,
                    "key": "indeterminate",
                    "colorName": "yellow",
                    "name": "In Progress"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            }
          ],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 14400,
            "total": 108000,
            "percent": 13
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15446/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 14400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15446/watchers",
            "watchCount": 4,
            "isWatching": false
          },
          "created": "2019-05-27T07:28:56.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T05:19:59.000+0000",
          "timeoriginalestimate": null,
          "description": "Only Close Cash, Employee are common and need to persist. \r\nScope reduced to Close cash only because of the complications of Employee filter being not static for all the tabs at the moments.\r\n\r\n ",
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 8,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Persist the selected filter across the tabs in transaction report (Beta feedback)",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273117",
        "self": "https://jira.leapset.com/rest/api/2/issue/273117",
        "key": "PLAT-15444",
        "fields": {
          "parent": {
            "id": "260776",
            "key": "PLAT-14366",
            "self": "https://jira.leapset.com/rest/api/2/issue/260776",
            "fields": {
              "summary": "As an Operator, I should be able to download the report data in PDF format so that I can save the report's data",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/10211",
                "description": "Dev Complete",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                "name": "Dev Complete",
                "id": "10211",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                "id": "7",
                "description": "gh.issue.story.desc",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                "name": "Story",
                "subtask": false,
                "avatarId": 10615
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02qyn:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15444/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15444/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-27T07:25:40.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-27T07:25:40.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@37e5e889[id=2182,rapidViewId=219,state=CLOSED,name=PlatTeam2-(SPRINT 5)-2019,startDate=2019-03-11T09:30:00.000Z,endDate=2019-03-25T11:00:00.000Z,completeDate=2019-03-25T05:31:32.093Z,sequence=2137]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273113",
        "self": "https://jira.leapset.com/rest/api/2/issue/273113",
        "key": "PLAT-15442",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Should reflect the changes in Ua reports front end , excel and 120 day export",
          "resolution": null,
          "customfield_11201": "Feature development (Should  meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks\r\nDev testing\r\nPeer / Lead review\r\nTest case design\r\nTest case writing \r\nQA feature testing\r\nPrepare any required Documentation\r\nFeature review with product owner and other stakeholders\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 72000,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02qxz:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 72000,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [
            {
              "id": "273938",
              "key": "PLAT-15474",
              "self": "https://jira.leapset.com/rest/api/2/issue/273938",
              "fields": {
                "summary": "Feature Implementation",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/3",
                  "description": "This issue is being actively worked on at the moment by the assignee.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                  "name": "In Progress",
                  "id": "3",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                    "id": 4,
                    "key": "indeterminate",
                    "colorName": "yellow",
                    "name": "In Progress"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "273939",
              "key": "PLAT-15475",
              "self": "https://jira.leapset.com/rest/api/2/issue/273939",
              "fields": {
                "summary": "Feature testing",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            }
          ],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 72000,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15442/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15442/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-27T07:02:23.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T11:43:57.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 8,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Display Order Types for item deletes/voids",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-13027",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273111",
        "self": "https://jira.leapset.com/rest/api/2/issue/273111",
        "key": "PLAT-15440",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- Should attend relevant minuteman related tasks",
          "resolution": null,
          "customfield_11201": "Technical Design update\r\nFeature development (Should  meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks\r\nDev testing\r\nPeer / Lead review\r\nTest case design\r\nTest case writing and automation\r\nQA feature testing\r\nIntegration testing\r\nContinuous Integration\r\nPrepare any required Documentation\r\nFeature review with the product owner and other stakeholders\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02qxj:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 7200,
            "total": 7200,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 7200,
            "total": 7200,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15440/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 7200,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 7200,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15440/watchers",
            "watchCount": 2,
            "isWatching": false
          },
          "created": "2019-05-27T06:57:49.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T10:40:05.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 5,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Minuteman related tasks",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-12108",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273105",
        "self": "https://jira.leapset.com/rest/api/2/issue/273105",
        "key": "PLAT-15439",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19123",
              "id": "19123",
              "description": "UA Reports Post beta ",
              "name": "UA Reports - Transactions GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- Should facilitate the production deployment for 7.87.0.0 release",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Deployment completed\r\nDev testing\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02qw7:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 14400,
            "total": 14400,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 14400,
            "total": 14400,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15439/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 14400,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 14400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-03T02:45:17.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15439/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-27T06:47:04.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-03T02:45:22.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 3,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Production Deployment ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-13024",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273104",
        "self": "https://jira.leapset.com/rest/api/2/issue/273104",
        "key": "PLAT-15438",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Should complete sanity test for the production environment - GA related features",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Test case design\r\nQA feature testing\r\nIntegration testing\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02qvz:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 25200,
            "total": 25200,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 25200,
            "total": 25200,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15438/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 25200,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 25200,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-04T04:00:11.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15438/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-27T06:46:53.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T04:02:08.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 3,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Production Sanity - GA ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-13024",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273095",
        "self": "https://jira.leapset.com/rest/api/2/issue/273095",
        "key": "PLAT-15437",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Should display an asterisk in the Zone filter  when a zone is in the inactive state or deleted",
          "resolution": null,
          "customfield_11201": "Feature development (Should  meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks\r\nDev testing\r\nPeer / Lead review\r\nTest case design\r\nTest case writing and automation\r\nQA feature testing\r\nPrepare any required Documentation\r\nFeature review with product owner and other stakeholders\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10711",
            "description": "",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Blocked",
            "id": "10711",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02qtz:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15437/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
            "id": "4",
            "description": "An improvement or enhancement to an existing feature or task.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
            "name": "Improvement",
            "subtask": false,
            "avatarId": 10610
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15437/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-27T06:34:44.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-05T16:30:42.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 2,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Asterisk should be displayed in the filter for deleted Zones",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-13262",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "273086",
        "self": "https://jira.leapset.com/rest/api/2/issue/273086",
        "key": "PLAT-15436",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Should display an asterisk in the Register filter when a register is deleted\r\nShould display an asterisk in the data grid (Register column) for deleted registers",
          "resolution": null,
          "customfield_11201": "Feature development (Should  meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks\r\nDev testing\r\nPeer / Lead review\r\nTest case design\r\nTest case writing and automation\r\nQA feature testing\r\nFeature review with product owner and other stakeholders\r\nP0 and P1 bugs must not be there\r\n",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "POS-Change",
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19123",
              "id": "19123",
              "description": "UA Reports Post beta ",
              "name": "UA Reports - Transactions GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [
            {
              "id": "120814",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120814",
              "type": {
                "id": "10000",
                "name": "Blocks",
                "inward": "is blocked by",
                "outward": "blocks",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10000"
              },
              "inwardIssue": {
                "id": "273079",
                "key": "POS-22293",
                "self": "https://jira.leapset.com/rest/api/2/issue/273079",
                "fields": {
                  "summary": "Maintain register deleted status in CouchDB",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/1",
                    "description": "The issue is awaiting pickup by the engineer to start work on it.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                    "name": "Open",
                    "id": "1",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                      "id": 2,
                      "key": "new",
                      "colorName": "blue-gray",
                      "name": "To Do"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            }
          ],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10711",
            "description": "",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Blocked",
            "id": "10711",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02qrz:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15436/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
            "id": "4",
            "description": "An improvement or enhancement to an existing feature or task.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
            "name": "Improvement",
            "subtask": false,
            "avatarId": 10610
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15436/watchers",
            "watchCount": 2,
            "isWatching": false
          },
          "created": "2019-05-27T06:25:32.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-05T16:32:00.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 2,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Asterisk should be displayed in the filter for deleted Registers",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-13262",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271279",
        "self": "https://jira.leapset.com/rest/api/2/issue/271279",
        "key": "PLAT-15360",
        "fields": {
          "customfield_13100": "0.0",
          "resolution": null,
          "customfield_16605": null,
          "lastViewed": null,
          "customfield_13210": null,
          "customfield_16604": null,
          "labels": [
            "GA++ShouldHave",
            "POS-Change",
            "Platform2",
            "UA-GA-Deferred"
          ],
          "customfield_13207": null,
          "customfield_13206": null,
          "customfield_13209": null,
          "customfield_13208": null,
          "aggregatetimeoriginalestimate": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "components": [],
          "customfield_17004": null,
          "customfield_13203": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_10600": "2|i02fxz:",
          "customfield_16706": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "customfield_11007": null,
          "customfield_11009": null,
          "progress": {
            "progress": 1800,
            "total": 1800,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15360/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/1",
            "id": "1",
            "description": "A problem which impairs or prevents the functions of the product.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10603&avatarType=issuetype",
            "name": "Bug",
            "subtask": false,
            "avatarId": 10603
          },
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "customfield_11003": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15360/watchers",
            "watchCount": 3,
            "isWatching": false
          },
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_11900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11701",
            "value": "New",
            "id": "11701"
          },
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_11901": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11715",
            "value": "Medium",
            "id": "11715"
          },
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-05T16:32:16.000+0000",
          "timeoriginalestimate": null,
          "description": "Steps: \r\nCreate a user from GUM \r\nPlace an order from the user / Approve a refund transaction from the user\r\nDelete the user\r\nCreate a new user with the deleted user's email (reactivate) \r\nPlace another POS order/ Approve a refund   from the new user \r\nLogin to Reports and check the employee / approved by filter\r\n\r\nActual result:\r\nThe filter has the same name twice (one with an asterisk and the other without an asterisk)\r\n\r\nExpected result:\r\nThe name should be displayed only once without an asterisk\r\n\r\nNote: \r\nThe data grid should also not show the asterisk for the previous order.\r\n",
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 3,
          "customfield_10009": 0,
          "customfield_10801": null,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "The same user is shown twice in the filter when a deleted user is reactivated",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "environment": "Tst2",
          "duedate": null,
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "customfield_11201": "RCA complete \r\nRCA origin found \r\nFIX explained \r\nIMPACT/RISKS identified \r\nPR linked \r\nLEAD reviewed \r\nTEST case available \r\nPRODUCTION ready \r\nERRORS fully handled",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11706",
            "value": "Coding",
            "id": "11706"
          },
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_15110": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/10006",
            "iconUrl": "https://jira.leapset.com/images/icons/priorities/major.svg",
            "name": "P2",
            "id": "10006"
          },
          "customfield_10100": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_14815": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "timeestimate": 0,
          "versions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19123",
              "id": "19123",
              "description": "UA Reports Post beta ",
              "name": "UA Reports - Transactions GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_14816": null,
          "customfield_14938": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10711",
            "description": "",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Blocked",
            "id": "10711",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17400": "",
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "aggregateprogress": {
            "progress": 1800,
            "total": 1800,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_14911": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "timespent": 1800,
          "aggregatetimespent": 1800,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_12601": null,
          "customfield_10309": null,
          "workratio": -1,
          "created": "2019-05-16T07:34:43.000+0000",
          "customfield_10300": null,
          "customfield_13000": null,
          "customfield_11601": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271032",
        "self": "https://jira.leapset.com/rest/api/2/issue/271032",
        "key": "PLAT-15315",
        "fields": {
          "parent": {
            "id": "270967",
            "key": "PLAT-15294",
            "self": "https://jira.leapset.com/rest/api/2/issue/270967",
            "fields": {
              "summary": "As an operator, I should be able to filter out transactions by revenue center",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/10211",
                "description": "Dev Complete",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                "name": "Dev Complete",
                "id": "10211",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                "id": "7",
                "description": "gh.issue.story.desc",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                "name": "Story",
                "subtask": false,
                "avatarId": 10615
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 28800,
          "timeestimate": 28800,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02egf:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 28800,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 28800,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 28800,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15315/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15315/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T10:46:20.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-30T05:47:01.000+0000",
          "timeoriginalestimate": 28800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271029",
        "self": "https://jira.leapset.com/rest/api/2/issue/271029",
        "key": "PLAT-15314",
        "fields": {
          "parent": {
            "id": "270967",
            "key": "PLAT-15294",
            "self": "https://jira.leapset.com/rest/api/2/issue/270967",
            "fields": {
              "summary": "As an operator, I should be able to filter out transactions by revenue center",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/10211",
                "description": "Dev Complete",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                "name": "Dev Complete",
                "id": "10211",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                "id": "7",
                "description": "gh.issue.story.desc",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                "name": "Story",
                "subtask": false,
                "avatarId": 10615
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 14400,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02efz:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 18000,
            "total": 18000,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 18000,
            "total": 18000,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15314/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 18000,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 18000,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-06T09:36:01.000+0000",
          "customfield_10309": null,
          "workratio": 125,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15314/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T10:46:02.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-06T09:36:01.000+0000",
          "timeoriginalestimate": 14400,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Test case design and review",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271027",
        "self": "https://jira.leapset.com/rest/api/2/issue/271027",
        "key": "PLAT-15313",
        "fields": {
          "parent": {
            "id": "270967",
            "key": "PLAT-15294",
            "self": "https://jira.leapset.com/rest/api/2/issue/270967",
            "fields": {
              "summary": "As an operator, I should be able to filter out transactions by revenue center",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/10211",
                "description": "Dev Complete",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                "name": "Dev Complete",
                "id": "10211",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                "id": "7",
                "description": "gh.issue.story.desc",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                "name": "Story",
                "subtask": false,
                "avatarId": 10615
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11706",
            "value": "Coding",
            "id": "11706"
          },
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14214",
              "value": "Titans",
              "id": "14214"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 28800,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10211",
            "description": "Dev Complete",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Dev Complete",
            "id": "10211",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02efj:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 45000,
            "total": 45000,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 45000,
            "total": 45000,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15313/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 45000,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 45000,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-04T04:58:55.000+0000",
          "customfield_10309": null,
          "workratio": 156,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15313/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T10:45:37.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T05:01:57.000+0000",
          "timeoriginalestimate": 28800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271026",
        "self": "https://jira.leapset.com/rest/api/2/issue/271026",
        "key": "PLAT-15312",
        "fields": {
          "parent": {
            "id": "270968",
            "key": "PLAT-15295",
            "self": "https://jira.leapset.com/rest/api/2/issue/270968",
            "fields": {
              "summary": "As an operator, I should be able to filter out transactions reports by the zone",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/10211",
                "description": "Dev Complete",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                "name": "Dev Complete",
                "id": "10211",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                "id": "7",
                "description": "gh.issue.story.desc",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                "name": "Story",
                "subtask": false,
                "avatarId": 10615
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 10800,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02efb:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 14400,
            "total": 14400,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 14400,
            "total": 14400,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15312/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 14400,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 14400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-05-15T09:32:58.000+0000",
          "customfield_10309": null,
          "workratio": 133,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15312/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T10:44:51.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-15T09:32:58.000+0000",
          "timeoriginalestimate": 10800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Test case design and review",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271025",
        "self": "https://jira.leapset.com/rest/api/2/issue/271025",
        "key": "PLAT-15311",
        "fields": {
          "parent": {
            "id": "270968",
            "key": "PLAT-15295",
            "self": "https://jira.leapset.com/rest/api/2/issue/270968",
            "fields": {
              "summary": "As an operator, I should be able to filter out transactions reports by the zone",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/10211",
                "description": "Dev Complete",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                "name": "Dev Complete",
                "id": "10211",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                "id": "7",
                "description": "gh.issue.story.desc",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                "name": "Story",
                "subtask": false,
                "avatarId": 10615
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 21600,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02ef3:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 28800,
            "total": 28800,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 28800,
            "total": 28800,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15311/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 28800,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 28800,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 133,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15311/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T10:44:37.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-29T04:16:18.000+0000",
          "timeoriginalestimate": 21600,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271024",
        "self": "https://jira.leapset.com/rest/api/2/issue/271024",
        "key": "PLAT-15310",
        "fields": {
          "parent": {
            "id": "270968",
            "key": "PLAT-15295",
            "self": "https://jira.leapset.com/rest/api/2/issue/270968",
            "fields": {
              "summary": "As an operator, I should be able to filter out transactions reports by the zone",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/10211",
                "description": "Dev Complete",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                "name": "Dev Complete",
                "id": "10211",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                  "id": 3,
                  "key": "done",
                  "colorName": "green",
                  "name": "Done"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                "id": "7",
                "description": "gh.issue.story.desc",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                "name": "Story",
                "subtask": false,
                "avatarId": 10615
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10115",
            "value": "IR-16",
            "id": "10115"
          },
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11706",
            "value": "Coding",
            "id": "11706"
          },
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14214",
              "value": "Titans",
              "id": "14214"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 18000,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02eev:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 21600,
            "total": 21600,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 21600,
            "total": 21600,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15310/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 21600,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 21600,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-05-27T12:59:48.000+0000",
          "customfield_10309": null,
          "workratio": 120,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15310/watchers",
            "watchCount": 2,
            "isWatching": false
          },
          "created": "2019-05-14T10:44:19.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-27T13:01:34.000+0000",
          "timeoriginalestimate": 18000,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271003",
        "self": "https://jira.leapset.com/rest/api/2/issue/271003",
        "key": "PLAT-15308",
        "fields": {
          "parent": {
            "id": "268516",
            "key": "PLAT-15207",
            "self": "https://jira.leapset.com/rest/api/2/issue/268516",
            "fields": {
              "summary": "[Transactions] Initial sorting column to be the secondary sort in the descending order when the user tries to sort by any other column.",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                "id": "4",
                "description": "An improvement or enhancement to an existing feature or task.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                "name": "Improvement",
                "subtask": false,
                "avatarId": 10610
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02ea7:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15308/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15308/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T09:50:20.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-14T09:50:20.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271002",
        "self": "https://jira.leapset.com/rest/api/2/issue/271002",
        "key": "PLAT-15307",
        "fields": {
          "parent": {
            "id": "268516",
            "key": "PLAT-15207",
            "self": "https://jira.leapset.com/rest/api/2/issue/268516",
            "fields": {
              "summary": "[Transactions] Initial sorting column to be the secondary sort in the descending order when the user tries to sort by any other column.",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                "id": "4",
                "description": "An improvement or enhancement to an existing feature or task.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                "name": "Improvement",
                "subtask": false,
                "avatarId": 10610
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e9z:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15307/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15307/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T09:50:10.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-14T09:50:10.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Test case design and review",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271001",
        "self": "https://jira.leapset.com/rest/api/2/issue/271001",
        "key": "PLAT-15306",
        "fields": {
          "parent": {
            "id": "268516",
            "key": "PLAT-15207",
            "self": "https://jira.leapset.com/rest/api/2/issue/268516",
            "fields": {
              "summary": "[Transactions] Initial sorting column to be the secondary sort in the descending order when the user tries to sort by any other column.",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                "id": "4",
                "description": "An improvement or enhancement to an existing feature or task.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                "name": "Improvement",
                "subtask": false,
                "avatarId": 10610
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e9r:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15306/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15306/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T09:49:56.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-14T09:49:56.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "271000",
        "self": "https://jira.leapset.com/rest/api/2/issue/271000",
        "key": "PLAT-15305",
        "fields": {
          "parent": {
            "id": "260822",
            "key": "PLAT-14372",
            "self": "https://jira.leapset.com/rest/api/2/issue/260822",
            "fields": {
              "summary": "ApprovedBy column is populated for users who does not need the approval for delete/void actions",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                "id": "4",
                "description": "An improvement or enhancement to an existing feature or task.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                "name": "Improvement",
                "subtask": false,
                "avatarId": 10610
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 3600,
          "timeestimate": 1800,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e9j:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 1800,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 1800,
            "total": 3600,
            "percent": 50
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 1800,
            "total": 3600,
            "percent": 50
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15305/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": 1800,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 1800,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 50,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15305/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T09:49:12.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-06T06:04:23.000+0000",
          "timeoriginalestimate": 3600,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Test case design and review",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "270999",
        "self": "https://jira.leapset.com/rest/api/2/issue/270999",
        "key": "PLAT-15304",
        "fields": {
          "parent": {
            "id": "260822",
            "key": "PLAT-14372",
            "self": "https://jira.leapset.com/rest/api/2/issue/260822",
            "fields": {
              "summary": "ApprovedBy column is populated for users who does not need the approval for delete/void actions",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                "id": "4",
                "description": "An improvement or enhancement to an existing feature or task.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                "name": "Improvement",
                "subtask": false,
                "avatarId": 10610
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 14400,
          "timeestimate": 14400,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=sanoji",
            "name": "sanoji",
            "key": "sanoji",
            "emailAddress": "Sanoj.Indrasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=sanoji&avatarId=14400",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=sanoji&avatarId=14400",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=sanoji&avatarId=14400",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=sanoji&avatarId=14400"
            },
            "displayName": "Sanoj Indrasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e9b:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 14400,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 14400,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 14400,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15304/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15304/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T09:48:02.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T06:51:56.000+0000",
          "timeoriginalestimate": 14400,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature testing",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "270998",
        "self": "https://jira.leapset.com/rest/api/2/issue/270998",
        "key": "PLAT-15303",
        "fields": {
          "parent": {
            "id": "260822",
            "key": "PLAT-14372",
            "self": "https://jira.leapset.com/rest/api/2/issue/260822",
            "fields": {
              "summary": "ApprovedBy column is populated for users who does not need the approval for delete/void actions",
              "status": {
                "self": "https://jira.leapset.com/rest/api/2/status/3",
                "description": "This issue is being actively worked on at the moment by the assignee.",
                "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                "name": "In Progress",
                "id": "3",
                "statusCategory": {
                  "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                  "id": 4,
                  "key": "indeterminate",
                  "colorName": "yellow",
                  "name": "In Progress"
                }
              },
              "priority": {
                "self": "https://jira.leapset.com/rest/api/2/priority/6",
                "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                "name": "Medium",
                "id": "6"
              },
              "issuetype": {
                "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                "id": "4",
                "description": "An improvement or enhancement to an existing feature or task.",
                "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                "name": "Improvement",
                "subtask": false,
                "avatarId": 10610
              }
            }
          },
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "resolution": null,
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 7200,
          "timeestimate": 7200,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/1",
            "description": "The issue is awaiting pickup by the engineer to start work on it.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
            "name": "Open",
            "id": "1",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
              "id": 2,
              "key": "new",
              "colorName": "blue-gray",
              "name": "To Do"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e93:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 7200,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 7200,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 7200,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15303/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
            "id": "5",
            "description": "The sub-task of the issue",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10616
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": 0,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15303/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T09:46:34.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T06:52:32.000+0000",
          "timeoriginalestimate": 7200,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Feature Implementation",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "270971",
        "self": "https://jira.leapset.com/rest/api/2/issue/270971",
        "key": "PLAT-15297",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19123",
              "id": "19123",
              "description": "UA Reports Post beta ",
              "name": "UA Reports - Transactions GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Should complete Regression testing in the staging environment for GA ",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Test case design\r\nQA feature testing\r\nIntegration testing\r\nP0 and P1 bugs must not be there",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 172800,
          "timeestimate": 0,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e3j:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 104400,
            "total": 104400,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 104400,
            "total": 104400,
            "percent": 100
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15297/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
            "id": "3",
            "description": "A task that needs to be done.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10618
          },
          "timespent": 104400,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 104400,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-04T04:02:45.000+0000",
          "customfield_10309": null,
          "workratio": 60,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15297/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T07:28:08.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-04T04:03:50.000+0000",
          "timeoriginalestimate": 172800,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 13,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "Regression testing - GA ",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": "PLAT-13024",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "270968",
        "self": "https://jira.leapset.com/rest/api/2/issue/270968",
        "key": "PLAT-15295",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19256",
              "id": "19256",
              "description": "UA Reports GA - Patch ",
              "name": "7.92.0.1 ",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Zone type filter should be available on all the relevant tabs in transactions",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Feature development (Should meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks \r\nDev testing \r\nPeer / Lead review \r\nTest case design \r\nTest case writing \r\nQA feature testing \r\nQA feature testing \r\nContinuous Integration \r\nPrepare any required Documentation \r\nFeature review with product owner and other stakeholders \r\nP0 and P1 bugs must not be there ",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10107",
            "value": "IR-2",
            "id": "10107"
          },
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11706",
            "value": "Coding",
            "id": "11706"
          },
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14214",
              "value": "Titans",
              "id": "14214"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "POS-Change",
            "platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 50400,
          "timeestimate": null,
          "versions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19123",
              "id": "19123",
              "description": "UA Reports Post beta ",
              "name": "UA Reports - Transactions GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [
            {
              "id": "120936",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120936",
              "type": {
                "id": "10400",
                "name": "Depends",
                "inward": "depends by",
                "outward": "depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10400"
              },
              "outwardIssue": {
                "id": "273236",
                "key": "PLAT-15457",
                "self": "https://jira.leapset.com/rest/api/2/issue/273236",
                "fields": {
                  "summary": "Zone filter in Transaction Reports",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/1",
                    "description": "The issue is awaiting pickup by the engineer to start work on it.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                    "name": "Open",
                    "id": "1",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                      "id": 2,
                      "key": "new",
                      "colorName": "blue-gray",
                      "name": "To Do"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/10700",
                    "id": "10700",
                    "description": "",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                    "name": "Clarification",
                    "subtask": false,
                    "avatarId": 10615
                  }
                }
              }
            }
          ],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Dileesha.Gamage%40syscolabs.com",
            "name": "Dileesha.Gamage@syscolabs.com",
            "key": "dileesha.gamage@syscolabs.com",
            "emailAddress": "Dileesha.Gamage@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=dileesha.gamage%40syscolabs.com&avatarId=14106"
            },
            "displayName": "Dileesha Gamage",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10211",
            "description": "Dev Complete",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Dev Complete",
            "id": "10211",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [
            {
              "self": "https://jira.leapset.com/rest/api/2/component/15905",
              "id": "15905",
              "name": "UA Reports API",
              "description": "UA Reports API"
            }
          ],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e71:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 0,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [
            {
              "id": "271024",
              "key": "PLAT-15310",
              "self": "https://jira.leapset.com/rest/api/2/issue/271024",
              "fields": {
                "summary": "Feature Implementation",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/5",
                  "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                  "name": "Resolved",
                  "id": "5",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "271025",
              "key": "PLAT-15311",
              "self": "https://jira.leapset.com/rest/api/2/issue/271025",
              "fields": {
                "summary": "Feature testing",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "271026",
              "key": "PLAT-15312",
              "self": "https://jira.leapset.com/rest/api/2/issue/271026",
              "fields": {
                "summary": "Test case design and review",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/5",
                  "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                  "name": "Resolved",
                  "id": "5",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            }
          ],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 64800,
            "total": 64800,
            "percent": 100
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15295/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
            "id": "7",
            "description": "gh.issue.story.desc",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
            "name": "Story",
            "subtask": false,
            "avatarId": 10615
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 64800,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-05-27T13:02:22.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15295/watchers",
            "watchCount": 3,
            "isWatching": false
          },
          "created": "2019-05-14T07:19:27.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-06T12:02:41.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 5,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "As an operator, I should be able to filter out transactions reports by the zone",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6ed197da[id=2223,rapidViewId=346,state=CLOSED,name=Titans - Sprint 9,startDate=2019-05-15T09:30:00.000Z,endDate=2019-05-29T09:30:00.000Z,completeDate=2019-05-29T05:34:09.997Z,sequence=2206]"
          ],
          "customfield_10001": "PLAT-13262",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "270967",
        "self": "https://jira.leapset.com/rest/api/2/issue/270967",
        "key": "PLAT-15294",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19256",
              "id": "19256",
              "description": "UA Reports GA - Patch ",
              "name": "7.92.0.1 ",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "Revenue center filter should be available on all the relevant tabs in transactions.",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": "Feature development (Should meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks \r\nDev testing \r\nPeer / Lead review \r\nTest case design \r\nTest case writing \r\nQA feature testing ",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10106",
            "value": "IR-1",
            "id": "10106"
          },
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11706",
            "value": "Coding",
            "id": "11706"
          },
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14214",
              "value": "Titans",
              "id": "14214"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": 72000,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10211",
            "description": "Dev Complete",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Dev Complete",
            "id": "10211",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [
            {
              "self": "https://jira.leapset.com/rest/api/2/component/15905",
              "id": "15905",
              "name": "UA Reports API",
              "description": "UA Reports API"
            }
          ],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e6z:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 28800,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "subtasks": [
            {
              "id": "271027",
              "key": "PLAT-15313",
              "self": "https://jira.leapset.com/rest/api/2/issue/271027",
              "fields": {
                "summary": "Feature Implementation",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/10211",
                  "description": "Dev Complete",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
                  "name": "Dev Complete",
                  "id": "10211",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "271029",
              "key": "PLAT-15314",
              "self": "https://jira.leapset.com/rest/api/2/issue/271029",
              "fields": {
                "summary": "Test case design and review",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/5",
                  "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                  "name": "Resolved",
                  "id": "5",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "271032",
              "key": "PLAT-15315",
              "self": "https://jira.leapset.com/rest/api/2/issue/271032",
              "fields": {
                "summary": "Feature testing",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            }
          ],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=adhitha.dias%40syscolabs.com",
            "name": "adhitha.dias@syscolabs.com",
            "key": "adhitha.dias@syscolabs.com",
            "emailAddress": "adhitha.dias@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=adhitha.dias%40syscolabs.com&avatarId=15510"
            },
            "displayName": "Adhitha Dias",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 63000,
            "total": 91800,
            "percent": 68
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15294/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
            "id": "7",
            "description": "gh.issue.story.desc",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
            "name": "Story",
            "subtask": false,
            "avatarId": 10615
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": 63000,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-04T05:03:12.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15294/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "created": "2019-05-14T07:12:24.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-05T09:53:08.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 8,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "As an operator, I should be able to filter out transactions by revenue center",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "PLAT-13262",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "269150",
        "self": "https://jira.leapset.com/rest/api/2/issue/269150",
        "key": "PLAT-15233",
        "fields": {
          "customfield_13100": "0.0",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_16605": null,
          "lastViewed": null,
          "customfield_13210": null,
          "customfield_16604": null,
          "labels": [
            "GA-ShouldHave",
            "UniversalAdminReport",
            "platform2",
            "ua_beta_deferred"
          ],
          "customfield_13207": null,
          "customfield_13206": null,
          "customfield_13209": null,
          "customfield_13208": null,
          "aggregatetimeoriginalestimate": 25200,
          "issuelinks": [
            {
              "id": "118519",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/118519",
              "type": {
                "id": "10003",
                "name": "Relates",
                "inward": "relates to",
                "outward": "relates to",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10003"
              },
              "outwardIssue": {
                "id": "262435",
                "key": "RNG-9479",
                "self": "https://jira.leapset.com/rest/api/2/issue/262435",
                "fields": {
                  "summary": "For SL merchants UA report shows Indian Rupee Sign ₹",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                      "id": 4,
                      "key": "indeterminate",
                      "colorName": "yellow",
                      "name": "In Progress"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/10006",
                    "iconUrl": "https://jira.leapset.com/images/icons/priorities/major.svg",
                    "name": "P2",
                    "id": "10006"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/1",
                    "id": "1",
                    "description": "A problem which impairs or prevents the functions of the product.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10603&avatarType=issuetype",
                    "name": "Bug",
                    "subtask": false,
                    "avatarId": 10603
                  }
                }
              }
            }
          ],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=pasans",
            "name": "pasans",
            "key": "pasans",
            "emailAddress": "pasan.sumanathilake@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=pasans&avatarId=10802",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=pasans&avatarId=10802",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=pasans&avatarId=10802",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=pasans&avatarId=10802"
            },
            "displayName": "Pasan Sumanathilake",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "components": [
            {
              "self": "https://jira.leapset.com/rest/api/2/component/11101",
              "id": "11101",
              "name": "Reports"
            }
          ],
          "customfield_17004": null,
          "customfield_13203": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_10600": "2|hz0o4e:",
          "customfield_16706": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=Ashen.Weerasinghe%40trycake.com",
            "name": "Ashen.Weerasinghe@trycake.com",
            "key": "ashen.weerasinghe@trycake.com",
            "emailAddress": "ashen.weerasinghe@syscolabs.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=ashen.weerasinghe%40trycake.com&avatarId=15403",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=ashen.weerasinghe%40trycake.com&avatarId=15403",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=ashen.weerasinghe%40trycake.com&avatarId=15403",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=ashen.weerasinghe%40trycake.com&avatarId=15403"
            },
            "displayName": "Ashen Weerasinghe",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "customfield_11012": null,
          "customfield_11007": null,
          "customfield_11009": null,
          "progress": {
            "progress": 0,
            "total": 25200,
            "percent": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15233/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/1",
            "id": "1",
            "description": "A problem which impairs or prevents the functions of the product.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10603&avatarType=issuetype",
            "name": "Bug",
            "subtask": false,
            "avatarId": 10603
          },
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "customfield_11003": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-06-07T03:26:06.000+0000",
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15233/watchers",
            "watchCount": 2,
            "isWatching": false
          },
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_11900": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11701",
            "value": "New",
            "id": "11701"
          },
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_11901": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/11715",
            "value": "Medium",
            "id": "11715"
          },
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-07T03:29:25.000+0000",
          "timeoriginalestimate": 25200,
          "description": "For SL merchants UA report shows Indian Rupee Sign {color:#222222}₹{color}\r\n\r\n*Steps to Recreate*\r\n 1. Onboard a SL merchant \r\n 2. Permission granted user log in to UA reports > Payroll > Tips and Cash\r\n\r\n*Expected Result*\r\n Data grid show (Rs) for below columns\r\n\r\nCard Tips(Rs)\r\n Service Charge(Rs) \r\n Total Card Tips(Rs)\r\n Cash Sales(Rs)\r\n Gift Card Cash Sales(Rs) \r\n Gift Card Cash Redemption(Rs)\r\n Owe to Merchant(Rs)\r\n\r\n*Actual Result*\r\n Indian Rupee sign shows for above column names. Refer the screenshot.\r\n !rupee.png|thumbnail!\r\n\r\nCC - [~msomasunthara]",
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 3,
          "customfield_10009": 0,
          "customfield_10801": null,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "[Transactions Report] For SL merchants UA report shows Indian Rupee Sign ₹",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": "POS-17881",
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "environment": "TST2",
          "duedate": null,
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19256",
              "id": "19256",
              "description": "UA Reports GA - Patch ",
              "name": "7.92.0.1 ",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": null,
          "customfield_11201": "RCA complete \r\nRCA origin found \r\nFIX explained \r\nIMPACT/RISKS identified \r\nPR linked \r\nLEAD reviewed \r\nTEST case available \r\nPRODUCTION ready \r\nERRORS fully handled",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10107",
            "value": "IR-2",
            "id": "10107"
          },
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_15110": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14217",
              "value": "Genesis",
              "id": "14217"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/10006",
            "iconUrl": "https://jira.leapset.com/images/icons/priorities/major.svg",
            "name": "P2",
            "id": "10006"
          },
          "customfield_10100": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_14815": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "timeestimate": 25200,
          "versions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/18846",
              "id": "18846",
              "name": "UA Reports - Transactions",
              "archived": false,
              "released": false
            }
          ],
          "customfield_14816": null,
          "customfield_14938": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/10211",
            "description": "Dev Complete",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/generic.png",
            "name": "Dev Complete",
            "id": "10211",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17400": "",
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": 25200,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=msomasunthara",
            "name": "msomasunthara",
            "key": "msomasunthara",
            "emailAddress": "mirunaaliny.somasuntharaiyer@sysco.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=msomasunthara&avatarId=11414",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=msomasunthara&avatarId=11414",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=msomasunthara&avatarId=11414",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=msomasunthara&avatarId=11414"
            },
            "displayName": "Mirunaaliny S Iyer",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "aggregateprogress": {
            "progress": 0,
            "total": 25200,
            "percent": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_14911": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "timespent": null,
          "aggregatetimespent": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_12601": null,
          "customfield_10309": null,
          "workratio": 0,
          "created": "2019-04-30T04:25:54.000+0000",
          "customfield_10300": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/10311",
            "value": "IR-12",
            "id": "10311"
          },
          "customfield_13000": null,
          "customfield_11601": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "268516",
        "self": "https://jira.leapset.com/rest/api/2/issue/268516",
        "key": "PLAT-15207",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19221",
              "id": "19221",
              "description": "UA Reports - Transactions GA++",
              "name": "UA Reports - Transactions GA++",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- when the user tries to sort by any other column initial sorting column should be made as to the secondary sorting column in the descending order\r\n- this will be crucial in transactions report as we are not letting the user, sort by any columns, therefore, transaction report should have the secondary sorting by default as well",
          "resolution": null,
          "customfield_11201": "Feature development (Should  meet acceptance criteria, No Sonar violations ) \r\nUnit test (100% coverage) for backend tasks\r\nDev testing\r\nPeer / Lead review\r\nTest case design\r\nTest case writing and automation\r\nQA feature testing\r\nFeature review with product owner and other stakeholders\r\nP0 and P1 bugs must not be there",
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": "2019-06-06T11:21:51.096+0000",
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "GA-ShouldHave",
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [
            {
              "id": "121317",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/121317",
              "type": {
                "id": "10000",
                "name": "Blocks",
                "inward": "is blocked by",
                "outward": "blocks",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10000"
              },
              "inwardIssue": {
                "id": "251811",
                "key": "PLAT-13596",
                "self": "https://jira.leapset.com/rest/api/2/issue/251811",
                "fields": {
                  "summary": "Sorting by columns for dynamic pagination transaction reports",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/3",
                    "description": "This issue is being actively worked on at the moment by the assignee.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
                    "name": "In Progress",
                    "id": "3",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
                      "id": 4,
                      "key": "indeterminate",
                      "colorName": "yellow",
                      "name": "In Progress"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/3",
                    "id": "3",
                    "description": "A task that needs to be done.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10618&avatarType=issuetype",
                    "name": "Task",
                    "subtask": false,
                    "avatarId": 10618
                  }
                }
              }
            },
            {
              "id": "119813",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/119813",
              "type": {
                "id": "10001",
                "name": "Cloners",
                "inward": "is cloned by",
                "outward": "clones",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10001"
              },
              "inwardIssue": {
                "id": "271039",
                "key": "PLAT-15318",
                "self": "https://jira.leapset.com/rest/api/2/issue/271039",
                "fields": {
                  "summary": " Default sorting based on the date and the receipt number ",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                    "id": "4",
                    "description": "An improvement or enhancement to an existing feature or task.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                    "name": "Improvement",
                    "subtask": false,
                    "avatarId": 10610
                  }
                }
              }
            },
            {
              "id": "120580",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120580",
              "type": {
                "id": "10003",
                "name": "Relates",
                "inward": "relates to",
                "outward": "relates to",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10003"
              },
              "outwardIssue": {
                "id": "268515",
                "key": "POS-21607",
                "self": "https://jira.leapset.com/rest/api/2/issue/268515",
                "fields": {
                  "summary": "[Payroll] - Initial sorting column to be the secondary sort in the descending order when the user tries to sort by any other column.",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/1",
                    "description": "The issue is awaiting pickup by the engineer to start work on it.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                    "name": "Open",
                    "id": "1",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                      "id": 2,
                      "key": "new",
                      "colorName": "blue-gray",
                      "name": "To Do"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                    "id": "4",
                    "description": "An improvement or enhancement to an existing feature or task.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                    "name": "Improvement",
                    "subtask": false,
                    "avatarId": 10610
                  }
                }
              }
            },
            {
              "id": "118146",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/118146",
              "type": {
                "id": "10003",
                "name": "Relates",
                "inward": "relates to",
                "outward": "relates to",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10003"
              },
              "outwardIssue": {
                "id": "265569",
                "key": "RNG-9994",
                "self": "https://jira.leapset.com/rest/api/2/issue/265569",
                "fields": {
                  "summary": "[UA Reports] [Clarification] The sorting order is no more user friendly due to the secondary sorting priority not given to the labor cost \"Total Amount\"\t",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/10007",
                    "iconUrl": "https://jira.leapset.com/images/icons/priorities/minor.svg",
                    "name": "P3",
                    "id": "10007"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/9",
                    "id": "9",
                    "description": "Requirement Clarifications",
                    "iconUrl": "https://jira.leapset.com/images/icons/issuetypes/undefined.png",
                    "name": "Req Clarification",
                    "subtask": false
                  }
                }
              }
            },
            {
              "id": "120578",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/120578",
              "type": {
                "id": "10003",
                "name": "Relates",
                "inward": "relates to",
                "outward": "relates to",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10003"
              },
              "inwardIssue": {
                "id": "268514",
                "key": "RNG-10249",
                "self": "https://jira.leapset.com/rest/api/2/issue/268514",
                "fields": {
                  "summary": "[Sales] Initial sorting column to be the secondary sort in the descending order when the user tries to sort by any other column.",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/1",
                    "description": "The issue is awaiting pickup by the engineer to start work on it.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                    "name": "Open",
                    "id": "1",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                      "id": 2,
                      "key": "new",
                      "colorName": "blue-gray",
                      "name": "To Do"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
                    "id": "4",
                    "description": "An improvement or enhancement to an existing feature or task.",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
                    "name": "Improvement",
                    "subtask": false,
                    "avatarId": 10610
                  }
                }
              }
            }
          ],
          "assignee": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=safwanm",
            "name": "safwanm",
            "key": "safwanm",
            "emailAddress": "Safwan.Mohammed@trycake.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=safwanm&avatarId=13703",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=safwanm&avatarId=13703",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=safwanm&avatarId=13703",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=safwanm&avatarId=13703"
            },
            "displayName": "Safwan Mohammed",
            "active": true,
            "timeZone": "Etc/UTC"
          },
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/inprogress.png",
            "name": "In Progress",
            "id": "3",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e3a:i",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=msomasunthara",
            "name": "msomasunthara",
            "key": "msomasunthara",
            "emailAddress": "mirunaaliny.somasuntharaiyer@sysco.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=msomasunthara&avatarId=11414",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=msomasunthara&avatarId=11414",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=msomasunthara&avatarId=11414",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=msomasunthara&avatarId=11414"
            },
            "displayName": "Mirunaaliny S Iyer",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "subtasks": [
            {
              "id": "271001",
              "key": "PLAT-15306",
              "self": "https://jira.leapset.com/rest/api/2/issue/271001",
              "fields": {
                "summary": "Feature Implementation",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "271002",
              "key": "PLAT-15307",
              "self": "https://jira.leapset.com/rest/api/2/issue/271002",
              "fields": {
                "summary": "Test case design and review",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            },
            {
              "id": "271003",
              "key": "PLAT-15308",
              "self": "https://jira.leapset.com/rest/api/2/issue/271003",
              "fields": {
                "summary": "Feature testing",
                "status": {
                  "self": "https://jira.leapset.com/rest/api/2/status/1",
                  "description": "The issue is awaiting pickup by the engineer to start work on it.",
                  "iconUrl": "https://jira.leapset.com/images/icons/statuses/open.png",
                  "name": "Open",
                  "id": "1",
                  "statusCategory": {
                    "self": "https://jira.leapset.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://jira.leapset.com/rest/api/2/priority/6",
                  "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                  "name": "Medium",
                  "id": "6"
                },
                "issuetype": {
                  "self": "https://jira.leapset.com/rest/api/2/issuetype/5",
                  "id": "5",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10616&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10616
                }
              }
            }
          ],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=msomasunthara",
            "name": "msomasunthara",
            "key": "msomasunthara",
            "emailAddress": "mirunaaliny.somasuntharaiyer@sysco.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=msomasunthara&avatarId=11414",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=msomasunthara&avatarId=11414",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=msomasunthara&avatarId=11414",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=msomasunthara&avatarId=11414"
            },
            "displayName": "Mirunaaliny S Iyer",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15207/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/4",
            "id": "4",
            "description": "An improvement or enhancement to an existing feature or task.",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10610&avatarType=issuetype",
            "name": "Improvement",
            "subtask": false,
            "avatarId": 10610
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": null,
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15207/watchers",
            "watchCount": 3,
            "isWatching": false
          },
          "created": "2019-04-26T05:07:29.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-06-06T11:21:50.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": 8,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "[Transactions] Initial sorting column to be the secondary sort in the descending order when the user tries to sort by any other column.",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
        "id": "266458",
        "self": "https://jira.leapset.com/rest/api/2/issue/266458",
        "key": "PLAT-15038",
        "fields": {
          "customfield_13100": "0.0",
          "customfield_15004": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14103",
            "value": "No",
            "id": "14103"
          },
          "fixVersions": [
            {
              "self": "https://jira.leapset.com/rest/api/2/version/19123",
              "id": "19123",
              "description": "UA Reports Post beta ",
              "name": "UA Reports - Transactions GA",
              "archived": false,
              "released": false
            }
          ],
          "customfield_15003": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14101",
            "value": "No",
            "id": "14101"
          },
          "customfield_11200": "- User should be able to filter by Receipt in Sales & Refunds report\r\n- User should be able to filter by Employee in Sales & Refunds report\r\n- User should be able to filter by Approved by in Sales & Refunds report\r\n- User should be able to filter by Order Type in Sales & Refunds report\r\n- User should be able to filter by Employee in Voids & Deletes report\r\n- User should be able to filter by Approved By in Voids & Deletes report\r\n- User should be able to filter by Order Type in Voids & Deletes report\r\n- User should be able to filter by Employee in Discounts & Comps report\r\n- User should be able to filter by Approved By in Discounts & Comps report\r\n- User should be able to filter by Order Type in Discounts & Comps report\r\n- User should be able to filter by Employee in Cash Log report",
          "resolution": {
            "self": "https://jira.leapset.com/rest/api/2/resolution/1",
            "id": "1",
            "description": "A fix for this issue is checked into the tree and tested.",
            "name": "Fixed"
          },
          "customfield_11201": null,
          "customfield_12404": null,
          "customfield_14946": null,
          "customfield_10105": null,
          "customfield_12403": null,
          "customfield_14947": null,
          "customfield_12406": null,
          "customfield_14944": null,
          "customfield_16605": null,
          "customfield_12405": null,
          "customfield_14945": null,
          "customfield_10900": null,
          "customfield_14948": null,
          "customfield_14706": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "lastViewed": null,
          "customfield_15110": null,
          "customfield_13210": null,
          "customfield_15114": null,
          "customfield_15115": [
            {
              "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14601",
              "value": "Unassigned",
              "id": "14601"
            }
          ],
          "customfield_15112": null,
          "customfield_15113": null,
          "priority": {
            "self": "https://jira.leapset.com/rest/api/2/priority/6",
            "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
            "name": "Medium",
            "id": "6"
          },
          "customfield_10100": null,
          "customfield_16604": null,
          "customfield_14942": null,
          "customfield_14943": null,
          "customfield_10102": null,
          "customfield_12402": null,
          "customfield_14940": null,
          "customfield_15116": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14219",
            "value": "S",
            "id": "14219"
          },
          "labels": [
            "GA-MustHave",
            "MustHave",
            "Platform2"
          ],
          "customfield_10103": null,
          "customfield_14941": null,
          "customfield_12401": null,
          "customfield_13207": null,
          "customfield_14814": null,
          "customfield_14935": null,
          "customfield_13206": null,
          "customfield_14815": null,
          "customfield_13209": null,
          "customfield_15109": null,
          "customfield_14812": null,
          "customfield_14933": null,
          "customfield_13208": null,
          "customfield_14813": null,
          "customfield_14934": null,
          "customfield_14939": null,
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "customfield_14816": null,
          "customfield_14938": null,
          "issuelinks": [
            {
              "id": "117381",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/117381",
              "type": {
                "id": "10302",
                "name": "Start-to-Finish Dependency",
                "inward": "is SF-depended by",
                "outward": "SF-depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10302"
              },
              "outwardIssue": {
                "id": "265555",
                "key": "PLAT-14847",
                "self": "https://jira.leapset.com/rest/api/2/issue/265555",
                "fields": {
                  "summary": "As an Operator, I should be able to see order types filters in Transactions report, so that I can get accurate transaction data categorized by order types",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                    "id": "7",
                    "description": "gh.issue.story.desc",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                    "name": "Story",
                    "subtask": false,
                    "avatarId": 10615
                  }
                }
              }
            },
            {
              "id": "117379",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/117379",
              "type": {
                "id": "10302",
                "name": "Start-to-Finish Dependency",
                "inward": "is SF-depended by",
                "outward": "SF-depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10302"
              },
              "outwardIssue": {
                "id": "265848",
                "key": "PLAT-14889",
                "self": "https://jira.leapset.com/rest/api/2/issue/265848",
                "fields": {
                  "summary": "As an operator I should be able to filter the Transaction reports from Receipt Id so that I could narrow down transactions accordingly",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                    "id": "7",
                    "description": "gh.issue.story.desc",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                    "name": "Story",
                    "subtask": false,
                    "avatarId": 10615
                  }
                }
              }
            },
            {
              "id": "117380",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/117380",
              "type": {
                "id": "10302",
                "name": "Start-to-Finish Dependency",
                "inward": "is SF-depended by",
                "outward": "SF-depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10302"
              },
              "outwardIssue": {
                "id": "265852",
                "key": "PLAT-14891",
                "self": "https://jira.leapset.com/rest/api/2/issue/265852",
                "fields": {
                  "summary": "As an operator I should be able to filter the Transaction reports from Employee so that I could narrow down transactions accordingly",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                    "id": "7",
                    "description": "gh.issue.story.desc",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                    "name": "Story",
                    "subtask": false,
                    "avatarId": 10615
                  }
                }
              }
            },
            {
              "id": "117384",
              "self": "https://jira.leapset.com/rest/api/2/issueLink/117384",
              "type": {
                "id": "10302",
                "name": "Start-to-Finish Dependency",
                "inward": "is SF-depended by",
                "outward": "SF-depends on",
                "self": "https://jira.leapset.com/rest/api/2/issueLinkType/10302"
              },
              "outwardIssue": {
                "id": "266941",
                "key": "PLAT-15077",
                "self": "https://jira.leapset.com/rest/api/2/issue/266941",
                "fields": {
                  "summary": "As an operator I should be able to filter the Transaction reports from Approved By so that I could narrow down transactions accordingly",
                  "status": {
                    "self": "https://jira.leapset.com/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5",
                    "statusCategory": {
                      "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://jira.leapset.com/rest/api/2/priority/6",
                    "iconUrl": "https://jira.leapset.com/images/icons/priority_major.gif",
                    "name": "Medium",
                    "id": "6"
                  },
                  "issuetype": {
                    "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
                    "id": "7",
                    "description": "gh.issue.story.desc",
                    "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
                    "name": "Story",
                    "subtask": false,
                    "avatarId": 10615
                  }
                }
              }
            }
          ],
          "assignee": null,
          "status": {
            "self": "https://jira.leapset.com/rest/api/2/status/5",
            "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
            "iconUrl": "https://jira.leapset.com/images/icons/statuses/resolved.png",
            "name": "Resolved",
            "id": "5",
            "statusCategory": {
              "self": "https://jira.leapset.com/rest/api/2/statuscategory/3",
              "id": 3,
              "key": "done",
              "colorName": "green",
              "name": "Done"
            }
          },
          "components": [
            {
              "self": "https://jira.leapset.com/rest/api/2/component/11101",
              "id": "11101",
              "name": "Reports"
            }
          ],
          "customfield_17403": "",
          "customfield_15104": null,
          "customfield_17402": "",
          "customfield_17401": "",
          "customfield_17004": null,
          "customfield_17400": "",
          "customfield_13203": null,
          "customfield_14810": null,
          "customfield_14931": null,
          "customfield_11300": null,
          "customfield_14811": null,
          "customfield_15108": null,
          "customfield_14932": null,
          "customfield_15105": null,
          "customfield_15106": null,
          "customfield_17404": null,
          "customfield_14930": null,
          "customfield_12107": null,
          "customfield_16707": null,
          "customfield_14924": null,
          "customfield_14803": null,
          "customfield_10600": "2|i02e33:",
          "customfield_16706": null,
          "customfield_14804": null,
          "customfield_14925": null,
          "customfield_16705": null,
          "customfield_16704": null,
          "customfield_14923": null,
          "customfield_14807": null,
          "customfield_14928": null,
          "aggregatetimeestimate": null,
          "customfield_14808": null,
          "customfield_14929": null,
          "customfield_14926": null,
          "customfield_14806": null,
          "customfield_14927": null,
          "customfield_14809": null,
          "creator": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=msomasunthara",
            "name": "msomasunthara",
            "key": "msomasunthara",
            "emailAddress": "mirunaaliny.somasuntharaiyer@sysco.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=msomasunthara&avatarId=11414",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=msomasunthara&avatarId=11414",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=msomasunthara&avatarId=11414",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=msomasunthara&avatarId=11414"
            },
            "displayName": "Mirunaaliny S Iyer",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "subtasks": [],
          "customfield_11010": null,
          "reporter": {
            "self": "https://jira.leapset.com/rest/api/2/user?username=msomasunthara",
            "name": "msomasunthara",
            "key": "msomasunthara",
            "emailAddress": "mirunaaliny.somasuntharaiyer@sysco.com",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/useravatar?ownerId=msomasunthara&avatarId=11414",
              "24x24": "https://jira.leapset.com/secure/useravatar?size=small&ownerId=msomasunthara&avatarId=11414",
              "16x16": "https://jira.leapset.com/secure/useravatar?size=xsmall&ownerId=msomasunthara&avatarId=11414",
              "32x32": "https://jira.leapset.com/secure/useravatar?size=medium&ownerId=msomasunthara&avatarId=11414"
            },
            "displayName": "Mirunaaliny S Iyer",
            "active": true,
            "timeZone": "Asia/Colombo"
          },
          "customfield_11012": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_16306": null,
          "customfield_16305": null,
          "customfield_16304": null,
          "customfield_11007": null,
          "customfield_14911": null,
          "customfield_11009": null,
          "customfield_13703": null,
          "customfield_14912": null,
          "customfield_14917": null,
          "customfield_14918": null,
          "customfield_14915": null,
          "customfield_14916": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15038/votes",
            "votes": 0,
            "hasVoted": false
          },
          "issuetype": {
            "self": "https://jira.leapset.com/rest/api/2/issuetype/7",
            "id": "7",
            "description": "gh.issue.story.desc",
            "iconUrl": "https://jira.leapset.com/secure/viewavatar?size=xsmall&avatarId=10615&avatarType=issuetype",
            "name": "Story",
            "subtask": false,
            "avatarId": 10615
          },
          "timespent": null,
          "project": {
            "self": "https://jira.leapset.com/rest/api/2/project/10900",
            "id": "10900",
            "key": "PLAT",
            "name": "Platform",
            "avatarUrls": {
              "48x48": "https://jira.leapset.com/secure/projectavatar?pid=10900&avatarId=10011",
              "24x24": "https://jira.leapset.com/secure/projectavatar?size=small&pid=10900&avatarId=10011",
              "16x16": "https://jira.leapset.com/secure/projectavatar?size=xsmall&pid=10900&avatarId=10011",
              "32x32": "https://jira.leapset.com/secure/projectavatar?size=medium&pid=10900&avatarId=10011"
            }
          },
          "customfield_17104": null,
          "customfield_11000": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11001": {
            "errorMessage": "The Service Desk you are trying to view does not exist.",
            "i18nErrorMessage": {
              "i18nKey": "sd.agent.servicedesk.error.servicedesk.missing",
              "parameters": []
            }
          },
          "customfield_11002": null,
          "aggregatetimespent": null,
          "customfield_11003": null,
          "customfield_14910": null,
          "customfield_10310": null,
          "customfield_11004": null,
          "customfield_14506": null,
          "customfield_16926": null,
          "customfield_14507": null,
          "customfield_12601": null,
          "customfield_10700": null,
          "customfield_16925": null,
          "customfield_14504": null,
          "customfield_10701": null,
          "customfield_14505": null,
          "customfield_10702": null,
          "resolutiondate": "2019-05-28T10:12:12.000+0000",
          "customfield_10309": null,
          "workratio": -1,
          "watches": {
            "self": "https://jira.leapset.com/rest/api/2/issue/PLAT-15038/watchers",
            "watchCount": 2,
            "isWatching": false
          },
          "created": "2019-04-11T06:00:53.000+0000",
          "customfield_12201": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/12105",
            "value": "Medium",
            "id": "12105"
          },
          "customfield_14503": null,
          "customfield_10300": null,
          "customfield_13405": null,
          "customfield_16915": null,
          "customfield_13404": null,
          "customfield_16914": null,
          "customfield_13407": null,
          "customfield_16913": null,
          "customfield_13406": null,
          "customfield_16919": null,
          "customfield_13408": null,
          "updated": "2019-05-28T10:12:12.000+0000",
          "timeoriginalestimate": null,
          "description": null,
          "customfield_13000": null,
          "customfield_11101": null,
          "customfield_16911": {
            "self": "https://jira.leapset.com/rest/api/2/customFieldOption/14720",
            "value": "Feature",
            "id": "14720"
          },
          "customfield_16910": null,
          "customfield_13403": null,
          "customfield_16905": null,
          "customfield_10006": null,
          "customfield_10007": null,
          "customfield_10008": null,
          "customfield_10009": 0,
          "customfield_16909": null,
          "customfield_16908": null,
          "customfield_16907": null,
          "customfield_16906": null,
          "summary": "As an operator, I should be able to filter my transactions report so that I can retrieve specific information",
          "customfield_10000": [
            "com.atlassian.greenhopper.service.sprint.Sprint@1ef21bf5[id=2142,rapidViewId=219,state=ACTIVE,name=Titans - Sprint 10,startDate=2019-05-30T09:30:00.000Z,endDate=2019-06-11T18:30:00.000Z,completeDate=<null>,sequence=2255]"
          ],
          "customfield_10001": null,
          "customfield_12301": null,
          "customfield_10002": "9223372036854775807",
          "customfield_12300": [],
          "customfield_12302": null,
          "customfield_11601": null,
          "environment": null,
          "customfield_11603": null,
          "customfield_11602": null,
          "customfield_11604": null,
          "duedate": null,
          "customfield_11606": null
        }
      }
    ]
  }
  
  module.exports = { resp }
  