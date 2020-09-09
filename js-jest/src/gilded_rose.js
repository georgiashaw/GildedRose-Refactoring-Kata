class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  notAgedBrie(itemName) {
    return itemName != "Aged Brie"
  }

  notBackstagePass(itemName) {
    return itemName != 'Backstage passes to a TAFKAL80ETC concert'
  }

  isBackStagePass(itemName) {
    return itemName == 'Backstage passes to a TAFKAL80ETC concert'
  }

  qualityGreaterThanZero(itemQuality) {
    return itemQuality > 0
  }

  notSulfuras(itemName) {
    return itemName != 'Sulfuras, Hand of Ragnaros'
  }

  qualityLessThanFifty (itemQuality) {
    return itemQuality < 50;
  }

sellInlessThanEleven (itemSellIn) {
return itemSellIn < 11;
}

sellInLessThanSix (itemSellIn) {
return itemSellIn < 6;
}

incrementByOne(itemQuality) {
  return  itemQuality = itemQuality + 1;
}

decrementQualityByOne(itemQuality) {
 return itemQuality - 1;
}

updateQuality() {

  const handleQualityInBrieAndBackstagePass = (i) => {
    if (this.qualityLessThanFifty(this.items[i].quality)) {
      this.items[i].quality = this.items[i].quality + 1;
      if (this.isBackStagePass(this.items[i].name)) {
        if (this.sellInlessThanEleven(this.items[i].sellIn)) {
          if (this.qualityLessThanFifty(this.items[i].quality)) {
            this.incrementByOne(this.items[i].quality)
          }
        }
        if (this.sellInLessThanSix(this.items[i].sellIn)) {
          if (this.qualityLessThanFifty(this.items[i].quality)) {
            this.incrementByOne(this.items[i].quality)
          }
        }
      }
    }
  }

  const adjustQualityOfMagicalItems = (i) => {
    if (this.notAgedBrie(this.items[i].name)) {
      if (this.notBackstagePass(this.items[i].name)) {
        if (this.items[i].quality > 0) {
          if (this.notSulfuras(this.items[i].name)) {
            this.items[i].quality = decrementQualityByOne(this.items[i].quality);
          }
        }
      } else {
        this.items[i].quality = this.items[i].quality - this.items[i].quality;
      }
    } else {
      if (this.qualityLessThanFifty(this.items[i].quality)) {
        this.incrementByOne(this.items[i].quality)
      }
    }
  }

    for (let i = 0; i < this.items.length; i++) {
      if (this.notAgedBrie(this.items[i].name) && this.notBackstagePass(this.items[i].name)) {
        if (this.qualityGreaterThanZero(this.items[i].quality)) {
          if (this.notSulfuras(this.items[i].name)) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        handleQualityInBrieAndBackstagePass(i)
      }
      if (this.notSulfuras(this.items[i].name)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        adjustQualityOfMagicalItems(i)
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
