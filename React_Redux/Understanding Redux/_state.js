                //state shape
                const initialState = [

                    {
                        entities : {
                            Users : {
                                userID : {
                                    1 : {
                                        "lastName" :"Lewis",
                                        "firstName" :"Shaun"
    
                                    },
    
                                    2 : {
                                        "lastName" : "English",
                                        "firstName" : "Johnny"
                                    }
                                }
                            },
    
                            Avatar : {
                                avatarID : {
                                    1 : {
                                        "avatar" : "http://...",
                                        "users" : [1, 2]
                                    },
    
                                    2 : {
                                        "avatar" : "http://...",
                                        "users" : [1, 2]
                                    }
                                }
                            },
                            UserOptions : {
                                userOptionsID : {
                                    1 : {
                                        "userID" : 1,
                                        "optionID" : 1
                                    },
    
                                    2 : {
                                        "userID" : 1,
                                        "optionID" : 2
                                    },
                                    3 : {
                                        "userID" : 2,
                                        "optionID" : 1
                                    }
                                }
    
                            },
                            Options : {
                                optionID : {
                                    1 : {
                                        "option1" : "this is option 1 optionID1",
                                        "option2" : " this is option2 optionID1",
                                        "selectedOption1" : false,
                                        "selectedOption2" : true,
                                        "newOption" : false,
                                        "users" : [1, 2]
                                    },
    
                                    2 : {
                                        "option1" : "this is option 1 optionID1",
                                        "option2" : " this is option2 optionID2",
                                        "selectedOption1" : false,
                                        "selectedOption2" : true,
                                        "newOption" : false,
                                        "users" : [1, 2]
    
                                    }
                                }
    
                            },
                            NewOptions : {
                                newOptionID : {
                                    1 : {
                                        "newCount" : 1,
                                        "options" : [1, 2]
    
                                    },
    
                                    2 : {
                                        "newCount" : 2,
                                        "options" : [1, 2]
    
                                    }
    
                                }
    
    
                            },
                            AnsweredOptions : {
                                answeredID : {
                                    1 : {
                                        "selectedOption" : false,
                                        "answeredCount" : 0,
                                        "options" : [1, 2]
                                    },
    
                                    2 : {
                                        "selectedOption" : false,
                                        "answeredCount" : 0,
                                        "options" : [1, 2]
                                    }
                                }
    
                            },
                            Votes : {
                                voteID : {
                                    1 : {
                                        "vote" : 0,
                                        "options" : [1, 2]
                                    },
                                    2 : {
                                        "vote" : 2,
                                        "options" : [1, 2]
                                    }
                                }
    
                            },
                            Percentages : {
                                percentageID : {
                                    1 : {
                                        "percentage" : 0,
                                        "votes" : [1, 2]
    
    
                                    },
                                    2 : {
                                        "percentage" : 0,
                                        "votes" : [1, 2]
    
                                    }
    
                                }
    
                            },
                            Score : {
                                scoreID : {
                                    1 : {
                                        "score" : 2,
                                        "answers" : [1, 2]  
                                    },
                                    2 : {
                                        "score" : 2,
                                        "answers" : [1, 2]  
                                    }
                                }
    
                            }
    
                        }
                    }
    
    
    
                    ]
    