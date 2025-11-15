const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample menu data in multiple languages
const menuData = {
  tr: {
    categories: [
      {
        name: 'Kruvasan',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Klasik Kruvasan', price: '12 TL', description: 'Taze kruvasan' },
          { name: 'Çikolatalı Kruvasan', price: '15 TL', description: 'Çikolata dolgulu kruvasan' }
        ]
      },
      {
        name: 'Tatlılar',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cheesecake', price: '25 TL', description: 'Kremalı cheesecake' },
          { name: 'Çikolatalı Pasta', price: '22 TL', description: 'Çikolata pasta' }
        ]
      },
      {
        name: 'Limonatalar',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Limonata', price: '10 TL', description: 'Taze limonata' },
          { name: 'Naneli Limonata', price: '12 TL', description: 'Nane ile limonata' }
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Frappe', price: '20 TL', description: 'Buzlu kahve frape' },
          { name: 'Milkshake', price: '18 TL', description: 'Sütlü milkshake' },
          { name: 'Frappuccino', price: '22 TL', description: 'Buzlu frappuccino' }
        ]
      },
      {
        name: 'SICAK KAHVELER',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'Espresso', price: '15 TL', description: 'Klasik espresso' },
          { name: 'Americano', price: '18 TL', description: 'Espresso ile su' },
          { name: 'Latte', price: '22 TL', description: 'Espresso, süt ve köpük' },
          { name: 'Cappuccino', price: '25 TL', description: 'Espresso, süt ve köpük karışımı' }
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Meyveli Smoothie', price: '20 TL', description: 'Taze meyveli smoothie' },
          { name: 'Frozen Latte', price: '22 TL', description: 'Buzlu latte' }
        ]
      },
      {
        name: 'SICAK İÇECEKLER',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Sıcak Çikolata', price: '18 TL', description: 'Sıcak çikolata' },
          { name: 'Sıcak Limonata', price: '15 TL', description: 'Sıcak limonata' }
        ]
      },
      {
        name: 'SOĞUK KAHVELER',
        image: 'images/coffees.jpg',
        items: [
          { name: 'Ice Coffee', price: '20 TL', description: 'Buzlu kahve' },
          { name: 'Cold Brew', price: '22 TL', description: 'Soğuk demleme kahve' }
        ]
      },
      {
        name: 'ÇAY - BİTKİ ÇAYLARI',
        image: 'images/caylar.jpg',
        items: [
          { name: 'Çay', price: '8 TL', description: 'Sıcak çay' },
          { name: 'Yeşil Çay', price: '10 TL', description: 'Yeşil çay' },
          { name: 'Nane Limon', price: '12 TL', description: 'Nane limon çayı' },
          { name: 'Ihlamur', price: '10 TL', description: 'Ihlamur çayı' }
        ]
      },
      {
        name: 'TÜRK KAHVESİ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Türk Kahvesi', price: '15 TL', description: 'Klasik Türk kahvesi' },
          { name: 'Sütlü Türk Kahvesi', price: '18 TL', description: 'Sütlü Türk kahvesi' }
        ]
      },
      {
        name: 'BUBBLE TEA',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Çilek Bubble Tea', price: '20 TL', description: 'Çilek aromalı bubble tea' },
          { name: 'Yeşil Çay Bubble Tea', price: '18 TL', description: 'Yeşil çay bubble tea' }
        ]
      },
      {
        name: 'SOĞUK MEŞRUBAT & SERVİS',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Kola', price: '10 TL', description: 'Soğuk kola' },
          { name: 'Gazoz', price: '8 TL', description: 'Gazoz' }
        ]
      },
      {
        name: 'TOST',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Kaşarlı Tost', price: '15 TL', description: 'Kaşar peynirli tost' },
          { name: 'Sucuklu Tost', price: '18 TL', description: 'Sucuklu tost' }
        ]
      },
      {
        name: 'COOL MİXX',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cool Mix İçecek', price: '20 TL', description: 'Karışık soğuk içecek' }
        ]
      }
    ]
  },
  en: {
    categories: [
      {
        name: 'Croissant',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Classic Croissant', price: '12 TL', description: 'Fresh croissant' },
          { name: 'Chocolate Croissant', price: '15 TL', description: 'Chocolate filled croissant' }
        ]
      },
      {
        name: 'Desserts',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cheesecake', price: '25 TL', description: 'Creamy cheesecake' },
          { name: 'Chocolate Cake', price: '22 TL', description: 'Chocolate cake' }
        ]
      },
      {
        name: 'Lemonades',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Lemonade', price: '10 TL', description: 'Fresh lemonade' },
          { name: 'Mint Lemonade', price: '12 TL', description: 'Mint lemonade' }
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Frappe', price: '20 TL', description: 'Iced coffee frappe' },
          { name: 'Milkshake', price: '18 TL', description: 'Milky milkshake' },
          { name: 'Frappuccino', price: '22 TL', description: 'Iced frappuccino' }
        ]
      },
      {
        name: 'HOT COFFEES',
        image: 'images/coffees.jpg',
        items: [
          { name: 'Espresso', price: '15 TL', description: 'Classic espresso' },
          { name: 'Americano', price: '18 TL', description: 'Espresso with water' },
          { name: 'Latte', price: '22 TL', description: 'Espresso, milk and foam' },
          { name: 'Cappuccino', price: '25 TL', description: 'Espresso, milk and foam mix' }
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Fruit Smoothie', price: '20 TL', description: 'Fresh fruit smoothie' },
          { name: 'Frozen Latte', price: '22 TL', description: 'Iced latte' }
        ]
      },
      {
        name: 'HOT DRINKS',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Hot Chocolate', price: '18 TL', description: 'Hot chocolate' },
          { name: 'Hot Lemonade', price: '15 TL', description: 'Hot lemonade' }
        ]
      },
      {
        name: 'COLD COFFEES',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'Ice Coffee', price: '20 TL', description: 'Iced coffee' },
          { name: 'Cold Brew', price: '22 TL', description: 'Cold brewed coffee' }
        ]
      },
      {
        name: 'TEA - HERBAL TEAS',
        image: 'images/teas.jpg',
        items: [
          { name: 'Tea', price: '8 TL', description: 'Hot tea' },
          { name: 'Green Tea', price: '10 TL', description: 'Green tea' },
          { name: 'Mint Lemon', price: '12 TL', description: 'Mint lemon tea' },
          { name: 'Linden Tea', price: '10 TL', description: 'Linden tea' }
        ]
      },
      {
        name: 'TURKISH COFFEE',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Turkish Coffee', price: '15 TL', description: 'Classic Turkish coffee' },
          { name: 'Turkish Coffee with Milk', price: '18 TL', description: 'Turkish coffee with milk' }
        ]
      },
      {
        name: 'BUBBLE TEA',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Strawberry Bubble Tea', price: '20 TL', description: 'Strawberry flavored bubble tea' },
          { name: 'Green Tea Bubble Tea', price: '18 TL', description: 'Green tea bubble tea' }
        ]
      },
      {
        name: 'COLD BEVERAGES & SERVICE',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cola', price: '10 TL', description: 'Cold cola' },
          { name: 'Soda', price: '8 TL', description: 'Soda' }
        ]
      },
      {
        name: 'TOAST',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cheese Toast', price: '15 TL', description: 'Cheese toast' },
          { name: 'Sausage Toast', price: '18 TL', description: 'Sausage toast' }
        ]
      },
      {
        name: 'COOL MIX',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cool Mix Drink', price: '20 TL', description: 'Mixed cold drink' }
        ]
      }
    ]
  },
  ru: {
    categories: [
      {
        name: 'Круассан',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Классический круассан', price: '12 TL', description: 'Свежий круассан' },
          { name: 'Шоколадный круассан', price: '15 TL', description: 'Круассан с шоколадом' }
        ]
      },
      {
        name: 'Десерты',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Чизкейк', price: '25 TL', description: 'Сливочный чизкейк' },
          { name: 'Шоколадный торт', price: '22 TL', description: 'Шоколадный торт' }
        ]
      },
      {
        name: 'Лимонады',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Лимонад', price: '10 TL', description: 'Свежий лимонад' },
          { name: 'Мятный лимонад', price: '12 TL', description: 'Мятный лимонад' }
        ]
      },
      {
        name: 'ФРАППЕ - МИЛКШЕЙК - ФРАППУЧИНО',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Фраппе', price: '20 TL', description: 'Ледяной кофе фраппе' },
          { name: 'Милкшейк', price: '18 TL', description: 'Молочный милкшейк' },
          { name: 'Фраппучино', price: '22 TL', description: 'Ледяной фраппучино' }
        ]
      },
      {
        name: 'ГОРЯЧИЙ КОФЕ',
        image: 'images/kofe.jpg',
        items: [
          { name: 'Эспрессо', price: '15 TL', description: 'Классический эспрессо' },
          { name: 'Американо', price: '18 TL', description: 'Эспрессо с водой' },
          { name: 'Латте', price: '22 TL', description: 'Эспрессо, молоко и пена' },
          { name: 'Капучино', price: '25 TL', description: 'Эспрессо, молоко и пена смесь' }
        ]
      },
      {
        name: 'СМУЗИ - ЗАМОРОЖЕННЫЙ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Фруктовый смузи', price: '20 TL', description: 'Свежий фруктовый смузи' },
          { name: 'Замороженный латте', price: '22 TL', description: 'Ледяной латте' }
        ]
      },
      {
        name: 'ГОРЯЧИЕ НАПИТКИ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Горячий шоколад', price: '18 TL', description: 'Горячий шоколад' },
          { name: 'Горячий лимонад', price: '15 TL', description: 'Горячий лимонад' }
        ]
      },
      {
        name: 'ХОЛОДНЫЙ КОФЕ',
        image: 'images/coffees.jpg',
        items: [
          { name: 'Ледяной кофе', price: '20 TL', description: 'Ледяной кофе' },
          { name: 'Колд брю', price: '22 TL', description: 'Холодный заваренный кофе' }
        ]
      },
      {
        name: 'ЧАЙ - ТРАВЯНЫЕ ЧАИ',
        image: 'images/chai.jpg',
        items: [
          { name: 'Чай', price: '8 TL', description: 'Горячий чай' },
          { name: 'Зеленый чай', price: '10 TL', description: 'Зеленый чай' },
          { name: 'Мятный лимон', price: '12 TL', description: 'Мятный лимонный чай' },
          { name: 'Липовый чай', price: '10 TL', description: 'Липовый чай' }
        ]
      },
      {
        name: 'ТУРЕЦКИЙ КОФЕ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Турецкий кофе', price: '15 TL', description: 'Классический турецкий кофе' },
          { name: 'Турецкий кофе с молоком', price: '18 TL', description: 'Турецкий кофе с молоком' }
        ]
      },
      {
        name: 'ПУЗЫРЬКОВЫЙ ЧАЙ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Клубничный пузырчатый чай', price: '20 TL', description: 'Клубничный пузырчатый чай' },
          { name: 'Зеленый чай с пузырьками', price: '18 TL', description: 'Зеленый чай с пузырьками' }
        ]
      },
      {
        name: 'ХОЛОДНЫЕ НАПИТКИ И ОБСЛУЖИВАНИЕ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Кола', price: '10 TL', description: 'Холодная кола' },
          { name: 'Газировка', price: '8 TL', description: 'Газировка' }
        ]
      },
      {
        name: 'ТОСТ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Сырный тост', price: '15 TL', description: 'Сырный тост' },
          { name: 'Колбасный тост', price: '18 TL', description: 'Колбасный тост' }
        ]
      },
      {
        name: 'КУЛ МИКС',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Кул микс напиток', price: '20 TL', description: 'Смешанный холодный напиток' }
        ]
      }
    ]
  }
};

app.get('/api/menu/:lang?', (req, res) => {
  const lang = req.params.lang || 'tr';
  res.json(menuData[lang] || menuData.tr);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
