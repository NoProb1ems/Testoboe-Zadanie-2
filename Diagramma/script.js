
var countBorder = 0;
var countCol = 0;
var arrCol = [];

$('#array').focus(function(event) {
	$('#array').val('');
});
$('#array').focusout(function(event) {
	if ($('#array').val()==''){
		$('#array').val('Введите данные');	
	}
});
$('#auto').click(function(event) {
	$('#array').val('5 8 2 1 15 2 3 5 9 11 10 4 3 14 1 7 10 3 2 13');
});
$('#btn').click(function(event) {
	var text = $('#array').val();
	var reg  =/^([0-9\s]+)*$/;
		if(reg.test(text)){
			var arr = text.split(' ');
			for (let i = 0; i < arr.length; i++){
				if(arr[i]==""){
					arr.splice(i,1);
					i=-1;
				}
			}
			if (arr.length==0) {
				$('#array').val('Введите данные');
			}
			if (arr.length != 0) {
				countBorder += 1;
				var max=arr[0]; 
				jQuery('<div/>', {
					class: 'diagramma',
					id: 'diagramma'+ countBorder
				}).appendTo('body');
				$('#diagramma' + countBorder).css('display', 'inline-flex');
						jQuery('<ul/>',{}).appendTo('#diagramma' + countBorder);
						jQuery('<span/>',{
							class : 'hor' 
						}).appendTo('#diagramma' + countBorder);
						jQuery('<span/>',{
							class : 'vert' 
						}).appendTo('#diagramma' + countBorder);
						jQuery('<span/>',{
							class : 'zero',
							text: '0' 
						}).appendTo('#diagramma' + countBorder);
						jQuery('<span/>',{
							class : 'five',
							text : '5'
						}).appendTo('#diagramma' + countBorder);
						jQuery('<span/>',{
							class : 'ten',
							text : '10'
						}).appendTo('#diagramma' + countBorder);
						jQuery('<span/>',{
							class : 'fifteen',
							text : '15'
						}).appendTo('#diagramma' + countBorder);
					for (let i = 0; i < arr.length; i++){
						countCol +=1;
						jQuery('<li/>',{
							class : 'li' + i
						}).appendTo('#diagramma' + countBorder +' ul');
						jQuery('<div/>',{
							class : 'colors'
						}).appendTo('#diagramma' + countBorder +' ul .li' + i);
						jQuery('<span/>',{
							class : 'green'
						}).appendTo('#diagramma' + countBorder +' ul .li' + i + ' .colors');
						jQuery('<span/>',{
							class : 'yellow'
						}).appendTo('#diagramma' + countBorder +' ul .li' + i + ' .colors');
						jQuery('<span/>',{
							class : 'red'
						}).appendTo('#diagramma' + countBorder +' ul .li' + i + ' .colors');
						jQuery('<span/>',{
							class : 'number',
							text : ''+ i - 1 + 2
						}).appendTo('#diagramma' + countBorder +' ul .li' + i + ' .colors');
						jQuery('<span/>',{
							class : 'value',
							text : ''+ arr[i]
						}).appendTo('#diagramma' + countBorder + ' ul .li' + i + ' .colors');
						$('#diagramma' + countBorder + ' ul .li' + i + ' .colors .value').css('bottom', '' + arr[i]*10 + 'px');
						if (arr[i] > 0 && arr[i] <= 5){
							$('#diagramma'+ countBorder + ' ul .li' + i + ' .colors .green').css('height', '' + arr[i]*10 + 'px');
						}
						if (arr[i] > 5 && arr[i] <= 10 ){
							$('#diagramma'+ countBorder + ' ul .li' + i + ' .colors .green').css('height', '' + 50 + 'px');
							$('#diagramma'+ countBorder + ' ul .li' + i + ' .colors .yellow').css('height', '' + (arr[i] - 5) * 10 + 'px');
						}
						if (arr[i] > 10 && arr[i] <= 15){
							$('#diagramma'+ countBorder + ' ul .li' + i + ' .colors .green').css('height', '' + 50 + 'px');
							$('#diagramma'+ countBorder + ' ul .li' + i + ' .colors .yellow').css('height', '' + 50 + 'px');
							$('#diagramma'+ countBorder + ' ul .li' + i + ' .colors .red').css('height', '' + (arr[i] - 10) * 10 + 'px');
						}
					}
				$('#diagramma' + countBorder + ' .hor').css('width', '' + ((arr.length * 40) + 20) + 'px');
				$('#array').val('Введите данные');
			}
		}
		else {
			$('#array').val('ошибка ввода');
		}
	// }
});

