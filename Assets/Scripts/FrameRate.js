#pragma strict

var guiStyle : GUIStyle;

private var fps : float;

function Awake () {
    Application.targetFrameRate = 60;
}

function Start () {
    while (true) {
        var time = 0.0;
        for (var i = 0; i < 10; ++i) {
            time += Time.deltaTime;
            yield;
        }
        fps = 10.0 / time;
    }
}

function OnGUI () {
    GUI.Label(Rect(0, 0, Screen.width, Screen.height), fps.ToString("F1"), guiStyle);
}
