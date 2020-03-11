var panelContainer = document.getElementById("panelContainer");
var panel1 = document.getElementById("panel1");


function resetPanels(panels) {
	panels.forEach(function(panel) {
		panel.style.zIndex = 0;
  	panel.style.left = '-100%';
  });
}

function expandPanel(panel) {
	panel.style.zIndex = 1;
	panel.style.left = 0;
}

document.getElementById("expand1").addEventListener("click", function() {
	expandPanel(panel1);
});
