var ShroomParSec;
var ShroomParClic;



/*INITIALISATION DES SHROOMS*/
var shroom=0;
var shroomSave=parseFloat(localStorage.nbshrooms);
if(parseInt(localStorage.nbshrooms)>0){
	shroom=shroom+shroomSave;
}


/*INITIALISATION DES CHAMPIONS*/
var effetTeemo=0.1;
var prixTeemo=100;
var teemo=0;
var teemoSave=parseInt(localStorage.nbteemo);
if(parseInt(localStorage.nbteemo)>0){
	teemo=teemo+teemoSave;
}



var ivern=0;
var ivernSave=parseInt(localStorage.nbivern);
if(parseInt(localStorage.nbivern)>0){
	ivern=ivern+ivernSave;
}



var velkoz=0;
var velkozSave=parseInt(localStorage.nbvelkoz);
if(parseInt(localStorage.nbvelkoz)>0){
	velkoz=velkoz+velkozSave;
}


var nidalee=0;
var nidaleeSave=parseInt(localStorage.nbnidalee);
if(parseInt(localStorage.nbnidalee)>0){
	nidalee=nidalee+nidaleeSave;
}

var thresh=0;
var threshSave=parseInt(localStorage.nbthresh);
if(parseInt(localStorage.nbthresh)>0){
	thresh=thresh+threshSave;
}

var senna=0;
var sennaSave=parseInt(localStorage.nbsenna);
if(parseInt(localStorage.nbsenna)>0){
	senna=senna+sennaSave;
}

var maokai=0;
var maokaiSave=parseInt(localStorage.nbmaokai);
if(parseInt(localStorage.nbmaokai)>0){
	maokai=maokai+maokaiSave;
}


var aphelios=0;
var apheliosSave=parseInt(localStorage.nbaphelios);
if(parseInt(localStorage.nbaphelios)>0){
	aphelios=aphelios+apheliosSave;
}

var viktor=0;
var effetViktor=385;
var prixViktor=310000;
var viktorSave=parseInt(localStorage.nbviktor);
if(parseInt(localStorage.nbviktor)>0){
	viktor=viktor+viktorSave;
}


var jhin=0;
var jhinSave=parseInt(localStorage.nbjhin);
if(parseInt(localStorage.nbjhin)>0){
	jhin=jhin+jhinSave;
}


/*INITIALISATION DES ITEMS*/
var cull=0;
var stackCull=0;
var cullSave=parseInt(localStorage.nbcull);
if(parseInt(localStorage.nbcull)>0){
	cull=cull+cullSave;
}
var stackCullSave=parseInt(localStorage.nbstackcull);
if(parseInt(localStorage.nbstackcull)>0){
	stackCull=stackCull+stackCullSave;
}

var pink=0;
var pinkSave=parseInt(localStorage.nbpink);
if(parseInt(localStorage.nbpink)>0){
	pink=pink+pinkSave;
}

var oracle=0;
var oracleSave=parseInt(localStorage.nboracle);
if(parseInt(localStorage.nboracle)>0){
	oracle=oracle+oracleSave;
}

var dague=0;
var dagueSave=parseInt(localStorage.nbdague);
if(parseInt(localStorage.nbdague)>0){
	dague=dague+dagueSave;
}

var runaan=0;
var runaanClick=0;
var	runaanSec=0;
var runaanSave=parseInt(localStorage.nbrunaan);
if(parseInt(localStorage.nbrunaan)>0){
	runaan=runaan+runaanSave;
}

var guinsoo=0;
var effetGuinsoo=0;
var timerGuinsoo=0;
var guinsooSave=parseInt(localStorage.nbguinsoo);
if(parseInt(localStorage.nbguinsoo)>0){
	guinsoo=guinsoo+guinsooSave;
}

var mejai=0;
var mejaiSave=parseInt(localStorage.nbmejai);
if(parseInt(localStorage.nbmejai)>0){
	mejai=mejai+mejaiSave;
}

var stackMejai=0;
var stackMejaiSave=parseInt(localStorage.nbstackmejai);
if(parseInt(localStorage.nbstackmejai)>0){
	stackMejai=stackMejai+stackMejaiSave;
}


var lanterne=0;
var lanterneSave=parseInt(localStorage.nblanterne);
if(parseInt(localStorage.nblanterne)>0){
	lanterne=lanterne+lanterneSave;
}

var arbrisseau=0;
var arbrisseauSave=parseInt(localStorage.nbarbrisseau);
if(parseInt(localStorage.nbarbrisseau)>0){
	arbrisseau=arbrisseau+arbrisseauSave;
}

var calibrum=0;
var calibrumSave=parseInt(localStorage.nbcalibrum);
if(parseInt(localStorage.nbcalibrum)>0){
	calibrum=calibrum+calibrumSave;
}

var severum=0;
var severumSave=parseInt(localStorage.nbseverum);
if(parseInt(localStorage.nbseverum)>0){
	severum=severum+severumSave;
}

var gravitum=0;
var gravitumSave=parseInt(localStorage.nbgravitum);
if(parseInt(localStorage.nbgravitum)>0){
	gravitum=gravitum+gravitumSave;
}

var infernum=0;
var infernumSave=parseInt(localStorage.nbinfernum);
if(parseInt(localStorage.nbinfernum)>0){
	infernum=infernum+infernumSave;
}

var crescendum=0;
var crescendumSave=parseInt(localStorage.nbcrescendum);
if(parseInt(localStorage.nbcrescendum)>0){
	crescendum=crescendum+crescendumSave;
}

var hexcore=0;
var hexcoreSave=parseInt(localStorage.nbhexcore);
if(parseInt(localStorage.nbhexcore)>0){
	hexcore=hexcore+hexcoreSave;
}

var statikk=0;
var statikkSave=parseInt(localStorage.nbstatikk);
if(parseInt(localStorage.nbstatikk)>0){
	statikk=statikk+statikkSave;
}

var stackStatikk=0;
var stackStatikkSave=parseInt(localStorage.nbstackstatikk);
if(parseInt(localStorage.nbstackstatikk)>0){
	stackStatikk=stackStatikk+stackStatikkSave;
}

var luden=0;
var ludenSave=parseInt(localStorage.nbluden);
if(parseInt(localStorage.nbluden)>0){
	luden=luden+ludenSave;
}

var stackLuden=0;
var stackLudenSave=parseInt(localStorage.nbstackluden);
if(parseInt(localStorage.nbstackluden)>0){
	stackLuden=stackLuden+stackLudenSave;
}


var tear=0;
var stackTear=0;
var tearSave=parseInt(localStorage.nbtear);
if(parseInt(localStorage.nbtear)>0){
	tear=tear+tearSave;
}
var stackTearSave=parseInt(localStorage.nbstacktear);
if(parseInt(localStorage.nbstacktear)>0){
	stackTear=stackTear+stackTearSave;
}

var manamune=0;
var stackManamune=0;
var manamuneSave=parseInt(localStorage.nbmanamune);
if(parseInt(localStorage.nbmanamune)>0){
	manamune=manamune+manamuneSave;
}
var stackManamuneSave=parseInt(localStorage.nbstackmanamune);
if(parseInt(localStorage.nbstackmanamune)>0){
	stackManamune=stackManamune+stackManamuneSave;
}

var muramana=0;
var muramanaSave=parseInt(localStorage.nbmuramana);
if(parseInt(localStorage.nbmuramana)>0){
	muramana=muramana+muramanaSave;
}


$(document).ready(function(){
	/*****RESET********/

	$("#reset").click(function(){

		shroom=0;
		teemo=0;
		velkoz=0;
		ivern=0;
		nidalee=0;
		thresh=0;
		senna=0;
		maokai=0;
		aphelios=0;
		viktor=0;
		jhin=0;


		cull=0;
		pink=0;
		oracle=0;
		dague=0;
		runaan=0;
		guinsoo=0;
		mejai=0;
		lanterne=0;
		arbrisseau=0;

		calibrum=0;
		severum=0;
		gravitum=0;
		infernum=0;
		crescendum=0;

		hexcore=0;
		statikk=0;
		luden=0;
		tear=0;
		manamune=0;
		muramana=0;

		stackCull=0;
		stackMejai=0;
		stackStatikk=0;
		stackLuden=0;
		stackTear=0;
		stackManamune=0;

		localStorage.setItem("nbshrooms", shroom);
		localStorage.setItem("nbteemo", teemo);
		localStorage.setItem("nbivern", ivern);
		localStorage.setItem("nbvelkoz", velkoz);
		localStorage.setItem("nbnidalee", nidalee);
		localStorage.setItem("nbthresh", thresh);
		localStorage.setItem("nbsenna", senna);
		localStorage.setItem("nbmaokai", maokai);
		localStorage.setItem("nbaphelios", aphelios);
		localStorage.setItem("nbviktor", viktor);
		localStorage.setItem("nbjhin", jhin);



		localStorage.setItem("nbcull", cull);
		localStorage.setItem("nbpink", pink);
		localStorage.setItem("nboracle", oracle);
		localStorage.setItem("nbdague", dague);
		localStorage.setItem("nbguinsoo", guinsoo);
		localStorage.setItem("nbmejai", mejai);
		localStorage.setItem("nblanterne", lanterne);
		localStorage.setItem("nbarbrisseau", arbrisseau);

		localStorage.setItem("nbcalibrum", calibrum);
		localStorage.setItem("nbseverum", severum);
		localStorage.setItem("nbgravitum", gravitum);
		localStorage.setItem("nbinfernum", infernum);
		localStorage.setItem("nbcrescendum", crescendum);

		localStorage.setItem("nbhexcore", hexcore);
		localStorage.setItem("nbstatikk", statikk);
		localStorage.setItem("nbluden", luden);
		localStorage.setItem("nbtear", tear);
		localStorage.setItem("nbmanamune", manamune);
		localStorage.setItem("nbmuramana", muramana);


		localStorage.setItem("nbstackcull", stackCull);
		localStorage.setItem("nbstackmejai", stackMejai);
		localStorage.setItem("nbstackstatikk", stackStatikk);
		localStorage.setItem("nbstackLuden", stackLuden);
		localStorage.setItem("nbstacktear", stackTear);
		localStorage.setItem("nbstackmanamune", stackManamune);

		document.location.reload(true);

	});

	/*****SHROOM*******/

	
	$("#affichage").val(shroom);
	
	$("#shroom").click(function(){
		shroom=shroom+ShroomParClic; 
		
		var alea=Math.random();
		if(alea<0.5){
			var sonShroom=new Audio("Son/bulle.mp3");
			sonShroom.volume=0.01;
			sonShroom.play();
		}
		else{
			var sonShroom=new Audio("Son/bulle2.mp3");
			sonShroom.volume=0.01;
			sonShroom.play();
		}

		

		/*****STACK D'ITEMS******/

		if(cull==1 && stackCull<1500){
			stackCull=stackCull+1;
			$("#stackCull").val(stackCull+"/1500");
		}
		if(cull==1 && stackCull==1500){
			$("#stackCull").val("stackée");
			shroom=shroom+1500;
			stackCull=1501;
		}



		if(tear==1 && stackTear<2500){
			stackTear=stackTear+1;
			$("#stackTear").val(stackTear+"/2500");
		}
		if(tear==1 && stackTear==2500){
			$("#stackTear").val("stackée");
			stackTear=2501;
			manamune=1;
			$("#Manamune").show();
		}


		if(manamune==1 && stackManamune<5000){
			stackManamune=stackManamune+1;
			$("#stackManamune").val(stackManamune+"/5000");
		}
		if(manamune==1 && stackManamune==5000){
			$("#stackManamune").val("stackée");
			stackManamune=5001;
			$("#Manamune").hide();
			muramana=1;
			$("#Muramana").show();
		}


		if(guinsoo==1){
			effetGuinsoo=effetGuinsoo+1;
			if(effetGuinsoo>=10){
				effetGuinsoo=10;
			}
			timerGuinsoo=0;
		}
		
		if(mejai==1 && stackMejai<2000){
			stackMejai=stackMejai+1;
			$("#stackMejai").val(stackMejai+"/2000");
		}
		if(mejai==1 && stackMejai==2000){
			stackMejai=2000;
			$("#stackMejai").val(stackMejai+"/2000");
		}

		if(statikk==1 && stackStatikk<200){
			stackStatikk=stackStatikk+1;
			$("#stackStatikk").val(stackStatikk+"/200");
		}
		if(statikk==1 && stackStatikk==200){
			stackStatikk=0;
			$("#stackMejai").val(stackMejai+"/200");
			shroom=shroom+(shroom*0.075);
			var sonBouton=new Audio("Son/statikk.wav");
			sonBouton.volume=0.01;
			sonBouton.play();
		}
	});
	



	$("#shroom").mouseup(function(){
		var sonShroom=new Audio("Son/bulle3.mp3");
		sonShroom.volume=0.1;
		sonShroom.play();

	});

/******************************/
	/*GESTIONS DE CHAMPIONS*/
/******************************/
	
	$("#nbTeemo").val(teemo+" teemo");
	$("#teemoB").click(function(){
		if(shroom>=prixTeemo){
			if(teemo==0){
				var sonBouton=new Audio("Son/teemo.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else if(teemo==665){
				var sonBouton=new Audio("Son/teemo2.wav");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}

			teemo=teemo+1;
			shroom=shroom-prixTeemo;
	
			$("#nbTeemo").val(teemo+" teemo");
		}
	});

	




	$("#nbVelkoz").val(velkoz+" Vel'Koz");
	$("#velkozB").click(function(){
		if(shroom>=2800){
			if(velkoz==0){
				var sonBouton=new Audio("Son/velkoz.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			velkoz=velkoz+1;
			shroom=shroom-2800;

			$("#nbVelkoz").val(velkoz+" vel'koz");

			
				
		}
	});





	$("#nbIvern").val(ivern+" ivern");
	$("#ivernB").click(function(){
		if(shroom>=8000){

			if(ivern==0){
				var sonBouton=new Audio("Son/ivern.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			ivern=ivern+1;
			shroom=shroom-8000;

			$("#nbIvern").val(ivern+" ivern");

			

		}
	});



	$("#nbNidalee").val(nidalee+" nidalee");
	$("#nidaleeB").click(function(){
		if(shroom>=20000){
			if(nidalee==0){
				var sonBouton=new Audio("Son/nidalee.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			nidalee=nidalee+1;
			shroom=shroom-20000;

			$("#nbNidalee").val(nidalee+" nidalee");

		}
	});

	

	$("#nbThresh").val(thresh+" thresh");
	$("#threshB").click(function(){
		if(shroom>=40000){
			if(thresh==0){
				var sonBouton=new Audio("Son/thresh.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();


			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			thresh=thresh+1;
			shroom=shroom-40000;

			$("#nbThresh").val(thresh+" thresh");

		}
	});

	$("#nbMaokai").val(maokai+" maokai");
	$("#maokaiB").click(function(){
		if(shroom>=82000){
			if(maokai==0 && arbrisseau==0){
				var sonBouton=new Audio("Son/maokai.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			maokai=maokai+1;
			shroom=shroom-82000;

			$("#nbMaokai").val(maokai+" maokai");

		}
	});

	$("#nbAphelios").val(aphelios+" aphelios");
	$("#apheliosB").click(function(){
		if(shroom>=150000){
			if(aphelios==0){
				var sonBouton=new Audio("https://vignette.wikia.nocookie.net/leagueoflegends/images/1/16/Aphelios01.select.01.ogg/revision/latest?cb=20200711201806");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			aphelios=aphelios+1;
			shroom=shroom-150000;

			$("#nbAphelios").val(aphelios+" aphelios");

		}
	});


	$("#nbViktor").val(viktor+" viktor");
	$("#viktorB").click(function(){
		if(shroom>=prixViktor){
			if(viktor==0){
				var sonBouton=new Audio("Son/viktor.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			viktor=viktor+1;
			shroom=shroom-prixViktor;

			$("#HexCore").show();
			$("#nbViktor").val(viktor+" viktor");

		}
	});



	$("#senna").hide();

	$("#nbSenna").val(senna+" senna");
	$("#sennaB").click(function(){
		if(shroom>=1950000){
			var alea=Math.random();
			if(alea<0.5){
				var sonBouton=new Audio("Son/boutons.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
			}
			else{
				var sonBouton=new Audio("Son/boutons2.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
			}
			


			senna=senna+1;
			shroom=shroom-1950000;

			$("#nbSenna").val(senna+" senna");

		}
	});

	$("#nbJhin").val(jhin+" jhin");
	$("#jhinB").click(function(){
		if(shroom>=2700000){
			if(jhin==0){
				var sonBouton=new Audio("Son/jhin.mp3");
				sonBouton.volume=0.02;
				sonBouton.play();
			}
			else{
				var alea=Math.random();
				if(alea<0.5){
					var sonBouton=new Audio("Son/boutons.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
				else{
					var sonBouton=new Audio("Son/boutons2.wav");
					sonBouton.volume=0.005;
					sonBouton.play();
				}
			}


			jhin=jhin+1;
			shroom=shroom-2700000;

			$("#nbJhin").val(jhin+" jhin");

		}
	});

/******************************/
	/*GESTIONS DES ITEMS*/
/******************************/
	$("#achatCull").val(cull+"/1");

	$("#CullB").click(function(){
		if(cull<1){
			if(shroom>=500){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
				cull=cull+1;
				shroom=shroom-500;
				$("#achatCull").val(cull+"/1");	
				$("#stackCull").val(stackCull+"/1500");
			}
		}
	});	
	

	$("#achatPink").val(pink+"/2");

	$("#PinkB").click(function(){
		if(pink<2){
			if(shroom>=750){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
				pink=pink+1;
				shroom=shroom-750;
				$("#achatPink").val(pink+"/2");	
			}
		}
	});	

	$("#achatOracle").val(oracle+"/1");

	$("#OracleB").click(function(){
		if(oracle<1){
			if(shroom>=1500){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				oracle=oracle+1;
				shroom=shroom-1500;
				$("#achatOracle").val(oracle+"/1");	
			}
		}
	});	

	$("#achatDague").val(dague+"/3");

	$("#DagueB").click(function(){
		if(dague<3){
			if(shroom>=3000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				dague=dague+1;
				shroom=shroom-3000;
				$("#achatDague").val(dague+"/3");	
			}
		}
		if(dague==3){
			var sonBouton=new Audio("Son/runaan1.wav");
			sonBouton.volume=0.01;
			sonBouton.play();
			setTimeout(function(){  var sonBouton=new Audio("Son/runaan2.wav");
								sonBouton.volume=0.01;
								sonBouton.play();   }, 200);
		}
	});	

	$("#Runaan").hide();

	$("#achatGuinsoo").val(guinsoo+"/1");

	$("#GuinsooB").click(function(){
		if(guinsoo<1){
			if(shroom>=30000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
				guinsoo=guinsoo+1;
				shroom=shroom-30000;
				$("#achatGuinsoo").val(guinsoo+"/1");	
			}
		}
	});	

	$("#achatMejai").val(mejai+"/1");

	$("#MejaiB").click(function(){
		if(mejai<1){
			if(shroom>=120000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
				mejai=mejai+1;
				shroom=shroom-120000;
				$("#achatMejai").val(mejai+"/1");	
				$("#stackMejai").val(stackMejai+"/2000");
			}
		}
	});


	$("#Lanterne").hide();
	$("#achatLanterne").val(lanterne+"/1");

	$("#LanterneB").click(function(){
		if(lanterne<1){
			if(thresh>=60){
				var sonBouton=new Audio("Son/lanterne.wav");
				sonBouton.volume=0.01;
				sonBouton.play();

				lanterne=lanterne+1;
				thresh=thresh-60;
				$("#achatLanterne").val(lanterne+"/1");
				$("#senna").show();
				setTimeout(function(){  var sonBouton=new Audio("https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ac/Senna_Original_Move_1.ogg/revision/latest?cb=20200227205927");
										sonBouton.volume=0.02;
										sonBouton.play();   }, 500);
				
				senna=senna+1;
				$("#nbSenna").val(senna+" senna");
				$("#nbThresh").val(thresh+" thresh");
			}
		}
		
	});	


	$("#Arbrisseau").hide();
	$("#achatArbrisseau").val(arbrisseau+"/3");

	$("#ArbrisseauB").click(function(){
		if(arbrisseau<3){
			if(maokai>=5){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				arbrisseau=arbrisseau+1;
				maokai=maokai-5;
				$("#achatArbrisseau").val(arbrisseau+"/3");
				var effmaokai=100+(arbrisseau*10);
				$("#effMaokai").val(effmaokai+" SHrooms/s");
				$("#nbMaokai").val(maokai+" maokai");
			}
		}
		
	});	


	$("#Calibrum").hide();
	$("#Severum").hide();
	$("#Gravitum").hide();
	$("#Infernum").hide();
	$("#Crescendum").hide();


	$("#achatCalibrum").val(calibrum+"/1");

	$("#CalibrumB").click(function(){
		if(calibrum<1){
			if(shroom>=300000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				calibrum=calibrum+1;
				shroom=shroom-300000;
				$("#achatCalibrum").val(calibrum+"/1");
			}
		}
		
	});	

	$("#achatSeverum").val(severum+"/1");

	$("#SeverumB").click(function(){
		if(severum<1){
			if(shroom>=75000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				severum=severum+1;
				shroom=shroom-300000;
				$("#achatSeverum").val(severum+"/1");
			}
		}
		
	});	

	$("#achatGravitum").val(gravitum+"/1");

	$("#GravitumB").click(function(){
		if(gravitum<1){
			if(shroom>=75000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				gravitum=gravitum+1;
				shroom=shroom-300000;
				$("#achatGravitum").val(gravitum+"/1");
			}
		}
		
	});	

	$("#achatInfernum").val(infernum+"/1");

	$("#InfernumB").click(function(){
		if(infernum<1){
			if(shroom>=75000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				infernum=infernum+1;
				shroom=shroom-300000;
				$("#achatInfernum").val(infernum+"/1");
			}
		}
		
	});	

	$("#achatCrescendum").val(crescendum+"/1");

	$("#CrescendumB").click(function(){
		if(crescendum<1){
			if(shroom>=75000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				crescendum=crescendum+1;
				shroom=shroom-300000;
				$("#achatCrescendum").val(crescendum+"/1");
			}
		}
		
	});	

	$("#achatStatikk").val(statikk+"/1");

	$("#StatikkB").click(function(){
		if(statikk<1){
			if(shroom>=720000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
				statikk=statikk+1;
				shroom=shroom-720000;
				$("#achatStatikk").val(statikk+"/1");	
				$("#stackStatikk").val(stackStatikk+"/200");
			}
		}
	});

	$("#HexCore").hide();

	$("#achatHexCore").val(hexcore+"/4");
	$("#HexCoreB").click(function(){
		if(hexcore==3){
			if(shroom>=1000000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				hexcore=hexcore+1;
				shroom=shroom-1000000;
				effetViktor=445;
				prixViktor=290000;
				$("#achatHexCore").val(hexcore+"/4");
				$("#prixHexCore").val("prix: 1 000 000 shrooms");
				$("#prixViktor").val("prix: 290 000 shrooms");
				$("#effViktor").val("445 Shrooms/s");
			}
		}
		if(hexcore==2){
			if(shroom>=1000000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				hexcore=hexcore+1;
				shroom=shroom-1000000;
				effetViktor=430;
				prixViktor=295000;
				$("#achatHexCore").val(hexcore+"/4");
				$("#prixHexCore").val("prix: 1 000 000 shrooms");
				$("#prixViktor").val("prix: 295 000 shrooms");
				$("#effViktor").val("430 Shrooms/s");
			}
		}
		if(hexcore==1){
			if(shroom>=1000000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				hexcore=hexcore+1;
				shroom=shroom-1000000;
				effetViktor=415;
				prixViktor=300000;
				$("#achatHexCore").val(hexcore+"/4");
				$("#prixHexCore").val("prix: 1 000 000 shrooms");
				$("#prixViktor").val("prix: 300 000 shrooms");
				$("#effViktor").val("415 Shrooms/s");
			}
		}
		if(hexcore==0){
			if(shroom>=0){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();

				hexcore=hexcore+1;
				effetViktor=400;
				prixViktor=305000;
				$("#achatHexCore").val(hexcore+"/4");
				$("#prixHexCore").val("prix: 1 000 000 shrooms");
				$("#prixViktor").val("prix: 305 000 shrooms");
				$("#effViktor").val("400 Shrooms/s");
			}
		}
		
	});	

	$("#achatLuden").val(luden+"/1");

	$("#LudenB").click(function(){
		if(luden<1){
			if(shroom>=1800000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
				luden=luden+1;
				stackLuden=0;
				shroom=shroom-1800000;
				$("#achatLuden").val(luden+"/1");	
				$("#stackLuden").val(stackLuden+"/180");
			}
		}
	});

	$("#achatTear").val(tear+"/1");

	$("#TearB").click(function(){
		if(tear<1){
			if(shroom>=2500000){
				var sonBouton=new Audio("Son/achat.wav");
				sonBouton.volume=0.005;
				sonBouton.play();
				tear=tear+1;
				shroom=shroom-2500000;
				$("#achatTear").val(tear+"/1");	
				$("#stackTear").val(stackTear+"/2500");
			}
		}
	});
	

	$("#Manamune").hide();
	$("#Muramana").hide();
});


/******************************/
	/*GESTIONS DES REFRESH*/
/******************************/

setInterval(function(){    
	ShroomParSec=teemo*effetTeemo+ivern*10+velkoz*3.14+nidalee*27+thresh*58+senna*3000+maokai*(100+(10*arbrisseau))+jhin*4444+aphelios*200+viktor*effetViktor;  //a modifier a chaque champions créés
	ShroomParSec=ShroomParSec+(ShroomParSec*runaanSec)+guinsoo*(effetGuinsoo*1.5)+mejai*(0.1*stackMejai); // a modifier a chaque items créés
	ShroomParClic=1+pink*0.75+oracle*2+((dague*0.5)+runaanClick)+manamune*5+((shroom*0.001)*muramana)+guinsoo*(effetGuinsoo*3); //a modifier a chaque items / champions créés
	ShroomParClic=ShroomParClic+(ShroomParClic*(0.03*calibrum))+(ShroomParClic*(0.03*severum))+(ShroomParClic*(0.03*gravitum))+(ShroomParClic*(0.03*infernum))+(ShroomParClic*(0.03*crescendum))
	/*CHAMPIONS*/
	localStorage.setItem("nbshrooms", shroom);
	localStorage.setItem("nbteemo", teemo);
	localStorage.setItem("nbivern", ivern);
	localStorage.setItem("nbvelkoz", velkoz);
	localStorage.setItem("nbnidalee", nidalee);
	localStorage.setItem("nbthresh", thresh);
	localStorage.setItem("nbsenna", senna);
	localStorage.setItem("nbmaokai", maokai);
	localStorage.setItem("nbaphelios", aphelios);
	localStorage.setItem("nbviktor", viktor);
	localStorage.setItem("nbjhin", jhin);

	/*ITEMS*/
	localStorage.setItem("nbcull", cull);
	localStorage.setItem("nbpink", pink);
	localStorage.setItem("nboracle", oracle);
	localStorage.setItem("nbdague", dague);
	localStorage.setItem("nbguinsoo", guinsoo);
	localStorage.setItem("nblanterne", lanterne);
	localStorage.setItem("nbarbrisseau", arbrisseau);
	localStorage.setItem("nbmejai", mejai);

	localStorage.setItem("nbcalibrum", calibrum);
	localStorage.setItem("nbseverum", severum);
	localStorage.setItem("nbgravitum", gravitum);
	localStorage.setItem("nbinfernum", infernum);
	localStorage.setItem("nbcrescendum", crescendum);

	localStorage.setItem("nbstatikk", statikk);
	localStorage.setItem("nbhexcore", hexcore);
	localStorage.setItem("nbluden", luden);
	localStorage.setItem("nbtear", tear);
	localStorage.setItem("nbmanamune", manamune);
	localStorage.setItem("nbmuramana", muramana);

	/*STACK ITEMS*/

	localStorage.setItem("nbstackcull", stackCull);
	localStorage.setItem("nbstackmejai", stackMejai);
	localStorage.setItem("nbstackstatikk", stackStatikk);
	localStorage.setItem("nbstackluden", stackLuden);
	localStorage.setItem("nbstacktear", stackTear);
	localStorage.setItem("nbstackmanamune", stackManamune);

	/*Affichages*/
	var strShroom=new String(Math.round(shroom));
	var compteur=0;
	var strAffichageTempo="";
	var strAffichage="";
	for(let i=strShroom.length; i>0; i--){
		var chiffre=strShroom.substring(i-1, i);
		strAffichageTempo=strAffichageTempo+chiffre;
		compteur=compteur+1;
		if(compteur==3){
			strAffichageTempo=strAffichageTempo+" ";
			compteur=0;
		}
	}
	for(let i=strAffichageTempo.length; i>0;i--){
		var chiffre=strAffichageTempo.substring(i-1, i);
		strAffichage=strAffichage+chiffre;
	}
	
	shroom=shroom+(ShroomParSec/10);
	$("#affichage").val(strAffichage);
	$("#parSec").val(Math.round(ShroomParSec*100)/100+" Shrooms/S");
	$("#parClic").val(Math.round(ShroomParClic*100)/100+" Shrooms/Click");


	/*TRANSFORMATIONS ET DEBLOCAGE CHAMPIONS/ITEMS*/
	if(teemo>=666){
		$("#teemoB").css("background-image", "url(./images/teemo2.jpg)");
		$("#prixTeemo").val("prix: 666 shrooms");
		$("#effTeemo").val("0.5 shrooms/s");
		effetTeemo=0.5;
		prixTeemo=666;
		$("#teemoB").css("background-size", "100%");
	}
	else{
		$("#prixTeemo").val("prix: 100 shrooms");
		$("#effTeemo").val("0.1 shroom/s");
	}

	if(thresh>0 || lanterne==1){
		$("#Lanterne").show();
	}

	if(maokai>0 || arbrisseau>=1){
		$("#Arbrisseau").show();
	}

	if(aphelios>0){
		$("#Calibrum").show();
		$("#Severum").show();
		$("#Gravitum").show();
		$("#Infernum").show();
		$("#Crescendum").show();
	}

	if(viktor>0){
		$("#HexCore").show();
	}

	if(hexcore==1){
		$("#HexCoreB").css("background-image", "url(./images/hexcore2.png)");
		$("#nomHexCore").css("color", "#edcc82");
		$("#prixHexCore").css("color", "#edcc82");
		$("#effHexCore").css("color", "#edcc82");
		$("#achatHexCore").css("color", "#edcc82");
		$("#prixHexCore").val("prix: 1 000 000 shrooms");
	}
	else if(hexcore==2){
		$("#HexCoreB").css("background-image", "url(./images/hexcore3.png)");
		$("#nomHexCore").css("color", "#48abf7");
		$("#prixHexCore").css("color", "#48abf7");
		$("#effHexCore").css("color", "#48abf7");
		$("#achatHexCore").css("color", "#48abf7");
		$("#prixHexCore").val("prix: 1 000 000 shrooms");
	}
	else if(hexcore==3){
		$("#HexCoreB").css("background-image", "url(./images/hexcore4.png)");
		$("#nomHexCore").css("color", "#cd4627");
		$("#prixHexCore").css("color", "#cd4627");
		$("#effHexCore").css("color", "#cd4627");
		$("#achatHexCore").css("color", "#cd4627");
		$("#prixHexCore").val("prix: 1 000 000 shrooms");
	}
	else if(hexcore==4){
		$("#HexCoreB").css("background-image", "url(./images/hexcore5.png)");
		$("#nomHexCore").css("color", "#cd4627");
		$("#prixHexCore").css("color", "#cd4627");
		$("#effHexCore").css("color", "#cd4627");
		$("#achatHexCore").css("color", "#cd4627");
		$("#prixHexCore").val("prix: 1 000 000 shrooms");
	}
	
	/*LIMITES D'ITEMS*/


	if(cull==1 && stackCull<1500){
		$("#CullB").attr("disabled", true);
		$("#stackCull").val(stackCull+"/1500");
	}
	else if(cull==0){
		$("#CullB").attr("disabled", false);
		$("#stackCull").val("");
	}

	if(cull==1 && stackCull>=1500){
		$("#CullB").css("background-image", "url(./images/cull2.png)");
		$("#CullB").attr("disabled", true);
		$("#stackCull").val("Stackée");
	}



	if(pink==2){
		$("#PinkB").css("background-image", "url(./images/pink2.png)");
		$("#PinkB").attr("disabled", true);
	}
	else{
		$("#PinkB").attr("disabled", false);
	}



	if(oracle==1){
		$("#OracleB").css("background-image", "url(./images/oracle2.png)");
		$("#OracleB").attr("disabled", true);
	}
	else{
		$("#OracleB").attr("disabled", false);
	}




	if(dague==3){
		$("#Dague").hide();
		$("#Runaan").show();
		runaan=1;
		runaanClick=1.5;
		runaanSec=0.075;
		
	}
	else{
		runaan=0;
		runaanClick=0;
		runaanSec=0;
	}
	
	if(guinsoo==1){
		$("#GuinsooB").attr("disabled", true);
	}
	else{
		$("#GuinsooB").attr("disabled", false);
	}

	if(mejai==1 && stackMejai<2000){
		$("#MejaiB").attr("disabled", true);
		$("#stackMejai").val(stackMejai+"/2000");
	}
	else if(mejai==0){
		$("#MejaiB").attr("disabled", false);
		$("#stackMejai").val("");
	}

	if(mejai==1 && stackMejai>=2000){
		$("#MejaiB").css("background-image", "url(./images/mejai2.png)");
		$("#MejaiB").attr("disabled", true);
		
	}

	if(statikk==1){
		$("#StatikkB").attr("disabled", true);
		$("#stackStatikk").val(stackStatikk+"/200");
	}
	else if(statikk==0){
		$("#StatikkB").attr("disabled", false);
		$("#stackStatikk").val("");
	}


	


	if(lanterne==1){
		$("#LanterneB").css("background-image", "url(./images/lanterne2.png)");
		$("#LanterneB").attr("disabled", true);
		$("#senna").show();

	}
	else{
		$("#LanterneB").attr("disabled", false);
	}


	if(arbrisseau==3){
		$("#ArbrisseauB").css("background-image", "url(./images/arbrisseau2.png)");
		$("#ArbrisseauB").attr("disabled", true);
	}
	else{
		$("#ArbrisseauB").attr("disabled", false);
	}

	if(calibrum==1){
		$("#CalibrumB").attr("disabled", true);
	}
	else{
		$("#CalibrumB").attr("disabled", false);
	}

	if(severum==1){
		$("#SeverumB").attr("disabled", true);
	}
	else{
		$("#SeverumB").attr("disabled", false);
	}

	if(gravitum==1){
		$("#GravitumB").attr("disabled", true);
	}
	else{
		$("#GravitumB").attr("disabled", false);
	}

	if(infernum==1){
		$("#InfernumB").attr("disabled", true);
	}
	else{
		$("#InfernumB").attr("disabled", false);
	}

	if(crescendum==1){
		$("#CrescendumB").attr("disabled", true);
	}
	else{
		$("#CrescendumB").attr("disabled", false);
	}

	if(hexcore==4){
		$("#HexCoreB").attr("disabled", true);
		
	}
	else{
		$("#HexCoreB").attr("disabled", false);
	}

	if(luden==1){
		$("#LudenB").attr("disabled", true);
		$("#stackLuden").val(stackLuden+"/180");
	}
	else if(luden==0){
		$("#LudenB").attr("disabled", false);
		$("#stackLuden").val("");
	}

	if(luden==1 && stackLuden>=180){
		
		shroom=shroom+(shroom*0.15);
		var sonBouton=new Audio("Son/luden.mp3");
		sonBouton.volume=1;
		sonBouton.play();
		stackLuden=0;
	}

	if(tear==1 && stackTear<2500){
		$("#TearB").attr("disabled", true);
		$("#stackTear").val(stackTear+"/2500");
	}
	else if(tear==0){
		$("#TearB").attr("disabled", false);
		$("#stackTear").val("");
	}

	if(tear==1 && stackTear>=2500){
		$("#TearB").attr("disabled", false);
		$("#Tear").hide();
	}



	if(manamune==1 && stackManamune<5000){
		$("#Manamune").show();
		$("#stackManamune").val(stackManamune+"/5000");
	}
	else if(manamune==0){
		$("#stackManamune").val("");
		$("#Manamune").hide();
	}

	if(manamune==1 && stackManamune>=5000){
		$("#Manamune").hide();
	}

	if(muramana==1){
		$("#Muramana").show();
	}
	else{
		$("#Muramana").hide();
	}

	if(timerGuinsoo>=5){
		effetGuinsoo=0;
		timerGuinsoo=0;
	}


	

	


	
}, 100);

	

setInterval(function(){    
	
	timerGuinsoo=timerGuinsoo+1;
	if(luden==1){
		stackLuden=stackLuden+1;
	}
	

}, 1000);