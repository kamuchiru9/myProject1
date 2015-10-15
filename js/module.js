$(function(){
  // 処理
	$('.imgover').hover(function()
	{
		var srcData = $(this).attr('src');
		srcData = srcData.replace(/(\.gif|\.jpg|\.png)/g,'_o$1');
		$(this).attr('src',srcData);
	},
	function()
	{
		var srcData = $(this).attr('src');
		srcData = srcData.replace('_o','');
		$(this).attr('src',srcData);
	});

	$('.imgover2').hover(function()
	{
		$(this).css('opacity','0.7');
	},
	function()
	{
		$(this).css('opacity','1');
	});


});