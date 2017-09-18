class GlobalConfig {
	public static ScreenWidth:number = 0;
	public static ScreenHeight:number = 0;
	public static isH5:boolean = true;
	public static Version:string = "0";
	public static setup(width:number, height:number, h5:boolean, version:string){
		GlobalConfig.ScreenWidth = width;
		GlobalConfig.ScreenHeight = height;
		GlobalConfig.isH5 = h5;
		GlobalConfig.Version = version;
	}
}