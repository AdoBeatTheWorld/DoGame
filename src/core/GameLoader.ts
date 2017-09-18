class GameLoader extends egret.HashObject{
	public constructor() {
		super();
	}
	//子游戏配置
	private config:any;
	private curGameName:string;
	private version:string;
	/**
	 * @param config resource/games.json
	 */
	public setup(){
		this.config = RES.getRes("games_json");
	}
	/**
	 * @name key in config,for load script
	 */
	public loadGame(name:string,callBack:Function){
		
	}
	/**
	 * 
	 */
	public unloadGame(){

	}

	private static _instance:GameLoader;
	public static get Instance():GameLoader{
		if( GameLoader._instance == null){
			GameLoader._instance = new GameLoader();
		}
		return GameLoader._instance;
	}
}