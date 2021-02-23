//Напиши скрипт управления личным кабинетом интернет банка. 
//Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        const transaction = {
            id: this.transactions.length + 1,
            amount,
            type,
        }
        return transaction;
      
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.balance += amount;
        const transactionDeposit = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transactionDeposit);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Снятие невозможно, недостаточно средств');
            return;
        }
        this.balance -= amount;
        const transactionWithdraw = this.createTransaction(amount, Transaction.WITHDRAW)
        this.transactions.push(transactionWithdraw);
      
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return `balance = ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        return this.transactions[id-1];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let sumTypeTransaction = 0;
        for (const transaction of this.transactions) {
            if (type === transaction.type) {
                sumTypeTransaction += transaction.amount;
            }

        }return sumTypeTransaction;
        //Вот, тоже не строку возвращает и понятно всё!!! :)
        
  },
};

// return this.transactions.filter((item) => item.type === type).reduce((prev,item) => item.amount +prev,0); 
account.deposit(100);
account.deposit(200);
account.deposit(300);
account.withdraw(20);
account.withdraw(90);
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.table(account.transactions);

