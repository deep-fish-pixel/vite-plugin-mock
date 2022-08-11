interface MockParams {
    dir?: string
    path?: string
}
declare function viteMock(config?: MockParams): { name: string, configureServer: (server: any) => any };

export default viteMock;

