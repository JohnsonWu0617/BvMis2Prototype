var custInfo = custInfo || {};

custInfo.myGrid_init = function() {
	var mydata = [];
	jQuery("#myGrid").jqGrid({
		height: 'auto',
		width:1280,
		multiselect: true,
		caption: "Customer List",
		colNames:['id','name', '說明'],
		colModel:[
		      	{name:'id',index:'id',  sortable:true, sorttype:"int"},
		      	{name:'name',index:'name',  sortable:true  },
		      	{name:'note',index:'note',  sortable:true }
	  	]
	});
};

function addRowEvent(){
	var mydata = [
  		{id:"1",name:"test",note:"note"},
  		{id:"2",name:"test2",note:"note2"},
  		{id:"3",name:"test3",note:"note3"}
	];
	for(var i=0;i<=mydata.length;i++){
		//$("#myGrid").jqGrid("clearGridData");
		//$("#myGrid").jqGrid('addRowData',i+1,mydata[i]);
		//$("#myGrid").addRowData(i+1,mydata[i]);
		//
		if(mydata[i] != undefined ){
			//alert(mydata[i]);
			$("#myGrid").jqGrid('addRowData',i+1,mydata[i]);
		}
		
	}
}


$(document).ready(function() {
	custInfo.myGrid_init();
	console.log($.fn.jqGrid);
});