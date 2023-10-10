import type { SwiperSlideProps, SwiperProps } from 'swiper/react';
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

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SwiperProps, HTMLElement>;
            'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SwiperSlideProps, HTMLElement>;
        }
    }
}
