# 3d-Carrousel-PlugIn

	<script src="js/jquery-1.7.js"></script>
	<script src='js/3dCarrousel.js'></script>
	<script>
		var data = {
			sliceNum: 10,
			height: 300,
			width: 450,
			pics: ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
			ifTurnDown:true
		};
		var c_3d = new Carrousel_3d($('.Carrousel'), data);
	</script>

引入jquery和js插件 传入容器的jq对象和初始化数据就可以自动生成一个3d轮播图
