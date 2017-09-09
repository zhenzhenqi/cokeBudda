#pragma strict

var rotationOffset : Vector3 = Vector3.zero;
var	rotationAnimationRate : Vector3 = new Vector3( 2.0f, 0, 0);

function Start () {
}

function Update () {
	rotationOffset = rotationAnimationRate * Time.deltaTime;
	Debug.Log(rotationOffset);

	transform.Rotate(rotationOffset);

     
    if(transform.rotation.eulerAngles.x > 3 || transform.rotation.eulerAngles.x < 0){
         rotationAnimationRate *= -1;
         Debug.Log("reversed rotation dir");
    }
	
}

