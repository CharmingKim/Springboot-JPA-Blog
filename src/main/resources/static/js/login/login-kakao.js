/*
Kakao.init('e0392bfcdeefe000f0ed8349d7f0e217'); // 사용하려는 앱의 JavaScript 키 입력


 function loginWithKakao() {

    console.log("dkdkdkdk");

    Kakao.Auth.authorize({
      redirectUri: redirectUri,
    });
  }
*/

document.getElementById('kakao-login').addEventListener('click', function() {
    // 버튼 클릭 시 호출되는 함수
    // 원하는 URI로 변경합니다.
    const REST_API_KEY = '450b7175c9117f1e72450bf9fae68154';
    const REDIRECT_URI = 'http://127.0.0.1:8080/login/kakao-login';

    //백틱안의 //는 주석으로 취급되지않음
    const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;



    // URI 변경
    window.location.href = KAKAO_URI;
  });