declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png' {
    const value: any;
    export = value;
}

declare module '*.png?as=webp' {
    const value: any;
    export = value;
}
