var stdList = [];
function readValues() {
	var data = {};
	data.name = $("#sname").val();
	data.sage = $("#sage").val();
	data.gender = $("input[name=gender]:checked").val();
	data.country = $("select").val();
	
	stdList.push(data);
	addRow(stdList.length - 1);
}

function addRow(currentIndex) {
	
	var crntObj = stdList[currentIndex];
	var tr = $("<tr></tr>");
	var td1 = $("<td></td>").text(currentIndex+1);
	tr.append(td1);
	var td2 = $("<td></td>");
	td2.click(function(event){
		alert("click")
		console.log($(event.target));
		$(event.target).find('span').hide();
		$(event.target).find('input').show();
		$(event.target).off('click');
	});	
	var span = $("<span></span>").html(crntObj.name);
	var  inputElement = $("<input style='display:none' type='text' value='" + crntObj.name + "' id='name_"+ currentIndex + "'>");
	td2.append(span);
	td2.append(inputElement);
	tr.append(td2);

	var td3 = $("<td></td>").text(crntObj.sage);
	tr.append(td3);

	var td4 = $("<td></td>").text(crntObj.gender);
	tr.append(td4);

	var td5 = $("<td></td>").text(crntObj.country);
	tr.append(td5);

	var td6 = $("<td></td>");
	var input1 = $("<input type='button' value='Edit' id='edit_" + currentIndex + "'>");
	input1.click(function(event){
		// var id = $(event.target).attr('id');
		var id = $(this).attr('id');
		id = id.replace("edit_", '');
		id = parseInt(id);
		//console.log(stdList[id]);
		fillDetials(id);
	});
	var input2 = $("<input type='button' value='Delete' id='del_" + currentIndex + "'>");
	input2.click(function(event){
		var id = $(event.target).attr('id');
		id = id.replace('del_', '');
		id = parseInt(id);
		stdList.splice(id, 1);
		console.log(stdList);
		$(event.target).parent().parent().remove();
		reDrawTable();
	});
	var input3 = $("<input type='button' value='Save' id='sav_" + currentIndex + "'>");
	input3.click(function(event){
		var id = $(event.target).attr('id');
		id = id.replace("sav_", '');
		id = parseInt(id);
		nameid = '#name_' + id;
		stdList[id].name = $(nameid).val();
		reDrawTable();
	})
	td6.append(input1);
	td6.append(input2);
	td6.append(input3);
	tr.append(td6);

	$("tbody").append(tr);
}

function reDrawTable() {
	$("tbody").empty();
	for (var i = 0 ; i < stdList.length; i++) {
		addRow(i);
	}
}

var crntEditDetails = 0;
function fillDetials(index) {
	$("#regDetails").hide();
	$("#saveDetails").show();
	crntEditDetails = index;

	var curObj = stdList[index];
	$("#sname").val(curObj.name);
	$("#sage").val(curObj.sage);
	$("select").val(curObj.country);
}

function saveUpdatedDetails(){

	var data = {};
	data.name = $("#sname").val();
	data.sage = $("#sage").val();
	data.gender = $("input[name=gender]:checked").val();
	data.country = $("select").val();
	
	stdList[crntEditDetails] = data;
	reDrawTable();
}