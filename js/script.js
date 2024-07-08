document.addEventListener("DOMContentLoaded", function() {
    // 상단바 버튼 동적 생성
    const topBarButtons = [
        { icon: "./img/icon2.png", alt: "알림", text: "" }, // 알림 버튼 정보
        { icon: "", alt: "", text: "마이페이지", link: "mypage.html" }, // 마이페이지 버튼 정보
        { icon: "", alt: "", text: "장바구니", link: "cart.html" }, // 장바구니 버튼 정보
        { icon: "", alt: "", text: "로그인", link: "login.html" } // 로그인 버튼 정보
    ];

    // 상단바 버튼을 담을 컨테이너 요소 가져오기
    const topBarButtonsContainer = document.getElementById("top-bar-buttons");

    // 각 버튼 정보에 따라 버튼을 생성하고 상단바에 추가
    topBarButtons.forEach(button => {
        const btn = document.createElement("button"); // 버튼 요소 생성
        if (button.icon) { // 아이콘이 있는 경우
            const img = document.createElement("img"); // 이미지 요소 생성
            img.src = button.icon; // 이미지 소스 설정
            img.alt = button.alt; // 이미지 대체 텍스트 설정
            img.className = "icon"; // 이미지 클래스 설정
            btn.appendChild(img); // 버튼에 이미지 추가
        }
        if (button.text) { // 텍스트가 있는 경우
            btn.textContent = button.text; // 버튼 텍스트 설정
        }
        if (button.link) { // 링크가 있는 경우
            btn.addEventListener("click", () => { // 클릭 이벤트 추가
                window.location.href = button.link; // 해당 링크로 이동
            });
        }
        topBarButtonsContainer.appendChild(btn); // 상단바 컨테이너에 버튼 추가
    });

    // 메뉴바 버튼 동적 생성
    const menuBarButtons = ["인기순", "고가순", "저가순", "최신순"]; // 메뉴바 버튼 목록
    const menuBarContainer = document.getElementById("menu-bar"); // 메뉴바 컨테이너 요소 가져오기
    menuBarButtons.forEach((button, index) => {
        const btn = document.createElement("button"); // 버튼 요소 생성
        btn.textContent = button; // 버튼 텍스트 설정
        menuBarContainer.appendChild(btn); // 메뉴바 컨테이너에 버튼 추가
        if (index < menuBarButtons.length - 1) { // 마지막 버튼이 아닌 경우
            const separator = document.createElement("span"); // 구분선 요소 생성
            separator.textContent = "|"; // 구분선 텍스트 설정
            menuBarContainer.appendChild(separator); // 메뉴바 컨테이너에 구분선 추가
        }
    });

    // 카테고리 버튼 동적 생성
    const categories = ["전체보기", "상의", "하의", "신발", "모자", "기타"]; // 카테고리 목록
    const categoryContainer = document.getElementById("category"); // 카테고리 컨테이너 요소 가져오기
    categories.forEach(category => {
        const btn = document.createElement("button"); // 버튼 요소 생성
        btn.textContent = category; // 버튼 텍스트 설정
        categoryContainer.appendChild(btn); // 카테고리 컨테이너에 버튼 추가
    });

    // 상품 카드 동적 생성
    const products = [
        { img: "item.jpg", name: "상품 이름1", price: "상품 가격1", time: "몇 시간 전 업로드1?" },
        { img: "item.jpg", name: "상품 이름2", price: "상품 가격2", time: "몇 시간 전 업로드2?" },
        { img: "item.jpg", name: "상품 이름3", price: "상품 가격3", time: "몇 시간 전 업로드3?" },
        { img: "item.jpg", name: "상품 이름4", price: "상품 가격4", time: "몇 시간 전 업로드4?" },
        { img: "item.jpg", name: "상품 이름5", price: "상품 가격5", time: "몇 시간 전 업로드5?" },
        { img: "item.jpg", name: "상품 이름6", price: "상품 가격6", time: "몇 시간 전 업로드6?" },
        { img: "item.jpg", name: "상품 이름7", price: "상품 가격7", time: "몇 시간 전 업로드7?" },
        { img: "item.jpg", name: "상품 이름8", price: "상품 가격8", time: "몇 시간 전 업로드8?" }
    ];

    const cardsContainer = document.getElementById("cards"); // 상품 카드를 담을 컨테이너 요소 가져오기
    products.forEach(product => {
        const card = document.createElement("div"); // 카드 요소 생성
        card.className = "card"; // 카드 클래스 설정

        const img = document.createElement("img"); // 이미지 요소 생성
        img.src = product.img; // 이미지 소스 설정
        img.alt = "상품 사진"; // 이미지 대체 텍스트 설정
        img.className = "card-image"; // 이미지 클래스 설정

        const cardDetails = document.createElement("div"); // 카드 상세 정보 요소 생성
        cardDetails.className = "card-details"; // 카드 상세 정보 클래스 설정

        const cardName = document.createElement("div"); // 카드 이름 요소 생성
        cardName.className = "card-name"; // 카드 이름 클래스 설정
        cardName.textContent = product.name; // 카드 이름 텍스트 설정

        const cardInfo = document.createElement("div"); // 카드 정보 요소 생성
        cardInfo.className = "card-info"; // 카드 정보 클래스 설정

        const cardPrice = document.createElement("span"); // 카드 가격 요소 생성
        cardPrice.className = "card-price"; // 카드 가격 클래스 설정
        cardPrice.textContent = product.price; // 카드 가격 텍스트 설정

        const cardTime = document.createElement("span"); // 카드 업로드 시간 요소 생성
        cardTime.className = "card-time"; // 카드 업로드 시간 클래스 설정
        cardTime.textContent = product.time; // 카드 업로드 시간 텍스트 설정

        cardInfo.appendChild(cardPrice); // 카드 정보에 카드 가격 추가
        cardInfo.appendChild(cardTime); // 카드 정보에 카드 업로드 시간 추가
        cardDetails.appendChild(cardName); // 카드 상세 정보에 카드 이름 추가
        cardDetails.appendChild(cardInfo); // 카드 상세 정보에 카드 정보 추가
        card.appendChild(img); // 카드에 이미지 추가
        card.appendChild(cardDetails); // 카드에 카드 상세 정보 추가
        cardsContainer.appendChild(card); // 카드 컨테이너에 카드 추가
    });

    // 페이지네이션 동적 생성
    const totalPages = 9; // 총 페이지 수
    const paginationContainer = document.getElementById("pagination"); // 페이지네이션 컨테이너 요소 가져오기
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button"); // 페이지 버튼 요소 생성
        btn.textContent = i; // 페이지 버튼 텍스트 설정
        paginationContainer.appendChild(btn); // 페이지네이션 컨테이너에 페이지 버튼 추가
    }
});



document.addEventListener("DOMContentLoaded", function() {
    // 카카오 로그인 초기화
    Kakao.init('abc123'); // 카카오 앱 키를 입력하세요.

    document.getElementById('kakao-login-btn').addEventListener('click', function() {
        Kakao.Auth.login({
            success: function(authObj) {
                console.log(authObj);
                // 로그인 성공 후 처리할 코드
            },
            fail: function(err) {
                console.error(err);
            }
        });
    });

    // 페이스북 SDK 초기화
    window.fbAsyncInit = function() {
        FB.init({
            appId: '1234567890', // 페이스북 앱 ID를 입력하세요.
            cookie: true,
            xfbml: true,
            version: 'v11.0'
        });

        document.getElementById('facebook-login-btn').addEventListener('click', function() {
            FB.login(function(response) {
                if (response.status === 'connected') {
                    console.log('Logged in.');
                    // 로그인 성공 후 처리할 코드
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, {scope: 'public_profile,email'}); // 필요한 권한 추가
        });
    };

    // 네이버 로그인 초기화 및 버튼 이벤트
    var naverLogin = new naver.LoginWithNaverId({
        clientId: "naverClientId123", // 네이버 클라이언트 ID를 입력하세요.
        callbackUrl: "https://example.com/callback", // 네이버 콜백 URL을 입력하세요.
        isPopup: true, // 팝업 여부 설정
        loginButton: {color: "green", type: 3, height: 40}
    });

    naverLogin.init();

    document.getElementById('naver-login-btn').addEventListener('click', function() {
        naverLogin.authorize(); // 네이버 로그인 인증 요청
    });
});


//회원가입 관련
document.addEventListener("DOMContentLoaded", function() {
    // 여기서 필요에 따라 추가 스크립트를 작성
});
