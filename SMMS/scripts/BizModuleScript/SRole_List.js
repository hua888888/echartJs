function doOnload(){
	if (typeof(doOnload_Super) != "undefined") { doOnload_Super();}  //如果存在页面加载超级方法，则先执行
////////对于列表操作，页面加载时要执行的代码在此完成//////////
}

function doChange(obj){
	if (typeof(doChange_Super) != "undefined") { doChange_Super(obj);}  //如果存在onChange的超级方法，则先执行
////////对于列表操作，页面元素发生改变是要执行的代码在此完成//////////
}

function openSinOrgPop(tableModelId,fid,sid,sname,keyLimitCondition){
	  var dataObject = new Object();              
	  dataObject. sid= sid;
	  dataObject. sname= sname;
	  if(keyLimitCondition==null){
		  keyLimitCondition='';
	  }
	  if (document.getElementById("keyLimit")){
		  keyLimitCondition = document.getElementById("keyLimit").value+keyLimitCondition;
	  } 
	  var url=rootPath+"/fmp/FrameCommonBiz/DoPopList?popMode=singleVPop&showAllButton=true&tableModelId="+tableModelId+"&keyLimit="+keyLimitCondition;
	  openModalDialog(url,dataObject, "scroll:no; center:yes; resizable:yes; dialogWidth:800px; dialogLeft:200px; dialogHeight:600px");
	  
	  dataObject.backCall=function(){
		  if (dataObject.trueValue != null) {   //返回给父窗口隐藏域
			  setFieldValue(fid,dataObject.trueValue,dataObject.dispValue);
		  } 
		  if (typeof(doChange) != "undefined") {
			  doChange(document.getElementById('detailId_'+fid));
		  }    
	  };
}


/**
 * 查看岗位下的用户
 * @return
 */
function viewRoleUser(){
	if (selectedRid != null) {
		var roleId = getDataListTrueValue(selectedRid,'ROLEID');
		var freezeCondition=" and sr.ROLEID='"+roleId+"'";
		var url=rootPath+"/fmp/FrameCommonBiz/DoList?tableModelId=SPostUserPop&moduleId=crd_md_cbqrwqwqwqwwpppp&freezeCondition="+freezeCondition;
		openWindow(url);
	}else{
		showMessage('MSG0001');//请在查询到的结果集中选择一条记录！
	}
}