/* Name: MineSweeper game
   Original code (c) D. Shep Poor
   adapted for Sony PRS by Mark Nord
   Initial version: April 2011
*/

tmp = function() {
	var MineSweeper = {
		name: "MineSweeper",
		title: "MineSweeper,
		description: "Game",
		icon: "GAME",
		activate: function () {
		   try {
			kbook.autoRunRoot.sandbox.getSoValue = Core.system.getSoValue;
			kbook.autoRunRoot.sandbox.getFileContent = Core.io.getFileContent;
			kbook.autoRunRoot.sandbox.hasNumericButtons = Core.config.compat.hasNumericButtons;
			} catch (ignore) {}
			
			kbook.autoRunRoot.path = Core.config.addonsPath + "MineSweeper/minesweeper.xml";
			kbook.autoRunRoot.enterIf(kbook.model);
		},
		actions: [{
			name: "MineSweeper",
			group: "Games",
			icon: "GAME",
			action: function () {
				MineSweeper.activate();
			}
		}]
	};
	
	Core.addAddon(MineSweeper);
};
try {
	tmp();
} catch (e) {
	// Core's log
	log.error("in MineSweeper.js", e);
}