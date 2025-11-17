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
          { name: 'ORTA BOY KLASIK KRUVASAN', price: '₺ 200', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET' },
          { name: 'BÜYÜK BOY KLASIK KRUVASAN', price: '₺ 250', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET' },
          { name: 'ORTA BOY KURU DOMATES KRUVASAN', price: '₺ 200', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ' },
          { name: 'BÜYÜK BOY KURU DOMATES KRUVASAN', price: '₺ 250', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ' },
          { name: 'ORTA BOY TON BALIKLI KRUVASAN', price: '₺ 210', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK' },
          { name: 'BÜYÜK BOY TON BALIKLI KRUVASAN', price: '₺ 260', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK' },
          { name: 'ORTA BOY FISTIKLI KRUVASAN', price: '₺ 260', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİKOLATA' },
          { name: 'BÜYÜK BOY FISTIKLI KRUVASAN', price: '₺ 310', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİKOLATA İSTEĞE GÖRE (ÇİLEK , MUZ)' },
          { name: 'ORTA BOY ÇİKOLATALI KRUVASAN', price: '₺ 250', description: 'KREMA , SÜTLÜ ÇİKOLATA , BADEM , ÇİLEK İSTEĞE GÖRE (ÇİLEK , MUZ) & (BADEM , FINDIK)' },
          { name: 'BÜYÜK BOY ÇİKOLATALI KRUVASAN', price: '₺ 300', description: 'KREMA , SÜTLÜ ÇİKOLATA , BADEM İSTEĞE GÖRE (ÇİLEK , MUZ)' }
        ]
      },
      {
        name: 'Tatlılar',
        image: 'images/tatlı.png', // Placeholder image
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
        name: 'Limonatalar',
        image: 'images/limonata.png', // Placeholder image
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
        image: 'images/milkshake.png', // Placeholder image
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
          { name: 'KARAMEL MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'ÇİKOLATALI MILKSHAKE', price: '₺ 175', description: '' }
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/smoothie.png', // Placeholder image
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
        image: 'images/chocolate.png', // Placeholder image
        items: [
          { name: 'SICAK ÇİKOLATA', price: '₺ 150', description: '' },
          { name: 'BEYAZ SICAK ÇİKOLATA', price: '₺ 150', description: '' },
          { name: 'SAHLEP', price: '₺ 150', description: '' },
          { name: 'BALLI SÜT', price: '₺ 120', description: '' }
        ]
      },
      {
        name: 'SOĞUK KAHVELER',
        image: 'images/ice.png',
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
        image: 'images/tr.png', // Placeholder image
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
        image: 'images/cola.png', // Placeholder image
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
        image: 'images/tost.png', // Placeholder image
        items: [
          { name: 'Kaşarlı Tost', price: '₺ 150', description: '' },
          { name: 'Karışık Tost', price: '₺ 180', description: 'Salam , Kaşar' },
          { name: 'Ayvalık Tost', price: '₺ 190', description: 'Salam , Kaşar , Turşu , Ketçap , Sosis' }
        ]
      },
      {
        name: 'COOL MİXX',
        image: 'images/cool.png', // Placeholder image
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
        image: 'images/kruvasan.png',
        items: [
          { name: 'MEDIUM CLASSIC CROISSANT', price: '₺ 200', description: 'CUCUMBER, LETTUCE, TOMATO, CHEDDAR CHEESE, SMOKED MEAT' },
          { name: 'LARGE CLASSIC CROISSANT', price: '₺ 250', description: 'CUCUMBER, LETTUCE, TOMATO, CHEDDAR CHEESE, SMOKED MEAT' },
          { name: 'MEDIUM SUN-DRIED TOMATO CROISSANT', price: '₺ 200', description: 'CUCUMBER, LETTUCE, TOMATO, SUN-DRIED TOMATO, FETA CHEESE' },
          { name: 'LARGE SUN-DRIED TOMATO CROISSANT', price: '₺ 250', description: 'CUCUMBER, LETTUCE, TOMATO, SUN-DRIED TOMATO, FETA CHEESE' },
          { name: 'MEDIUM TUNA CROISSANT', price: '₺ 210', description: 'FETA CHEESE, CORN SAUCE, TUNA, LETTUCE, CUCUMBER' },
          { name: 'LARGE TUNA CROISSANT', price: '₺ 260', description: 'FETA CHEESE, CORN SAUCE, TUNA, LETTUCE, CUCUMBER' },
          { name: 'MEDIUM PISTACHIO CROISSANT', price: '₺ 260', description: 'PISTACHIO, CREAM, MILK CHOCOLATE' },
          { name: 'LARGE PISTACHIO CROISSANT', price: '₺ 310', description: 'PISTACHIO, CREAM, MILK CHOCOLATE (STRAWBERRY, BANANA OPTIONAL)' },
          { name: 'MEDIUM CHOCOLATE CROISSANT', price: '₺ 250', description: 'CREAM, MILK CHOCOLATE, ALMOND, STRAWBERRY (STRAWBERRY, BANANA & ALMOND, HAZELNUT OPTIONAL)' },
          { name: 'LARGE CHOCOLATE CROISSANT', price: '₺ 300', description: 'CREAM, MILK CHOCOLATE, ALMOND (STRAWBERRY, BANANA OPTIONAL)' }
        ]
      },
      {
        name: 'Desserts',
        image: 'images/tatlı.png',
        items: [
          { name: 'PAVLOVA', price: '₺ 300', description: '' },
          { name: 'DUBAI CHOCOLATE BROWNIE', price: '₺ 350', description: '' },
          { name: 'MAGNOLIA', price: '₺ 250', description: '' },
          { name: 'SPONGE CAKE', price: '₺ 250', description: '' },
          { name: 'SAN SEBASTIAN', price: '₺ 250', description: '' },
          { name: 'PANCAKE (SKEWER)', price: '₺ 250', description: '' },
          { name: 'PANCAKE (PLATE)', price: '₺ 280', description: '' },
          { name: 'BROWNIE', price: '₺ 260', description: '' },
          { name: 'DONUT', price: '₺ 180', description: '' },
          { name: 'CHOCOLATE CHEESECAKE', price: '₺ 250', description: '' },
          { name: 'PISTACHIO VELVET', price: '₺ 250', description: '' },
          { name: 'MOSAIC CAKE', price: '₺ 250', description: '' },
          { name: 'DUBAI CHOCOLATE MAGNOLIA', price: '₺ 350', description: '' },
          { name: 'DUBAI CHOCOLATE CHEESECAKE', price: '₺ 350', description: '' },
          { name: 'RICE PUDDING', price: '₺ 250', description: '' },
          { name: 'TIRAMISU', price: '₺ 250', description: '' },
          { name: 'PARIS BREST', price: '₺ 250', description: '' },
          { name: 'BANANA ROLL', price: '₺ 250', description: '' },
          { name: 'TRILICE', price: '₺ 250', description: '' },
          { name: 'WHITE FOREST PEARL', price: '₺ 250', description: '' },
          { name: 'CEDRIC GROLET PISTACHIO', price: '₺ 400', description: '' },
          { name: 'PROFITEROL', price: '₺ 250', description: '' },
          { name: 'SUNFLOWER SEED COOKIE (BOX)', price: '₺ 100', description: '' },
          { name: 'MACADAMIA HAZELNUT & MILK CHOCOLATE COOKIE (BOX)', price: '₺ 100', description: '' },
          { name: 'BROWNIE COOKIE', price: '₺ 70', description: '' },
          { name: 'MACADAMIA HAZELNUT & MILK CHOCOLATE COOKIE', price: '₺ 70', description: '' },
          { name: 'LEMON & WHITE CHOCOLATE COOKIE', price: '₺ 70', description: '' },
          { name: 'MILK CHOCOLATE COOKIE', price: '₺ 70', description: '' }
        ]
      },
      {
        name: 'HOT COFFEES',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'CAPPUCCINO', price: '₺ 140', description: '' },
          { name: 'MOCHA', price: '₺ 160', description: '' },
          { name: 'WHITE MOCHA', price: '₺ 160', description: '' },
          { name: 'ESPRESSO MACCHIATO', price: '₺ 110', description: '' },
          { name: 'CORTADO', price: '₺ 120', description: '' },
          { name: 'FLAT WHITE', price: '₺ 140', description: '' },
          { name: 'LATTE MACCHIATO', price: '₺ 130', description: '' },
          { name: 'ESPRESSO', price: '₺ 85', description: '' },
          { name: 'DOUBLE ESPRESSO', price: '₺ 95', description: '' },
          { name: 'AMERICANO', price: '₺ 130', description: '' },
          { name: 'LATTE', price: '₺ 140', description: '' },
          { name: 'FLAVORED LATTE', price: '₺ 160', description: '' },
          { name: 'FILTER COFFEE', price: '₺ 130', description: '' },
          { name: 'MILKY FILTER COFFEE', price: '₺ 140', description: '' },
          { name: 'ALMOND MILK', price: '₺ 30', description: '' },
          { name: 'LACTOSE-FREE MILK', price: '₺ 20', description: '' }
        ]
      },
      {
        name: 'Lemonades',
        image: 'images/limonata.png',
        items: [
          { name: 'PLAIN LEMONADE', price: '₺ 120', description: '' },
          { name: 'MINT LEMONADE', price: '₺ 130', description: '' },
          { name: 'APPLE LEMONADE', price: '₺ 130', description: '' },
          { name: 'FOREST FRUIT LEMONADE', price: '₺ 140', description: '' },
          { name: 'STRAWBERRY LEMONADE', price: '₺ 140', description: '' },
          { name: 'BASIL LEMONADE', price: '₺ 130', description: '' },
          { name: 'BLUE GRAPE', price: '₺ 190', description: '' },
          { name: 'RED DREAM', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/milkshake.png',
        items: [
          { name: 'CHOCOLATE FRAPPE', price: '₺ 175', description: '' },
          { name: 'WHITE CHOCOLATE FRAPPE', price: '₺ 175', description: '' },
          { name: 'BANANA FRAPPE', price: '₺ 175', description: '' },
          { name: 'STRAWBERRY FRAPPE', price: '₺ 175', description: '' },
          { name: 'MANGO FRAPPE', price: '₺ 175', description: '' },
          { name: 'MELON FRAPPE', price: '₺ 175', description: '' },
          { name: 'COCONUT FRAPPE', price: '₺ 175', description: '' },
          { name: 'COFFEE FRAPPE', price: '₺ 175', description: '' },
          { name: 'PEACH FRAPPE', price: '₺ 175', description: '' },
          { name: 'VANILLA FRAPPE', price: '₺ 175', description: '' },
          { name: 'RED FOREST FRUIT FRAPPE', price: '₺ 175', description: '' },
          { name: 'CARAMEL FRAPPUCCINO', price: '₺ 175', description: '' },
          { name: 'CHOCOLATE FRAPPUCCINO', price: '₺ 175', description: '' },
          { name: 'VANILLA FRAPPUCCINO', price: '₺ 175', description: '' },
          { name: 'CARAMEL FRAPPE', price: '₺ 175', description: '' },
          { name: 'STRAWBERRY MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'OREO MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'CARAMEL MILKSHAKE', price: '₺ 175', description: '' },
          { name: 'CHOCOLATE MILKSHAKE', price: '₺ 175', description: '' }
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/smoothie.png',
        items: [
          { name: 'PEACH SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'STRAWBERRY SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'WATERMELON SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'MANGO SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'FOREST FRUIT SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'BLACKCURRANT SMOOTHIE', price: '₺ 175', description: '' },
          { name: 'PEACH FROZEN', price: '₺ 175', description: '' },
          { name: 'STRAWBERRY FROZEN', price: '₺ 175', description: '' },
          { name: 'WATERMELON FROZEN', price: '₺ 175', description: '' },
          { name: 'MANGO FROZEN', price: '₺ 175', description: '' },
          { name: 'FOREST FRUIT FROZEN', price: '₺ 175', description: '' },
          { name: 'BLACKCURRANT FROZEN', price: '₺ 175', description: '' },
          { name: 'NOTH-MIX', price: '₺ 175', description: '' }
        ]
      },
      {
        name: 'HOT DRINKS',
        image: 'images/chocolate.png',
        items: [
          { name: 'HOT CHOCOLATE', price: '₺ 150', description: '' },
          { name: 'WHITE HOT CHOCOLATE', price: '₺ 150', description: '' },
          { name: 'SAHLEP', price: '₺ 150', description: '' },
          { name: 'HONEY MILK', price: '₺ 120', description: '' }
        ]
      },
      {
        name: 'COLD COFFEES',
        image: 'images/ice.png',
        items: [
          { name: 'ICE AMERICANO', price: '₺ 140', description: '' },
          { name: 'ICE LATTE', price: '₺ 150', description: '' },
          { name: 'ICE MOCHA', price: '₺ 170', description: '' },
          { name: 'ICE CARAMEL MACCHIATO', price: '₺ 170', description: '' },
          { name: 'ICE FILTER COFFEE', price: '₺ 150', description: '' },
          { name: 'ICE CHAI TEA LATTE', price: '₺ 150', description: '' },
          { name: 'ICE IRISH CREAM', price: '₺ 170', description: '' },
          { name: 'ICE FLAVORED LATTE', price: '₺ 170', description: '' },
          { name: 'ICE WHITE MOCHA', price: '₺ 170', description: '' },
          { name: 'ICE FLAT WHITE', price: '₺ 150', description: '' },
          { name: 'ICE BERRY WHITE', price: '₺ 170', description: '' }
        ]
      },
      {
        name: 'TEA - HERBAL TEAS',
        image: 'images/caylar.jpg',
        items: [
          { name: 'TEA', price: '₺ 50', description: '' },
          { name: 'TEA CUP', price: '₺ 70', description: '' },
          { name: 'TAKEAWAY TEA', price: '₺ 80', description: '' },
          { name: 'WINTER TEA', price: '₺ 130', description: '' },
          { name: 'ADA TEA', price: '₺ 140', description: '' },
          { name: 'LINDEN', price: '₺ 130', description: '' },
          { name: 'ROSEHIP', price: '₺ 130', description: '' },
          { name: 'GREEN TEA', price: '₺ 130', description: '' },
          { name: 'CHAMOMILE', price: '₺ 130', description: '' },
          { name: 'MINT LEMON', price: '₺ 130', description: '' },
          { name: 'MELISSA', price: '₺ 130', description: '' },
          { name: 'FENNEL', price: '₺ 130', description: '' }
        ]
      },
      {
        name: 'TURKISH COFFEE',
        image: 'images/tr.png',
        items: [
          { name: 'TURKISH COFFEE', price: '₺ 100', description: '' },
          { name: 'TARSUS TURKISH COFFEE', price: '₺ 110', description: '' },
          { name: 'MILKY TURKISH COFFEE', price: '₺ 115', description: '' },
          { name: 'DOUBLE TURKISH COFFEE', price: '₺ 115', description: '' },
          { name: 'DAMLA SAKIZLI TURKISH COFFEE', price: '₺ 110', description: '' },
          { name: 'DAMLA SAKIZLI TARSUS TURKISH COFFEE', price: '₺ 115', description: '' },
          { name: 'DIBEK', price: '₺ 115', description: '' }
        ]
      },
      {
        name: 'COLD BEVERAGES & SERVICE',
        image: 'images/cola.png',
        items: [
          { name: 'FRUIT SODA', price: '₺ 70', description: '' },
          { name: 'PLAIN SODA', price: '₺ 50', description: '' },
          { name: 'BOTTLED WATER', price: '₺ 35', description: '' },
          { name: 'CHURCHILL', price: '₺ 75', description: '' },
          { name: 'FUSE TEA', price: '₺ 90', description: '' },
          { name: 'COCA COLA', price: '₺ 90', description: '' },
          { name: 'SERVICE', price: '₺ 40', description: '' },
          { name: 'RED BULL', price: '₺ 140', description: '' }
        ]
      },
      {
        name: 'TOAST',
        image: 'images/tost.png',
        items: [
          { name: 'CHEESE TOAST', price: '₺ 150', description: '' },
          { name: 'MIXED TOAST', price: '₺ 180', description: 'SALAMI, CHEESE' },
          { name: 'AYVALIK TOAST', price: '₺ 190', description: 'SALAMI, CHEESE, PICKLE, KETCHUP, SAUSAGE' }
        ]
      },
      {
        name: 'COOL MIX',
        image: 'images/cool.png',
        items: [
          { name: 'MANGO MIX', price: '₺ 180', description: '' },
          { name: 'BERRY MIX', price: '₺ 180', description: '' },
          { name: 'COOL LIME MIX', price: '₺ 180', description: '' },
          { name: 'WATERMELON MIX', price: '₺ 180', description: '' },
          { name: 'POMEGRANATE MELON MIX', price: '₺ 180', description: '' },
          { name: 'MINT LEMON MIX', price: '₺ 180', description: '' }
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
          { name: 'СРЕДНИЙ КЛАССИЧЕСКИЙ КРУАССАН', price: '₺ 200', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СЫР ЧЕДДЕР, КОПЧЕНОЕ МЯСО' },
          { name: 'БОЛЬШОЙ КЛАССИЧЕСКИЙ КРУАССАН', price: '₺ 250', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СЫР ЧЕДДЕР, КОПЧЕНОЕ МЯСО' },
          { name: 'СРЕДНИЙ КРУАССАН С СУШЕНЫМИ ТОМАТАМИ', price: '₺ 200', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СУШЕНЫЕ ТОМАТЫ, СЫР ФЕТА' },
          { name: 'БОЛЬШОЙ КРУАССАН С СУШЕНЫМИ ТОМАТАМИ', price: '₺ 250', description: 'ОГУРЕЦ, САЛАТ, ТОМАТ, СУШЕНЫЕ ТОМАТЫ, СЫР ФЕТА' },
          { name: 'СРЕДНИЙ КРУАССАН С ТУНЦОМ', price: '₺ 210', description: 'СЫР ФЕТА, КУКУРУЗНЫЙ СОУС, ТУНЕЦ, САЛАТ, ОГУРЕЦ' },
          { name: 'БОЛЬШОЙ КРУАССАН С ТУНЦОМ', price: '₺ 260', description: 'СЫР ФЕТА, КУКУРУЗНЫЙ СОУС, ТУНЕЦ, САЛАТ, ОГУРЕЦ' },
          { name: 'СРЕДНИЙ КРУАССАН С ФИСТАШКАМИ', price: '₺ 260', description: 'ФИСТАШКИ, КРЕМ, МОЛОЧНЫЙ ШОКОЛАД' },
          { name: 'БОЛЬШОЙ КРУАССАН С ФИСТАШКАМИ', price: '₺ 310', description: 'ФИСТАШКИ, КРЕМ, МОЛОЧНЫЙ ШОКОЛАД (КЛУБНИКА, БАНАН ПО ЖЕЛАНИЮ)' },
          { name: 'СРЕДНИЙ ШОКОЛАДНЫЙ КРУАССАН', price: '₺ 250', description: 'КРЕМ, МОЛОЧНЫЙ ШОКОЛАД, МИНДАЛЬ, КЛУБНИКА (КЛУБНИКА, БАНАН & МИНДАЛЬ, ФУНДУК ПО ЖЕЛАНИЮ)' },
          { name: 'БОЛЬШОЙ ШОКОЛАДНЫЙ КРУАССАН', price: '₺ 300', description: 'КРЕМ, МОЛОЧНЫЙ ШОКОЛАД, МИНДАЛЬ (КЛУБНИКА, БАНАН ПО ЖЕЛАНИЮ)' }
        ]
      },
      {
        name: 'Десерты',
        image: 'images/tatlı.png',
        items: [
          { name: 'ПАВЛОВА', price: '₺ 300', description: '' },
          { name: 'ДУБАЙСКИЙ ШОКОЛАДНЫЙ БРАУНИ', price: '₺ 350', description: '' },
          { name: 'МАГНОЛИЯ', price: '₺ 250', description: '' },
          { name: 'БИСКВИТНЫЙ ТОРТ', price: '₺ 250', description: '' },
          { name: 'САН СЕБАСТИАН', price: '₺ 250', description: '' },
          { name: 'БЛИНЧИКИ (НА ШПАЖКЕ)', price: '₺ 250', description: '' },
          { name: 'БЛИНЧИКИ (ТАРЕЛКА)', price: '₺ 280', description: '' },
          { name: 'БРАУНИ', price: '₺ 260', description: '' },
          { name: 'ПОНЧИК', price: '₺ 180', description: '' },
          { name: 'ШОКОЛАДНЫЙ ЧИЗКЕЙК', price: '₺ 250', description: '' },
          { name: 'ФИСТАШКОВЫЙ ВЕЛЬВЕТ', price: '₺ 250', description: '' },
          { name: 'МОЗАИЧНЫЙ ТОРТ', price: '₺ 250', description: '' },
          { name: 'ДУБАЙСКАЯ МАГНОЛИЯ С ШОКОЛАДОМ', price: '₺ 350', description: '' },
          { name: 'ДУБАЙСКИЙ ЧИЗКЕЙК С ШОКОЛАДОМ', price: '₺ 350', description: '' },
          { name: 'РИСОВЫЙ ПУДИНГ', price: '₺ 250', description: '' },
          { name: 'ТИРАМИСУ', price: '₺ 250', description: '' },
          { name: 'ПАРИЖСКИЙ БРЕСТ', price: '₺ 250', description: '' },
          { name: 'БАНАНОВЫЙ РУЛЕТ', price: '₺ 250', description: '' },
          { name: 'ТРИЛИЧЕ', price: '₺ 250', description: '' },
          { name: 'БЕЛЫЙ ЛЕСНОЙ ЖЕМЧУГ', price: '₺ 250', description: '' },
          { name: 'ЦЕДРИК ГРОЛЕТ ФИСТАШКИ', price: '₺ 400', description: '' },
          { name: 'ПРОФИТЕРОЛЬ', price: '₺ 250', description: '' },
          { name: 'ПЕЧЕНЬЕ С ПОДСОЛНЕЧНЫМИ СЕМЕЧКАМИ (КОРОБКА)', price: '₺ 100', description: '' },
          { name: 'ПЕЧЕНЬЕ С МАКАДАМИЕЙ, ФУНДУКОМ И МОЛОЧНЫМ ШОКОЛАДОМ (КОРОБКА)', price: '₺ 100', description: '' },
          { name: 'БРАУНИ-ПЕЧЕНЬЕ', price: '₺ 70', description: '' },
          { name: 'ПЕЧЕНЬЕ С МАКАДАМИЕЙ, ФУНДУКОМ И МОЛОЧНЫМ ШОКОЛАДОМ', price: '₺ 70', description: '' },
          { name: 'ЛИМОННОЕ И БЕЛОЕ ШОКОЛАДНОЕ ПЕЧЕНЬЕ', price: '₺ 70', description: '' },
          { name: 'МОЛОЧНОЕ ШОКОЛАДНОЕ ПЕЧЕНЬЕ', price: '₺ 70', description: '' }
        ]
      },
      {
        name: 'ГОРЯЧИЙ КОФЕ',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'КАПУЧИНО', price: '₺ 140', description: '' },
          { name: 'МОЧА', price: '₺ 160', description: '' },
          { name: 'БЕЛАЯ МОЧА', price: '₺ 160', description: '' },
          { name: 'ЭСПРЕССО МАККИАТО', price: '₺ 110', description: '' },
          { name: 'КОРТАДО', price: '₺ 120', description: '' },
          { name: 'ФЛЕТ УАЙТ', price: '₺ 140', description: '' },
          { name: 'ЛАТТЕ МАККИАТО', price: '₺ 130', description: '' },
          { name: 'ЭСПРЕССО', price: '₺ 85', description: '' },
          { name: 'ДВОЙНОЙ ЭСПРЕССО', price: '₺ 95', description: '' },
          { name: 'АМЕРИКАНО', price: '₺ 130', description: '' },
          { name: 'ЛАТТЕ', price: '₺ 140', description: '' },
          { name: 'АРОМАТИЗИРОВАННЫЙ ЛАТТЕ', price: '₺ 160', description: '' },
          { name: 'ФИЛЬТРОВАННЫЙ КОФЕ', price: '₺ 130', description: '' },
          { name: 'МОЛОЧНЫЙ ФИЛЬТРОВАННЫЙ КОФЕ', price: '₺ 140', description: '' },
          { name: 'МИНДАЛЬНОЕ МОЛОКО', price: '₺ 30', description: '' },
          { name: 'БЕЗЛАКТОЗНОЕ МОЛОКО', price: '₺ 20', description: '' }
        ]
      },
      {
        name: 'Лимонады',
        image: 'images/limonata.png',
        items: [
          { name: 'ПРОСТОЙ ЛИМОНАД', price: '₺ 120', description: '' },
          { name: 'МЯТНЫЙ ЛИМОНАД', price: '₺ 130', description: '' },
          { name: 'ЯБЛОЧНЫЙ ЛИМОНАД', price: '₺ 130', description: '' },
          { name: 'ЛЕСНОЙ ФРУКТОВЫЙ ЛИМОНАД', price: '₺ 140', description: '' },
          { name: 'КЛУБНИЧНЫЙ ЛИМОНАД', price: '₺ 140', description: '' },
          { name: 'ЛИМОНАД С БАЗИЛИКОМ', price: '₺ 130', description: '' },
          { name: 'СИНИЙ ВИНОГРАД', price: '₺ 190', description: '' },
          { name: 'КРАСНАЯ МЕЧТА', price: '₺ 190', description: '' }
        ]
      },
      {
        name: 'ФРАППЕ - МИЛКШЕЙК - ФРАППУЧИНО',
        image: 'images/milkshake.png',
        items: [
          { name: 'ШОКОЛАДНЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'БЕЛЫЙ ШОКОЛАДНЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'БАНАНОВЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'КЛУБНИЧНЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'МАНГОВЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'АРБУЗНЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'КОКОСОВЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'КОФЕЙНЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'ПЕРСИКОВЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'ВАНИЛЬНЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'КРАСНЫЙ ЛЕСНОЙ ФРУКТОВЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'КАРАМЕЛЬНЫЙ ФРАППУЧИНО', price: '₺ 175', description: '' },
          { name: 'ШОКОЛАДНЫЙ ФРАППУЧИНО', price: '₺ 175', description: '' },
          { name: 'ВАНИЛЬНЫЙ ФРАППУЧИНО', price: '₺ 175', description: '' },
          { name: 'КАРАМЕЛЬНЫЙ ФРАППЕ', price: '₺ 175', description: '' },
          { name: 'КЛУБНИЧНЫЙ МИЛКШЕЙК', price: '₺ 175', description: '' },
          { name: 'ОРЕО МИЛКШЕЙК', price: '₺ 175', description: '' },
          { name: 'КАРАМЕЛЬНЫЙ МИЛКШЕЙК', price: '₺ 175', description: '' },
          { name: 'ШОКОЛАДНЫЙ МИЛКШЕЙК', price: '₺ 175', description: '' }
        ]
      },
      {
        name: 'СМУЗИ - ЗАМОРОЖЕННЫЙ',
        image: 'images/smoothie.png',
        items: [
          { name: 'ПЕРСИКОВЫЙ СМУЗИ', price: '₺ 175', description: '' },
          { name: 'КЛУБНИЧНЫЙ СМУЗИ', price: '₺ 175', description: '' },
          { name: 'АРБУЗНЫЙ СМУЗИ', price: '₺ 175', description: '' },
          { name: 'МАНГОВЫЙ СМУЗИ', price: '₺ 175', description: '' },
          { name: 'ЛЕСНОЙ ФРУКТОВЫЙ СМУЗИ', price: '₺ 175', description: '' },
          { name: 'ЧЕРНОСМОРОДИНОВЫЙ СМУЗИ', price: '₺ 175', description: '' },
          { name: 'ПЕРСИКОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 175', description: '' },
          { name: 'КЛУБНИЧНЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 175', description: '' },
          { name: 'АРБУЗНЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 175', description: '' },
          { name: 'МАНГОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 175', description: '' },
          { name: 'ЛЕСНОЙ ФРУКТОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 175', description: '' },
          { name: 'ЧЕРНОСМОРОДИНОВЫЙ ЗАМОРОЖЕННЫЙ', price: '₺ 175', description: '' },
          { name: 'НОТ-МИКС', price: '₺ 175', description: '' }
        ]
      },
      {
        name: 'ГОРЯЧИЕ НАПИТКИ',
        image: 'images/chocolate.png',
        items: [
          { name: 'ГОРЯЧИЙ ШОКОЛАД', price: '₺ 150', description: '' },
          { name: 'БЕЛЫЙ ГОРЯЧИЙ ШОКОЛАД', price: '₺ 150', description: '' },
          { name: 'САХЛЕП', price: '₺ 150', description: '' },
          { name: 'МЕДОВОЕ МОЛОКО', price: '₺ 120', description: '' }
        ]
      },
      {
        name: 'ХОЛОДНЫЙ КОФЕ',
        image: 'images/ice.png',
        items: [
          { name: 'ЛЕДЯНОЙ АМЕРИКАНО', price: '₺ 140', description: '' },
          { name: 'ЛЕДЯНОЙ ЛАТТЕ', price: '₺ 150', description: '' },
          { name: 'ЛЕДЯНАЯ МОЧА', price: '₺ 170', description: '' },
          { name: 'ЛЕДЯНОЙ КАРАМЕЛЬНЫЙ МАККИАТО', price: '₺ 170', description: '' },
          { name: 'ЛЕДЯНОЙ ФИЛЬТРОВАННЫЙ КОФЕ', price: '₺ 150', description: '' },
          { name: 'ЛЕДЯНОЙ ЧАЙНЫЙ ЛАТТЕ', price: '₺ 150', description: '' },
          { name: 'ЛЕДЯНОЙ ИРЛАНДСКИЙ КРЕМ', price: '₺ 170', description: '' },
          { name: 'ЛЕДЯНОЙ АРОМАТИЗИРОВАННЫЙ ЛАТТЕ', price: '₺ 170', description: '' },
          { name: 'ЛЕДЯНАЯ БЕЛАЯ МОЧА', price: '₺ 170', description: '' },
          { name: 'ЛЕДЯНОЙ ФЛЕТ УАЙТ', price: '₺ 150', description: '' },
          { name: 'ЛЕДЯНАЯ БЕРРИ БЕЛАЯ', price: '₺ 170', description: '' }
        ]
      },
      {
        name: 'ЧАЙ - ТРАВЯНЫЕ ЧАИ',
        image: 'images/caylar.jpg',
        items: [
          { name: 'ЧАЙ', price: '₺ 50', description: '' },
          { name: 'ЧАШКА ЧАЯ', price: '₺ 70', description: '' },
          { name: 'ЧАЙ НА ВЫНОС', price: '₺ 80', description: '' },
          { name: 'ЗИМНИЙ ЧАЙ', price: '₺ 130', description: '' },
          { name: 'АДА ЧАЙ', price: '₺ 140', description: '' },
          { name: 'ЛИПОВЫЙ', price: '₺ 130', description: '' },
          { name: 'ШИПОВНИК', price: '₺ 130', description: '' },
          { name: 'ЗЕЛЕНЫЙ ЧАЙ', price: '₺ 130', description: '' },
          { name: 'РОМАШКА', price: '₺ 130', description: '' },
          { name: 'МЯТНЫЙ ЛИМОН', price: '₺ 130', description: '' },
          { name: 'МЕЛИССА', price: '₺ 130', description: '' },
          { name: 'ФЕНХЕЛЬ', price: '₺ 130', description: '' }
        ]
      },
      {
        name: 'ТУРЕЦКИЙ КОФЕ',
        image: 'images/tr.png',
        items: [
          { name: 'ТУРЕЦКИЙ КОФЕ', price: '₺ 100', description: '' },
          { name: 'ТАРСУСКИЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 110', description: '' },
          { name: 'МОЛОЧНЫЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 115', description: '' },
          { name: 'ДВОЙНОЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 115', description: '' },
          { name: 'ДАМЛА САКЫЗЛЫ ТУРЕЦКИЙ КОФЕ', price: '₺ 110', description: '' },
          { name: 'ДАМЛА САКЫЗЛЫ ТАРСУСКИЙ ТУРЕЦКИЙ КОФЕ', price: '₺ 115', description: '' },
          { name: 'ДИБЕК', price: '₺ 115', description: '' }
        ]
      },
      {
        name: 'ХОЛОДНЫЕ НАПИТКИ И ОБСЛУЖИВАНИЕ',
        image: 'images/cola.png',
        items: [
          { name: 'ФРУКТОВАЯ СОДА', price: '₺ 70', description: '' },
          { name: 'ПРОСТАЯ СОДА', price: '₺ 50', description: '' },
          { name: 'БУТЫЛИРОВАННАЯ ВОДА', price: '₺ 35', description: '' },
          { name: 'ЧЕРЧИЛЛ', price: '₺ 75', description: '' },
          { name: 'ФЬЮЗ ТИ', price: '₺ 90', description: '' },
          { name: 'КОКА КОЛА', price: '₺ 90', description: '' },
          { name: 'ОБСЛУЖИВАНИЕ', price: '₺ 40', description: '' },
          { name: 'РЕД БУЛЛ', price: '₺ 140', description: '' }
        ]
      },
      {
        name: 'ТОСТ',
        image: 'images/tost.png',
        items: [
          { name: 'СЫРНЫЙ ТОСТ', price: '₺ 150', description: '' },
          { name: 'СМЕШАННЫЙ ТОСТ', price: '₺ 180', description: 'КОЛБАСА, СЫР' },
          { name: 'АЙВАЛЫКСКИЙ ТОСТ', price: '₺ 190', description: 'КОЛБАСА, СЫР, МАРИНОВАННЫЕ ОГУРЦЫ, КЕТЧУП, СОСИСКИ' }
        ]
      },
      {
        name: 'КУЛ МИКС',
        image: 'images/cool.png',
        items: [
          { name: 'МАНГОВЫЙ МИКС', price: '₺ 180', description: '' },
          { name: 'БЕРРИ МИКС', price: '₺ 180', description: '' },
          { name: 'КУЛ ЛАЙМ МИКС', price: '₺ 180', description: '' },
          { name: 'АРБУЗНЫЙ МИКС', price: '₺ 180', description: '' },
          { name: 'ГРАНАТОВЫЙ АРБУЗНЫЙ МИКС', price: '₺ 180', description: '' },
          { name: 'МЯТНЫЙ ЛИМОННЫЙ МИКС', price: '₺ 180', description: '' }
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
