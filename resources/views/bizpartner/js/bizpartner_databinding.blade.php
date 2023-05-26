<script>

	const bpDataOrganizer = {
		_getBpData : async function(){
			let busyDialog = showBusyDialog("Please wait loading..");
			busyDialog.open();
		
			const response =  await fetch("/getBpData");
			const data = await response.json();
			busyDialog.close();
			return data;
		},
		_filteredById : async function(id){
			let busyDialog = showBusyDialog("Please wait loading..");
			busyDialog.open();
			const bp_id = btoa(id);
			const response =  await fetch("/getDataById/"+bp_id);
			const dataById = await response.json();
			busyDialog.close();
			return dataById;
			
		},
		_updateById : function(id){
			let busyDialog = showBusyDialog("Please wait loading..");
				busyDialog.open();
			
	 		let bpDataupdate = [{

				// NAME1    			: ui('BP_TYPE_REGNAME').getValue().trim(),

				first_name : 		ui('first_name').getValue().trim(),
				last_name : 		ui('L_name').getValue().trim(),
				email : 			ui('E_adress').getValue().trim(),
				phone_number : 		ui('p_num').getValue().trim(),
				mailing_address : 	ui('m_address').getValue(),
				billing_address : 	ui('b_address').getValue(),
				date_of_birth :		ui('date_of_birth').getValue().trim(),
				gender : 			ui('gender').getSelectedKey(),

				occupation : 		ui('occupation').getValue().trim(),
				company_name : 		ui('com_name').getValue(),
				industry : 			ui('industry').getSelectedKey(),
				customer_type : 	ui('customer_type').getSelectedKey(),
				referral_source :	ui('ref_src').getSelectedKey(),
				p_history: 			ui('p_history').getValue(),
				payment_method : 	ui('p_method').getSelectedKey(),
				order_number : 		ui('or_num').getValue().trim(),
				

			}];


			const data = {
				BP_ID : id,	
				bpDataupdate : bpDataupdate
				}

			fetch('/update_data',{
				method : 'POST',
				headers : {
					'Content-Type' : 'application/json',
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				},
				body : JSON.stringify(data)
			}).then((response) => {
				if(response.ok){
					screenMode._display(id);
					fn_show_message_toast("Successfully updated customer #"+id);
				}
				console.log(response);
				return response.json();
			}).then(data => {
				console.log(data);
				busyDialog.close();
			}).catch((err) => {
				console.log("Rejected "+err);
				busyDialog.close();
			});
		},	
		_removeById : function(id){
			let busyDialog = showBusyDialog("Please wait loading..");
				busyDialog.open();
				
			const bp_id = {BP_ID : id}
			fetch('/removeDataById',{
				method : 'POST',
				headers : {
					'Content-Type' : 'application/json',
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				},
				body : JSON.stringify(bp_id)
			}).then((response) => {
				if(response.ok){
					fn_show_message_toast("Successfully deleted customer #"+id);
					ui('LEFT_MENU_TEMPLATE-MENU_LIST-2').firePress();
				}
				console.log(response);
				return response.json();
			}).then(data => {
				console.log(data);
				busyDialog.close();
			}).catch((err) => {
				console.log("Rejected "+err);
				busyDialog.close();
			});
		},

		// _getRadioIndex : function(id){
		// 	let radioButton = ui("BP_COMPANY").getButtons();
		// 	let selectedIndex;
		// 	for(let i=0; i<radioButton.length; i++){
		// 		if(radioButton[i].getId() == id){
		// 			selectedIndex = i;
		// 		}
		// 	}

		// 	return selectedIndex;

		// },

		// _validateBP : function(id){
		// 	let isExist = false;
		// 	for(let i=0; i<bizData.length; i++){
		// 		if(bizData[i].BIZPART_ID == id){
		// 			isExist = true;
		// 			break;
		// 		}
		// 	}
		// 	return isExist;
		// }
	}

	const screenMode = {
		_id : " ",
		_title : " ",
		_mode : " ",

		_create : function(){
			this._mode = "create";
			let bp_title = this._title;
			bp_title = "Create Customer";
			this._clear();
			//Buttons
			ui("CREATE_BP_SAVE_BTN").setVisible(true);
			ui("CREATE_BP_EDIT_BTN").setVisible(false);
			ui("CREATE_BP_CANCEL_BTN").setVisible(false);
			ui("CREATE_BP_DEL_BTN").setVisible(false);

			//title and crumbs
			ui('BP_TITLE').setText(bp_title);
			ui('CREATE_BP_BRDCRMS').setCurrentLocationText(bp_title);
			ui("PANEL_FORM").setTitle("Add New Customer");

			//Fields
			ui('first_name').setEditable(true);
			ui('L_name').setEditable(true);
			ui('E_adress').setEditable(true);
			ui('p_num').setEditable(true);
			ui('m_address').setEditable(true);
			ui('b_address').setEditable(true);
			ui('date_of_birth').setEditable(true);
			ui('gender').setEditable(true);
			ui('occupation').setEditable(true);
			ui('com_name').setEditable(true);
			ui('industry').setEditable(true);
			ui('customer_type').setEditable(true);
			ui('ref_src').setEditable(true);
			ui('p_history').setEditable(true);
			ui('p_method').setEditable(true);
			ui('or_num').setEditable(true);

			go_App_Right.to('CREATE_BP_PAGE');
		},
		_edit : function(){
			this._mode = "edit";
			//Buttons
			ui("CREATE_BP_SAVE_BTN").setVisible(true);
			ui("CREATE_BP_EDIT_BTN").setVisible(false);
			ui("CREATE_BP_CANCEL_BTN").setVisible(true);
			ui("CREATE_BP_DEL_BTN").setVisible(false);

			//Fields
			ui('first_name').setEditable(true);
			ui('L_name').setEditable(true);
			ui('E_adress').setEditable(true);
			ui('p_num').setEditable(true);
			ui('m_address').setEditable(true);
			ui('b_address').setEditable(true);
			ui('date_of_birth').setEditable(true);
			ui('gender').setEditable(true);
			ui('occupation').setEditable(true);
			ui('com_name').setEditable(true);
			ui('industry').setEditable(true);
			ui('customer_type').setEditable(true);
			ui('ref_src').setEditable(true);
			ui('p_history').setEditable(true);
			ui('p_method').setEditable(true);
			ui('or_num').setEditable(false);
		},

		_display : function(id){
			ui('MESSAGE_STRIP_BP_ERROR').destroyContent().setVisible(false);
			this._mode = "display";
			this._id = id;
			let bp_title = this._title;
			bp_title = "Display Customer";
			//Buttons
			ui("CREATE_BP_SAVE_BTN").setVisible(false);
			ui("CREATE_BP_EDIT_BTN").setVisible(true);
			ui("CREATE_BP_CANCEL_BTN").setVisible(false);
			ui("CREATE_BP_DEL_BTN").setVisible(true);


			//fields with value
			let response =  async () => {
			let data = await bpDataOrganizer._filteredById(id);
			console.log(data);
			if(data.length > 0){
				ui('first_name').setEditable(false);
				ui('L_name').setEditable(false);
				ui('E_adress').setEditable(false);
				ui('p_num').setEditable(false);
				ui('m_address').setEditable(false);
				ui('b_address').setEditable(false);
				ui('date_of_birth').setEditable(false);
				ui('gender').setEditable(false);
				ui('occupation').setEditable(false);
				ui('com_name').setEditable(false);
				ui('industry').setEditable(false);
				ui('customer_type').setEditable(false);
				ui('ref_src').setEditable(false);
				ui('p_history').setEditable(false);
				ui('p_method').setEditable(false);
				ui('or_num').setEditable(false);
				
				//title and crumbs
				ui('BP_TITLE').setText(bp_title);
				ui('CREATE_BP_BRDCRMS').setCurrentLocationText(bp_title);
				ui("PANEL_FORM").setTitle("Customer ID "+"("+data[0].id+")");

					go_App_Right.to('CREATE_BP_PAGE');
				}	
			};
			response();		
		},
		_clear : function(){
			ui('MESSAGE_STRIP_BP_ERROR').destroyContent().setVisible(false);
			ui('first_name').setValue("");
			ui('L_name').setValue("");
			ui('E_adress').setValue("");
			ui('p_num').setValue("");
			ui('m_address').setValue("");
			ui('b_address').setValue("");
			ui('date_of_birth').setValue("");
			ui('gender').setValue("");
			ui('occupation').setValue("");
			ui('com_name').setValue("");
			ui('industry').setValue("");
			ui('customer_type').setValue("");
			ui('ref_src').setValue("");
			ui('p_history').setValue("");
			ui('p_method').setValue("");
			ui('or_num').setValue("");

	
		}
	
	
	};

    const createBP = () => {
		let busyDialog = showBusyDialog("Please wait loading..");
		busyDialog.open();
		
		let data_for_general = {

			first_name				:ui('first_name').getValue().trim(),
			last_name				:ui('L_name').getValue().trim(),
			email					:ui('E_adress').getValue().trim(),
			phone_number			:ui('p_num').getValue().trim(),
			mailing_address			:ui('m_address').getValue().trim(),
			billing_address			:ui('b_address').getValue(),
			date_of_birth			:ui('date_of_birth').getValue().trim(),
			gender					:ui('gender').getSelectedKey(),
			
			occupation				:ui('occupation').getValue().trim(),
			company_name			:ui('com_name').getValue(),
			industry				:ui('industry').getSelectedKey(),
			customer_type			:ui('customer_type').getSelectedKey(),
			referral_source			:ui('ref_src').getSelectedKey(),
			p_history				:ui('p_history').getValue(),
			payment_method			:ui('p_method').getSelectedKey(),
			order_number			:ui('or_num').getValue().trim(),
   		};	
		
	 fetch('/create_data',{
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json',
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			},
			body : JSON.stringify(data_for_general)
		}).then((response) => {
			if(response.ok){
				
				fn_show_message_toast("Successfully created a new customer");
			}
			console.log(response);
			return response.json();
		}).then(data => {
			screenMode._display(data.customID);
			busyDialog.close();
		}).catch((err) => {
			console.log("Rejected "+err);
			busyDialog.close();
		});
        
    }

	const displayBp =  {
		
		_get_data(search){
			
			let response = async () => {
				let data =  await bpDataOrganizer._filteredById(search);
				this._bind_data(data);
			};
			response();		
		},
		_bind_data(data){
		
			ui("DISPLAY_BP_TABLE").unbindRows();
			
			var lt_model = new sap.ui.model.json.JSONModel();
				lt_model.setSizeLimit(data.length);
				lt_model.setData(data);
				
			ui('DISPLAY_BP_TABLE').setModel(lt_model).bindRows("/");
			ui("DISPLAY_BP_TABLE").setVisible(true);
			
			ui('DISPLAY_BP_TABLE_LABEL').setText("List (" + data.length + ")");
			//fn_clear_table_sorter("DISPLAY_BP_TABLE");
			
		}		
	};

	const listingBp = {
		_getData : function(data){
			ui("BP_LISTING_TABLE").unbindRows();
			
			var lt_model = new sap.ui.model.json.JSONModel();
				lt_model.setSizeLimit(data.length);
				lt_model.setData(data);
				
			ui('BP_LISTING_TABLE').setModel(lt_model).bindRows("/");
			ui("BP_LISTING_TABLE").setVisible(true);
			
			ui('BP_LISTING_LABEL').setText("Customer (" + data.length + ")");
		}
	}

		let lv_dialog_save = new sap.m.Dialog("BP_SAVE_DIALOG",{
		title: "Confirmation",
		beginButton: new sap.m.Button({
			text:"Ok",
			type:"Accept",
			icon:"sap-icon://accept",
			press:function(oEvt){
				if(screenMode._mode == "create"){
					createBP();
				}else{
					bpDataOrganizer._updateById(screenMode._id);
				}

				oEvt.getSource().getParent().close();
			}
		}),
		endButton:new sap.m.Button({
			text:"Cancel",
			type:"Reject",
			icon:"sap-icon://decline",
			press:function(oEvt){
			oEvt.getSource().getParent().close();
			}
		}),
		content:[
			new sap.m.HBox({
				items:[
				new sap.m.Label({text:"Confirm to save changes?"})
				]
			})
		]
	}).addStyleClass('sapUiSizeCompact');
	
	let lv_dialog_del = new sap.m.Dialog("BP_DELETE_DIALOG",{
		title: "Confirmation",
		beginButton: new sap.m.Button({
			text:"Ok",
			type:"Accept",
			icon:"sap-icon://accept",
			press:function(oEvt){
				bpDataOrganizer._removeById(screenMode._id);
				oEvt.getSource().getParent().close();
			}
		}),
		endButton:new sap.m.Button({
			text:"Cancel",
			type:"Reject",
			icon:"sap-icon://decline",
			press:function(oEvt){
			oEvt.getSource().getParent().close();
			}
		}),
		content:[
			new sap.m.HBox({
				items:[
				new sap.m.Label({text:"Confirm to delete Customer?"})
				]
			})
		]
	}).addStyleClass('sapUiSizeCompact');


</script>
