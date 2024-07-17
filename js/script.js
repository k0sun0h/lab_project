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

// JavaScript로 클릭 이벤트 처리
//document.getElementById('myLink').addEventListener('click', function(event) {
  //  event.preventDefault(); // 기본 동작 방지 (필요에 따라 제거 가능)
    //this.classList.add('clicked'); // 클릭된 상태로 설정
//});

//document.getElementById('passwordForm').addEventListener('submit', function(event) {
//    event.preventDefault();
 //   const password = document.getElementById('password').value;
   // const correctPassword = '1234'; // 실제로는 서버에서 검증해야 합니다.

//    if (password === correctPassword) {
  //      window.location.href = 'personal_info.html';
  //  } else {
   //     document.getElementById('errorMessage').style.display = 'block';
   // }
//});

        function openTab(event, tabId) {
            var i, tabcontent, tablinks;

            // Hide all tab content
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Remove active class from all tabs
            tablinks = document.getElementsByClassName("tab");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // Show the current tab content and add an "active" class to the tab
            document.getElementById(tabId).style.display = "block";
            event.currentTarget.className += " active";
        }

        // By default, open the first tab
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementsByClassName("tab")[0].click();
        });


        function changeTab(event, tabName) {
            // 모든 탭의 active 클래스 제거
            const tabs = document.querySelectorAll('.review-button');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
        
            // 클릭된 탭에 active 클래스 추가
            event.currentTarget.classList.add('active');
        
            // 모든 탭 콘텐츠 숨기기
            const tabContents = document.querySelectorAll('.review-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
        
            // 선택된 탭 콘텐츠 표시
            const selectedContent = document.getElementById(tabName);
            selectedContent.classList.add('active');
        }
        
        // 첫 번째 탭과 콘텐츠를 기본 활성화 상태로 설정
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.review-button').click();
        });
        