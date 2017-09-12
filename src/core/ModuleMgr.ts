module core {
	export class ModuleMgr {
		public constructor() {
			
		}
		public loadModule(name:string){

		}
		public registerModule(name:string,module:BaseModule){

		}
		public startModule(name:string){

		}
		public destroyModule(name:string){

		}
		private static _instance:ModuleMgr;
		public static get Instance():ModuleMgr{
			if( ModuleMgr._instance == null ){
				ModuleMgr._instance = new ModuleMgr();
			}
			return ModuleMgr._instance;
		}
	}
}