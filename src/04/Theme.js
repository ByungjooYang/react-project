//프로젝트 전체에서 사용할 스타일 파일

export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
    LARGE  : 'large', //데스크톱 기본 해상도
    MEDIUM : 'medium', // 태블릿 특화
    SMALL  : 'small', //모바일 기기 특화
}

const breakpoints = {
    [BREAKPOINT_NAMES.LARGE]  : 1128,
    [BREAKPOINT_NAMES.MEDIUM] : 744,
    [BREAKPOINT_NAMES.SMALL]  : 327,
};

const responsive = {
    [LARGE_AND_ABOVE] : `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
    [BREAKPOINT_NAMES.SMALL] : `@media (max-width:${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
    print : '@media print',
};

export default {
    //색상
    color : {
        primary        : '#03a9f4',
        colorSecondary : '#795548',
        white          : '#FFFFFF',
        gray           : '#CCCCCC',
        default        : '#999999',
    },
    //글꼴 크기
    size: {
        xg: 24,
        lg: 18,
        md: 14,
        sm: 12,
        xs: 10,
    },
    lineHeight: {
        xg: '60px',
        lg: '54px',
        md: '36px',
        sm: '24px',
        xs: '18px',
    },
    //길이단위
    unit: 4,
    //반응형 미디어 속성
    responsive,
};
