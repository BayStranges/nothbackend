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
          { name: 'ORTA BOY KLASIK KRUVASAN', price: '₺ 200', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET' },
          { name: 'BÜYÜK BOY KLASIK KRUVASAN', price: '₺ 250', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET' },
          { name: 'ORTA BOY KURU DOMATES KRUVASAN', price: '₺ 200', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ' },
          { name: 'BÜYÜK BOY KURU DOMATES KRUVASAN', price: '₺ 250', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ' },
          { name: 'ORTA BOY TON BALIKLI KRUVASAN', price: '₺ 210', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK' },
          { name: 'BÜYÜK BOY TON BALIKLI KRUVASAN', price: '₺ 260', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK' },
          { name: 'ORTA BOY FISTIKLI KRUVASAN', price: '₺ 260', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİOKLATA' },
          { name: 'BÜYÜK BOY FISTIKLI KRUVASAN', price: '₺ 310', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİKOLATA İSTEĞE GÖRE (ÇİLEK , MUZ)' },
          { name: 'ORTA BOY ÇİKOLATALI KRUVASAN', price: '₺ 250', description: 'KREMA , SÜTLÜ ÇİOKLATA , BADEM , ÇİLEK İSTEĞE GÖRE (ÇİLEK , MUZ) & (BADEM , FINDIK)' },
          { name: 'BÜYÜK BOY ÇİKOLATALI KRUVASAN', price: '₺ 300', description: 'KREMA , SÜTLÜ ÇİOKLATA , BADEM İSTEĞE GÖRE (ÇİLEK , MUZ)' }
        ]
      },
      {
        name: 'Tatlılar',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'PAVLOVA', price: '₺ 300', description: '' },
          { name: 'DUBAİ ÇİKOLATALI BROWNIE', price: '₺ 350', description: '' },
          { name: 'MAGNOLIA', price: '₺ 250', description: '' },
          { name: 'SPONFOOL', price: '₺ 250', description: '' },
          { name: 'SAN SEBASTIAN', price: '₺ 250', description: '' },
          { name: 'PANKEK (ŞİŞ)', price: '₺ 250', description: '' },
          { name: 'PANKEK (TABAK)', price: '₺ 280', description: '' },
          { name: 'BROWNİE', price: '₺ 260', description: '' },
          { name: 'DONUT', price: '₺ 180', description: '' },
          { name: 'ÇİKOLATALI CHEESECAKE', price: '₺ 250', description: '' },
          { name: 'FISTIKLI VELVET', price: '₺ 250', description: '' },
          { name: 'MOZAİK PASTA', price: '₺ 250', description: '' },
          { name: 'DUBAİ ÇİKOLATALI MAGNOLİA', price: '₺ 350', description: '' },
          { name: 'DUBAİ ÇİKOLATALI CHEESECAKE', price: '₺ 350', description: '' },
          { name: 'SÜTLAÇ', price: '₺ 250', description: '' },
          { name: 'TİRAMİSU', price: '₺ 250', description: '' },
          { name: 'PARİS BREST', price: '₺ 250', description: '' },
          { name: 'MUZLU RULO', price: '₺ 250', description: '' },
          { name: 'TRİLİÇE', price: '₺ 250', description: '' },
          { name: 'BEYAZ ORMAN İNCİSİ', price: '₺ 250', description: '' },
          { name: 'CEDRİC GROLET PİSTACHİO', price: '₺ 400', description: '' },
          { name: 'PROFITEROL', price: '₺ 250', description: '' },
          { name: 'AY ÇEKİRDEKLİ KURABİYE (KUTU)', price: '₺ 100', description: '' },
          { name: 'MACADAMLA FINDIKLI & SÜTLÜ ÇİKOLATALI KURABİYE (KUTU)', price: '₺ 100', description: '' },
          { name: 'BROWNİE KURABİYE', price: '₺ 70', description: '' },
          { name: 'MACADAMLA FINDIKLI & SÜTLÜ ÇİKOLATALI KURABİYE', price: '₺ 70', description: '' },
          { name: 'LİMONLU & BEYAZ ÇİKOLATALI KURABİYE', price: '₺ 70', description: '' },
          { name: 'SÜTLÜ ÇİKOLATALI KURABİYE', price: '₺ 70', description: '' }
        ]
      },
      {
        name: 'Limonatalar',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'SADE LİMONATA', price: '₺ 120', description: '' },
          { name: 'NANELİ LİMONATA', price: '₺ 130', description: '' },
          { name: 'ELMALI LİMONATA', price: '₺ 130', description: '' },
          { name: 'ORMAN MEYVELİ LİMONATA', price: '₺ 140', description: '' },
          { name: 'ÇİLEKLİ LİMONATA', price: '₺ 140', description: '' },
          { name: 'FESLEĞEN LİMONATA', price: '₺ 130', description: '' },
          { name: 'BLUE GRAPE', price: '₺ 190', description: '' },
          { name: 'RED DREAM', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'ÇİKOLATALI FRAPPE', price: '₺ 175', description: '' },
          { name: 'BEYAZ ÇİKOLATALI FRAPPE', price: '₺ 175', description: '' },
          { name: 'MUZLU FRAPPE', price: '₺ 175', description: '' },
          { name: 'ÇİLEKLİ FRAPPE', price: '₺ 175', description: '' },
          { name: 'MANGOLU FRAPPE', price: '₺ 175', description: '' },
          { name: 'KAVUNLU FRAPPE', price: '₺ 175', description: '' },
          { name: 'HİNDİSTAN CEVİZLİ FRAPPE', price: '₺ 175', description: '' },
          { name: 'KAHVELİ FRAPPE', price: '₺ 175', description: '' },
          { name: 'ŞEFTALİ FRAPPE', price: '₺ 175', description: '' },
          { name: 'VANİLYA FRAPPE', price: '₺ 175', description: '' },
          { name: 'KIRMIZI ORMAN MEYVELİ FRAPPE', price: '₺ 175', description: '' },
          { name: 'KARAMEL FRAPPUCCINO', price: '₺ 175', description: '' },
          { name: 'ÇİKOLATALI FRAPPUCCINO', price: '₺ 175', description: '' },
          { name: 'VANİLYALI FRAPPUCCINO', price: '₺ 175', description: '' },
          { name: 'KARAMEL FRAPPE', price: '₺ 175', description: '' },
          { name: 'ÇİLEKLİ MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'OREO MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'MUZLU MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'KARAMEL MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'ÇİKOLATALI MILKSHAKE', price: '₺ 175', description: '' }
        ]
      },
      {
        name: 'SICAK KAHVELER',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'CAPPUCCINO', price: '₺ 140', description: '' },
          { name: 'MOCHA', price: '₺ 160', description: '' },
          { name: 'WHİTE MOCHA', price: '₺ 160', description: '' },
          { name: 'ESPRESSO MACHIATO', price: '₺ 110', description: '' },
          { name: 'CORTADO', price: '₺ 120', description: '' },
          { name: 'FLAT WHITE', price: '₺ 140', description: '' },
          { name: 'LATTE MACHIATO', price: '₺ 130', description: '' },
          { name: 'ESPRESSO', price: '₺ 85', description: '' },
          { name: 'DOUBLE ESPRESSO', price: '₺ 95', description: '' },
          { name: 'AMERICANO', price: '₺ 130', description: '' },
          { name: 'LATTE', price: '₺ 140', description: '' },
          { name: 'AROMALI LATTE', price: '₺ 160', description: '' },
          { name: 'FILTRE KAHVE', price: '₺ 130', description: '' },
          { name: 'SÜTLÜ FİLTRE KAHVE', price: '₺ 140', description: '' },
          { name: 'BADEM SÜTÜ', price: '₺ 30', description: '' },
          { name: 'LAKTOZSUZ SÜT', price: '₺ 20', description: '' }
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'ŞEFTALİ SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'ÇİLEKLİ SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'KARPUZLU SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'MANGO SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'ORMAN MEYVELİ SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'KARADUT SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'ŞEFTALİ FROZEN', price: '₺ 175', description: '' },
          { name: 'ÇİLEKLİ FROZEN', price: '₺ 175', description: '' },
          { name: 'KARPUZLU FROZEN', price: '₺ 175', description: '' },
          { name: 'MANGO FROZEN', price: '₺ 175', description: '' },
          { name: 'ORMAN MEYVELI FROZEN', price: '₺ 175', description: '' },
          { name: 'KARADUT FROZEN', price: '₺ 175', description: '' },
          { name: 'NOTH-MIX', price: '₺ 175', description: '' }
        ]
      },
      {
        name: 'SICAK İÇECEKLER',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'SICAK ÇİKOLATA', price: '₺ 150', description: '' },
          { name: 'BEYAZ SICAK ÇİKOLATA', price: '₺ 150', description: '' },
          { name: 'SAHLEP', price: '₺ 150', description: '' },
          { name: 'BALLI SÜT', price: '₺ 120', description: '' }
        ]
      },
      {
        name: 'SOĞUK KAHVELER',
        image: 'images/coffees.jpg',
        items: [
          { name: 'ICE AMERICANO', price: '₺ 140', description: '' },
          { name: 'ICE LATTE', price: '₺ 150', description: '' },
          { name: 'ICE MOCHA', price: '₺ 170', description: '' },
          { name: 'ICE CARAMEL MACCHIATO', price: '₺ 170', description: '' },
          { name: 'ICE FILTRE KAHVE', price: '₺ 150', description: '' },
          { name: 'ICE CHAI TEA LATTE', price: '₺ 150', description: '' },
          { name: 'ICE IRISH CREAM', price: '₺ 170', description: '' },
          { name: 'ICE AROMALI LATTE', price: '₺ 170', description: '' },
          { name: 'ICE WHITE MOCHA', price: '₺ 170', description: '' },
          { name: 'ICE FLAT WHITE', price: '₺ 150', description: '' },
          { name: 'ICE BERRY WHITE', price: '₺ 170', description: '' }
        ]
      },
      {
        name: 'ÇAY - BİTKİ ÇAYLARI',
        image: 'images/caylar.jpg',
        items: [
          { name: 'ÇAY', price: '₺ 50', description: '' },
          { name: 'FİNCAN ÇAY', price: '₺ 70', description: '' },
          { name: 'TAKEAWAY ÇAY', price: '₺ 80', description: '' },
          { name: 'KIŞ ÇAYI', price: '₺ 130', description: '' },
          { name: 'ADA ÇAYI', price: '₺ 140', description: '' },
          { name: 'IHLAMUR', price: '₺ 130', description: '' },
          { name: 'KUŞBURNU', price: '₺ 130', description: '' },
          { name: 'YEŞİL ÇAY', price: '₺ 130', description: '' },
          { name: 'PAPATYA', price: '₺ 130', description: '' },
          { name: 'NANE LİMON', price: '₺ 130', description: '' },
          { name: 'MELİSA', price: '₺ 130', description: '' },
          { name: 'REZENE', price: '₺ 130', description: '' }
        ]
      },
      {
        name: 'TÜRK KAHVESİ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'TÜRK KAHVESİ', price: '₺ 100', description: '' },
          { name: 'TARSUSİ TÜRK KAHVESİ', price: '₺ 110', description: '' },
          { name: 'SÜTLÜ TÜRK KAHVESİ', price: '₺ 115', description: '' },
          { name: 'DOUBLE TÜRK KAHVESİ', price: '₺ 115', description: '' },
          { name: 'DAMLA SAKIZLI TÜRK KAHVESİ', price: '₺ 110', description: '' },
          { name: 'DAMLA SAKIZLI TARSUSİ TÜRK KAHVESİ', price: '₺ 115', description: '' },
          { name: 'DİBEK', price: '₺ 115', description: '' }
        ]
      },

      {
        name: 'SOĞUK MEŞRUBAT & SERVİS',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'MEYVELİ SODA', price: '₺ 70', description: '' },
          { name: 'SADE SODA', price: '₺ 50', description: '' },
          { name: 'ŞİŞE SU', price: '₺ 35', description: '' },
          { name: 'CHURCILL', price: '₺ 75', description: '' },
          { name: 'FUSE TEA', price: '₺ 90', description: '' },
          { name: 'COCA COLA', price: '₺ 90', description: '' },
          { name: 'SERVİS', price: '₺ 40', description: '' },
          { name: 'RED BULL', price: '₺ 140', description: '' }
        ]
      },
      {
        name: 'TOST',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Kaşarlı Tost', price: '₺ 150', description: '' },
          { name: 'Karışık Tost', price: '₺ 180', description: 'Salam , Kaşar' },
          { name: 'Ayvalık Tost', price: '₺ 190', description: 'Salam , Kaşar , Turşu , Ketçap , Sosis' }
        ]
      },
      {
        name: 'COOL MİXX',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'MANGO MİXX', price: '₺ 180', description: '' },
          { name: 'BERRY MİXX', price: '₺ 180', description: '' },
          { name: 'COOL LİME MİXX', price: '₺ 180', description: '' },
          { name: 'KARPUZ MİXX', price: '₺ 180', description: '' },
          { name: 'NAR KAVUN MİXX', price: '₺ 180', description: '' },
          { name: 'NANE LİMON MİXX', price: '₺ 180', description: '' }
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
