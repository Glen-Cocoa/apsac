$(function(){
	var EXCEL_URL = "../lib/data.xlsx"
	var TABLE_TARGET = "#table"

	window.filterTable = function(filter_obj){
		excel_data_filter.getExcelData(EXCEL_URL,filter_obj,TABLE_TARGET,excel_data_filter.loadTable)
		}
	window.filterTable({})

	var getCheckedFilters = function(){
		$("body").on("click",function(e){
			$("input:checkbox").on("click",function(e){
				checked_filters = []
				var $this = $(this);
				$('input[name="' + $this.attr('name') + '"]:checked').each(function(){
					checked_filters.push($(this).val())
				})
			})
		})
	}
	window.filterTable({key:checked_filters})
})