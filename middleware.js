import { NextResponse } from "next/server";

// next.config.mjs와 일치시킨 로케일 목록
const locales = ['en', 'ko'];

// 사용자의 선호 로케일 가져오기
function getLocale(request) {
  // 1. 쿠키에서 선호 로케일 확인
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }
  
  // 2. Accept-Language 헤더에서 선호 로케일 확인
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => locales.includes(lang) || locales.includes(lang.split('-')[0]));
      
    if (preferredLocale) {
      return preferredLocale.startsWith('ko') ? 'ko' : 'en';
    }
  }
  
  // 3. 기본값 반환
  return 'en';
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // 이미 로케일이 있는지 확인
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  
  // 로케일 없으면 리디렉션
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // _next, api, assets 등 제외
    '/((?!_next|api|assets|favicon.ico).*)',
  ],
};