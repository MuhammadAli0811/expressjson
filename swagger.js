const swaggerData = "./swagger_data";

module.exports = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "zGlue Canvas Api-Doc ",
    description: "zGlue Canvas Api-Doc"
  },
  host: "localhost:4007",
  basePath: "/api",
  tags: [
    {
      name: "App",
      description: "API for getting all the app data"
    }
  ],
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
 
  

  paths: {
    "/app/systems":{
      get :{
        tags: ["System"],
        summary: "Get All System data",
        
        parameters: [
          {
            in: "header",
            name: "Authorization",
            required: true
          }
        ],
        responses: {
          200: {
            description: "Successful",
            
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/app-systems.json`)
            }
          },
          404: {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
            }
          }
        }
      }
      
      
      
    },
        "/systems/{system_id}":{


              get :{
                tags: ["System"],
                summary: "Fetch System Data by specified ID",
                parameters: [
                  {in: "header",
                    name: "Authorization",
                    required: true
                  }
                  ,{
                    in: "path",
                    name : "system_id",
                    required: true
                  }
                ],
                
                responses: {
                  200: {
                    description: "Successful",
                    schema: {
                      type: "object",
              example: require(`${swaggerData}/systems/app-systems-id.json`)
                      
                    }
                  },
                  404: {
                    description: "Unsuccessful",
                    schema: {
                      "isError": "false"
                    }
                  }
                }
              },
       
      put :{
        tags: ["System"],
        summary: "Update system by ID",
        parameters: [
          {in: "header",
            name: "Authorization",
            required: true
          }
          ,{
            in: "path",
            name : "system_id",
            required: true
          }
          ,{
            
            in: "body",
            name: "data",
            required: true,
            example: require(`${swaggerData}/systems/update-system-req.json`)
         
          }],
        
          responses: {
            200: {
              description: "Successful",
              schema: {
                type: "object",
            
                example: require(`${swaggerData}/systems/update-system-response.json`)
              }
            },
            404: {
              description: "Unsuccessful",
              schema: {
                "isError": "false"
              }
            }
          }
      },
            delete :{
              tags: ["System"],
              summary: "Delete system",
              description: "Delete system by ID",
              parameters: [
                {
                  
                  in: "header",
                  name: "Authorization",
                  required: true
                }
                ,
                {
                  in: "path",
                  name: "system_id",
                  required: true
                }],
              
                responses: {
                  200: {
                    description: "Successful",
                    example: require(`${swaggerData}/systems/delete-system-response.json`)
                  },
                  404: {
                    description: "System not found",
                    example: {}
                  }
                }
              }
            },

"/download-rdl-netlist/{system_id}":{



  get :{
    tags: ["Download RDL Net File"],
    summary: "Download Net List Data",
    parameters: [
      {in: "header",
        name: "Authorization",
        required: true
      }
      ,{
        in: "path",
        name : "system_id",
        required: true
      }
    ],
    
    responses: {
      200: {
        description: "Successful Download",
        schema: {
          
        }
      },
      404: {
        description: "Unsuccessful",
        schema: {
          "isError": "false"
        }
      }
    }
  }

},  


"/download-netlist-csv/{system_id}":{



  get :{
    tags: ["Download CSV Net List"],
    summary: "Download Net CSV Data",
    parameters: [
      {in: "header",
        name: "Authorization",
        required: true
      }
      ,{
        in: "path",
        name : "system_id",
        required: true
      }
    ],
    
    responses: {
      200: {
        description: "Successful Download",
        schema: {
          
        }
      },
      404: {
        description: "Unsuccessful",
        schema: {
          "isError": "false"
        }
      }
    }
  }

},  


"/resistors/{resistor_id}": {
  get : {
    tags: ["Resistor Data"],
    summary: "Get Resistor Data By ID",
    parameters: [
      {
        in: "header",
        name: "Authorization",
        required: true,
      },
      {
        in: "path",
        name:"resistor_id",
        required:true,
        type:"string"
      }
    ],
    responses: {
      200: {
        description: "Successful",
        schema: {
          type: "object",
          example: require(`${swaggerData}/systems/resistor-id.json`)
          
        }
      },
      404 : {
        description: "Unsuccessful",
        schema: {
          "isError": "false"
          
        }
      }
    }
  }
},

"/resistors": {
  get : {
    tags: ["Resistor Data"],
    summary: "Get All Resistor Data ",
    parameters: [
      {
        in: "header",
        name: "Authorization",
        required: true,
      }
    ],
    responses: {
      200: {
        description: "Successful",
        schema: {
          type: "object",
          example: require(`${swaggerData}/systems/resistors.json`)
          
        }
      },
      404 : {
        description: "Unsuccessful",
        schema: {
          "isError": "false"
          
        }
      }
    }
  }
},

    "/architectures/{architecture_id}":{
      get :{
        tags: ["Architectures Data "],
        summary: "Get Data Architecturesr By ID",
      
        parameters: [
          {
            in: "header",
            name: "Authorization",
            required: true
          },
          { 
            
            in: "path",
            name: "architecture_id",
            required: true
          }
        ],
        responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/architecture-id.json`)
              
            }
          },
          404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
        }
      }
    },


    
    "/architectures":{
      get :{
        tags: ["Architectures Data "],
        summary: "All Get Data Architecture  ",
  
        parameters: [
          {
            in: "header",
            name: "Authorization",
            required: true
          }
        ],
        
        responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/architecture.json`)
              
            }
          },
          404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
        }
      }
    },


    "/devices":{
      get :{
         tags: ["Devices Data "],
         summary: "Fetch All Device Data",
   
         parameters: [
           {
             in: "header",
             name: "Authorization",
             required: true
           }
         ],
         responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/device.json`)
              
            }
          },
          404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
        }
      }
    },
 

     "/devices/{device_id}":{
      get :{
         tags: ["Devices Data "],
         summary: "Fetch All Device Data",
   
         parameters: [
           {
             in: "header",
             name: "Authorization",
             required: true
           },
           {
             in: "path",
             name: "device_id",
             required: true
           }
         ],
         responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/device-id.json`)
              
            }
          },
          404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
         }
        }
       },
 
    "/app": {
      get: {
        tags: ["App"],
        summary: "Get app data",
        parameters: [
          {
            in: "header",
            name: "Authorization",
            required: true
          }
        ],
        responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/app.json`)
            }
          },
          404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
        }
      }
    },


    "/download-chip-coords-csv/{system_id}":{
      get :{
         tags: ["Download Chip Coords"],
         summary: "To get file by downloading link",
   
         parameters: [
           {
             in: "header",
             name: "Authorization",
             required: true
           },
           {
             in: "path",
             name: "system_id",
             required: true
           }
         ],
         responses: {
           200: {
            description: "Succesful Download",
            schema: {
              "isError": "true"
              
            }
          },
           404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
         }
       }
      
 
 
     },

    "/set-system-filter":{
      post :{
         tags: ["Set System Filter"],
         summary: "Insert data on system filter",
   
         parameters: [
           {
             in: "header",
             name: "Authorization",
             required: true
           },
           {
             in: "body",
             name: "data",
             required: true,
             example: require(`${swaggerData}/systems/set-system-filter.json`)
           }
         ],
         responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/set-system-filter-resp.json`)
            }
          },
          404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
        }
      }
    },

 

     "/delete-all-nets/{sys_id}/{net_id}":{
      delete :{
         tags: ["Delete All Net System"],
         summary: "Remove Net System Data ",
   
         parameters: [
           {
             in: "header",
             name: "Authorization",
             required: true
           },
           {
             in: "path",
             name: "net_id",
             required: true
           }
           ,
           {
             in: "path",
             name: "sys_id",
             required: true
           }
         ],
         responses: {
          200: {
           description: "Unsuccessful",
           schema: {
             "isError": "true"
             
           }
         },
          404 : {
           description: "Unsuccessful",
           schema: {
             "isError": "false"
             
           }
         }
        }
      }
     


    },


       
       "/delete-net/{sys_id}/{net_io_id}" :{
        delete :{
          tags: ["Delete All Net System"],
           summary: "Remove Net IO Data ",
     
           parameters: [
             {
               in: "header",
               name: "Authorization",
               required: true
             },
             {
               in: "path",
               name: "sys_id",
               required: true
             }
             ,
             {
              in: "path",
              name: "net_io_id",
              required: true
            }
            ,
             {
               in: "path",
               name: "sys_id",
               required: true
             }
           ],
           responses: {
            200: {
             description: "Unsuccessful",
             schema: {
               "isError": "true"
               
             }
           },
            404 : {
             description: "Unsuccessful",
             schema: {
               "isError": "false"
               
             }
           }
          }
        }
       
  
  
      },

       
       "/share-sys-group"  :{
       post :{
           tags: ["Insert Data on System Group"],
           summary: "Insert Data on Share System Group ",
     
           parameters: [
             {
               in: "header",
               name: "Authorization",
               required: true
             },
             {
               in: "body",
               name: "data",
               required: true,
               example: require(`${swaggerData}/systems/share-grp-req.json`)
             }
           
           ],
           responses: {
            200: {
              description: "Successful",
              schema: {
                type: "object",
                example: require(`${swaggerData}/systems/share-grp-resp.json`)
              }
            },
            404 : {
              description: "Unsuccessful",
              schema: {
                "isError": "false"
                
              }
            }
          }
        }
      },
   

       
    "/save-pin-info":{
     put :{
      tags: ["Save Pin Connection"],
      summary: "Connect pins",
   
         parameters: [
           {
             in: "header",
             name: "Authorization",
             required: true
           },
           {
             in: "body",
             name: "data",
             required: true,
             example: require(`${swaggerData}/systems/save-pin-request.json`)

           }
         
         ],
         responses: {
           200: {
             description: "Successful",
             schema: {
              example: require(`${swaggerData}/systems/save-pin-response.json`)
             }
           }
         }
       }
      
 
 
     },

   "/save-issues":{
      post :{
          tags: ["Save Issue"],
          summary: "Input data ",
    
          parameters: [
            {
              in: "header",
              name: "Authorization",
              required: true
            },
            {
              in: "body",
              name: "data",
              required: true,
              example: require(`${swaggerData}/systems/save-issue.json`)
            }
          
          ],
          responses: {
            200: {
              description: "Successful",
              schema: {
                type: "object",
                example: require(`${swaggerData}/systems/sava-issue-resp.json`)
              }
            }, 
            404 : {
              description: "Unsuccessful",
              schema: {
                "isError": "false"
                
              }
            }
          }
        }
      },


      "/user-log" :{
    post :{
        tags: ["Insert User Log"],
        summary: "Input data ",
  
        parameters: [
          {
            in: "header",
            name: "Authorization",
            required: true
          },
          {
            in: "body",
            name: "data",
            required: true,
            example: require(`${swaggerData}/systems/userlog-req.json`)
          }
        
        ],
        responses: {
          200: {
            description: "Successful",
            schema: {
              type: "object",
              example: require(`${swaggerData}/systems/userlog-resp.json`)
            }
          },
          404 : {
            description: "Unsuccessful",
            schema: {
              "isError": "false"
              
            }
          }
        }
      }
    },
 
    
        
    "/send-email" :{
      post :{
          tags: ["Send Email "],
          summary: "You can send by API",
    
          parameters: [
            {
              in: "header",
              name: "Authorization",
              required: true
            },
            {
              in: "body",
              name: "data",
              required: true,
              example: require(`${swaggerData}/systems/email.json`)
            }
          
          ],
          responses: {
            200: {
              description: "Successful",
              schema: {
                type: "object",
               
              }
            },
            404 : {
              description: "Unsuccessful",
              schema: {
                "isError": "false"
                
              }
            }
          }
        }
      },

      "/packagePin": {
      put :{
          tags: ["Input Package Pin  "],
          summary: "Input package pin data",
    
          parameters: [
            {
              in: "header",
              name: "Authorization",
              required: true
            },
            {
              in: "body",
              name: "data",
              required: true,
              example:{
                "id": [
                  33126
                ],
                "name": "PMIC_IN78"
              }
            }
          
          ],
          responses: {
            200: {
              description: "Successful",
            example:[
              {
                "id": 33126,
                "name": "PMIC_IN78",
                "createdAt": "2019-05-20T09:24:22.392Z",
                "updatedAt": "2019-05-20T09:28:43.103Z",
                "sys_package_id": 292,
                "package_pin_id": 106
              }
            ]
            }
          }
        }
       
  
  
      },


        "/systems/{system_id}/tilemapping": {
          put :{
              tags: ["System Tile Mapping "],
              summary: "Updated Data",
        
              parameters: [
                {
                  in: "header",
                  name: "Authorization",
                  required: true
                },
                {
                  in: "path",
                  name: "system_id",
                  required: true
                },
                {
                  in: "body",
                  name: "data",
                  required: true,
                  example: require(`${swaggerData}/systems/tile-mapping-req.json`)
                }
              
              ],
              responses: {
                200: {
                  description: "Successful",
                  example: require(`${swaggerData}/systems/tile-mapping-res.json`)
                }
              }
            }
           
      
      
          },


        "/save-as-system": {
          post :{
              tags: ["System"],
              summary: "Save existing system as a new system",
        
              parameters: [
                {
                  in: "header",
                  name: "Authorization",
                  required: true
                },
             
                {
                  in: "body",
                  name: "data",
                  required: true
                }
              
              ],
              responses: {
                200: {
                  description: "Successful",
                
                }
              }
            }
           
      
      
          },



        "/save-rdl-nets": {
          post :{
              tags: ["Save RDL Nets"],
              summary: "Insert Data RDL Net",
        
              parameters: [
                {
                  in: "header",
                  name: "Authorization",
                  required: true
                },
                
                {
                  in: "body",
                  name: "data",
                  required: true,
                  example: require(`${swaggerData}/systems/rdl-net-req.json`)
                 
                }
              
              ],
              responses: {
                200: {
                  description: "Successful",
                  schema:{
                 example: require(`${swaggerData}/systems/rdl-resp.json`)
                  }
                  
                
                 
                }
              }
            }
           
      
      
          },

        "/chiplets": {
         get :{
              tags: ["Chiplets Operation"],
              summary: "Fetch Data Chiplet",
        
              parameters: [
                {
                  in: "header",
                  name: "Authorization",
                  required: true
                }
              ],
              responses: {
                200: {
                  description: "Successful",
                  example: require(`${swaggerData}/systems/chiplet.json`)
                }
              }
            }
           
      
      
          },

"/chiplets/{chiplet_id}":{
  get :{
    tags: ["Chiplets Operation"],
     summary: "Get data on chiplet table by ID",
     consumes: "application/json",
 
     parameters: [
       {
         
         in: "header",
         name: "Authorization",
         required: true
       },
       {
         
         in: "path",
         name: "chiplet_id",
         required: true
       }],
     
 
   
     responses: {
       200: {
         description: "Successful",
         example: require(`${swaggerData}/systems/chiplet-id.json`)
       }
     }
   }},

  
   "/chiplets-for-website"  :{
  get :{
     tags: ["Chiplets Operation"],
     summary: "Get chiplet website",
     consumes: "application/json",
 
     parameters: [
       {
         
         in: "header",
         name: "Authorization",
         required: true
       }],
     
 
   
     responses: {
       200: {
         description: "Successful",
         
         example: require(`${swaggerData}/systems/chiplet-web.json`)
       }
     }
   }},
 
"/save-chiplet":{
  post :{
    tags: ["Chiplets Operation"],
    summary: "Insert Data Chiplet",
    consumes: "application/json",

    parameters: [
      {
        
        in: "header",
        name: "Authorization",
        required: true
      },
      {
        
        in: "body",
        name: "data",
        required: true,
        example: require(`${swaggerData}/systems/save-chiplet-request.json`)
      }],
    

  
    responses: {
      200: {
        description: "Successful",
        example: require(`${swaggerData}/systems/save-chiplet-response.json`)
      }
    }
  }

  

},


 "/add-chiplet":{
  post :{
    tags: ["Chiplets Operation"],
    summary: "Add Data Chiplet",
    consumes: "application/json",

    parameters: [
      {
        
        in: "header",
        name: "Authorization",
        required: true
      },
      {
        
        in: "body",
        name: "data",
        required: true,
        example: require(`${swaggerData}/systems/add-chiplet.json`)
      }],
    

  
    responses: {
      200: {
        description: "Successful",
       example:{
        "isError": true
        
      }
      }
    }
  }

  

},


 "/delete-chiplet":{
post :{
  tags: ["System Chiplet"],
  summary: "Delete chiplet from system",
    consumes: "application/json",

    parameters: [
      {
        
        in: "header",
        name: "Authorization",
        required: true
      
      },
      {
        
        in: "body",
        name: "data",
        required: true,
        example: require(`${swaggerData}/systems/delete-chiplet-request.json`)
      }],
    

  
    responses: {
      200: {
        description: "Successful",
        example: require(`${swaggerData}/systems/delete-chiplet-response.json`)
      }
    }
  }

  

},


 "/archtiles/{system_id}/{tile_size_id}":{
  get :{
     tags: ["Archtiles "],
     summary: "Get All Data",
     consumes: "application/json",
 
     parameters: [
       {
         
         in: "header",
         name: "Authorization",
         required: true
       },
       {
         
         in: "path",
         name: "system_id",
         required: true
       },
       {
         
        in: "path",
        name: "tile_size_id",
        required: true
      }
      
      ],
     
 
   
     responses: {
       200: {
         description: "Successful",
         example: require(`${swaggerData}/systems/architiles.json`)
       }
     }
   },
  
  },

  "/app/submit-feedback": {
    post: {
      tags: ["Feedback"],
      summary: "Get Submit Feedback Data",
      parameters: [
        {
          in: "header",
          name: "Authorization",
          required: true,
        },
        {
          name:"data",
          required:true,
          in:"body",
          example: require(`${swaggerData}/systems/sub-fb.json`)
          
        }
      ],
      responses: {
        200: {
          description: "Successful",
          example : {
            "success": true
          },
          
        }
      }
    }
  },

  "/app/get-user-logs-summary": {
    get: {
      tags: ["User Log Summary"],
      summary: "Get user Log Data Summary",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
        ,{
          name:"Enter ID",
          required:true,
        
          in: "path"
        }
       
        
       
      ],
      responses: {
        200: {
          description: "Successful",
          
          schema: {
          
          }
        } 
    }
  }
},
  "/app/download-systems": {
    get: {
      tags: ["System"],
      summary: "Get Download Systems File",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
      ],
      responses: {
        200: {
          description: "Successful",
          
          schema: {
         
          }
        }
      }
    }
  },








  "/app/chiplets-data": {
    get: {
      tags: ["Chiplets Operation"],
      summary: "Get All Chiplets data ",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
       
      ],
      responses: {
        200: {
          description: "Successful",
          
          
         example: require(`${swaggerData}/systems/chiplet-data.json`)
        }
      }
    }
  },
  "/app/chiplet-enable": {
    post: {
      tags: ["Chiplets Operation"],
      summary: "Insert Data On Chiplet Enable",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
        
        ,{
          in: "body",
          name: "data",
          required: true
        }
       
      ],
      responses: {
        200: {
          description: "Successful",
          
          schema: {
          
          }
        }
      }
    }
  },
   "/app/update-chiplet": {
    post: {
      tags: ["Chiplets Operation"],
      summary: "Update Chiplet Data",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
       
        ,{
          
          in: "body",
          name: "data",
          required: true,
          example: require(`${swaggerData}/systems/update-chip.json`)
        }
        
       
      ],
      responses: {
        200: {
          description: "Successful",
          
          example:{
            "isError": true
            
          }
        }
      }
    }
  },
  "/app/download-user-logs": {
    get: {
      tags: ["Download User Logs"],
      summary: "Get Downlaod User Logs File",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
      ],
      responses: {
        200: {
          description: "Successful",
          example: "Download File"
         
        }
      }
    }
  },
  "/app/get-user-logs-summary": {
    get: {
      tags: ["Get User Logs Summary"],
      summary: "Get All User Logs Summary ",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
      ],
      responses: {
        200: {
          description: "Successful",
          
          example: require(`${swaggerData}/systems/user-log-summary.json`)
        }
      }
    }
  },
  "/app/feedbacks": {
    get: {
      tags: ["Feedback"],
      summary: "Get All Feedback Data",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
      ],
      responses: {
        200: {
          description: "Successful",
          
            example: require(`${swaggerData}/systems/get-feedback.json`)
        }
      }
    }
  },
  "/app/get-all-systems": {
    get: {
      tags: ["System"],
      summary: "Get All Systems Data",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
      ],
      responses: {
        200: {
          description: "Successful",
          
          schema: {
  
          }
        }
      }
    }
  },
  "/app/get-user-logs": {
    get: {
      tags: ["Get User Logs"],
      summary: "Get Data User Logs",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
      ],
      responses: {
        200: {
          description: "Successful",
          
          schema: {
            type: "object",
            example: require(`${swaggerData}/systems/get-user-log.json`)
         
          }
        }
      }
    }
  },
  "/app/get-admin-graph-data": {
    get: {
      tags: ["Get Admin Graph Data"],
      summary: "Graph Data  Admin",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
      ],
      responses: {
        200: {
          description: "Successful",
          
          schema: {
            type: "object",
            example: require(`${swaggerData}/systems/userlog-resp.json`)
         
          }
        }
      }
    }
  },
  "/app/delete-chiplet/{chip_id}": {
    post: {
      tags: ["Chiplets Operation"],
      summary: "Delete Chiplet Data By ID",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
        ,{
          name:"chip_id",
          required:true,
          in: "body",
          example: require(`${swaggerData}/systems/chiplet-dlt-id.json`)
        
        }
      ],
     
      responses: {
        200: {
          description: "Successful",
          example : {
            "isError": true,
      "message": "Chiplet not found"
          },
          
        }
      }
    }
  },
  "/systems/{system_id}/routes": {
    post: {
      tags: ["System"],
      summary: "System Routes By ID",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
        ,{
          name:"system_id",
          required:true,
          type:"string",
          in: "path"
        }
        ,{
          name:"data",
          required:true,
          type:"string",
          in: "body",
          example: require(`${swaggerData}/systems/sys-routes-req.json`)
        }
        
      ],
      responses: {
        200: {
          description: "Successful",
          example: require(`${swaggerData}/systems/sys-routes-res.json`)
        }
      }
    }
  },
  "/systems/{system_id}/digital-routes": {
    post : {
      tags: ["System"],
      summary: "Get System Data Digital Routes By ID ",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
        ,{
          name:"system_id",
          required:true,
          in: "path"
        }
        ,{
          name:"data",
          required:true,
          in: "body",
          example: require(`${swaggerData}/systems/digital-routes-req.json`)
        }
      ],
      responses: {
        200: {
          description: "Successful",
          example: require(`${swaggerData}/systems/digital-routes-res.json`)
        }
      }
    }
  },

 
  "/systems/save-last-opened-sys": {
    post: {
      tags: ["System"],
      summary: "Sava Last Opened System ",
      
      parameters: [
        {
          
          in: "header",
          name: "Authorization",
          required: true
        }
        
        ,{
          in: "body",
             name: "data",
             required: true,
             example: require(`${swaggerData}/systems/sava-last-req.json`)
        }
        
      ],
      responses: {
        200: {
          description: "Successful",
          
          schema: {
            type: "object",
            example: require(`${swaggerData}/systems/sava-last-open.json`)
  
          }
        }
      }
    }
  }
  
},


};