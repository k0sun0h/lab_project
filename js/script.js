document.addEventListener("DOMContentLoaded", function() {
    // 상단바 버튼 동적 생성
    const topBarButtons = [
        { icon: "./img/icon2.png", alt: "알림", text: "" },
        { icon: "", alt: "", text: "마이페이지" },
        { icon: "", alt: "", text: "장바구니" },
        { icon: "", alt: "", text: "로그인" }
    ];

    const topBarButtonsContainer = document.getElementById("top-bar-buttons");
    topBarButtons.forEach(button => {
        const btn = document.createElement("button");
        if (button.icon) {
            const img = document.createElement("img");
            img.src = button.icon;
            img.alt = button.alt;
            img.className = "icon";
            btn.appendChild(img);
        }
        if (button.text) {
            btn.textContent = button.text;
        }
        topBarButtonsContainer.appendChild(btn);
    });

    // 메뉴바 버튼 동적 생성
    const menuBarButtons = ["인기순", "고가순", "저가순", "최신순"];
    const menuBarContainer = document.getElementById("menu-bar");
    menuBarButtons.forEach((button, index) => {
        const btn = document.createElement("button");
        btn.textContent = button;
        menuBarContainer.appendChild(btn);
        if (index < menuBarButtons.length - 1) {
            const separator = document.createElement("span");
            separator.textContent = "|";
            menuBarContainer.appendChild(separator);
        }
    });

    // 카테고리 버튼 동적 생성
    const categories = ["전체보기", "상의", "하의", "신발", "모자", "기타"];
    const categoryContainer = document.getElementById("category");
    categories.forEach(category => {
        const div = document.createElement("div");
        div.textContent = category;
        categoryContainer.appendChild(div);
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
        { img: "item.jpg", name: "상품 이름8", price: "상품 가격8", time: "몇 시간 전 업로드8?" },
        { img: "item.jpg", name: "상품 이름9", price: "상품 가격1", time: "몇 시간 전 업로드1?" },
        { img: "item.jpg", name: "상품 이름10", price: "상품 가격2", time: "몇 시간 전 업로드2?" },
        { img: "item.jpg", name: "상품 이름11", price: "상품 가격3", time: "몇 시간 전 업로드3?" },
        { img: "item.jpg", name: "상품 이름12", price: "상품 가격4", time: "몇 시간 전 업로드4?" },
        { img: "item.jpg", name: "상품 이름13", price: "상품 가격5", time: "몇 시간 전 업로드5?" },
        { img: "item.jpg", name: "상품 이름14", price: "상품 가격6", time: "몇 시간 전 업로드6?" },
        { img: "item.jpg", name: "상품 이름15", price: "상품 가격7", time: "몇 시간 전 업로드7?" },
        { img: "item.jpg", name: "상품 이름16", price: "상품 가격8", time: "몇 시간 전 업로드8?" }
    ];

    const cardsContainer = document.getElementById("cards");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = "상품 사진";
        img.className = "card-image";

        const cardDetails = document.createElement("div");
        cardDetails.className = "card-details";

        const cardName = document.createElement("div");
        cardName.className = "card-name";
        cardName.textContent = product.name;

        const cardInfo = document.createElement("div");
        cardInfo.className = "card-info";

        const cardPrice = document.createElement("span");
        cardPrice.className = "card-price";
        cardPrice.textContent = product.price;

        const cardTime = document.createElement("span");
        cardTime.className = "card-time";
        cardTime.textContent = product.time;

        cardInfo.appendChild(cardPrice);
        cardInfo.appendChild(cardTime);
        cardDetails.appendChild(cardName);
        cardDetails.appendChild(cardInfo);
        card.appendChild(img);
        card.appendChild(cardDetails);
        cardsContainer.appendChild(card);
    });

    // 페이지네이션 동적 생성
    const totalPages = 9;
    const paginationContainer = document.getElementById("pagination");
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        paginationContainer.appendChild(btn);
    }
});
