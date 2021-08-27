Ext.define('Myapp4.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
    items: [{
		xtype: 'panel',
		fullscreen: true,

		defaultType: 'textfield',    //what kind of elements by default
		defaults: {
			flex: 1
		},
	
        items: [{

			html: 'User Form',
			style: 'background-color: white'
		},
			{
            fieldLabel: 'First Name',
            name: 'firstName'//,
		//	bind: 'first Name'
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName'
        },
		{
			xtype: 'datefield',
		fieldLabel: 'Date of Birth',
		name: 'birthDate',
		msgTarget: 'under',   //location of error message
		invalidText: '"{0}" bad. "{1}" good.' //custom error message text

		},
		
		{
			xtype: 'button',
		    text: 'Submit',
		    console: console.log("Added"),
			
		}
	]
	}]
	});
