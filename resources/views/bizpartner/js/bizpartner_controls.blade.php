<script>
    
    function CreateContent(){

        var go_Shell = new sap.m.Shell({});
        //left page
        go_App_Left = new sap.m.App({});
        go_App_Left.addPage(create_page_menu());

        //right page
        go_App_Right = new sap.m.App({});
        go_App_Right.addPage(createBizPage());	
		go_App_Right.addPage(createDisplayBizPage());
		go_App_Right.addPage(createListBP());
		go_App_Right.addPage(createTestPage());

        go_SplitContainer = new sap.ui.unified.SplitContainer({ content: [go_App_Right], secondaryContent: [go_App_Left]});		
        go_SplitContainer.setSecondaryContentWidth("250px");
        go_SplitContainer.setShowSecondaryContent(true);
        

        let go_App = new sap.m.App({
            pages : [go_SplitContainer]
        });

        go_Shell.setApp(go_App);
        go_Shell.setAppWidthLimited(false);
        go_Shell.placeAt("content");     
    }

    function create_page_menu(){
        let page = new sap.m.Page({}).addStyleClass('sapUiSizeCompact');
        let pageHeader  = new sap.m.Bar({enableFlexBox: false,contentMiddle:[ new sap.m.Label({text:"Action"})]});
        const menuList = new sap.m.List("MENU_LIST",{});
		const menuListTemplate = new sap.m.StandardListItem("LEFT_MENU_TEMPLATE",{
			title:"{title}",
			icon:"{icon}",
			visible:"{visible}",
			type: sap.m.ListType.Active,
			press:function(oEvent){
				
                let menu = oEvent.getSource().getBindingContext().getProperty('funct');
				let list_items = oEvent.getSource().getParent().getItems();

                for (var i = 0; i < list_items.length; i++) {
                    list_items[i].removeStyleClass('class_selected_list_item');
                   //$('LEFT_MENU_TEMPLATE-MENU_LIST-0').removeClass('class_selected_list_item');
                }

                oEvent.getSource().addStyleClass('class_selected_list_item');
				
				switch(menu){
					case "CREATE_BP" :
						screenMode._create();
					break;
					case "DISPLAY_BP" :
						go_App_Right.to('BP_PAGE_DISPLAY');
					break;
					case "BP_LIST" :
					let response = async () => {
						let data = await bpDataOrganizer._getBpData();
						listingBp._getData(data);
						go_App_Right.to('PAGE_BP_LISTING');
					}
					response();

					break;

					// case "BP_TEST" :

					// 	go_App_Right.to('TEST_PAGE');
					// break;

				}
                
			}
		});
		
        const gt_list = [
                {
                    title   : "Create Customer",
					funct  	: "CREATE_BP",
                    icon    : "sap-icon://add-employee",
                    visible : true
                },
                {
                    title   : "Find Customer",
                    icon    : "sap-icon://employee-lookup",
					funct  	: "DISPLAY_BP",
                    visible : true
                },
                {
                    title   : "Customer Listing",
                    icon    : "sap-icon://multiselect-all",
					funct  	: "BP_LIST",
                    visible : true
                },
				// {
                //     title   : "Test",
                //     icon    : "sap-icon://checklist-item",
				// 	funct  	: "BP_TEST",
                //     visible : true
                // }

        ];

        let model = new sap.ui.model.json.JSONModel();
			model.setSizeLimit(gt_list.length);
			model.setData(gt_list);

			ui('MENU_LIST').setModel(model).bindAggregation("items",{
				path:"/",
				template:ui('LEFT_MENU_TEMPLATE')
			});
		
        page.setCustomHeader(pageHeader);
		page.addContent(menuList);		
		return page;
    }

    function createBizPage(){
        let page  = new sap.m.Page("CREATE_BP_PAGE",{}).addStyleClass('sapUiSizeCompact');
        let pageHeader = new sap.m.Bar("",{  
			enableFlexBox: false,

			contentLeft:[
				new sap.m.Button({ icon:"sap-icon://nav-back",
					press:function(oEvt){
						go_App_Right.back();
					} 
				}).addStyleClass('buttonHeaderColor'),
				new sap.m.Button({icon:"sap-icon://menu2",
					press:function(){
						go_SplitContainer.setSecondaryContentWidth("250px");
						if(!go_SplitContainer.getShowSecondaryContent()){
							go_SplitContainer.setShowSecondaryContent(true);
						} else {							
							go_SplitContainer.setShowSecondaryContent(false);
						}
					
					}
				}).addStyleClass('buttonHeaderColor'), 
				
			],

			// contentRight:[
			// 	new sap.m.Button({
			// 		icon: "sap-icon://home",
			// 		press: function(){
			// 			window.location.href = MainPageLink; 
			// 		}
			// 	}).addStyleClass('buttonHeaderColor')
			// ],
			contentMiddle:[
                new sap.m.Label("BP_TITLE",{text:"Create Customer"})
            ],
		
		});
        let crumbs = new sap.m.Breadcrumbs("CREATE_BP_BRDCRMS",{
            currentLocationText: "Create Customer",
            // links: [
            //     new sap.m.Link({
            //         text:"Home",
            //         press:function(oEvt){
            //            // fn_click_breadcrumbs("HOME");
            //         }
            //     }),
			// 	new sap.m.Link("CREATE_BP_BRDCRMS_TITLE",{
            //         text:"Business Partner Management",
            //         press:function(oEvt){
            //           //  fn_click_breadcrumbs("HOME");
            //         }
            //     }),
				
            // ]
        });
		let errorPanel = new sap.m.Panel("MESSAGE_STRIP_BP_ERROR",{visible:false});
        let createPageFormHeader = new sap.uxap.ObjectPageLayout({
            headerTitle:[
                new sap.uxap.ObjectPageHeader("OBJECTHEADER_BP_NAME",{
                    objectTitle:"",
					showPlaceholder : false,
					actions:[
                        new sap.uxap.ObjectPageHeaderActionButton("CREATE_BP_SAVE_BTN1",{
                            icon: "sap-icon://save",
							press: function(evt){
								createBP();

                            }
                        }).addStyleClass("sapMTB-Transparent-CTX"),
                        new sap.uxap.ObjectPageHeaderActionButton("CREATE_BP_EDIT_BTN1",{
                            icon: "sap-icon://edit",
							press: function(){
									ui("COMPCODE_SAVE_DIALOG").open();
                            }
                        }).addStyleClass("sapMTB-Transparent-CTX"),

                    ],
                })
            ]     
        });

		let createPageFormContent = new sap.m.Panel("BP_GENERAL_PANEL",{
			headerToolbar: [
				new sap.m.Toolbar({
                    content: [
                        new sap.m.ToolbarSpacer(),
                        new sap.m.Button("CREATE_BP_SAVE_BTN", {
                            visible: true,
                            icon: "sap-icon://save",
                            press: function () {
								if(screenMode._mode == "create"){
								createBP();
								}
								else{
									bpDataOrganizer._updateById(screenMode._id);
								}
                            }
                        }),
						new sap.m.Button("CREATE_BP_EDIT_BTN", {
                            visible: true,
                            icon: "sap-icon://edit",
                            press: function () {
								screenMode._edit();
                            }
                        }),
						new sap.m.Button("CREATE_BP_CANCEL_BTN", {
                            visible: true,
                            icon: "sap-icon://decline",
                            press: function () {
								screenMode._display(screenMode._id);
                            }
                        }),
						new sap.m.Button("CREATE_BP_DEL_BTN", {
							visible: true,
							icon: "sap-icon://delete",
							press: function () {
							ui('BP_DELETE_DIALOG').open();
                            }
                        }),
                    ]
                }).addStyleClass('class_transparent_bar'),

			],
			content: [
                new sap.ui.layout.Grid({
                    defaultSpan:"L12 M12 S12",
					width:"auto",
					content:[
                        new sap.ui.layout.form.SimpleForm("PANEL_FORM",{
							title: "Add New Customer",
                            maxContainerCols:2,
							labelMinWidth:130,
							content:[
                                new sap.ui.core.Title("GENERAL_INFO_TITLE1",{text:""}),

								
							
								
								new sap.m.Label({text:"First Name",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("first_name",{value:"", width:TextWidth,
								liveChange: function (oEvent) {
										var input = oEvent.getSource();
										var value = input.getValue();
										
										if (value.trim() === "") {
											input.setValueState("Error");
											input.setValueStateText("First name cannot be empty");
										} else {
											input.setValueState("None");
										}
									}
							  	
								}),
								
								new sap.m.Label({text: "Last Name", width: labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("L_name", { value: "", width: TextWidth,
									liveChange: function (oEvent) {
										var input = oEvent.getSource();
										var value = input.getValue();
										
										if (value.trim() === "") {
											input.setValueState("Error");
											input.setValueStateText("Last name cannot be empty");
										} else {
											input.setValueState("None");
										}
									}
								}),

								
								// new sap.m.Label({text:"Last Name",width:labelWidth}).addStyleClass('class_label_padding'),
								// new sap.m.Input("L_name",{value:"", width:TextWidth}),

								
								
								new sap.m.Label({text:"Email Address",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("E_adress",{value:"", width:TextWidth,
								    liveChange: function(oEvent) {
   			    					 var input = oEvent.getSource();
									var email = input.getValue();
									var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

									if (emailRegex.test(email)) {
										input.setValueState("None");
									} else {
										input.setValueState("Error");
										input.setValueStateText("Invalid email address");
									}
								}
							}),

							

								new sap.m.Label({text:"Phone Number",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("p_num",{value:"", width:TextWidth,type: sap.m.InputType.Tel,
								liveChange: function (oEvent) {
										var input = oEvent.getSource();
										var value = input.getValue();
										
										if (value.trim() === "") {
											input.setValueState("Error");
											input.setValueStateText("Phone number is required");
										} else {
											input.setValueState("None");
										}
									}}),

								new sap.m.Label({text:"Mailing Address",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("m_address",{value:"", width:TextWidth}),

								new sap.m.Label({text:"Billing Address",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("b_address",{value:"", width:TextWidth}),

								new sap.m.Label({text:"Date of Birth",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.DatePicker("date_of_birth",{value:"", width:TextWidth}),


								new sap.m.Label({text:"Gender",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Select("gender",{
									width:TextWidth,
									//selectedKey: "",
									items: [
										new sap.ui.core.ListItem({
											text: "",
											key: "",
											
										}),
										new sap.ui.core.ListItem({
											text: "MALE",
											key: "male",
											additionalText: "MALE",
											icon: "sap-icon://male"
										}),
										new sap.ui.core.ListItem({
											text: "FEMALE",
											key: "female",
											additionalText: "FEMALE",
											icon: "sap-icon://female"
										}),
										
									]
								}),


                                new sap.ui.core.Title("GENERAL_INFO_TITLE2",{text:""}),
								
                                

								new sap.m.Label({text:"Occupation",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("occupation",{value:"", width:TextWidth}),

								new sap.m.Label({text:"Company Name",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("com_name",{value:"", width:TextWidth}),

								new sap.m.Label({text:"Industry	",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Select("industry",{value:"", width:TextWidth,
								items: [
										new sap.ui.core.ListItem({
											text: "Select Industry",
											key: "",
											
										}),
										new sap.ui.core.ListItem({
											text: "Technology Industry",
											key: "tech",
											icon: "sap-icon://official-service"
										}),
										new sap.ui.core.ListItem({
											text: "Financial Services Industry",
											key: "finance",
											icon: "sap-icon://official-service"
										}),
										new sap.ui.core.ListItem({
											text: "Healthcare Industry",
											key: "health",
											icon: "sap-icon://official-service"
										}),
										new sap.ui.core.ListItem({
											text: "Automotive Industry",
											key: "auto",
											icon: "sap-icon://official-service"
										}),
										new sap.ui.core.ListItem({
											text: "Energy Industry",
											key: "energy",
											icon: "sap-icon://official-service"
										}),
										new sap.ui.core.ListItem({
											text: "None",
											key: "none",
											
										}),
										
									]}),
								
								new sap.m.Label({text:"Customer Type",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Select("customer_type",{
									width:TextWidth,
									//selectedKey: "",
									items: [
										new sap.ui.core.ListItem({
											text: "",
											key: "",
											
										}),
										new sap.ui.core.ListItem({
											text: "NEW",
											key: "new",
											// additionalText: "MALE",
											icon: "sap-icon://add-employee"
										}),
										new sap.ui.core.ListItem({
											text: "OCCATIONAL",
											key: "occational",
											// additionalText: "FEMALE",
											icon: "sap-icon://visits"
										}),
										
									]
								}),
								new sap.m.Label({text:"Referral Source",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Select("ref_src",{
									width:TextWidth,
									//selectedKey: "",
									items: [
										new sap.ui.core.ListItem({
											text: "",
											key: "",
											
										}),
										new sap.ui.core.ListItem({
											text: "Social Media",
											key: "social_m",
											icon:"sap-icon://my-view",
										
										}),
										new sap.ui.core.ListItem({
											text: "Friend",
											key: "friend",
											icon:"sap-icon://company-view",
										
										}),
										
									]
								}),
									

								new sap.m.Label({text:"Purchase History",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.DatePicker("p_history",{value:"", width:TextWidth}),


								new sap.m.Label({text:"Payment Method",width:labelWidth}).addStyleClass('class_label_padding'),			
								new sap.m.Select("p_method",{value:"", width:TextWidth,
								items: [
										new sap.ui.core.ListItem({
											text: "",
											key: "",
											
										}),
										new sap.ui.core.ListItem({
											text: "Bank Transfer",
											key: "bank",
											icon:"sap-icon://capital-projects",
										
										}),
										new sap.ui.core.ListItem({
											text: "Paypal",
											key: "paypal",
											icon:"sap-icon://sales-document",
										
										}),
										new sap.ui.core.ListItem({
											text: "Credit Card",
											key: "credit",
											icon:"sap-icon://wallet",
										
										}),
										new sap.ui.core.ListItem({
											text: "Debit Card",
											key: "debit",
											icon:"sap-icon://payment-approval",
										
										}),
										
									]}),

								new sap.m.Label({text:"Order Number",width:labelWidth}).addStyleClass('class_label_padding'),
								new sap.m.Input("or_num",{value:"", width:TextWidth,type: sap.m.InputType.Number}),

                            ]
                        })
                    ]
                })
            ]
        });

        page.setCustomHeader(pageHeader);
        page.addContent(crumbs);
		page.addContent(errorPanel);
        //page.addContent(createPageFormHeader);
		page.addContent(createPageFormContent);
        return page;
    }

	function createDisplayBizPage(){
				
		var lv_Page  = new sap.m.Page("BP_PAGE_DISPLAY",{}).addStyleClass('sapUiSizeCompact');
		
		var lv_header = new sap.m.Bar({
			enableFlexBox: false,
			contentLeft:[
				new sap.m.Button({ icon:"sap-icon://nav-back",
					press:function(oEvt){
						go_App_Right.back();
					} 
				}).addStyleClass('buttonHeaderColor'),
				new sap.m.Button({icon:"sap-icon://menu2",
					press:function(){
						go_SplitContainer.setSecondaryContentWidth("250px");
						if(!go_SplitContainer.getShowSecondaryContent()){
							go_SplitContainer.setShowSecondaryContent(true);
						} else {							
							go_SplitContainer.setShowSecondaryContent(false);
						}
					}
				}).addStyleClass('buttonHeaderColor')
				//new sap.m.Image({src: logo_path}),
			],

			contentMiddle:[gv_Lbl_NewPrdPage_Title = new sap.m.Label("DISP_BP_TITLE",{text:"Display Customer"})],
			
			// contentRight:[
			// 	new sap.m.Button({
			// 		icon: "sap-icon://home",
			// 		press: function(){
			// 			window.location.href = MainPageLink; 
			// 		}
			// 	}).addStyleClass('buttonHeaderColor')
			// ]
		});
		
		var lv_crumbs = new sap.m.Breadcrumbs("DISP_BP_BRDCRMS",{
            currentLocationText: "Display Customer",
            links: [
                new sap.m.Link({
                    text:"Home",
                    press:function(oEvt){
                       // fn_click_breadcrumbs("HOME");
                    }
                }),
				// new sap.m.Link("DISP_BP_BRDCRMS_TITLE",{
                //     text:"Business Partner Management",
                //     press:function(oEvt){
                //       //  fn_click_breadcrumbs("HOME");
                //     }
                // }),
				
            ]
        }).addStyleClass('breadcrumbs-padding');
		
		
		var lv_searchfield =  new sap.m.Bar({
			enableFlexBox: false,
			contentLeft: [
				// actual search field
				new sap.m.SearchField("SEARCHFIELD_DISPLAY_OUTLET",{
					width: "99%",
					liveChange: function(oEvt){
						var lv_search_val = oEvt.getSource().getValue().trim();
						if(lv_search_val == ""){
							ui("DISPLAY_BP_TABLE").setVisible(false);
						}
					},
					placeholder: "Find Customer...",
					search: function(oEvent){
						var lv_searchval = oEvent.getSource().getValue().trim();
						displayBp._get_data(lv_searchval);
					},
				})
			],
		});
		
		var lv_table = new sap.ui.table.Table("DISPLAY_BP_TABLE", {
			visible:false,
			visibleRowCountMode:"Auto",
			selectionMode:"None",
			enableCellFilter: true,
			enableColumnReordering:true,
			toolbar:[
				new sap.m.Toolbar({
					design:"Transparent",
					content:[
						new sap.m.Text("DISPLAY_BP_TABLE_LABEL",{text:"List (0)"}),
					]
				})
			],
			filter:function(oEvt){
				oEvt.getSource().getBinding("rows").attachChange(function(oEvt){
					var lv_row_count = oEvt.getSource().iLength;
					ui('DISPLAY_BP_TABLE_LABEL').setText("List (" + lv_row_count + ")");
				});
			},
			cellClick: function(oEvt){
				
				var lv_bind = oEvt.getParameters().rowBindingContext;
				
				if(lv_bind != undefined){
					var lv_bp_id = oEvt.getParameters().rowBindingContext.getProperty("BIZPART_ID");
					if(lv_bp_id){
						screenMode._display(lv_bp_id);
					}
				}
				
			},
		columns:[
				
				new sap.ui.table.Column({label:new sap.m.Text({text:"ID"}),
				width:"60px",
				sortProperty:"id",
				filterProperty:"id",
				autoResizable:true,
				template:new sap.m.Text({text:"{id}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"First name"}),
				width:"80px",
				sortProperty:"first_name",
				filterProperty:"first_name",
				autoResizable:true,
				template:new sap.m.Text({text:"{first_name}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Last name"}),
				width:"100px",
				sortProperty:"last_name",
				filterProperty:"last_name",
				autoResizable:true,
				template:new sap.m.Text({text:"{last_name}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Email"}),
				width:"100px",
				sortProperty:"email",
				filterProperty:"email",
				autoResizable:true,
				template:new sap.m.Text({text:"{email}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Phone Number"}),
				width:"80px",
				sortProperty:"phone_number",
				filterProperty:"phone_number",
				autoResizable:true,
				template:new sap.m.Text({text:"{phone_number}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Mailing Address"}),
				width:"120px",
				sortProperty:"mailing_address",
				filterProperty:"mailing_address",
				autoResizable:true,
				template:new sap.m.Text({text:"{mailing_address}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Billing Address"}),
				width:"120px",
				sortProperty:"billing_address",
				filterProperty:"billing_address",
				autoResizable:true,
				template:new sap.m.Text({text:"{billing_address}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Date Of Birth"}),
				width:"80px",
				sortProperty:"date_of_birth",
				filterProperty:"date_of_birth",
				autoResizable:true,
				template:new sap.m.Text({text:"{date_of_birth}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Gender"}),
				width:"60px",
				sortProperty:"gender",
				filterProperty:"gender",
				autoResizable:true,
				template:new sap.m.Text({text:"{gender}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Occupation"}),
				width:"100px",
				sortProperty:"occupation",
				filterProperty:"occupation",
				autoResizable:true,
				template:new sap.m.Text({text:"{occupation}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Company name"}),
				width:"130px",
				sortProperty:"company_name",
				filterProperty:"company_name",
				autoResizable:true,
				template:new sap.m.Text({text:"{company_name}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Industry"}),
				width:"100px",
				sortProperty:"industry",
				filterProperty:"industry",
				autoResizable:true,
				template:new sap.m.Text({text:"{industry}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Customer type"}),
				width:"100px",
				sortProperty:"customer_type",
				filterProperty:"customer_type",
				autoResizable:true,
				template:new sap.m.Text({text:"{customer_type}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Referral source"}),
				width:"80px",
				sortProperty:"referral_source",
				filterProperty:"referral_source",
				autoResizable:true,
				template:new sap.m.Text({text:"{referral_source}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Payment method"}),
				width:"80px",
				sortProperty:"payment_method",
				filterProperty:"payment_method",
				autoResizable:true,
				template:new sap.m.Text({text:"{payment_method}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Order number"}),
				width:"70px",
				sortProperty:"order_number",
				filterProperty:"order_number",
				autoResizable:true,
				template:new sap.m.Text({text:"{order_number}",maxLines:1}),
				}),
			]
		});
		
		lv_Page.setCustomHeader(lv_header);
		lv_Page.addContent(lv_crumbs);
		lv_Page.addContent(lv_searchfield);
		lv_Page.addContent(lv_table);
		
		return lv_Page;
	}

	function createListBP(){

		var lv_Page  = new sap.m.Page("PAGE_BP_LISTING",{}).addStyleClass('sapUiSizeCompact');

		var lv_header = new sap.m.Bar({
			enableFlexBox: false,
			contentLeft:[
				new sap.m.Button({ icon:"sap-icon://nav-back",
					press:function(oEvt){ 
						
						go_App_Right.back();
						
					}
				}).addStyleClass('buttonHeaderColor'),
				new sap.m.Button({icon:"sap-icon://menu2",
					press:function(){
						go_SplitContainer.setSecondaryContentWidth("270px");
						if(!go_SplitContainer.getShowSecondaryContent()){
							go_SplitContainer.setShowSecondaryContent(true);
						} else {							
							go_SplitContainer.setShowSecondaryContent(false);
						}
					}
				}).addStyleClass('buttonHeaderColor'), 
				//new sap.m.Image({src: logo_path}),
				],
			contentMiddle:[gv_Lbl_NewPrdPage_Title = new sap.m.Label("BP_LISTING_PAGE_LABEL",{text:"Customer Listing"})],
			
			contentRight:[
				//fn_help_button(SelectedAppID,"BP_LISTING"),
				new sap.m.Button({  
					icon: "sap-icon://home",
					press: function(){
					window.location.href = MainPageLink; 
					}
				}).addStyleClass('buttonHeaderColor')
			]
		});
					
		var lv_crumbs = new sap.m.Breadcrumbs("LIST_BP_BRDCRMS",{
			currentLocationText: "Customer Listing",
			links: [
				new sap.m.Link({
					text:"Home",
					press:function(oEvt){
					// fn_click_breadcrumbs("HOME");
					}
				}),
				new sap.m.Link("LIST_BP_BRDCRMS_TITLE",{
					text:"Business Partner Management",
					press:function(oEvt){
					//  fn_click_breadcrumbs("HOME");
					}
				}),
				
			]
		}).addStyleClass('breadcrumbs-padding');


		var lv_table = new sap.ui.table.Table("BP_LISTING_TABLE",{
			visibleRowCountMode:"Auto",
			selectionMode:"None",
			enableCellFilter: true,
			enableColumnReordering:true,
			filter:function(oEvt){
				oEvt.getSource().getBinding("rows").attachChange(function(oEvt){
					var lv_row_count = oEvt.getSource().iLength;
					ui('BP_LISTING_LABEL').setText("Business Partner (" + lv_row_count + ")");
				});
			},
			toolbar: [
                new sap.m.Toolbar({
                    content: [
                        new sap.m.Label("BP_LISTING_LABEL", {
                            text:"Business Partner (0)"
                        }),
                        new sap.m.ToolbarSpacer(),
                        new sap.m.Button("BTN_DOWNLOAD", {
                            visible: true,
                            icon: "sap-icon://download",
                            press: function () {
							 if(ui('BP_LISTING_TABLE').getModel().getData().length == 0){
								fn_show_message_toast("No data to download");
							}
							 else{
								fn_download_bp_listing();
							}
                            }
                        })
                    ]
                }).addStyleClass('class_transparent_bar'),
            ],
			cellClick: function(oEvt){
				
				var lv_bind = oEvt.getParameters().rowBindingContext;
				if(lv_bind != undefined){
					var lv_bp_id = oEvt.getParameters().rowBindingContext.getProperty("BIZPART_ID");
					if(lv_bp_id){
						screenMode._display(lv_bp_id);
					}
				}
			},
			columns:[
				
				new sap.ui.table.Column({label:new sap.m.Text({text:"ID"}),
				width:"30%",
				sortProperty:"id",
				filterProperty:"id",
				autoResizable:true,
				template:new sap.m.Text({text:"{id}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"First name"}),
				width:"40%",
				sortProperty:"first_name",
				filterProperty:"first_name",
				autoResizable:true,
				template:new sap.m.Text({text:"{first_name}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Last name"}),
				width:"40%",
				sortProperty:"last_name",
				filterProperty:"last_name",
				autoResizable:true,
				template:new sap.m.Text({text:"{last_name}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Email"}),
				width:"40%",
				sortProperty:"email",
				filterProperty:"email",
				autoResizable:true,
				template:new sap.m.Text({text:"{email}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Phone Number"}),
				width:"40%",
				sortProperty:"phone_number",
				filterProperty:"phone_number",
				autoResizable:true,
				template:new sap.m.Text({text:"{phone_number}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Mailing Address"}),
				width:"40%",
				sortProperty:"mailing_address",
				filterProperty:"mailing_address",
				autoResizable:true,
				template:new sap.m.Text({text:"{mailing_address}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Billing Address"}),
				width:"40%",
				sortProperty:"billing_address",
				filterProperty:"billing_address",
				autoResizable:true,
				template:new sap.m.Text({text:"{billing_address}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Date Of Birth"}),
				width:"40%",
				sortProperty:"date_of_birth",
				filterProperty:"date_of_birth",
				autoResizable:true,
				template:new sap.m.Text({text:"{date_of_birth}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Gender"}),
				width:"40%",
				sortProperty:"gender",
				filterProperty:"gender",
				autoResizable:true,
				template:new sap.m.Text({text:"{gender}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Occupation"}),
				width:"45%",
				sortProperty:"occupation",
				filterProperty:"occupation",
				autoResizable:true,
				template:new sap.m.Text({text:"{occupation}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Company name"}),
				width:"40%",
				sortProperty:"company_name",
				filterProperty:"company_name",
				autoResizable:true,
				template:new sap.m.Text({text:"{company_name}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Industry"}),
				width:"40%",
				sortProperty:"industry",
				filterProperty:"industry",
				autoResizable:true,
				template:new sap.m.Text({text:"{industry}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Customer type"}),
				width:"40%",
				sortProperty:"customer_type",
				filterProperty:"customer_type",
				autoResizable:true,
				template:new sap.m.Text({text:"{customer_type}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Referral source"}),
				width:"40%",
				sortProperty:"referral_source",
				filterProperty:"referral_source",
				autoResizable:true,
				template:new sap.m.Text({text:"{referral_source}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Payment method"}),
				width:"40%",
				sortProperty:"payment_method",
				filterProperty:"payment_method",
				autoResizable:true,
				template:new sap.m.Text({text:"{payment_method}",maxLines:1}),
				}),

				new sap.ui.table.Column({label:new sap.m.Text({text:"Order number"}),
				width:"40%",
				sortProperty:"order_number",
				filterProperty:"order_number",
				autoResizable:true,
				template:new sap.m.Text({text:"{order_number}",maxLines:1}),
				}),
			]

		});

		lv_Page.setCustomHeader(lv_header);
		lv_Page.addContent(lv_crumbs);
		lv_Page.addContent(lv_table);


		return lv_Page;
	}

	function createTestPage(){
		let page = new sap.m.Page("TEST_PAGE",{}).addStyleClass('sapUiSizeCompact');
		let crumbs = new sap.m.Breadcrumbs("TEST_CRUMBS",{
			currentLocationText: "Customer Listing",
			links: [
				new sap.m.Link({
					text:"Home",
					press:function(oEvt){
					// fn_click_breadcrumbs("HOME");
					}
				}),
				new sap.m.Link("TEST_LIST_CRUMBS",{
					text:"Business Partner Management",
					press:function(oEvt){
					//  fn_click_breadcrumbs("HOME");
					}
				}),
				
			]
		}).addStyleClass('breadcrumbs-padding');

		//page.addContent(crumbs);
		return page;


	}












</script>
