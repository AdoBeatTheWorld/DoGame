var core;
(function (core) {
    var BaseModule = (function () {
        function BaseModule(name) {
            if (name === void 0) { name = ""; }
            this.name = "base_module";
            this.name = name;
            core.ModuleMgr.Instance.registerModule(this.name, this);
        }
        BaseModule.prototype.start = function () {
        };
        BaseModule.prototype.destroy = function () {
        };
        return BaseModule;
    }());
    core.BaseModule = BaseModule;
})(core || (core = {}));
var core;
(function (core) {
    var ModuleMgr = (function () {
        function ModuleMgr() {
        }
        ModuleMgr.prototype.loadModule = function (name) {
        };
        ModuleMgr.prototype.registerModule = function (name, module) {
        };
        ModuleMgr.prototype.startModule = function (name) {
        };
        ModuleMgr.prototype.destroyModule = function (name) {
        };
        Object.defineProperty(ModuleMgr, "Instance", {
            get: function () {
                if (ModuleMgr._instance == null) {
                    ModuleMgr._instance = new ModuleMgr();
                }
                return ModuleMgr._instance;
            },
            enumerable: true,
            configurable: true
        });
        return ModuleMgr;
    }());
    core.ModuleMgr = ModuleMgr;
})(core || (core = {}));
