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
        name: 'Kahveler',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'Espresso', price: '15 TL', description: 'Klasik espresso' },
          { name: 'Americano', price: '18 TL', description: 'Espresso ile su' },
          { name: 'Latte', price: '22 TL', description: 'Espresso, süt ve köpük' },
          { name: 'Cappuccino', price: '25 TL', description: 'Espresso, süt ve köpük karışımı' }
        ]
      },
      {
        name: 'Çaylar',
        image: 'images/caylar.jpg',
        items: [
          { name: 'Çay', price: '8 TL', description: 'Sıcak çay' },
          { name: 'Yeşil Çay', price: '10 TL', description: 'Yeşil çay' },
          { name: 'Nane Limon', price: '12 TL', description: 'Nane limon çayı' }
        ]
      }
    ]
  },
  en: {
    categories: [
      {
        name: 'Coffees',
        image: 'images/coffees.jpg',
        items: [
          { name: 'Espresso', price: '15 TL', description: 'Classic espresso' },
          { name: 'Americano', price: '18 TL', description: 'Espresso with water' },
          { name: 'Latte', price: '22 TL', description: 'Espresso, milk and foam' },
          { name: 'Cappuccino', price: '25 TL', description: 'Espresso, milk and foam mix' }
        ]
      },
      {
        name: 'Teas',
        image: 'images/teas.jpg',
        items: [
          { name: 'Tea', price: '8 TL', description: 'Hot tea' },
          { name: 'Green Tea', price: '10 TL', description: 'Green tea' },
          { name: 'Mint Lemon', price: '12 TL', description: 'Mint lemon tea' }
        ]
      }
    ]
  },
  ru: {
    categories: [
      {
        name: 'Кофе',
        image: 'images/kofe.jpg',
        items: [
          { name: 'Эспрессо', price: '15 TL', description: 'Классический эспрессо' },
          { name: 'Американо', price: '18 TL', description: 'Эспрессо с водой' },
          { name: 'Латте', price: '22 TL', description: 'Эспрессо, молоко и пена' },
          { name: 'Капучино', price: '25 TL', description: 'Эспрессо, молоко и пена смесь' }
        ]
      },
      {
        name: 'Чаи',
        image: 'images/chai.jpg',
        items: [
          { name: 'Чай', price: '8 TL', description: 'Горячий чай' },
          { name: 'Зеленый Чай', price: '10 TL', description: 'Зеленый чай' },
          { name: 'Мятный Лимон', price: '12 TL', description: 'Мятный лимонный чай' }
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
