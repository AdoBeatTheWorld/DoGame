declare module core {
    class BaseModule {
        protected name: string;
        constructor(name?: string);
        start(): void;
        destroy(): void;
    }
}
declare module core {
    class ModuleMgr {
        constructor();
        loadModule(name: string): void;
        registerModule(name: string, module: BaseModule): void;
        startModule(name: string): void;
        destroyModule(name: string): void;
        private static _instance;
        static readonly Instance: ModuleMgr;
    }
}
