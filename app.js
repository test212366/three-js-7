 
 

 
// import fragmentShader from './shaders/fragment.glsl'
// import vertexShader from './shaders/vertex.glsl'

let OrbitControls = require('three-orbit-controls')(THREE)

export default class Sketch {
	constructor() {

		this.renderer = new THREE.WebGLRenderer( { antialias: true } )
		this.renderer.setSize( window.innerWidth, window.innerHeight )

		document.getElementById('container').appendChild( this.renderer.domElement )




		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 )
		this.camera.position.z = 1
		
		this.scene = new THREE.Scene()

		this.controls = new OrbitControls(this.camera, this.renderer.domElement);



		this.addMesh()

		this.time = 0
		this.render()
	}



	addMesh() {
 

		// this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 )
		this.material = new THREE.PointCloudMaterial({
			size: 10,
			vertexColors: THREE.VertexColors
		})
		this.geometry = new THREE.BufferGeometry()

		var x, y, z

		for( var i = 0; i <= 1; i++) {
			x = 0
			y = 0
			z = 0
			//console.log(this.geometry)
			this.geometry.vertices.push(new THREE.Vector3(x,y, z))
			this.geometry.colors.push(new THREE.Color(Math.random(),Math.random(),Math.random()))
		}
		
		this.pointCloud = new THREE.PointCloud( this.geometry, this.material )
		this.scene.add( this.pointCloud )
	}


	render() {
		this.time++
		this.pointCloud.rotation.x += 0.01
 
		this.renderer.render( this.scene, this.camera )
		window.requestAnimationFrame(this.render.bind(this))
	}
 
}
new Sketch()
 