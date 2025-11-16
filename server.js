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
          { name: 'ORTA BOY KLASIK KRUVASAN', price: '₺ 200', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET', image: 'images/logo.png' },
          { name: 'BÜYÜK BOY KLASIK KRUVASAN', price: '₺ 250', description: 'SALATALIK, MARUL, DOMATES, KAŞAR PEYNİRİ, FÜME ET', image: 'images/logo.png' },
          { name: 'ORTA BOY KURU DOMATES KRUVASAN', price: '₺ 200', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ', image: 'images/logo.png' },
          { name: 'BÜYÜK BOY KURU DOMATES KRUVASAN', price: '₺ 250', description: 'SALATALIK, MARUL, DOMATES, KURU DOMATES, ÇEÇİL PEYNİRİ', image: 'images/logo.png' },
          { name: 'ORTA BOY TON BALIKLI KRUVASAN', price: '₺ 210', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK', image: 'images/logo.png' },
          { name: 'BÜYÜK BOY TON BALIKLI KRUVASAN', price: '₺ 260', description: 'BEYAZ PEYNİR, MISIR SOSU, TON BALIĞI, MARUL, SALATALIK', image: 'images/logo.png' },
          { name: 'ORTA BOY FISTIKLI KRUVASAN', price: '₺ 260', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİOKLATA', image: 'images/logo.png' },
          { name: 'BÜYÜK BOY FISTIKLI KRUVASAN', price: '₺ 310', description: 'ANTEP FISTIĞI , KREMA , SÜTLÜ ÇİKOLATA İSTEĞE GÖRE (ÇİLEK , MUZ)', image: 'images/logo.png' },
          { name: 'ORTA BOY ÇİKOLATALI KRUVASAN', price: '₺ 250', description: 'KREMA , SÜTLÜ ÇİOKLATA , BADEM , ÇİLEK İSTEĞE GÖRE (ÇİLEK , MUZ) & (BADEM , FINDIK)', image: 'images/logo.png' },
          { name: 'BÜYÜK BOY ÇİKOLATALI KRUVASAN', price: '₺ 300', description: 'KREMA , SÜTLÜ ÇİOKLATA , BADEM İSTEĞE GÖRE (ÇİLEK , MUZ)', image: 'images/logo.png' }
        ]
      },
      {
        name: 'Tatlılar',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'PAVLOVA', price: '₺ 300', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DUBAİ ÇİKOLATALI BROWNIE', price: '₺ 350', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MAGNOLIA', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SPONFOOL', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SAN SEBASTIAN', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'PANKEK (ŞİŞ)', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'PANKEK (TABAK)', price: '₺ 280', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BROWNİE', price: '₺ 260', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DONUT', price: '₺ 180', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİKOLATALI CHEESECAKE', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'FISTIKLI VELVET', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MOZAİK PASTA', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DUBAİ ÇİKOLATALI MAGNOLİA', price: '₺ 350', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DUBAİ ÇİKOLATALI CHEESECAKE', price: '₺ 350', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SÜTLAÇ', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'TİRAMİSU', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'PARİS BREST', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MUZLU RULO', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'TRİLİÇE', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BEYAZ ORMAN İNCİSİ', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'CEDRİC GROLET PİSTACHİO', price: '₺ 400', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'PROFITEROL', price: '₺ 250', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'AY ÇEKİRDEKLİ KURABİYE (KUTU)', price: '₺ 100', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MACADAMLA FINDIKLI & SÜTLÜ ÇİKOLATALI KURABİYE (KUTU)', price: '₺ 100', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BROWNİE KURABİYE', price: '₺ 70', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MACADAMLA FINDIKLI & SÜTLÜ ÇİKOLATALI KURABİYE', price: '₺ 70', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'LİMONLU & BEYAZ ÇİKOLATALI KURABİYE', price: '₺ 70', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SÜTLÜ ÇİKOLATALI KURABİYE', price: '₺ 70', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'Limonatalar',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'SADE LİMONATA', price: '₺ 120', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'NANELİ LİMONATA', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ELMALI LİMONATA', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ORMAN MEYVELİ LİMONATA', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİLEKLİ LİMONATA', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'FESLEĞEN LİMONATA', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BLUE GRAPE', price: '₺ 190', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'RED DREAM', price: '₺ 190', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'ÇİKOLATALI FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BEYAZ ÇİKOLATALI FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MUZLU FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİLEKLİ FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MANGOLU FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KAVUNLU FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'HİNDİSTAN CEVİZLİ FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KAHVELİ FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ŞEFTALİ FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'VANİLYA FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KIRMIZI ORMAN MEYVELİ FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARAMEL FRAPPUCCINO', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİKOLATALI FRAPPUCCINO', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'VANİLYALI FRAPPUCCINO', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARAMEL FRAPPE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİLEKLİ MILKSHAKE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'OREO MILKSHAKE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MUZLU MILKSHAKE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARAMEL MILKSHAKE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİKOLATALI MILKSHAKE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'SICAK KAHVELER',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'CAPPUCCINO', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MOCHA', price: '₺ 160', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'WHİTE MOCHA', price: '₺ 160', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ESPRESSO MACHIATO', price: '₺ 110', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'CORTADO', price: '₺ 120', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'FLAT WHITE', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'LATTE MACHIATO', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ESPRESSO', price: '₺ 85', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DOUBLE ESPRESSO', price: '₺ 95', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'AMERICANO', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'LATTE', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'AROMALI LATTE', price: '₺ 160', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'FILTRE KAHVE', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SÜTLÜ FİLTRE KAHVE', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BADEM SÜTÜ', price: '₺ 30', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'LAKTOZSUZ SÜT', price: '₺ 20', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'ŞEFTALİ SMOOTHIE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİLEKLİ SMOOTHIE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARPUZLU SMOOTHIE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MANGO SMOOTHIE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ORMAN MEYVELİ SMOOTHIE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARADUT SMOOTHIE', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ŞEFTALİ FROZEN', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ÇİLEKLİ FROZEN', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARPUZLU FROZEN', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MANGO FROZEN', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ORMAN MEYVELI FROZEN', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARADUT FROZEN', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'NOTH-MIX', price: '₺ 175', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'SICAK İÇECEKLER',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'SICAK ÇİKOLATA', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BEYAZ SICAK ÇİKOLATA', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SAHLEP', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BALLI SÜT', price: '₺ 120', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'SOĞUK KAHVELER',
        image: 'images/coffees.jpg',
        items: [
          { name: 'ICE AMERICANO', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE LATTE', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE MOCHA', price: '₺ 170', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE CARAMEL MACCHIATO', price: '₺ 170', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE FILTRE KAHVE', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE CHAI TEA LATTE', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE IRISH CREAM', price: '₺ 170', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE AROMALI LATTE', price: '₺ 170', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE WHITE MOCHA', price: '₺ 170', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE FLAT WHITE', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ICE BERRY WHITE', price: '₺ 170', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ÇAY - BİTKİ ÇAYLARI',
        image: 'images/caylar.jpg',
        items: [
          { name: 'ÇAY', price: '₺ 50', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'FİNCAN ÇAY', price: '₺ 70', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'TAKEAWAY ÇAY', price: '₺ 80', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KIŞ ÇAYI', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ADA ÇAYI', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'IHLAMUR', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KUŞBURNU', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'YEŞİL ÇAY', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'PAPATYA', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'NANE LİMON', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'MELİSA', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'REZENE', price: '₺ 130', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'TÜRK KAHVESİ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'TÜRK KAHVESİ', price: '₺ 100', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'TARSUSİ TÜRK KAHVESİ', price: '₺ 110', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SÜTLÜ TÜRK KAHVESİ', price: '₺ 115', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DOUBLE TÜRK KAHVESİ', price: '₺ 115', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DAMLA SAKIZLI TÜRK KAHVESİ', price: '₺ 110', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DAMLA SAKIZLI TARSUSİ TÜRK KAHVESİ', price: '₺ 115', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'DİBEK', price: '₺ 115', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },

      {
        name: 'SOĞUK MEŞRUBAT & SERVİS',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'MEYVELİ SODA', price: '₺ 70', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SADE SODA', price: '₺ 50', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'ŞİŞE SU', price: '₺ 35', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'CHURCILL', price: '₺ 75', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'FUSE TEA', price: '₺ 90', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'COCA COLA', price: '₺ 90', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'SERVİS', price: '₺ 40', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'RED BULL', price: '₺ 140', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'TOST',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Kaşarlı Tost', price: '₺ 150', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Karışık Tost', price: '₺ 180', description: 'Salam , Kaşar', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Ayvalık Tost', price: '₺ 190', description: 'Salam , Kaşar , Turşu , Ketçap , Sosis', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'COOL MİXX',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'MANGO MİXX', price: '₺ 180', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'BERRY MİXX', price: '₺ 180', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'COOL LİME MİXX', price: '₺ 180', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'KARPUZ MİXX', price: '₺ 180', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'NAR KAVUN MİXX', price: '₺ 180', description: '', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'NANE LİMON MİXX', price: '₺ 180', description: '', image: 'images/logo.png' }, image: 'images/logo.png'
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
          { name: 'Classic Croissant', price: '12 TL', description: 'Fresh croissant', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Chocolate Croissant', price: '15 TL', description: 'Chocolate filled croissant', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'Desserts',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cheesecake', price: '25 TL', description: 'Creamy cheesecake', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Chocolate Cake', price: '22 TL', description: 'Chocolate cake', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'Lemonades',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Lemonade', price: '10 TL', description: 'Fresh lemonade', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Mint Lemonade', price: '12 TL', description: 'Mint lemonade', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'FRAPPE - MILKSHAKE - FRAPPUCCINO',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Frappe', price: '20 TL', description: 'Iced coffee frappe', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Milkshake', price: '18 TL', description: 'Milky milkshake', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Frappuccino', price: '22 TL', description: 'Iced frappuccino', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'HOT COFFEES',
        image: 'images/coffees.jpg',
        items: [
          { name: 'Espresso', price: '15 TL', description: 'Classic espresso', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Americano', price: '18 TL', description: 'Espresso with water', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Latte', price: '22 TL', description: 'Espresso, milk and foam', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Cappuccino', price: '25 TL', description: 'Espresso, milk and foam mix', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'SMOOTHIE - FROZEN',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Fruit Smoothie', price: '20 TL', description: 'Fresh fruit smoothie', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Frozen Latte', price: '22 TL', description: 'Iced latte', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'HOT DRINKS',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Hot Chocolate', price: '18 TL', description: 'Hot chocolate', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Hot Lemonade', price: '15 TL', description: 'Hot lemonade', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'COLD COFFEES',
        image: 'images/kahveler.jpg',
        items: [
          { name: 'Ice Coffee', price: '20 TL', description: 'Iced coffee', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Cold Brew', price: '22 TL', description: 'Cold brewed coffee', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'TEA - HERBAL TEAS',
        image: 'images/teas.jpg',
        items: [
          { name: 'Tea', price: '8 TL', description: 'Hot tea', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Green Tea', price: '10 TL', description: 'Green tea', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Mint Lemon', price: '12 TL', description: 'Mint lemon tea', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Linden Tea', price: '10 TL', description: 'Linden tea', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'TURKISH COFFEE',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Turkish Coffee', price: '15 TL', description: 'Classic Turkish coffee', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Turkish Coffee with Milk', price: '18 TL', description: 'Turkish coffee with milk', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'BUBBLE TEA',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Strawberry Bubble Tea', price: '20 TL', description: 'Strawberry flavored bubble tea', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Green Tea Bubble Tea', price: '18 TL', description: 'Green tea bubble tea', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'COLD BEVERAGES & SERVICE',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cola', price: '10 TL', description: 'Cold cola', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Soda', price: '8 TL', description: 'Soda', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'TOAST',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cheese Toast', price: '15 TL', description: 'Cheese toast', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Sausage Toast', price: '18 TL', description: 'Sausage toast', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'COOL MIX',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Cool Mix Drink', price: '20 TL', description: 'Mixed cold drink', image: 'images/logo.png' }, image: 'images/logo.png'
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
          { name: 'Классический круассан', price: '12 TL', description: 'Свежий круассан', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Шоколадный круассан', price: '15 TL', description: 'Круассан с шоколадом', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'Десерты',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Чизкейк', price: '25 TL', description: 'Сливочный чизкейк', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Шоколадный торт', price: '22 TL', description: 'Шоколадный торт', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'Лимонады',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Лимонад', price: '10 TL', description: 'Свежий лимонад', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Мятный лимонад', price: '12 TL', description: 'Мятный лимонад', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ФРАППЕ - МИЛКШЕЙК - ФРАППУЧИНО',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Фраппе', price: '20 TL', description: 'Ледяной кофе фраппе', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Милкшейк', price: '18 TL', description: 'Молочный милкшейк', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Фраппучино', price: '22 TL', description: 'Ледяной фраппучино', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ГОРЯЧИЙ КОФЕ',
        image: 'images/kofe.jpg',
        items: [
          { name: 'Эспрессо', price: '15 TL', description: 'Классический эспрессо', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Американо', price: '18 TL', description: 'Эспрессо с водой', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Латте', price: '22 TL', description: 'Эспрессо, молоко и пена', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Капучино', price: '25 TL', description: 'Эспрессо, молоко и пена смесь', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'СМУЗИ - ЗАМОРОЖЕННЫЙ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Фруктовый смузи', price: '20 TL', description: 'Свежий фруктовый смузи', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Замороженный латте', price: '22 TL', description: 'Ледяной латте', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ГОРЯЧИЕ НАПИТКИ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Горячий шоколад', price: '18 TL', description: 'Горячий шоколад', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Горячий лимонад', price: '15 TL', description: 'Горячий лимонад', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ХОЛОДНЫЙ КОФЕ',
        image: 'images/coffees.jpg',
        items: [
          { name: 'Ледяной кофе', price: '20 TL', description: 'Ледяной кофе', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Колд брю', price: '22 TL', description: 'Холодный заваренный кофе', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ЧАЙ - ТРАВЯНЫЕ ЧАИ',
        image: 'images/chai.jpg',
        items: [
          { name: 'Чай', price: '8 TL', description: 'Горячий чай', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Зеленый чай', price: '10 TL', description: 'Зеленый чай', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Мятный лимон', price: '12 TL', description: 'Мятный лимонный чай', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Липовый чай', price: '10 TL', description: 'Липовый чай', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ТУРЕЦКИЙ КОФЕ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Турецкий кофе', price: '15 TL', description: 'Классический турецкий кофе', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Турецкий кофе с молоком', price: '18 TL', description: 'Турецкий кофе с молоком', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ПУЗЫРЬКОВЫЙ ЧАЙ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Клубничный пузырчатый чай', price: '20 TL', description: 'Клубничный пузырчатый чай', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Зеленый чай с пузырьками', price: '18 TL', description: 'Зеленый чай с пузырьками', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ХОЛОДНЫЕ НАПИТКИ И ОБСЛУЖИВАНИЕ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Кола', price: '10 TL', description: 'Холодная кола', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Газировка', price: '8 TL', description: 'Газировка', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'ТОСТ',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Сырный тост', price: '15 TL', description: 'Сырный тост', image: 'images/logo.png' }, image: 'images/logo.png',
          { name: 'Колбасный тост', price: '18 TL', description: 'Колбасный тост', image: 'images/logo.png' }, image: 'images/logo.png'
        ]
      },
      {
        name: 'КУЛ МИКС',
        image: 'images/logo.png', // Placeholder image
        items: [
          { name: 'Кул микс напиток', price: '20 TL', description: 'Смешанный холодный напиток', image: 'images/logo.png' }, image: 'images/logo.png'
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
