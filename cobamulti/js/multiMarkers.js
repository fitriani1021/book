var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		var markers=["adigang", "agamapelacur", "algoritma", "americanpolitic", "amgov", "analisissurvival", "ananda", "antropologi", "antropologibudaya", "bali", "barcode", "bercerita", "berjalan", "bisnisquran", "c2013", "casespolitic", "cisco", "citradigital", "cloning", "commonlink", "cooplearning", "dasarpolitik", "databaseprocessing", "databasepros", "dinamikafiskal", "ekonometri", "ekonometrika", "ekonometrikamanajemen", "ekonomibisnis", "essenspolitic", "filosofi", "firewall", "fuzzy", "gamemaker", "gospelwater", "harddisk", "hardwarepc", "humandevelop", "ilmupolitik", "ilmusosial", "ITdirs", "jalanparadoks", "jepangmatamata", "kendalikualitas", "konfliketnis", "kongresbudaya", "landscapebank", "leadership", "librarycatalog", "logiccontroller"];

		for(var i=0; i<markers.length; i++)
		{
			var url="../custom markers/pattern-"+markers[i]+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		for(var k in markers)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding plane to each marker
			var planeEl = document.createElement('a-plane');
			planeEl.setAttribute('color', 'cyan');        
			planeEl.object3D.scale.set(1, 1.5, 1);
			planeEl.object3D.position.set(0, 0, 0);
			planeEl.object3D.rotation.set(-90, 0, 0);

			markerEl.appendChild(planeEl);

			//adding text to plane
			var text1El = document.createElement('a-text');
			text1El.setAttribute('value', 'title');
			text1El.setAttribute('anchor', 'center');
			text1El.setAttribute('align', 'center');
			text1El.setAttribute('color', 'black');          
			text1El.object3D.scale.set(0.19, 0.19, 0.19);
			text1El.object3D.position.set(0, 2, 0.2);
			text1El.object3D.rotation.set(-90, 0, 0);

			planeEl.appendChild(text1El);
		}
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});