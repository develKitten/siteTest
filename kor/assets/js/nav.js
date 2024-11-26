/***************************************************** 
 
            스크롤 관련 JavaScript 코드 

******************************************************/
function updateNavbarStyle() {
    const header = document.getElementById("_header");
    const lang = document.getElementById("lang-button");
    const logo = document.querySelector(".logo");

    if (window.innerWidth >= 1300) {
        // PC 화면 - 스크롤에 따라 스타일 변경
        if (window.scrollY > 50) {
            lang.classList.add("scrolled");
            header.classList.add("scrolled");
            logo.src = "/kor/assets/img/logo/semisol_logo.png"; // 스크롤 시 로고 변경
        } else {
            lang.classList.remove("scrolled");
            header.classList.remove("scrolled");
            logo.src = "/kor/assets/img/logo/semisol_logo_white.png"; // 기본 로고
        }
    } else {
        // 모바일 및 태블릿 화면 - 항상 흰색 배경과 특정 로고 유지
        header.classList.add("scrolled");
        lang.classList.add("scrolled");
        logo.src = "/kor/assets/img/logo/semisol_logo.png";
    }
}

// 페이지가 로드될 때 초기 상태 설정
window.addEventListener("DOMContentLoaded", updateNavbarStyle);

// 스크롤 시에도 상태 업데이트
window.addEventListener("scroll", updateNavbarStyle);

// 창 크기 변경 시 상태 업데이트
window.addEventListener("resize", updateNavbarStyle);


/***************************************************** 
 
            햄버거 바

******************************************************/

const hamburgerButton = document.getElementById('hamburger-button');
const slideMenu = document.getElementById('slide-menu');
const closeButton = document.getElementById('close-button');
const menuItems = document.querySelectorAll('.menu-item');

// 햄버거 버튼 클릭 시 슬라이드 메뉴 열기
hamburgerButton.addEventListener('click', () => {
    slideMenu.classList.add('open');
});

// 닫기 버튼 클릭 시 슬라이드 메뉴 닫기
closeButton.addEventListener('click', () => {
    slideMenu.classList.remove('open');
});

// 메뉴 아이템 클릭 시 하위 메뉴 토글
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.nextElementSibling;
        
        // 다른 서브메뉴를 닫고 현재 서브메뉴를 토글
        document.querySelectorAll('.submenu').forEach(sm => {
            if (sm !== submenu) {
                sm.style.display = 'none';
                sm.previousElementSibling.classList.remove('active');
            }
        });
        
        // 서브메뉴 토글
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        item.classList.toggle('active');
    });
});


/***************************************************** 
 
            경로 동적 변경

******************************************************/

// 언어 전환 버튼들에 이벤트 리스너 등록
const langButtons = document.querySelectorAll('#korButton, #engButton, #korLink, #engLink');
langButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetLang = event.target.id.includes('kor') ? 'kor' : 'eng';
        switchLanguage(targetLang);
    });
});

// 언어 경로 변경 함수
function switchLanguage(targetLang) {
    const currentUrl = window.location.pathname;
    const pathParts = currentUrl.split('/');

    // 언어 경로 변경
    if (pathParts[1] === 'kor' || pathParts[1] === 'eng') {
        pathParts[1] = targetLang; 
    } else {
        pathParts.splice(1, 0, targetLang);
    }

    const newPath = pathParts.join('/');
    const newUrl = `${window.location.origin}${newPath}`; 
    window.location.href = newUrl; 
}