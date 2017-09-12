module core {
	export class BaseModule {
		protected name:string = "base_module";
		
		public constructor(name:string="") {
			this.name = name;
			ModuleMgr.Instance.registerModule(this.name, this);
		}

		public start(){

		}

		public destroy(){

		}
	}
}