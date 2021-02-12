//Напиши скрипт, который, для объекта user, последовательно:

//добавляет поле mood со значением 'happy'
//заменяет значение hobby на 'skydiving'
//заменяет значение premium на false
//выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of



const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addProperty (newProperty) {
    this.mood = newProperty;
    return this.mood;
    },
  changeHobby (newHobby){
    this.hobby = newHobby;
    return this.hobby;
  },
  convertPremium (convertStatus) {
this.premium = !convertStatus;
return this.premium;
  },
  outputAllPropertys (allPropertys) {
    const keys = Object.keys(allPropertys);
    for (const key of keys) {
 console.log(`Ключ: ${key}`);

    }


  }
};

console.table(user);

user.addProperty('happy');
user.changeHobby('skydiving')
user.convertPremium(user.premium);
user.outputAllPropertys(user);

console.table(user);
