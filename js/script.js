document.addEventListener('DOMContentLoaded', () => {
    const cardsData = [
        { imgSrc: '', name: '상품 이름 1', price: '상품 가격 1', time: '몇 시간 전 업로드 1' },
        { imgSrc: '', name: '상품 이름 2', price: '상품 가격 2', time: '몇 시간 전 업로드 2' },
        { imgSrc: '', name: '상품 이름 3', price: '상품 가격 3', time: '몇 시간 전 업로드 3' },
        { imgSrc: '', name: '상품 이름 4', price: '상품 가격 4', time: '몇 시간 전 업로드 4' },
        { imgSrc: '', name: '상품 이름 5', price: '상품 가격 5', time: '몇 시간 전 업로드 5' },
        { imgSrc: '', name: '상품 이름 6', price: '상품 가격 6', time: '몇 시간 전 업로드 6' },
        { imgSrc: '', name: '상품 이름 7', price: '상품 가격 7', time: '몇 시간 전 업로드 7' },
        { imgSrc: '', name: '상품 이름 8', price: '상품 가격 8', time: '몇 시간 전 업로드 8' },
        // 추가 카드 데이터...
    ];

    const cardsContainer = document.getElementById('cards-container');

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const cardImage = document.createElement('img');
        cardImage.src = card.imgSrc;
        cardImage.alt = '상품 사진';
        cardImage.className = 'card-image';
        cardElement.appendChild(cardImage);

        const cardDetails = document.createElement('div');
        cardDetails.className = 'card-details';

        const cardName = document.createElement('div');
        cardName.className = 'card-name';
        cardName.textContent = card.name;
        cardDetails.appendChild(cardName);

        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';

        const cardPrice = document.createElement('span');
        cardPrice.className = 'card-price';
        cardPrice.textContent = card.price;
        cardInfo.appendChild(cardPrice);

        const cardTime = document.createElement('span');
        cardTime.className = 'card-time';
        cardTime.textContent = card.time;
        cardInfo.appendChild(cardTime);

        cardDetails.appendChild(cardInfo);
        cardElement.appendChild(cardDetails);

        cardsContainer.appendChild(cardElement);
    });
});
