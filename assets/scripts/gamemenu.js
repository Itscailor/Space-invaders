$(document).ready(function(e){

	
	//Back main menu
	function backMainMenu(){
		$( ".sub-menu").hide();
		$( "#credits").hide();	
		$( "#controls").hide();	
		$( "#main-menu" ).fadeIn("slow");
		return false;
	};
	
	//Load submenu
	function loadSubMenu(mainMenu, mainOptions , _value){
		var body = $("body");
		var parentId = config["mainMenu"][_value].id;
		var subOptions = "<ul style='display:none;' data-parent-id='"+parentId+"' class='sub-menu' id='sub-menu-"+parentId+"'>";
		var subMenu = Object.keys(config["mainMenu"][_value].subMenu.options);
		var opt = {};
		$.each(subMenu, function(key,value){
			opt = config["mainMenu"][_value].subMenu.options[value];
			subOptions += "<li data-pos='"+key+"' data-id='"+_value+"' class='sub-menu-opt'>"+opt.title+"";
			if(opt.date != undefined){
				subOptions += " <small>"+opt.date+"</small>";
			}
			
			subOptions += "</li>";
		});
		body.append(subOptions+"<li class='back'>Back</li></ul>")
	};
	
	//Show main menu
	function showMainMenu(){
	
		//Add options in main menu
		var mainMenu = $("#main-menu");
		var mainOptions = Object.keys(config["mainMenu"]);
		
		$.each(mainOptions,function(key,value){
			//Load submenu
			if(config["mainMenu"][value].subMenu != undefined){
				loadSubMenu(mainMenu, mainOptions , value);
				mainMenu.append("<li data-type='submenu' data-pos='"+key+"' id='"+config["mainMenu"][value].id+"' class='main-menu-opt'>"+config["mainMenu"][value].title+"</li>");
			}else{
				mainMenu.append("<li data-id='"+value+"' data-pos='"+key+"' id='"+config["mainMenu"][value].id+"' class='main-menu-opt'>"+config["mainMenu"][value].title+"</li>");
			}
						
		});
		mainMenu.fadeIn("slow");
	};
	
	//Configuration vars
	
	var config = {
		mainMenu:{
			startGame:{
				id:"opt-start-game",
				title: "Start Game",	
				callback:function(){
					
					window.location.href = 'game/game.html';
				}
			},
	//-------------------------------
			options:{
				id:"opt-controls",
				title: "Controls",
				callback:function(){
					$("#controls,#back-controls").fadeIn("slow");
				}

			},
	//-------------------------------
			credits:{
				id:"opt-credits",
				title: "Credits",
				callback:function(){
					$("#credits,#back-credits").fadeIn("slow");
				}
			}
		}
	};
	
	//Hover on main manu

	
	//Hover in submenu
	$(this).on("mouseenter",".sub-menu li",function(){
	  var subMenuLst = $(".sub-menu li");
	  subMenuLst.removeClass("selected-opt");
	  $(this).addClass("selected-opt");

	})
	
    //Click in submenu option
	$(this).on("click",".sub-menu li",function(e){
		
		if($(this).hasClass("back")){	
			return backMainMenu();
		}
		
		var dataId = $(this).attr("data-id");
		var dataPos = $(this).attr("data-pos");

		$(".sub-menu").hide();
		config["mainMenu"][dataId].subMenu.options["opt"+dataPos].callback();
	});
	
	//CLick in main menu option
	$(this).on("click",".main-menu-opt",function(e){
		var type = $(this).attr("data-type");
		var id = $(this).attr("id");
		var dataId = $(this).attr("data-id");
		var mainMenu = $("#main-menu");
		var subMenu = $("#sub-menu-"+id+"");
		
		mainMenu.hide();
		if(type == "submenu"){
			subMenu.fadeIn("slow");
		}else{
			config.mainMenu[dataId].callback();
		}

	});
		

	//On load
	$(window).on("load", function(e){
;
		showMainMenu();
	});
	
});