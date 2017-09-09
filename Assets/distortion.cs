using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class distortion : MonoBehaviour {
	public Renderer rend;
	// Use this for initialization
	void Start () {
		rend = GetComponent<Renderer>();
		for (int i = 0; i < 2; i++) {
			rend.materials [i].shader = Shader.Find ("Custom/VertDistorationSurfaceShader");
		}
	}

	// Update is called once per frame
	void Update () {
		float dist = Mathf.PingPong(Time.time*5, 10.0F);
		for (int i = 0; i < 2; i++) {
			rend.materials [1].SetFloat ("_DistorationIntensity", dist);
		}
	}
}
