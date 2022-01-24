// 낮은 해상도의 PC, 태블릿 가로 : ~1024px
// 테블릿 가로 : 768px ~ 1023px
// 모바일 가로, 태블릿 : 480px ~ 767px
// 모바일 : ~ 480px

export const size = {
  mobile: 480,
  tablet: 767,
  desktop: 1024,
};

export const theme = {
  mobile: `(max-width: ${size.mobile - 1}px)`,
  tablet: `(min-width: ${size.mobile}px) and (max-width: ${
    size.desktop - 1
  }px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};
