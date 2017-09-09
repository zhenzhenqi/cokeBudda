using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class rotateX : MonoBehaviour {
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		float rot = Mathf.PingPong(Time.time, 8.0f);
		print (rot);
		transform.Rotate (rot, 0, 0);
	}
}
