      // inclucde file to eBookSimMain 
      // define Starter.js exports to sandbox like this: kbook.autoRunRoot.sandbox.Titel = "anything"; in Sim omit sandbox 
      this.bubble("tracelog","setView "+app);	

      /* exports for all apps*/
      kbook.autoRunRoot.getSoValue = _Core.system.getSoValue;
      kbook.autoRunRoot.hasNumericButtons = _Core.config.compat.hasNumericButtons;
      kbook.autoRunRoot.gamesSavePath = _Core.config.userGamesSavePath;			

      	switch (app) {		
      	 case "Calc" : {
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("CALC",0);
      					kbook.autoRunRoot.L = _Core.lang.getLocalizer("Calc");
						kbook.autoRunRoot._title = "Calculator";
      					//this.bubble("tracelog","setURI");
      					this.MAIN.EINK.VIEW.setURI("../addons/Calc/calculator.xml");
      					break;
      					}	
      	 case "Dict" : {
      					//kbook.autoRunRoot.exec = _Core.shell.exec;
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
      					kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					kbook.autoRunRoot.maxSmartZoom = 20; 	//DictionaryCL.options.maxSmartZoom;
      					kbook.autoRunRoot.resultSize = 25; 		//DictionaryCL.options.resultSize;
      					kbook.autoRunRoot.dictPath = dictPath;
      					this.MAIN.EINK.VIEW.setURI("../addons/DictionaryCL/dictionary.xml");				
      					break;
      					}	
      	 case "Fiveballs" : {
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("FIVEBALLS",0);
      					kbook.autoRunRoot._title = "FiveBalls";				
      	 				kbook.autoRunRoot.hasNumericButtons = _Core.config.compat.hasNumericButtons;
      					this.MAIN.EINK.VIEW.setURI("../addons/Fiveballs/fiveballs.xml");				
      					break;
      					}	
      	 case "Mahjong" : {
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("MAHJONG",0);
      					kbook.autoRunRoot._title = "MahJonG";		
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
      					this.MAIN.EINK.VIEW.setURI("../addons/Mahjong/mahjong.xml");				
      					break;
      					}	
      	 case "Sudoku" : {
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("SUDOKU",0);
      					kbook.autoRunRoot._title = "Sudoku";				
      	 				kbook.autoRunRoot.hasNumericButtons = _Core.config.compat.hasNumericButtons;
      					this.MAIN.EINK.VIEW.setURI("../addons/Sudoku/sudoku.xml");				
      					break;
      					}	
      	 case "xDicto" : {
      					this.MAIN.EINK.VIEW.setURI("../addons/xDictionaryCL/kb.xml");				
      					break;
      					}									
      	 case "Chess" : {
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("CHESS",0);
      					kbook.autoRunRoot._title = "Schach";
						kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					this.MAIN.EINK.VIEW.setURI("../addons/Chess/chess.xml");				
      					break;
      					}
      	 case "Dame" : {		kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("DRAUGHTS",0);
      					kbook.autoRunRoot._title = "Dame";				
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
      					this.MAIN.EINK.VIEW.setURI("../addons/Draughts/draughts.xml");				
      					break;
      					}
      	 case "TestApp" : {
      					this.MAIN.EINK.VIEW.setURI("../addons/TestApp/TestApp.xml");				
      					break;
      					}											
      	 case "Fiverow" : {
					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("FIVEROW",0);
      					kbook.autoRunRoot._title = "Fünfgewinnt";				
      					this.MAIN.EINK.VIEW.setURI("../addons/Fiverow/fiverow.xml");				
      					break;
      					}				
      	case "Freecell" : {
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("CARDS",0);
      					kbook.autoRunRoot._title = "Free Cell";				
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
      					this.MAIN.EINK.VIEW.setURI("../addons/Freecell/freecell.xml");				
      					break;
      					}				
      	case "MineSweeper" : {
      					this.bubble("tracelog","MineSweeper");
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("BOMB",0);
      					kbook.autoRunRoot._title = "MineSweeper";				
      					kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
      					this.MAIN.EINK.VIEW.setURI("../addons/MineSweeper/minesweeper.xml");				
      					break;
      					}
      	case "Spider" : {
      					this.bubble("tracelog","Spider ");
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("CARDS",0);
      					kbook.autoRunRoot._title = "SpiderSoilitaire";				
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
      					this.MAIN.EINK.VIEW.setURI("../addons/SpiderSolitaire/spider.xml");				
      					break;
      					}
      	 case "XOCubed" : {
      				 	kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("FIVEROW",0);
      					kbook.autoRunRoot._title = "XO-Cubed";				
      					this.MAIN.EINK.VIEW.setURI("../addons/XOCubed/xocubed.xml");				
      					break;
      					}	
      	 case "Menu" : {
      					this.bubble("tracelog","Menu ");
      					this.MAIN.EINK.VIEW.setURI("SimMenu.xml");	
      					break;
      					}										
      	 case "Menu2": {
      					this.bubble("tracelog","Menu2 ");
      					this.MAIN.EINK.VIEW.setURI("SimMenu2.xml");	
      					break;
      					}
      	 case "Calendar" : {		
      	 				var L = _Core.lang.getLocalizer("Calendar");
      					kbook.autoRunRoot._icon = 22;
      					kbook.autoRunRoot._title = L("TITLE");				
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
						kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					kbook.autoRunRoot.startsWith = _Core.text.startsWith;
      					kbook.autoRunRoot.L = L;
						kbook.autoRunRoot.model = _Core.config.model;

      					this.MAIN.EINK.VIEW.setURI("../addons/Calendar/calendar.xml");				
      					break;
      					}
      	 case "Calendar_nt" : {		
      	 				var L = _Core.lang.getLocalizer("Calendar");
      					kbook.autoRunRoot._icon = 22;
      					kbook.autoRunRoot._title = L("TITLE");				
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
						kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					kbook.autoRunRoot.startsWith = _Core.text.startsWith;
      					kbook.autoRunRoot.L = L;
						kbook.autoRunRoot.model = _Core.config.model;

      					this.MAIN.EINK.VIEW.setURI("../addons/Calendar_nt/calendar.xml");				
      					break;
      					}
		case "Solitaire" : {
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("FIVEBALLS",0);
      					kbook.autoRunRoot._title = "Solitaire";
						kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;						
      	 				kbook.autoRunRoot.hasNumericButtons = _Core.config.compat.hasNumericButtons;
      					this.MAIN.EINK.VIEW.setURI("../addons/Solitaire/solitaire.xml");				
      					break;
      					}
      	 case "Frotz" : {		
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("GAME",0);
      					kbook.autoRunRoot._title = "Frotz";				
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
						kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					kbook.autoRunRoot.startsWith = _Core.text.startsWith;
						kbook.autoRunRoot.listFiles = _Core.io.listFiles;
      					this.MAIN.EINK.VIEW.setURI("../addons/Frotz/frotz.xml");				
      					break;
      					}
		case "StudyWord" : {
						var L = _Core.lang.getLocalizer("Calendar");
      					kbook.autoRunRoot._icon = 17;
      					kbook.autoRunRoot._title = "StudyWord";				
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
						kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					kbook.autoRunRoot.startsWith = _Core.text.startsWith;
      					kbook.autoRunRoot.L = L;
						kbook.autoRunRoot.model = _Core.config.model;

      					this.MAIN.EINK.VIEW.setURI("../addons/StudyWord/studyword.xml");				
      					break;
						}
      	case "CrossWord" : {
      					this.bubble("tracelog","CrossWord");
      					kbook.autoRunRoot._icon = _Core.config.compat.NodeKinds.getIcon("GAME",0);
      					kbook.autoRunRoot._title = "CrossWord";				
      					kbook.autoRunRoot.setSoValue = _Core.system.setSoValue;
      					kbook.autoRunRoot.getFileContent = _Core.io.getFileContent;
						kbook.autoRunRoot.listFiles = _Core.io.listFiles;
						this.bubble("tracelog","here");
      					this.MAIN.EINK.VIEW.setURI("../addons/CrossWord/crossword.xml");
						this.bubble("tracelog","after");
      					break;
      					}
      	}
