 const fadeInLeftElement = document.querySelector('.fade-in-left');
 const fadeInRightElement = document.querySelector('.fade-in-right');


    function fadeInLeft() {
      fadeInLeftElement.style.opacity = '1';
      fadeInLeftElement.style.transform = 'translateX(0)';
    }

    // 페이지가 로드된 후 애니메이션 실행
    window.addEventListener('load', () => {
      setTimeout(fadeInLeft, 100); // 100밀리초 후에 애니메이션 시작
    });

    function fadeInRight() {
          fadeInRightElement.style.opacity = '1';
          fadeInRightElement.style.transform = 'translate( 0 , -100%)';
        }

        // 페이지가 로드된 후 애니메이션 실행
        window.addEventListener('load', () => {
          setTimeout(fadeInRight, 700); // 100밀리초 후에 애니메이션 시작
        });