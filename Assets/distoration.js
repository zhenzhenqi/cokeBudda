#pragma strict

private var rend: Renderer;

function Start () {
	rend = GetComponent.<Renderer>();
	rend.material.shader = Shader.Find("VertDistorationSurfaceShader");
	print(rend.material.shader);
}

function Update () {
	var dist : float = Mathf.PingPong(Time.time, 10.0f);
//	print(dist);
    rend.material.SetFloat("_Distoration Intensity", dist);
}
