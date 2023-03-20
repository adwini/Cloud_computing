<script>

    const createBP = () => {
        
        let data_for_general = {
			BP_TYPE     : ui('BP_TYPE_INFO').getValue().trim(),
			REG_NAME    : ui('BP_TYPE_REGNAME').getValue().trim(),
			BP_ID       : ui('INPUT_BP_ID').getValue().trim(),
			EXT_PR      : ui('BP_TYPE_EXTPARTNER').getValue().trim(),
			SRC_SYS     : ui('INPUT_CONTROL_INFO_SOURCE_SYS').getValue().trim(),
			DEL_FLAG    : ui('CONTROL_INFO_DEL_FLAG').getState()
   		};

        
        ui('BP_TYPE_INFO').setValue(data_for_general.BP_TYPE).setEditable(false);
        ui('BP_TYPE_REGNAME').setValue(data_for_general.REG_NAME).setEditable(false);
        ui('INPUT_BP_ID').setValue(data_for_general.BP_ID).setEditable(false);
    }
        

    




</script>