const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample menu data in multiple languages
const menuData = {
  tr: {
    categories: [
      {
        name: 'Kruvasan',
        image: 'images/kruvasan.png', // Placehimage
        items: [
          { name: 'ORTA BOY KLASIK KRUVASAN', price: '₺ 240', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET' },
          { name: 'BÜYÜK BOY KLASIK KRUVASAN', price: '₺ 290', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET' },
          { name: 'ORTA BOY KURU DOMATES KRUVASAN', price: '₺ 240', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ' },
          { name: 'BÜYÜK BOY KURU DOMATES KRUVASAN', price: '₺ 290', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ' },
          { name: 'ORTA BOY TON BALIKLI KRUVASAN', price: '₺ 250', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK' },
          { name: 'BÜYÜK BOY TON BALIKLI KRUVASAN', price: '₺ 300', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK' },
          { name: 'ORTA BOY FISTIKLI KRUVASAN', price: '₺ 300', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİKOLATA' },
          { name: 'BÜYÜK BOY FISTIKLI KRUVASAN', price: '₺ 350', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİKOLATA İSTEĞE GÖRE (ÇİLEK , MUZ)' },
          { name: 'ORTA BOY ÇİKOLATALI KRUVASAN', price: '₺ 290', description: 'KREMA , SÜTLÜ ÇİKOLATA , BADEM , ÇİLEK İSTEĞE GÖRE (ÇİLEK , MUZ) & (BADEM , FINDIK)' },
          { name: 'BÜYÜK BOY ÇİKOLATALI KRUVASAN', price: '₺ 340', description: 'KREMA , SÜTLÜ ÇİKOLATA , BADEM İSTEĞE GÖRE (ÇİLEK , MUZ)' }
        ]
      },
      {
        name: 'Tatlılar',
        image: 'images/tatlı.png', // Placeholder image
        items: [
          { name: 'MAGNOLIA', price: '₺ 290', description: '' },
          { name: 'SPONFOOL', price: '₺ 290', description: '' },
          { name: 'SAN SEBASTIAN', price: '₺ 290', description: '' },
          { name: 'BROWNİE', price: '₺ 290', description: '' },
          { name: 'ÇİKOLATALI CHEESECAKE', price: '₺ 290', description: '' },
          { name: 'MOZAİK PASTA', price: '₺ 290', description: '' },
          { name: 'TİRAMİSU', price: '₺ 290', description: '' },
          { name: 'TRİLİÇE', price: '₺ 290', description: '' },
          { name: 'İBİZA', price: '₺ 290', description: '' },
          { name: 'PAVLOVA', price: '₺ 340', description: '' }
          
        ]
      },
      {
        name: 'SICAK KAHVELER',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'CAPPUCCINO', price: '₺ 160', description: '' },
          { name: 'MOCHA', price: '₺ 180', description: '' },
          { name: 'WHİTE MOCHA', price: '₺ 180', description: '' },
          { name: 'ESPRESSO MACHIATO', price: '₺ 130', description: '' },
          { name: 'CORTADO', price: '₺ 140', description: '' },
          { name: 'FLAT WHITE', price: '₺ 160', description: '' },
          { name: 'LATTE MACHIATO', price: '₺ 150', description: '' },
          { name: 'ESPRESSO', price: '₺ 105', description: '' },
          { name: 'DOUBLE ESPRESSO', price: '₺ 115', description: '' },
          { name: 'AMERICANO', price: '₺ 150', description: '' },
          { name: 'LATTE', price: '₺ 160', description: '' },
          { name: 'AROMALI LATTE', price: '₺ 180', description: '' },
          { name: 'FILTRE KAHVE', price: '₺ 150', description: '' },
          { name: 'SÜTLÜ FİLTRE KAHVE', price: '₺ 160', description: '' },
          { name: 'BADEM SÜTÜ', price: '₺ 50', description: '' },
          { name: 'LAKTOZSUZ SÜT', price: '₺ 40', description: '' }
        ]
      },
      {
        name: 'Limonatalar',
        image: 'images/limonata.png', // Placeholder image
        items: [
          { name: 'SADE LİMONATA', price: '₺ 170', description: '' },
          { name: 'NANELİ LİMONATA', price: '₺ 180', description: '' },
          { name: 'ELMALI LİMONATA', price: '₺ 180', description: '' },
          { name: 'ORMAN MEYVELİ LİMONATA', price: '₺ 190', description: '' },
          { name: 'ÇİLEKLİ LİMONATA', price: '₺ 190', description: '' },
          { name: 'FESLEĞEN LİMONATA', price: '₺ 180', description: '' },
          { name: 'BLUE GRAPE', price: '₺ 240', description: '' },
          { name: 'RED DREAM', price: '₺ 240', description: '' }
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/milkshake.png', // Placeholder image
        items: [
          { name: 'ÇİKOLATALI FRAPPE', price: '₺ 190', description: '' },
          { name: 'BEYAZ ÇİKOLATALI FRAPPE', price: '₺ 190', description: '' },
          { name: 'MUZLU FRAPPE', price: '₺ 190', description: '' },
          { name: 'ÇİLEKLİ FRAPPE', price: '₺ 190', description: '' },
          { name: 'MANGOLU FRAPPE', price: '₺ 190', description: '' },
          { name: 'KAVUNLU FRAPPE', price: '₺ 190', description: '' },
          { name: 'HİNDİSTAN CEVİZLİ FRAPPE', price: '₺ 190', description: '' },
          { name: 'KAHVELİ FRAPPE', price: '₺ 190', description: '' },
          { name: 'ŞEFTALİ FRAPPE', price: '₺ 190', description: '' },
          { name: 'VANİLYA FRAPPE', price: '₺ 190', description: '' },
          { name: 'KIRMIZI ORMAN MEYVELİ FRAPPE', price: '₺ 190', description: '' },
          { name: 'KARAMEL FRAPPUCCINO', price: '₺ 190', description: '' },
          { name: 'ÇİKOLATALI FRAPPUCCINO', price: '₺ 190', description: '' },
          { name: 'VANİLYALI FRAPPUCCINO', price: '₺ 190', description: '' },
          { name: 'KARAMEL FRAPPE', price: '₺ 190', description: '' },
          { name: 'ÇİLEKLİ MILKSHAKE', price: '₺ 190', description: '' },
          { name: 'OREO MILKSHAKE', price: '₺ 190', description: '' },
          { name: 'KARAMEL MILKSHAKE', price: '₺ 190', description: '' },
          { name: 'ÇİKOLATALI MILKSHAKE', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/smoothie.png', // Placeholder image
        items: [
          { name: 'ŞEFTALİ SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'ÇİLEKLİ SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'KARPUZLU SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'MANGO SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'ORMAN MEYVELİ SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'KARADUT SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'ŞEFTALİ FROZEN', price: '₺ 190', description: '' },
          { name: 'ÇİLEKLİ FROZEN', price: '₺ 190', description: '' },
          { name: 'KARPUZLU FROZEN', price: '₺ 190', description: '' },
          { name: 'MANGO FROZEN', price: '₺ 190', description: '' },
          { name: 'ORMAN MEYVELI FROZEN', price: '₺ 190', description: '' },
          { name: 'KARADUT FROZEN', price: '₺ 190', description: '' },
          { name: 'NOTH-MIX', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'SICAK İÇECEKLER',
        image: 'images/chocolate.png', // Placeholder image
        items: [
          { name: 'SICAK ÇİKOLATA', price: '₺ 170', description: '' },
          { name: 'BEYAZ SICAK ÇİKOLATA', price: '₺ 170', description: '' },
          { name: 'SAHLEP', price: '₺ 170', description: '' },
          { name: 'BALLI SÜT', price: '₺ 140', description: '' }
        ]
      },
      {
        name: 'SOĞUK KAHVELER',
        image: 'images/ice.png',
        items: [
          { name: 'ICE AMERICANO', price: '₺ 160', description: '' },
          { name: 'ICE LATTE', price: '₺ 170', description: '' },
          { name: 'ICE MOCHA', price: '₺ 190', description: '' },
          { name: 'ICE CARAMEL MACCHIATO', price: '₺ 190', description: '' },
          { name: 'ICE FILTRE KAHVE', price: '₺ 160', description: '' },
          { name: 'ICE CHAI TEA LATTE', price: '₺ 190', description: '' },
          { name: 'ICE IRISH CREAM', price: '₺ 190', description: '' },
          { name: 'ICE AROMALI LATTE', price: '₺ 190', description: '' },
          { name: 'ICE WHITE MOCHA', price: '₺ 190', description: '' },
          { name: 'ICE FLAT WHITE', price: '₺ 170', description: '' },
          { name: 'ICE BERRY WHITE', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'ÇAY - BİTKİ ÇAYLARI',
        image: 'images/caylar.jpg',
        items: [
          { name: 'ÇAY', price: '₺ 60', description: '' },
          { name: 'FİNCAN ÇAY', price: '₺ 80', description: '' },
          { name: 'TAKEAWAY ÇAY', price: '₺ 90', description: '' },
          { name: 'KIŞ ÇAYI', price: '₺ 160', description: '' },
          { name: 'ADA ÇAYI', price: '₺ 170', description: '' },
          { name: 'IHLAMUR', price: '₺ 160', description: '' },
          { name: 'KUŞBURNU', price: '₺ 160', description: '' },
          { name: 'YEŞİL ÇAY', price: '₺ 160', description: '' },
          { name: 'PAPATYA', price: '₺ 160', description: '' },
          { name: 'NANE LİMON', price: '₺ 160', description: '' },
          { name: 'MELİSA', price: '₺ 160', description: '' },
          { name: 'REZENE', price: '₺ 160', description: '' }
        ]
      },
      {
        name: 'TÜRK KAHVESİ',
        image: 'images/tr.png', // Placeholder image
        items: [
          { name: 'TÜRK KAHVESİ', price: '₺ 110', description: '' },
          { name: 'TARSUSİ TÜRK KAHVESİ', price: '₺ 120', description: '' },
          { name: 'SÜTLÜ TÜRK KAHVESİ', price: '₺ 125', description: '' },
          { name: 'DOUBLE TÜRK KAHVESİ', price: '₺ 125', description: '' },
          { name: 'DAMLA SAKIZLI TÜRK KAHVESİ', price: '₺ 120', description: '' },
          { name: 'DAMLA SAKIZLI TARSUSİ TÜRK KAHVESİ', price: '₺ 125', description: '' },
          { name: 'DİBEK', price: '₺ 125', description: '' }
        ]
      },

      {
        name: 'SOĞUK MEŞRUBAT & SERVİS',
        image: 'images/cola.png', // Placeholder image
        items: [
          { name: 'MEYVELİ SODA', price: '₺ 90', description: '' },
          { name: 'SADE SODA', price: '₺ 70', description: '' },
          { name: 'ŞİŞE SU', price: '₺ 40', description: '' },
          { name: 'CHURCILL', price: '₺ 100', description: '' },
          { name: 'FUSE TEA', price: '₺ 100', description: '' },
          { name: 'COCA COLA', price: '₺ 100', description: '' },
          { name: 'SERVİS', price: '₺ 50', description: '' },
          { name: 'RED BULL', price: '₺ 150', description: '' }
        ]
      },
      {
        name: 'TOST',
        image: 'images/tost.png', // Placeholder image
        items: [
          { name: 'Kaşarlı Tost', price: '₺ 180', description: 'Kaşar' },
          { name: 'Karışık Tost', price: '₺ 220', description: 'Salam , Kaşar' },
          { name: 'Ayvalık Tost', price: '₺ 250', description: 'Salam , Kaşar , Turşu , Ketçap , Sosis' }
        ]
      },
      {
        name: 'COOL MİXX',
        image: 'images/cool.png', // Placeholder image
        items: [
          { name: 'MANGO MİXX', price: '₺ 220', description: '' },
          { name: 'BERRY MİXX', price: '₺ 220', description: '' },
          { name: 'COOL LİME MİXX', price: '₺ 220', description: '' },
          { name: 'KARPUZ MİXX', price: '₺ 220', description: '' },
          { name: 'NAR KAVUN MİXX', price: '₺ 220', description: '' },
          { name: 'NANE LİMON MİXX', price: '₺ 220', description: '' }
        ]
      }
    ]
  },
  en: {
    categories: [
      {
        name: 'Croissant',
        image: 'images/kruvasan.png',
        items: [
          { name: 'MEDIUM CLASSIC CROISSANT', price: '₺ 240', description: 'CUCUMBER, LETTUCE, TOMATO, CHEDDAR CHEESE, SMOKED MEAT' },
          { name: 'LARGE CLASSIC CROISSANT', price: '₺ 290', description: 'CUCUMBER, LETTUCE, TOMATO, CHEDDAR CHEESE, SMOKED MEAT' },
          { name: 'MEDIUM SUN-DRIED TOMATO CROISSANT', price: '₺ 240', description: 'CUCUMBER, LETTUCE, TOMATO, SUN-DRIED TOMATO, FETA CHEESE' },
          { name: 'LARGE SUN-DRIED TOMATO CROISSANT', price: '₺ 290', description: 'CUCUMBER, LETTUCE, TOMATO, SUN-DRIED TOMATO, FETA CHEESE' },
          { name: 'MEDIUM TUNA CROISSANT', price: '₺ 250', description: 'FETA CHEESE, CORN SAUCE, TUNA, LETTUCE, CUCUMBER' },
          { name: 'LARGE TUNA CROISSANT', price: '₺ 300', description: 'FETA CHEESE, CORN SAUCE, TUNA, LETTUCE, CUCUMBER' },
          { name: 'MEDIUM PISTACHIO CROISSANT', price: '₺ 300', description: 'PISTACHIO, CREAM, MILK CHOCOLATE' },
          { name: 'LARGE PISTACHIO CROISSANT', price: '₺ 350', description: 'PISTACHIO, CREAM, MILK CHOCOLATE (STRAWBERRY, BANANA OPTIONAL)' },
          { name: 'MEDIUM CHOCOLATE CROISSANT', price: '₺ 290', description: 'CREAM, MILK CHOCOLATE, ALMOND, STRAWBERRY (STRAWBERRY, BANANA & ALMOND, HAZELNUT OPTIONAL)' },
          { name: 'LARGE CHOCOLATE CROISSANT', price: '₺ 340', description: 'CREAM, MILK CHOCOLATE, ALMOND (STRAWBERRY, BANANA OPTIONAL)' }
        ]
      },
      {
        name: 'Desserts',
        image: 'images/tatlı.png',
        items: [
          { name: 'MAGNOLIA', price: '₺ 290', description: '' },
          { name: 'SPONGE CAKE', price: '₺ 290', description: '' },
          { name: 'SAN SEBASTIAN', price: '₺ 290', description: '' },
          { name: 'BROWNIE', price: '₺ 300', description: '' },
          { name: 'CHOCOLATE CHEESECAKE', price: '₺ 290', description: '' },
          { name: 'MOSAIC CAKE', price: '₺ 290', description: '' },
          { name: 'TIRAMISU', price: '₺ 290', description: '' },
          { name: 'TRILICE', price: '₺ 290', description: '' },
          { name: 'İBİZA', price: '₺ 290', description: '' },
           { name: 'PAVLOVA', price: '₺ 340', description: '' }
        ]
      },
      {
        name: 'HOT COFFEES',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'CAPPUCCINO', price: '₺ 160', description: '' },
          { name: 'MOCHA', price: '₺ 180', description: '' },
          { name: 'WHITE MOCHA', price: '₺ 180', description: '' },
          { name: 'ESPRESSO MACCHIATO', price: '₺ 130', description: '' },
          { name: 'CORTADO', price: '₺ 140', description: '' },
          { name: 'FLAT WHITE', price: '₺ 160', description: '' },
          { name: 'LATTE MACCHIATO', price: '₺ 150', description: '' },
          { name: 'ESPRESSO', price: '₺ 105', description: '' },
          { name: 'DOUBLE ESPRESSO', price: '₺ 115', description: '' },
          { name: 'AMERICANO', price: '₺ 150', description: '' },
          { name: 'LATTE', price: '₺ 160', description: '' },
          { name: 'FLAVORED LATTE', price: '₺ 180', description: '' },
          { name: 'FILTER COFFEE', price: '₺ 150', description: '' },
          { name: 'MILKY FILTER COFFEE', price: '₺ 160', description: '' },
          { name: 'ALMOND MILK', price: '₺ 50', description: '' },
          { name: 'LACTOSE-FREE MILK', price: '₺ 40', description: '' }
        ]
      },
      {
        name: 'Lemonades',
        image: 'images/limonata.png',
        items: [
          { name: 'PLAIN LEMONADE', price: '₺ 170', description: '' },
          { name: 'MINT LEMONADE', price: '₺ 180', description: '' },
          { name: 'APPLE LEMONADE', price: '₺ 180', description: '' },
          { name: 'FOREST FRUIT LEMONADE', price: '₺ 190', description: '' },
          { name: 'STRAWBERRY LEMONADE', price: '₺ 190', description: '' },
          { name: 'BASIL LEMONADE', price: '₺ 180', description: '' },
          { name: 'BLUE GRAPE', price: '₺ 240', description: '' },
          { name: 'RED DREAM', price: '₺ 240', description: '' }
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/milkshake.png',
        items: [
          { name: 'CHOCOLATE FRAPPE', price: '₺ 190', description: '' },
          { name: 'WHITE CHOCOLATE FRAPPE', price: '₺ 190', description: '' },
          { name: 'BANANA FRAPPE', price: '₺ 190', description: '' },
          { name: 'STRAWBERRY FRAPPE', price: '₺ 190', description: '' },
          { name: 'MANGO FRAPPE', price: '₺ 190', description: '' },
          { name: 'MELON FRAPPE', price: '₺ 190', description: '' },
          { name: 'COCONUT FRAPPE', price: '₺ 190', description: '' },
          { name: 'COFFEE FRAPPE', price: '₺ 190', description: '' },
          { name: 'PEACH FRAPPE', price: '₺ 190', description: '' },
          { name: 'VANILLA FRAPPE', price: '₺ 190', description: '' },
          { name: 'RED FOREST FRUIT FRAPPE', price: '₺ 190', description: '' },
          { name: 'CARAMEL FRAPPUCCINO', price: '₺ 190', description: '' },
          { name: 'CHOCOLATE FRAPPUCCINO', price: '₺ 190', description: '' },
          { name: 'VANILLA FRAPPUCCINO', price: '₺ 190', description: '' },
          { name: 'CARAMEL FRAPPE', price: '₺ 190', description: '' },
          { name: 'STRAWBERRY MILKSHAKE', price: '₺ 190', description: '' },
          { name: 'OREO MILKSHAKE', price: '₺ 190', description: '' },
          { name: 'CARAMEL MILKSHAKE', price: '₺ 190', description: '' },
          { name: 'CHOCOLATE MILKSHAKE', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/smoothie.png',
        items: [
          { name: 'PEACH SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'STRAWBERRY SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'WATERMELON SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'MANGO SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'FOREST FRUIT SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'BLACKCURRANT SMOOTHIE', price: '₺ 190', description: '' },
          { name: 'PEACH FROZEN', price: '₺ 190', description: '' },
          { name: 'STRAWBERRY FROZEN', price: '₺ 190', description: '' },
          { name: 'WATERMELON FROZEN', price: '₺ 190', description: '' },
          { name: 'MANGO FROZEN', price: '₺ 190', description: '' },
          { name: 'FOREST FRUIT FROZEN', price: '₺ 190', description: '' },
          { name: 'BLACKCURRANT FROZEN', price: '₺ 190', description: '' },
          { name: 'NOTH-MIX', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'HOT DRINKS',
        image: 'images/chocolate.png',
        items: [
          { name: 'HOT CHOCOLATE', price: '₺ 170', description: '' },
          { name: 'WHITE HOT CHOCOLATE', price: '₺ 170', description: '' },
          { name: 'SAHLEP', price: '₺ 170', description: '' },
          { name: 'HONEY MILK', price: '₺ 140', description: '' }
        ]
      },
      {
        name: 'COLD COFFEES',
        image: 'images/ice.png',
        items: [
          { name: 'ICE AMERICANO', price: '₺ 160', description: '' },
          { name: 'ICE LATTE', price: '₺ 170', description: '' },
          { name: 'ICE MOCHA', price: '₺ 190', description: '' },
          { name: 'ICE CARAMEL MACCHIATO', price: '₺ 190', description: '' },
          { name: 'ICE FILTER COFFEE', price: '₺ 160', description: '' },
          { name: 'ICE CHAI TEA LATTE', price: '₺ 190', description: '' },
          { name: 'ICE IRISH CREAM', price: '₺ 190', description: '' },
          { name: 'ICE FLAVORED LATTE', price: '₺ 190', description: '' },
          { name: 'ICE WHITE MOCHA', price: '₺ 190', description: '' },
          { name: 'ICE FLAT WHITE', price: '₺ 170', description: '' },
          { name: 'ICE BERRY WHITE', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'TEA - HERBAL TEAS',
        image: 'images/caylar.jpg',
        items: [
          { name: 'TEA', price: '₺ 60', description: '' },
          { name: 'TEA CUP', price: '₺ 80', description: '' },
          { name: 'TAKEAWAY TEA', price: '₺ 90', description: '' },
          { name: 'WINTER TEA', price: '₺ 160', description: '' },
          { name: 'ADA TEA', price: '₺ 170', description: '' },
          { name: 'LINDEN', price: '₺ 160', description: '' },
          { name: 'ROSEHIP', price: '₺ 160', description: '' },
          { name: 'GREEN TEA', price: '₺ 160', description: '' },
          { name: 'CHAMOMILE', price: '₺ 160', description: '' },
          { name: 'MINT LEMON', price: '₺ 160', description: '' },
          { name: 'MELISSA', price: '₺ 160', description: '' },
          { name: 'FENNEL', price: '₺ 160', description: '' }
        ]
      },
      {
        name: 'TURKISH COFFEE',
        image: 'images/tr.png',
        items: [
          { name: 'TURKISH COFFEE', price: '₺ 110', description: '' },
          { name: 'TARSUS TURKISH COFFEE', price: '₺ 120', description: '' },
          { name: 'MILKY TURKISH COFFEE', price: '₺ 125', description: '' },
          { name: 'DOUBLE TURKISH COFFEE', price: '₺ 125', description: '' },
          { name: 'DAMLA SAKIZLI TURKISH COFFEE', price: '₺ 120', description: '' },
          { name: 'DAMLA SAKIZLI TARSUS TURKISH COFFEE', price: '₺ 125', description: '' },
          { name: 'DIBEK', price: '₺ 125', description: '' }
        ]
      },
      {
        name: 'COLD BEVERAGES & SERVICE',
        image: 'images/cola.png',
        items: [
          { name: 'FRUIT SODA', price: '₺ 90', description: '' },
          { name: 'PLAIN SODA', price: '₺ 70', description: '' },
          { name: 'BOTTLED WATER', price: '₺ 40', description: '' },
          { name: 'CHURCHILL', price: '₺ 100', description: '' },
          { name: 'FUSE TEA', price: '₺ 100', description: '' },
          { name: 'COCA COLA', price: '₺ 100', description: '' },
          { name: 'SERVICE', price: '₺ 50', description: '' },
          { name: 'RED BULL', price: '₺ 150', description: '' }
        ]
      },
      {
        name: 'TOAST',
        image: 'images/tost.png',
        items: [
          { name: 'CHEESE TOAST', price: '₺ 180', description: '' },
          { name: 'MIXED TOAST', price: '₺ 220', description: 'SALAMI, CHEESE' },
          { name: 'AYVALIK TOAST', price: '₺ 250', description: 'SALAMI, CHEESE, PICKLE, KETCHUP, SAUSAGE' }
        ]
      },
      {
        name: 'COOL MIX',
        image: 'images/cool.png',
        items: [
          { name: 'MANGO MIX', price: '₺ 220', description: '' },
          { name: 'BERRY MIX', price: '₺ 220', description: '' },
          { name: 'COOL LIME MIX', price: '₺ 220', description: '' },
          { name: 'WATERMELON MIX', price: '₺ 220', description: '' },
          { name: 'POMEGRANATE MELON MIX', price: '₺ 220', description: '' },
          { name: 'MINT LEMON MIX', price: '₺ 220', description: '' }
        ]
      }
    ]
  },
  ru: {
    categories: [
      {
        name: 'Круассан',
        image: 'images/kruvasan.png',
        items: [
          { name: 'СРЕДНИЙ КЛАССИЧЕСКИЙ КРУАССАН', price: '₺ 240', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СЫР ЧЕДДЕР, КОПЧЕНОЕ МЯСО' },
          { name: 'БОЛЬШОЙ КЛАССИЧЕСКИЙ КРУАССАН', price: '₺ 290', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СЫР ЧЕДДЕР, КОПЧЕНОЕ МЯСО' },
          { name: 'СРЕДНИЙ КРУАССАН С СУШЕНЫМИ ТОМАТАМИ', price: '₺ 240', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СУШЕНЫЕ ТОМАТЫ, СЫР ФЕТА' },
          { name: 'БОЛЬШОЙ КРУАССАН С СУШЕНЫМИ ТОМАТАМИ', price: '₺ 290', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СУШЕНЫЕ ТОМАТЫ, СЫР ФЕТА' },
          { name: 'СРЕДНИЙ КРУАССАН С ТУНЦОМ', price: '₺ 250', description: 'СЫР ФЕТА, КУКУРУЗНЫЙ СОУС, ТУНЕЦ, САЛАТ, ОГУРЕЦ' },
          { name: 'БОЛЬШОЙ КРУАССАН С ТУНЦОМ', price: '₺ 300', description: 'СЫР ФЕТА, КУКУРУЗНЫЙ СОУС, ТУНЕЦ, САЛАТ, ОГУРЕЦ' },
          { name: 'СРЕДНИЙ КРУАССАН С ФИСТАШКАМИ', price: '₺ 300', description: 'ФИСТАШКИ, КРЕМ, МОЛОЧНЫЙ ШОКОЛАД' },
          { name: 'БОЛЬШОЙ КРУАССАН С ФИСТАШКАМИ', price: '₺ 350', description: 'ФИСТАШКИ, КРЕМ, МОЛОЧНЫЙ ШОКОЛАД (КЛУБНИКА, БАНАН ПО ЖЕЛАНИЮ)' },
          { name: 'СРЕДНИЙ ШОКОЛАДНЫЙ КРУАССАН', price: '₺ 290', description: 'КРЕМ, МОЛОЧНЫЙ ШОКОЛАД, МИНДАЛЬ, КЛУБНИКА (КЛУБНИКА, БАНАН & МИНДАЛЬ, ФУНДУК ПО ЖЕЛАНИЮ)' },
          { name: 'БОЛЬШОЙ ШОКОЛАДНЫЙ КРУАССАН', price: '₺ 340', description: 'КРЕМ, МОЛОЧНЫЙ ШОКОЛАД, МИНДАЛЬ (КЛУБНИКА, БАНАН ПО ЖЕЛАНИЮ)' }
        ]
      },
      {
        name: 'Десерты',
        image: 'images/tatlı.png',
        items: [
          { name: 'МАГНОЛИЯ', price: '₺ 290', description: '' },
          { name: 'БИСКВИТНЫЙ ТОРТ', price: '₺ 290', description: '' },
          { name: 'САН СЕБАСТИАН', price: '₺ 290', description: '' },
          { name: 'БРАУНИ', price: '₺ 290', description: '' },
          { name: 'ШОКОЛАДНЫЙ ЧИЗКЕЙК', price: '₺ 290', description: '' },
          { name: 'МОЗАИЧНЫЙ ТОРТ', price: '₺ 290', description: '' },
          { name: 'ТИРАМИСУ', price: '₺ 290', description: '' },
          { name: 'ТРИЛИЧЕ', price: '₺ 290', description: '' },
          { name: 'Ибица', price: '₺ 290', description: '' },
          { name: 'ПАВЛОВА', price: '₺ 340', description: '' }
        ]
      },
      {
        name: 'ГОРЯЧИЙ КОФЕ',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'КАПУЧИНО', price: '₺ 160', description: '' },
          { name: 'МОЧА', price: '₺ 180', description: '' },
          { name: 'БЕЛАЯ МОЧА', price: '₺ 180', description: '' },
          { name: 'ЭСПРЕССО МАККИАТО', price: '₺ 130', description: '' },
          { name: 'КОРТАДО', price: '₺ 140', description: '' },
          { name: 'ФЛЕТ УАЙТ', price: '₺ 160', description: '' },
          { name: 'ЛАТТЕ МАККИАТО', price: '₺ 150', description: '' },
          { name: 'ЭСПРЕССО', price: '₺ 105', description: '' },
          { name: 'ДВОЙНОЙ ЭСПРЕССО', price: '₺ 115', description: '' },
          { name: 'АМЕРИКАНО', price: '₺ 150', description: '' },
          { name: 'ЛАТТЕ', price: '₺ 160', description: '' },
          { name: 'АРОМАТИЗИРОВАННЫЙ ЛАТТЕ', price: '₺ 180', description: '' },
          { name: 'ФИЛЬТРОВАННЫЙ КОФЕ', price: '₺ 150', description: '' },
          { name: 'МОЛОЧНЫЙ ФИЛЬТРОВАННЫЙ КОФЕ', price: '₺ 160', description: '' },
          { name: 'МИНДАЛЬНОЕ МОЛОКО', price: '₺ 50', description: '' },
          { name: 'БЕЗЛАКТОЗНОЕ МОЛОКО', price: '₺ 40', description: '' }
        ]
      },
      {
        name: 'Лимонады',
        image: 'images/limonata.png',
        items: [
          { name: 'ПРОСТОЙ ЛИМОНАД', price: '₺ 170', description: '' },
          { name: 'МЯТНЫЙ ЛИМОНАД', price: '₺ 180', description: '' },
          { name: 'ЯБЛОЧНЫЙ ЛИМОНАД', price: '₺ 180', description: '' },
          { name: 'ЛЕСНОЙ ФРУКТОВЫЙ ЛИМОНАД', price: '₺ 190', description: '' },
          { name: 'КЛУБНИЧНЫЙ ЛИМОНАД', price: '₺ 190', description: '' },
          { name: 'ЛИМОНАД С БАЗИЛИКОМ', price: '₺ 180', description: '' },
          { name: 'СИНИЙ ВИНОГРАД', price: '₺ 240', description: '' },
          { name: 'КРАСНАЯ МЕЧТА', price: '₺ 240', description: '' }
        ]
      },
      {
        name: 'ФРАППЕ - МИЛКШЕЙК - ФРАППУЧИНО',
        image: 'images/milkshake.png',
        items: [
          { name: 'ШОКОЛАДНЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'БЕЛЫЙ ШОКОЛАДНЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'БАНАНОВЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'КЛУБНИЧНЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'МАНГОВЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'АРБУЗНЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'КОКОСОВЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'КОФЕЙНЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'ПЕРСИКОВЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'ВАНИЛЬНЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'КРАСНЫЙ ЛЕСНОЙ ФРУКТОВЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'КАРАМЕЛЬНЫЙ ФРАППУЧИНО', price: '₺ 190', description: '' },
          { name: 'ШОКОЛАДНЫЙ ФРАППУЧИНО', price: '₺ 190', description: '' },
          { name: 'ВАНИЛЬНЫЙ ФРАППУЧИНО', price: '₺ 190', description: '' },
          { name: 'КАРАМЕЛЬНЫЙ ФРАППЕ', price: '₺ 190', description: '' },
          { name: 'КЛУБНИЧНЫЙ МИЛКШЕЙК', price: '₺ 190', description: '' },
          { name: 'ОРЕО МИЛКШЕЙК', price: '₺ 190', description: '' },
          { name: 'КАРАМЕЛЬНЫЙ МИЛКШЕЙК', price: '₺ 190', description: '' },
          { name: 'ШОКОЛАДНЫЙ МИЛКШЕЙК', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'СМУЗИ - ЗАМОРОЖЕННЫЙ',
        image: 'images/smoothie.png',
        items: [
          { name: 'ПЕРСИКОВЫЙ СМУЗИ', price: '₺ 190', description: '' },
          { name: 'КЛУБНИЧНЫЙ СМУЗИ', price: '₺ 190', description: '' },
          { name: 'АРБУЗНЫЙ СМУЗИ', price: '₺ 190', description: '' },
          { name: 'МАНГОВЫЙ СМУЗИ', price: '₺ 190', description: '' },
          { name: 'ЛЕСНОЙ ФРУКТОВЫЙ СМУЗИ', price: '₺ 190', description: '' },
          { name: 'ЧЕРНОСМОРОДИНОВЫЙ СМУЗИ', price: '₺ 190', description: '' },
          { name: 'ПЕРСИКОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 190', description: '' },
          { name: 'КЛУБНИЧНЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 190', description: '' },
          { name: 'АРБУЗНЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 190', description: '' },
          { name: 'МАНГОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 190', description: '' },
          { name: 'ЛЕСНОЙ ФРУКТОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 190', description: '' },
          { name: 'ЧЕРНОСМОРОДИНОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 190', description: '' },
          { name: 'НОТ-МИКС', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'ГОРЯЧИЕ НАПИТКИ',
        image: 'images/chocolate.png',
        items: [
          { name: 'ГОРЯЧИЙ ШОКОЛАД', price: '₺ 170', description: '' },
          { name: 'БЕЛЫЙ ГОРЯЧИЙ ШОКОЛАД', price: '₺ 170', description: '' },
          { name: 'САХЛЕП', price: '₺ 170', description: '' },
          { name: 'МЕДОВОЕ МОЛОКО', price: '₺ 140', description: '' }
        ]
      },
      {
        name: 'ХОЛОДНЫЙ КОФЕ',
        image: 'images/ice.png',
        items: [
          { name: 'ЛЕДЯНОЙ АМЕРИКАНО', price: '₺ 160', description: '' },
          { name: 'ЛЕДЯНОЙ ЛАТТЕ', price: '₺ 170', description: '' },
          { name: 'ЛЕДЯНАЯ МОЧА', price: '₺ 190', description: '' },
          { name: 'ЛЕДЯНОЙ КАРАМЕЛЬНЫЙ МАККИАТО', price: '₺ 190', description: '' },
          { name: 'ЛЕДЯНОЙ ФИЛЬТРОВАННЫЙ КОФЕ', price: '₺ 160', description: '' },
          { name: 'ЛЕДЯНОЙ ЧАЙНЫЙ ЛАТТЕ', price: '₺ 190', description: '' },
          { name: 'ЛЕДЯНОЙ ИРЛАНДСКИЙ КРЕМ', price: '₺ 190', description: '' },
          { name: 'ЛЕДЯНОЙ АРОМАТИЗИРОВАННЫЙ ЛАТТЕ', price: '₺ 190', description: '' },
          { name: 'ЛЕДЯНАЯ БЕЛАЯ МОЧА', price: '₺ 190', description: '' },
          { name: 'ЛЕДЯНОЙ ФЛЕТ УАЙТ', price: '₺ 170', description: '' },
          { name: 'ЛЕДЯНАЯ БЕРРИ БЕЛАЯ', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'ЧАЙ - ТРАВЯНЫЕ ЧАИ',
        image: 'images/caylar.jpg',
        items: [
          { name: 'ЧАЙ', price: '₺ 60', description: '' },
          { name: 'ЧАШКА ЧАЯ', price: '₺ 80', description: '' },
          { name: 'ЧАЙ НА ВЫНОС', price: '₺ 90', description: '' },
          { name: 'ЗИМНИЙ ЧАЙ', price: '₺ 160', description: '' },
          { name: 'АДА ЧАЙ', price: '₺ 170', description: '' },
          { name: 'ЛИПОВЫЙ', price: '₺ 160', description: '' },
          { name: 'ШИПОВНИК', price: '₺ 160', description: '' },
          { name: 'ЗЕЛЕНЫЙ ЧАЙ', price: '₺ 160', description: '' },
          { name: 'РОМАШКА', price: '₺ 160', description: '' },
          { name: 'МЯТНЫЙ ЛИМОН', price: '₺ 160', description: '' },
          { name: 'МЕЛИССА', price: '₺ 160', description: '' },
          { name: 'ФЕНХЕЛЬ', price: '₺ 160', description: '' }
        ]
      },
      {
        name: 'ТУРЕЦКИЙ КОФЕ',
        image: 'images/tr.png',
        items: [
          { name: 'ТУРЕЦКИЙ КОФЕ', price: '₺ 110', description: '' },
          { name: 'ТАРСУСКИЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 120', description: '' },
          { name: 'МОЛОЧНЫЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 125', description: '' },
          { name: 'ДВОЙНОЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 125', description: '' },
          { name: 'ДАМЛА САКЫЗЛЫ ТУРЕЦКИЙ КОФЕ', price: '₺ 120', description: '' },
          { name: 'ДАМЛА САКЫЗЛЫ ТАРСУСКИЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 125', description: '' },
          { name: 'ДИБЕК', price: '₺ 125', description: '' }
        ]
      },
      {
        name: 'ХОЛОДНЫЕ НАПИТКИ И ОБСЛУЖИВАНИЕ',
        image: 'images/cola.png',
        items: [
          { name: 'ФРУКТОВАЯ СОДА', price: '₺ 90', description: '' },
          { name: 'ПРОСТАЯ СОДА', price: '₺ 70', description: '' },
          { name: 'БУТЫЛИРОВАННАЯ ВОДА', price: '₺ 40', description: '' },
          { name: 'ЧЕРЧИЛЛ', price: '₺ 100', description: '' },
          { name: 'ФЬЮЗ ТИ', price: '₺ 100', description: '' },
          { name: 'КОКА КОЛА', price: '₺ 100', description: '' },
          { name: 'ОБСЛУЖИВАНИЕ', price: '₺ 50', description: '' },
          { name: 'РЕД БУЛЛ', price: '₺ 150', description: '' }
        ]
      },
      {
        name: 'ТОСТ',
        image: 'images/tost.png',
        items: [
          { name: 'СЫРНЫЙ ТОСТ', price: '₺ 180', description: '' },
          { name: 'СМЕШАННЫЙ ТОСТ', price: '₺ 220', description: 'КОЛБАСА, СЫР' },
          { name: 'АЙВАЛЫКСКИЙ ТОСТ', price: '₺ 250', description: 'КОЛБАСА, СЫР, МАРИНОВАННЫЕ ОГУРЦЫ, КЕТЧУП, СОСИСКИ' }
        ]
      },
      {
        name: 'КУЛ МИКС',
        image: 'images/cool.png',
        items: [
          { name: 'МАНГОВЫЙ МИКС', price: '₺ 220', description: '' },
          { name: 'БЕРРИ МИКС', price: '₺ 220', description: '' },
          { name: 'КУЛ ЛАЙМ МИКС', price: '₺ 220', description: '' },
          { name: 'АРБУЗНЫЙ МИКС', price: '₺ 220', description: '' },
          { name: 'ГРАНАТОВЫЙ АРБУЗНЫЙ МИКС', price: '₺ 220', description: '' },
          { name: 'МЯТНЫЙ ЛИМОННЫЙ МИКС', price: '₺ 220', description: '' }
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
