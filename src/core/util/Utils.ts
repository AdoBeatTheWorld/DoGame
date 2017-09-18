class Utils {
	public static LoadJS(id:string, fileUrl:string, loaded:Function, loadErr:Function, obj=null){
		if (GlobalConfig.isH5) {
			let scriptTag = document.getElementById(id);
			let oHead = document.getElementsByTagName("HEAD").item(0);
			let oScript = document.createElement("script");
			if(scriptTag) oHead.removeChild(scriptTag);
			oScript.id = id;
			oScript.type = "text/javascript";
			oScript.src = fileUrl;
			oHead.appendChild(oScript);
			oScript.onerror = function() {
				null != loadErr && (obj ? loadErr.call(obj, id) : loadErr(id))
			};
			oScript.onload = oScript['onreadystatechange'] = function() {
				this.readyState && "loaded" != this.readyState && "complete" != this.readyState || null != loaded && (obj ? loaded.call(obj, id) : loaded(id))
			}
		} else {
			var js, RES = egret.getDefinitionByName("RES");
			RES && RES.getResByUrl(fileUrl,(data)=> {
				if(data == null){
					if( loadErr != null ){
						obj == null ? loadErr(id) : loadErr.call(obj, id);
					}
				}else{
					eval("require")(fileUrl);
					if( loaded != null){
						if( obj != null){
							loadErr.call(obj, id)
						}else{
							loaded(id);
						}
					}
				}
			},	this);
		}
	}
}