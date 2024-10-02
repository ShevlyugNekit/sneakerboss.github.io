// ПЕРЕМИКАННЯ ТЕМИ
const toggleButton = document.getElementById('themeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Зміна іконки на кнопці
  if (document.body.classList.contains('dark-theme')) {
    toggleButton.textContent = '🌙';  // Місяць
  } else {
    toggleButton.textContent = '🌞';  // Сонце
  }
});

// ПІДНЯТТА ПО НАВІГАЦІЇ

const scrollUpButton = document.getElementById('scroll-up-button');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
});

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0, // Піднімаємося до самого верху сторінки
    behavior: 'smooth' 
  });
});


// ПОШУК ПО САЙТУ
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');   


searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();   
 // Отримуємо текст пошуку та переводимо його в нижній регістр

  // Отримуємо всі елементи, в яких може бути текст для пошуку (наприклад, параграфи, заголовки тощо)
  const elementsToSearch = document.querySelectorAll('p, h1, h2, h3, li'); 

  elementsToSearch.forEach(element => {
    const textContent = element.textContent.toLowerCase(); // Отримуємо текст елемента та переводимо його в нижній регістр

    if (textContent.includes(searchTerm)) {
      element.style.backgroundColor = 'yellow'; // Виділяємо знайдений текст
      // Можна також прокрутити сторінку до першого знайденого елемента:
      // element.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
    } else {
      element.style.backgroundColor = ''; // Скидаємо виділення, якщо текст не знайдено
    }
  });
});




// Робота з кошиком та товарами
let cart = [];
        const cartElement = document.getElementById('cart');
        const totalElement = document.getElementById('total');

        // Функція для додавання товару в кошик
        function addToCart(productName, productPrice) {
            const product = {
                name: productName,
                price: parseInt(productPrice),
                quantity: 1
            };

            const existingProduct = cart.find(item => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push(product);
            }
            renderCart();
        }

        // Функція для відображення кошика
        function renderCart() {
            cartElement.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerText = `${item.name} (x${item.quantity}) - ${item.price * item.quantity} грн`;
                cartElement.appendChild(cartItem);

                total += item.price * item.quantity;
            });

            totalElement.innerText = total;
        }

        // Слухачі для кнопок Buy
        document.querySelectorAll('.buy-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productName = this.getAttribute('data-name');
                const productPrice = this.getAttribute('data-price');
                addToCart(productName, productPrice);
            });
        });

        // Функція для підтвердження замовлення
        function confirmOrder() {
            alert('Ваше замовлення підтверджено!');
            cart = [];
            renderCart();
            totalElement.innerText = '0';
        }

  

        // Анімація
  document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо елементи з класом 'img_buy'
    const images = document.querySelectorAll('.img_buy');
    const button = document.querySelectorAll('.buy-btn');

    images.forEach(image => {
      // Додаємо анімацію при наведенні мишкою
      image.addEventListener('mouseenter', () => {
        anime({
          targets: image,
          scale: [1, 1.3],  // Збільшення зображення при наведенні
          duration: 300,
          easing: 'easeInOutQuad',
        });
      });
  
      // Повернення до початкового стану при втраті фокусу
      image.addEventListener('mouseleave', () => {
        anime({
          targets: image,
          scale: 1,  // Повернення до початкового розміру
          duration: 300,
          easing: 'easeInOutQuad',
        });
      });
    });

 
  });
  

  