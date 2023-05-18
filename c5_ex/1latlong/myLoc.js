/* myLoc.js */
window.onload = getMyLocation;

//추가1
//브라우저가 페이지를 로드하자마자 getMyLocation 함수를 호출
function getMyLocation() { 
    //브라우저가 지오로케이션 API를 지원하는지 여부를 검사하는 부분
     if (navigator.geolocation) { 
    //getCurrentPosition메서드를 호출해서 displayLocation이란 핸들러 함수를 전달
     navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    //displayLocation 함수는 간단하게 위치를 가져오는 핸드러 함수
    //errorHandler역시 함수인데 뭔가 문제가 있거나 브라우저가 위치를 결정 못할 때 호출
     }
     else {
     alert("이런, 지오로케이션이 제공되지 않네요");
     }
    }

//추가2
function displayLocation(position) {//브라우저가 위치정보를 가져올 때 호출
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
   //position.coords객체로부터 위도와 경도 정보를 받는다. var div = document.getElementById("location");
    var div = document.getElementById("location");
    div.innerHTML = "당신은 위도: " + latitude + ", 경도: " + longitude + "에 있습니다."; 
   //innerHTML로 여러분의 위치 정보를 <div>에 설정
   }
//추가3
function displayError(error) {//지오로케이션 API로부터 에러를 전달받음
    //error.code 속성을 사용해서 errorMessage란 새로운 변수에 문자열 중 하나를 할당
     var errorTypes = {
    //0에서 3까지 네개의 속성을 가진 객체를 생성, 에러 메세지와 숫자 코드 값을 연결
     0: "알려지지 않은 에러", 1: "사용자가 권한 거부", 2: "위치를 찾을 수 없음", 3: "요청 응답 시간 초과"
     };
     var errorMessage = errorTypes[error.code];
     if (error.code == 0 || error.code == 2) {
     errorMessage = errorMessage + " " + error.message;
     }
     var div = document.getElementById("location");
     div.innerHTML = errorMessage; //페이지에 메시지를 추가
    }
