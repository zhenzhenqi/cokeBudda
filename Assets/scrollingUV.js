#pragma strict


var uvOffset : Vector2 = Vector2.zero;
var materialIndex : int = 0;
var uvAnimationRate : Vector2 = new Vector2( 0.0f, 0.1f );
var textureName : String = "_MKGlowTex";

function Start () {
	
	
}

 
 function Update () 
 {
     uvOffset += ( uvAnimationRate * Time.deltaTime );
     if( GetComponent(Renderer).enabled)
     {
         GetComponent(Renderer).materials[ materialIndex ].SetTextureOffset( textureName, uvOffset );
     }
 }